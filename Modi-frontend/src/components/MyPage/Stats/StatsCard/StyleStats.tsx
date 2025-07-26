import styles from "./StatsCard.module.css";
import StyleStatsBarList from "../ChartItem/StyleStatsBarList";

const MAX_BAR_HEIGHT = 100;
const MIN_BAR_HEIGHT = 20;

const styleData = [
  {
    label: "즐거움",
    value: 15,
    icon: "/images/character-statsbar/momo/momo4.svg",
  },
  {
    label: "고민",
    value: 7,
    icon: "/images/character-statsbar/momo/momo4.svg",
  },
  {
    label: "슬픔",
    value: 5,
    icon: "/images/character-statsbar/momo/momo4.svg",
  },
  {
    label: "화남",
    value: 2,
    icon: "/images/character-statsbar/momo/momo4.svg",
  },
];

// 정규화
const max = Math.max(...styleData.map((d) => d.value));
const min = Math.min(...styleData.map((d) => d.value));

const normalized = styleData.map((d) => {
  const ratio = (d.value - min) / (max - min || 1);
  const height = MIN_BAR_HEIGHT + ratio * (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT);
  return { ...d, height };
});

export default function StyleStatsCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        즐거운 언어 스타일을 가장 많이 사용했어요
      </h3>
      <StyleStatsBarList />
    </div>
  );
}
