import { useState } from 'react';
import styles from './Submit.module.css';

export default function Submit() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // Валидация имени (только русские или английские буквы, пробелы, дефисы)
  const validateName = (name) => {
    const trimmedName = name.trim();
    
    if (!trimmedName) {
      return 'Пожалуйста, введите ваше имя';
    }
    
    if (trimmedName.length < 2) {
      return 'Имя должно содержать минимум 2 символа';
    }
    
    if (trimmedName.length > 50) {
      return 'Имя слишком длинное (максимум 50 символов)';
    }
    
    // Проверка на русские или английские буквы, пробелы и дефисы
    const nameRegex = /^[А-ЯЁа-яёA-Za-z\s-]+$/;
    if (!nameRegex.test(trimmedName)) {
      return 'Имя может содержать только буквы, пробелы и дефисы';
    }
    
    // Проверка на спам (повторяющиеся символы)
    const repeatingChars = /([А-ЯЁа-яёA-Za-z])\1{4,}/;
    if (repeatingChars.test(trimmedName)) {
      return 'Некорректное имя';
    }
    
    return '';
  };

  // Валидация телефона
  const validatePhone = (phone) => {
    const trimmedPhone = phone.trim();
    
    if (!trimmedPhone) {
      return 'Пожалуйста, введите номер телефона';
    }
    
    // Проверка формата (только +, цифры, пробелы, дефисы, скобки)
    const phoneRegex = /^[+\d\s\-()]+$/;
    if (!phoneRegex.test(trimmedPhone)) {
      return 'Номер может содержать только цифры, +, пробелы, дефисы и скобки';
    }
    
    // Удаляем все символы кроме цифр для проверки длины
    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    
    if (!digitsOnly) {
      return 'Пожалуйста, введите номер телефона';
    }
    
    // Проверка минимальной длины (11 цифр для российских номеров)
    if (digitsOnly.length < 11) {
      return 'Номер телефона должен содержать минимум 11 цифр';
    }
    
    // Проверка максимальной длины (11 цифр для российских номеров)
    if (digitsOnly.length > 11) {
      return 'Номер телефона должен содержать максимум 11 цифр';
    }
    
    // Проверка на повторяющиеся цифры (спам)
    const repeatingDigits = /(\d)\1{9,}/;
    if (repeatingDigits.test(digitsOnly)) {
      return 'Некорректный номер телефона';
    }
    
    // Проверка на подозрительные паттерны (например, 00000000000)
    if (/^0+$/.test(digitsOnly) || /^1+$/.test(digitsOnly)) {
      return 'Некорректный номер телефона';
    }
    
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Очистка ошибки при изменении поля
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Защита от частых отправок (не чаще 1 раза в 10 секунд)
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setStatus('⏱️ Пожалуйста, подождите перед повторной отправкой');
      return;
    }
    
    // Валидация полей
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    
    if (nameError || phoneError) {
      setErrors({ name: nameError, phone: phoneError });
      setStatus('');
      return;
    }
    
    setStatus('Отправка...');
    setErrors({ name: '', phone: '' });

    try {
      const res = await fetch('/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
        }),
      });

      if (!res.ok) throw new Error('Ошибка при отправке');

      setStatus('Заявка успешно отправлена!');
      setFormData({ name: '', phone: '' });
      setLastSubmitTime(now);
    } catch (err) {
      console.error(err);
      setStatus('Ошибка. Попробуйте ещё раз.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Имя:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          value={formData.name}
          onChange={handleChange}
          placeholder="Иван"
          required
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>Номер телефона:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
          value={formData.phone}
          onChange={handleChange}
          placeholder="+79990001020"
          required
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.checkboxWrapper}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" className={styles.checkbox} required />
          Я согласен с политикой конфиденциальности
        </label>
      </div>

      <button type="submit" className={styles.button}>
        ОТПРАВИТЬ
        <svg className={styles.arrow} width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M37.5303 6.53033C37.8232 6.23744 37.8232 5.76256 37.5303 5.46967L32.7574 0.696699C32.4645 0.403806 31.9896 0.403806 31.6967 0.696699C31.4038 0.989593 31.4038 1.46447 31.6967 1.75736L35.9393 6L31.6967 10.2426C31.4038 10.5355 31.4038 11.0104 31.6967 11.3033C31.9896 11.5962 32.4645 11.5962 32.7574 11.3033L37.5303 6.53033ZM0 6.75H37V5.25H0V6.75Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {status && <p className={styles.status}>{status}</p>}
    </form>
  );
}