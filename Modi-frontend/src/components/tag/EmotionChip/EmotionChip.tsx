import styles from "./EmotionChip.module.css";

interface EmotionChipProps {
  label: string;
  type: "momo" | "boro" | "lumi" | "zuni";
  selected: boolean;
}

export default function EmotionChip({
  label,
  type,
  selected,
}: EmotionChipProps) {
  return (
    <div
      className={`${styles.chip} ${styles[type]} ${
        selected ? styles.selected : styles.unselected
      }`}
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
}
