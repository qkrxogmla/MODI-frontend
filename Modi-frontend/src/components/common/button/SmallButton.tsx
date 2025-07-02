import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: "primary" | "small";
}

export default function Button({
  label,
  onClick,
  disabled,
  size = "small",
}: ButtonProps) {
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
