import styles from './PageTitle.module.css';

/**
 * PageTitle Component - Reusable H1 title for pages
 * Used across FAQ, Contacts, Portfolio pages with consistent styling
 */
export default function PageTitle({ children }) {
  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  );
}
