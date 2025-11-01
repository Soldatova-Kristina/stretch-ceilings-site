import { useState } from 'react';
import Link from 'next/link';
import styles from './Submit.module.css';

export default function Submit() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

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
    
    const nameRegex = /^[А-ЯЁа-яёA-Za-z\s-]+$/;
    if (!nameRegex.test(trimmedName)) {
      return 'Имя может содержать только буквы, пробелы и дефисы';
    }
    
    const repeatingChars = /([А-ЯЁа-яёA-Za-z])\1{4,}/;
    if (repeatingChars.test(trimmedName)) {
      return 'Некорректное имя';
    }
    
    return '';
  };

  const validatePhone = (phone) => {
    const trimmedPhone = phone.trim();
    
    if (!trimmedPhone) {
      return 'Пожалуйста, введите номер телефона';
    }
    
    const phoneRegex = /^[+\d\s\-()]+$/;
    if (!phoneRegex.test(trimmedPhone)) {
      return 'Номер может содержать только цифры, +, пробелы, дефисы и скобки';
    }
    
    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    
    if (!digitsOnly) {
      return 'Пожалуйста, введите номер телефона';
    }

    if (digitsOnly.length < 11) {
      return 'Номер телефона должен содержать минимум 11 цифр';
    }
    
    if (digitsOnly.length > 11) {
      return 'Номер телефона должен содержать максимум 11 цифр';
    }
    
    const repeatingDigits = /(\d)\1{9,}/;
    if (repeatingDigits.test(digitsOnly)) {
      return 'Некорректный номер телефона';
    }
    
    if (/^0+$/.test(digitsOnly) || /^1+$/.test(digitsOnly)) {
      return 'Некорректный номер телефона';
    }
    
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setStatus('⏱️ Пожалуйста, подождите перед повторной отправкой');
      return;
    }
    
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
      const encryptedToken = "ODMwNDc0MDg2MjpBQUd6OXhxVXhhdnlKb1dEcWFSU2lFVEdtWUNUaGItYmZzaw==";
      const encryptedChatId = "NDk0Mzc3OTc5";
      
      const botToken = atob(encryptedToken);
      const chatId = atob(encryptedChatId);

      if (!botToken || !chatId) {
        throw new Error('Telegram credentials not configured');
      }

      const message = `
📩 *Новая заявка с сайта:*
━━━━━━━━━━━━━━━
👤 Имя: ${formData.name.trim()}
📞 Телефон: ${formData.phone.trim()}
`;

      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      const data = await res.json();

      if (!data.ok) {
        throw new Error(data.description || 'Ошибка отправки в Telegram');
      }

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
          Я согласен с{' '}
          <Link href="/privacy" className={styles.privacyLink} target="_blank" rel="noopener noreferrer">
            политикой конфиденциальности
          </Link>
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