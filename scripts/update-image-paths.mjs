#!/usr/bin/env node

/**
 * Скрипт для замены расширений изображений .jpg/.jpeg/.png на .webp
 * в файлах проекта
 */

import { readFile, writeFile, readdir } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_ROOT = join(__dirname, '..');
const DIRS_TO_PROCESS = ['data', 'pages', 'components'];

// Расширения файлов для поиска
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png)(['"`])/gi;

let filesProcessed = 0;
let replacementsCount = 0;

/**
 * Рекурсивно получить все .js файлы из директории
 */
async function getAllJsFiles(dir, fileList = []) {
  try {
    const files = await readdir(dir, { withFileTypes: true });
    
    for (const file of files) {
      const filePath = join(dir, file.name);
      
      if (file.isDirectory()) {
        await getAllJsFiles(filePath, fileList);
      } else if (file.isFile() && extname(file.name) === '.js') {
        fileList.push(filePath);
      }
    }
  } catch (error) {
    console.error(`⚠️  Ошибка чтения директории ${dir}:`, error.message);
  }
  
  return fileList;
}

/**
 * Обработать файл и заменить расширения
 */
async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf-8');
    let replacements = 0;
    
    // Заменяем все .jpg, .jpeg, .png на .webp
    const newContent = content.replace(IMAGE_EXTENSIONS, (match, ext, quote) => {
      replacements++;
      return `.webp${quote}`;
    });
    
    // Если были замены, сохраняем файл
    if (replacements > 0) {
      await writeFile(filePath, newContent, 'utf-8');
      const relativePath = filePath.replace(PROJECT_ROOT, '');
      console.log(`✅ ${relativePath}: ${replacements} замен(ы)`);
      filesProcessed++;
      replacementsCount += replacements;
    }
    
  } catch (error) {
    console.error(`❌ Ошибка обработки ${filePath}:`, error.message);
  }
}

/**
 * Основная функция
 */
async function main() {
  console.log('🔄 Начинаем замену путей к изображениям...\n');
  console.log('Директории для обработки:', DIRS_TO_PROCESS.join(', '));
  console.log('Замена: .jpg/.jpeg/.png → .webp\n');
  
  try {
    // Собираем все .js файлы из указанных директорий
    let allFiles = [];
    for (const dir of DIRS_TO_PROCESS) {
      const dirPath = join(PROJECT_ROOT, dir);
      const files = await getAllJsFiles(dirPath);
      allFiles = [...allFiles, ...files];
    }
    
    console.log(`📁 Найдено файлов для проверки: ${allFiles.length}\n`);
    
    // Обрабатываем каждый файл
    for (const file of allFiles) {
      await processFile(file);
    }
    
    console.log('\n' + '='.repeat(50));
    console.log('✨ Замена завершена!');
    console.log(`📝 Обработано файлов: ${filesProcessed}`);
    console.log(`🔄 Всего замен: ${replacementsCount}`);
    console.log('='.repeat(50));
    
    if (filesProcessed > 0) {
      console.log('\n⚠️  ВАЖНО: Проверьте изменения перед коммитом!');
      console.log('Выполните: git diff');
    }
    
  } catch (error) {
    console.error('❌ Критическая ошибка:', error);
    process.exit(1);
  }
}

main();
