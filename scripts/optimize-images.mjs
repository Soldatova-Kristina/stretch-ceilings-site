#!/usr/bin/env node

/**
 * Скрипт для оптимизации изображений
 * - Сжимает JPG/PNG до WebP
 * - Удаляет оригинальные JPG/PNG, оставляя только WebP
 * - Оптимизирует размер и качество
 */

import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '..', 'public', 'images');
const QUALITY = 85; // Качество WebP (80-90 оптимально)
const MAX_WIDTH = 1920; // Максимальная ширина
const MAX_HEIGHT = 1920; // Максимальная высота

// Расширения для обработки
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

let processedCount = 0;
let errorCount = 0;
let savedSpace = 0;

/**
 * Рекурсивно получить все файлы из директории
 */
async function getAllFiles(dir, fileList = []) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);
    
    if (fileStat.isDirectory()) {
      await getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

/**
 * Конвертировать изображение в WebP
 */
async function convertToWebP(inputPath) {
  const ext = extname(inputPath).toLowerCase();
  
  if (!EXTENSIONS.includes(ext)) {
    return;
  }
  
  const outputPath = inputPath.replace(new RegExp(`${ext}$`), '.webp');
  
  try {
    const originalStats = await stat(inputPath);
    const originalSize = originalStats.size;
    
    // Конвертация в WebP с оптимизацией
    await sharp(inputPath)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ 
        quality: QUALITY,
        effort: 6 // 0-6, больше = лучше сжатие, но медленнее
      })
      .toFile(outputPath);
    
    const webpStats = await stat(outputPath);
    const webpSize = webpStats.size;
    const saved = originalSize - webpSize;
    
    savedSpace += saved;
    
    console.log(`✅ ${basename(inputPath)}`);
    console.log(`   ${(originalSize / 1024).toFixed(0)}KB → ${(webpSize / 1024).toFixed(0)}KB (saved ${(saved / 1024).toFixed(0)}KB)`);
    
    // Удаляем оригинал после успешной конвертации
    await unlink(inputPath);
    console.log(`   🗑️  Удален оригинал`);
    
    processedCount++;
  } catch (error) {
    console.error(`❌ Ошибка обработки ${basename(inputPath)}:`, error.message);
    errorCount++;
  }
}

/**
 * Основная функция
 */
async function main() {
  console.log('🚀 Начинаем оптимизацию изображений...\n');
  console.log(`📁 Директория: ${PUBLIC_DIR}`);
  console.log(`⚙️  Качество WebP: ${QUALITY}`);
  console.log(`📏 Макс. размер: ${MAX_WIDTH}x${MAX_HEIGHT}px\n`);
  
  try {
    const allFiles = await getAllFiles(PUBLIC_DIR);
    const imageFiles = allFiles.filter(file => 
      EXTENSIONS.includes(extname(file).toLowerCase())
    );
    
    console.log(`📷 Найдено изображений для обработки: ${imageFiles.length}\n`);
    
    // Обрабатываем файлы последовательно
    for (const file of imageFiles) {
      await convertToWebP(file);
    }
    
    console.log('\n' + '='.repeat(50));
    console.log('✨ Оптимизация завершена!');
    console.log(`✅ Обработано: ${processedCount} файлов`);
    console.log(`❌ Ошибок: ${errorCount}`);
    console.log(`💾 Сэкономлено места: ${(savedSpace / 1024 / 1024).toFixed(2)} MB`);
    console.log('='.repeat(50));
    
  } catch (error) {
    console.error('❌ Критическая ошибка:', error);
    process.exit(1);
  }
}

main();
