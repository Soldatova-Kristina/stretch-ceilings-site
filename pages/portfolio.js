// pages/portfolio.js
import Seo from '@/components/Seo';
import CtaButton from '@/components/CtaButton/CtaButton';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import styles from './portfolio.module.css';
import { createPortfolioStructuredData, portfolioSeoBase } from '@/data/seo/portfolioSeo';
import { portfolioItems } from '@/data/portfolioData';
import { assetPath } from '@/utils/assetPath';

export async function getStaticProps() {
 
  const structuredData = JSON.stringify(createPortfolioStructuredData(portfolioItems));

  return {
    props: {
      seoData: {
        ...portfolioSeoBase,
        structuredData,
      },
      portfolioItems,
    },
  };
}

export default function Portfolio({ seoData, portfolioItems }) {
  const pageBeforeBackground = {
    backgroundImage: `url(${assetPath('/images/texture/white_texture.jpg')})`,
  };

  return (
    <>
      <Seo {...seoData} />
      {/* Portfolio Section */}
      <section className={styles.pageWrapper} itemScope itemType="https://schema.org/CollectionPage" aria-label="Портфолио">
          <div className={styles.pageBackground} style={pageBeforeBackground}></div>
          <div className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Примеры наших работ</h1>
          </div>

          <div className={styles.grid} itemScope itemType="https://schema.org/ItemList">
            {portfolioItems.map((item, index) => (
              <article 
                key={item.id} 
                className={styles.card}
                itemScope 
                itemType="https://schema.org/CreativeWork"
                itemProp="itemListElement"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <div className={`${styles.cardContent} ${item.id === 2 || item.id === 4 ? styles.cardContentReverse : ''}`}>
                  
                  <div className={styles.contentBlock}>
                    <h2 className={styles.complexName} itemProp="name">{item.complexName}</h2>
                    <h3 className={styles.address}>{item.address}</h3>
                    <p className={styles.description} itemProp="description">{item.description}</p>
                    <meta itemProp="creator" content="Питер Потолок" />
                  </div>
                
                  <div className={styles.imageBlock} itemProp="image">
                    <ImageSlider 
                      images={item.images} 
                      address={item.address} 
                      itemId={item.id} 
                      variant="portfolio" 
                      rotate={item.id === 4}
                    />
                  </div>
                  
                  <div className={styles.actionBlock}>
                    <CtaButton text="УЗНАТЬ ПОДРОБНЕЕ" ariaLabel="Узнать подробнее в Telegram" className={styles.portfolioCtaButton} />
                  </div>
                  
                </div>
              </article>
            ))}
          </div>
        </div>
          </div>
      </section>
    </>
  );
}