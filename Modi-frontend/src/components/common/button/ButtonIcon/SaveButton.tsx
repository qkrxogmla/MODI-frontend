import styles from "./ButtonIcon.module.css";

interface ButtonIconProps {
  onClick?: () => void;
}

export default function ButtonIcon({ onClick }: ButtonIconProps) {
  return (
    <button className={styles.container} onClick={onClick}>
      <img src="/icons/save.svg" alt="저장 아이콘" className={styles.icon} />
    </button>
  );
}
