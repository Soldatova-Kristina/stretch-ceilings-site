/**
 * Dropdown Icon Component
 * Chevron icon for dropdown menus
 */

export default function DropdownIcon({ className }) {
  return (
    <svg 
      className={className}
      width="12" 
      height="8" 
      viewBox="0 0 12 8" 
      fill="none"
      aria-hidden="true"
    >
      <path 
        d="M1 1L6 6L11 1" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
}
