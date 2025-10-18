export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Часто задаваемые вопросы",
        description: "Ответы на популярные вопросы о натяжных потолках и стенах. Сроки, цены, уход, гарантии и многое другое.",
        keywords: "вопросы и ответы, faq, информация о потолках, как ухаживать",
      },
    },
  };
}

export default function FAQ() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-section) 0' }}>
      <h1>Часто задаваемые вопросы</h1>
    </div>
  );
}
