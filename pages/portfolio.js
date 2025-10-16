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
      <h1>Портфолио</h1>
      <p>
        Здесь вы можете ознакомиться с примерами наших выполненных проектов.
        Каждая работа выполнена с вниманием к деталям и в соответствии с пожеланиями клиентов.
      </p>
      <div style={{ marginTop: 'var(--spacing-xl)' }}>
        <p><em>Раздел в разработке. Скоро здесь появится галерея наших лучших работ.</em></p>
      </div>
    </div>
  );
}
