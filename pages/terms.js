export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Условия использования",
        description: "Условия использования сайта СтретчПотолки.",
        noIndex: true,
      },
    },
  };
}

export default function Terms() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-section) 0' }}>
      <h1>Условия использования</h1>
      <p style={{ marginTop: 'var(--spacing-lg)' }}>
        Настоящие Условия использования регулируют отношения между пользователями сайта и компанией.
      </p>
      <p><em>Полный текст условий использования будет размещен здесь.</em></p>
    </div>
  );
}
