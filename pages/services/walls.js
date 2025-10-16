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
      <h1>Натяжные стены</h1>
      <p>
        Натяжные стены — инновационное решение для создания уникального интерьера.
        Позволяют скрыть неровности стен, создать акцентные поверхности и реализовать смелые дизайнерские идеи.
      </p>
      <h2 style={{ marginTop: 'var(--spacing-xl)' }}>Применение натяжных стен</h2>
      <ul style={{ lineHeight: '1.8', marginTop: 'var(--spacing-md)' }}>
        <li>Акцентные стены в гостиных и спальнях</li>
        <li>Декоративные панели в офисах</li>
        <li>Звукоизоляция помещений</li>
        <li>Скрытие коммуникаций</li>
        <li>Создание уникальных форм и конструкций</li>
      </ul>
      <h2 style={{ marginTop: 'var(--spacing-xl)' }}>Варианты исполнения</h2>
      <ul style={{ lineHeight: '1.8', marginTop: 'var(--spacing-md)' }}>
        <li><strong>Однотонные</strong> — классические цветовые решения</li>
        <li><strong>С принтом</strong> — любые изображения и узоры</li>
        <li><strong>Текстурные</strong> — имитация различных материалов</li>
        <li><strong>С подсветкой</strong> — эффектное освещение</li>
        <li><strong>3D панели</strong> — объемные декоративные элементы</li>
      </ul>
    </div>
  );
}
