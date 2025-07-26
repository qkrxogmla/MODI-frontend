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

  const maxBarColorMap: Record<string, string> = {
    momo: "#FBD7D5",
    boro: "#FEE888",
    lumi: "#A7E1B6",
    zuni: "#93D1E0",
  };

  const normalized = styleData
    .sort((a, b) => b.value - a.value) // 내림차순 정렬
    .map((d) => ({
      ...d,
      height: (d.value / max) * MAX_BAR_HEIGHT,
      isMax: d.value === max,
      icon: iconPath,
    }));

  return (
    <div className={style.barList}>
      {normalized.map(({ label, value, height, icon, isMax }) => (
        <StyleBar
          key={label}
          label={label}
          value={value}
          height={height}
          icon={icon}
          isMax={isMax}
          maxColor={maxBarColorMap[character]}
        />
      ))}
    </div>
  );
}
