export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Контакты",
        description: "Свяжитесь с нами для бесплатной консультации и замера. Телефон, адрес, время работы. Ответим на все ваши вопросы.",
        keywords: "контакты, телефон, адрес, связаться, консультация, замер",
      },
    },
  };
}

export default function Contacts() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-section) 0' }}>
      <h1>Контакты</h1>
      <p>
        Свяжитесь с нами для получения бесплатной консультации, расчета стоимости или вызова замерщика.
        Мы работаем для вас каждый день!
      </p>
      
      <div style={{ marginTop: 'var(--spacing-xl)', display: 'grid', gap: 'var(--spacing-lg)' }}>
        <div>
          <h3>Телефон</h3>
          <p><a href="tel:+79001234567" style={{ color: 'var(--color-primary)' }}>+7 (900) 123-45-67</a></p>
        </div>
        
        <div>
          <h3>Email</h3>
          <p><a href="mailto:info@stretchpotolki.ru" style={{ color: 'var(--color-primary)' }}>info@stretchpotolki.ru</a></p>
        </div>
        
        <div>
          <h3>Режим работы</h3>
          <p>Понедельник - Пятница: 9:00 - 20:00</p>
          <p>Суббота - Воскресенье: 10:00 - 18:00</p>
        </div>
        
        <div>
          <h3>Социальные сети</h3>
          <p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', marginRight: 'var(--spacing-md)' }}>Instagram</a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', marginRight: 'var(--spacing-md)' }}>VK</a>
            <a href="https://wa.me/79001234567" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', marginRight: 'var(--spacing-md)' }}>WhatsApp</a>
            <a href="https://t.me/stretchpotolki" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>Telegram</a>
          </p>
        </div>
      </div>
    </div>
  );
}
