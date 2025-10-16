export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Отзывы",
        description: "Отзывы наших клиентов о качестве работ и сервисе. Реальные мнения людей, которые уже установили натяжные потолки с нами.",
        keywords: "отзывы, мнения клиентов, рекомендации, качество работ",
      },
    },
  };
}

export default function Reviews() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-section) 0' }}>
      <h1>Отзывы клиентов</h1>
      <p>
        Мы ценим мнение каждого нашего клиента и стремимся к максимальному качеству услуг.
        Читайте отзывы тех, кто уже воспользовался нашими услугами.
      </p>
      <div style={{ marginTop: 'var(--spacing-xl)' }}>
        <p><em>Раздел в разработке. Скоро здесь появятся отзывы наших клиентов.</em></p>
      </div>
    </div>
  );
}
