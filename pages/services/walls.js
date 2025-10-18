export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Натяжные стены",
        description: "Установка натяжных стен для оригинального дизайна интерьера. Скрытие неровностей, звукоизоляция, уникальный внешний вид.",
        keywords: "натяжные стены, дизайн стен, декоративные стены, отделка стен",
      },
    },
  };
}

export default function Walls() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-section) 0' }}>
      <h1>Тихие стены</h1>
    </div>
  );
}
