import styles from "./Tab.module.css";

interface TabProps {
  label: string;
  selected: boolean;
  onClick?: () => void;
}

export default function Tab({ label, selected, onClick }: TabProps) {
  return (
    <div
      className={`${styles.container} ${
        selected ? styles.selected : styles.unselected
      }`}
      onClick={onClick}
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
}
