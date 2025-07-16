import styles from "./ButtonIcon.module.css";

interface ButtonIconProps {
  onClick?: () => void;
}

export default function ButtonIcon({ onClick }: ButtonIconProps) {
  return (
    <button className={styles.container} onClick={onClick}>
      <img src="/icons/X.svg" alt="삭제 아이콘" className={styles.icon} />
    </button>
  );
}
