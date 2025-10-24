import styles from './ShinyText.module.css';

export default function ShinyText({ text, className }) {
  return (
    <span className={`${styles.shinyText} ${className || ''}`}>
      {text}
    </span>
  );
}
