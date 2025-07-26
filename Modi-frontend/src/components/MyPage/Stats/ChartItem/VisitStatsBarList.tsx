import StyleBar from "./StyleStatsBar";
import style from "./StyleStatsBar.module.css";
import { useCharacter } from "../../../../contexts/CharacterContext";

const MAX_BAR_HEIGHT = 70;

export default function VisitStatsBarList() {
  const { character } = useCharacter();

  if (!character) return null;

  const iconPath = `/images/character-statsbar/${character}/${character}_head.svg`;

  const styleData = [
    { label: "영통동", value: 15, icon: iconPath },
    { label: "경희대", value: 7, icon: iconPath },
    { label: "서천동", value: 5, icon: iconPath },
    { label: "행궁동", value: 2, icon: iconPath },
  ];
  const max = Math.max(...styleData.map((d) => d.value));

  const normalized = styleData.map((d) => {
    const height = (d.value / max) * MAX_BAR_HEIGHT;
    console.log(`${d.label} → ${height}px`);
    return { ...d, height };
  });

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
