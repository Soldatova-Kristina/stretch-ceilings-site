export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Политика конфиденциальности",
        description: "Политика конфиденциальности и обработки персональных данных компании СтретчПотолки.",
        noIndex: true,
      },
    },
  };
}

export default function Privacy() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-section) 0' }}>
      <h1>Политика конфиденциальности</h1>
      <p style={{ marginTop: 'var(--spacing-lg)' }}>
        Настоящая Политика конфиденциальности регулирует порядок обработки и использования персональных
        и иных данных пользователей сайта.
      </p>
      <p><em>Полный текст политики конфиденциальности будет размещен здесь.</em></p>
    </div>
  );
}
