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
    </div>
  );
}
