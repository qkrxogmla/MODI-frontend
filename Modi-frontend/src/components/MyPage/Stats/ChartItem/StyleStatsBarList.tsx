import StyleBar from "./StyleStatsBar";
import style from "./StyleStatsBar.module.css";

const MAX_BAR_HEIGHT = 70;

const styleData = [
  {
    label: "즐거움",
    value: 15,
    icon: "/images/character-statsbar/momo/momo_head.svg",
  },
  {
    label: "고민",
    value: 7,
    icon: "/images/character-statsbar/momo/momo_head.svg",
  },
  {
    label: "슬픔",
    value: 5,
    icon: "/images/character-statsbar/momo/momo_head.svg",
  },
  {
    label: "화남",
    value: 2,
    icon: "/images/character-statsbar/momo/momo_head.svg",
  },
];

const max = Math.max(...styleData.map((d) => d.value));

const normalized = styleData.map((d) => {
  const height = (d.value / max) * MAX_BAR_HEIGHT;
  console.log(`${d.label} → ${height}px`);
  return { ...d, height };
});

export default function StyleBarList() {
  return (
    <div className={style.barList}>
      {normalized.map(({ label, value, height, icon }) => (
        <StyleBar
          key={label}
          label={label}
          value={value}
          height={height}
          icon={icon}
        />
      ))}
    </div>
  );
}
