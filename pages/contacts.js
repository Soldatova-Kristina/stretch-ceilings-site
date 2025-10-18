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
    </div>
  );
}
