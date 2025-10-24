import styles from './SectionLayout.module.css';

export default function SectionLayout({ 
  id,
  title, 
  subtitle, 
  secondSubtitle, 
  children, 
  backgroundColor,
  backgroundImage,
  backgroundOpacity,
  as: Component = 'div',
  'aria-label': ariaLabel
}) {
  if (backgroundImage) {
    const bgStyle = {
      backgroundImage: `url(${backgroundImage})`
    };
    
    if (backgroundOpacity !== undefined && backgroundOpacity !== null) {
      bgStyle.opacity = backgroundOpacity;
    }

    return (
      <Component id={id} className={`${styles.section} ${styles.withBackgroundImage}`} aria-label={ariaLabel}>
        <div 
          className={styles.backgroundLayer} 
          style={bgStyle}
        />
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.line} />
          <p className={styles.subtitle}>{subtitle}</p>
          {secondSubtitle && <p className={styles.secondSubtitle}>{secondSubtitle}</p>}
          {children}
        </div>
      </Component>
    );
  }

  return (
    <Component id={id} className={styles.section} style={backgroundColor ? { background: `var(${backgroundColor})` } : {}} aria-label={ariaLabel}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.line} />
        <p className={styles.subtitle}>{subtitle}</p>
        {secondSubtitle && <p className={styles.secondSubtitle}>{secondSubtitle}</p>}
        {children}
      </div>
    </Component>
  );
}