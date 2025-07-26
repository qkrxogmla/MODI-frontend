import style from "./StyleStatsBar.module.css";

interface Props {
  label: string;
  value: number;
  height: number;
  icon: string;
}

export default function StyleBar({ label, value, height, icon }: Props) {
  return (
    <div className={style.barItem}>
      <div className={style.iconAndBar}>
        <img src={icon} alt={label} className={style.barIcon} />
        <div className={style.barFill} style={{ height: `${height}px` }} />
      </div>
      <div className={style.label}>
        {label} {value}
      </div>
    </div>
  );
}
