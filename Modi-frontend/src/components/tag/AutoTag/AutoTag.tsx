import styles from "./AutoTag.module.css";

interface AutoTagProps {
  label: string;
  onClick?: () => void;
}

export default function AutoTag({ label, onClick }: AutoTagProps) {
  return (
    <button className={styles.container} onClick={onClick}>
      <img
        src="/icons/rotate_gray.svg"
        alt="자동 생성 아이콘"
        className={styles.icon}
      />
      <span className={styles.label}>{label}</span>
    </button>
  );
}
