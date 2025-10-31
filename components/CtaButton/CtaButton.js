import ShinyText from '@/components/ShinyText/ShinyText';
import styles from './CtaButton.module.css';

/**
 * CtaButton Component - Reusable call-to-action button
 * 
 * @param {Object} props - Component props
 * @param {string} props.text - Button text content
 * @param {string} [props.href='https://t.me/piterpotolok'] - Link URL (default: Telegram)
 * @param {Function} [props.onClick] - Click handler (if provided, renders as button instead of link)
 * @param {string} [props.ariaLabel] - Accessibility label
 * @param {string} [props.className] - Additional CSS classes
 */
export default function CtaButton({ 
  text, 
  href = 'https://t.me/piterpotolok',
  onClick,
  ariaLabel,
  className = ''
}) {
  const sharedProps = {
    className: `${styles.ctaButton} ${className}`,
    'aria-label': ariaLabel || text,
  };

  const content = (
    <>
      <span className={styles.ctaText}>
        <ShinyText text={text} />
      </span>
      <svg 
        className={styles.ctaArrow} 
        width="38" 
        height="12" 
        viewBox="0 0 38 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true"
      >
        <path 
          d="M37.5303 6.53033C37.8232 6.23744 37.8232 5.76256 37.5303 5.46967L32.7574 0.696699C32.4645 0.403806 31.9896 0.403806 31.6967 0.696699C31.4038 0.989593 31.4038 1.46447 31.6967 1.75736L35.9393 6L31.6967 10.2426C31.4038 10.5355 31.4038 11.0104 31.6967 11.3033C31.9896 11.5962 32.4645 11.5962 32.7574 11.3033L37.5303 6.53033ZM0 6.75H37V5.25H0V6.75Z" 
          fill="currentColor"
        />
      </svg>
    </>
  );

  if (onClick) {
    return (
      <button
        {...sharedProps}
        onClick={onClick}
        type="button"
      >
        {content}
      </button>
    );
  }

  return (
    <a
      {...sharedProps}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}
