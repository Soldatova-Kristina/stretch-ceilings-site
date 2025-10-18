export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "Натяжные потолки",
        description: "Установка натяжных потолков любой сложности. Глянцевые, матовые, сатиновые полотна. Быстрый монтаж, доступные цены, гарантия качества.",
        keywords: "натяжные потолки, установка потолков, глянцевые потолки, матовые потолки",
      },
    },
  };
}

export default function Ceilings() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-section) 0' }}>
      <h1>Натяжные потолки</h1>
    </div>
  );
}
