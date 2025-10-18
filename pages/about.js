export async function getStaticProps() {
  return {
    props: {
      seo: {
        title: "О нас",
        description: "Узнайте больше о нашей компании. Мы специализируемся на установке натяжных потолков и стен с 2014 года. Опытная команда, качественные материалы.",
        keywords: "о компании, натяжные потолки, опыт работы, команда",
      },
    },
  };
}

export default function About() {
  return (
    <>
     <h1>О нас</h1>
    </>
  );
}
