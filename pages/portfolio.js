export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Портфолио",
        description: "Примеры наших работ по установке натяжных потолков и стен. Реализованные проекты в квартирах, домах и коммерческих помещениях.",
        keywords: "портфолио, примеры работ, фото потолков, наши проекты",
      },
    },
  };
}

export default function Portfolio() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-section) 0' }}>
      <h1>Наши работы</h1>
    </div>
  );
}
