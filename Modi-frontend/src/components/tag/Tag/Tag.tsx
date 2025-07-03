import styles from "./Tag.module.css";

interface TagProps {
  label: string;
  onClick?: () => void;
}

export default function Tag({ label, onClick }: TagProps) {
  return (
    <button className={styles.container} onClick={onClick}>
      <span className={styles.label}>{label}</span>
      <img
        src="/icons/Tag_X.svg"
        alt="태그 삭제 아이콘"
        className={styles.icon}
      />
    </button>
  );
}
