import styles from "./ButtonBar.module.css";

interface ButtonBarProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: "primary" | "small";
}

export default function ButtonBar({
  label,
  onClick,
  disabled,
  size = "primary",
}: ButtonBarProps) {
  return (
    <button
      className={`${styles.button} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
}
