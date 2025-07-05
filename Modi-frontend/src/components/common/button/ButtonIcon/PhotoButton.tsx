import styles from "./ButtonIcon.module.css";

interface ButtonIconProps {
  onClick?: () => void;
}

export default function ButtonIcon({ onClick }: ButtonIconProps) {
  return (
    <button className={styles.container} onClick={onClick}>
      <img src="/icons/photo.svg" alt="갤러리 아이콘" className={styles.icon} />
    </button>
  );
}
