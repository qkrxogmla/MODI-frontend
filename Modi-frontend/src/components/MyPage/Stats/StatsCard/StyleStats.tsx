import styles from "./StatsCard.module.css";
import StyleStatsBarList from "../ChartItem/StyleStatsBarList";

export default function StyleStatsCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        즐거움 언어 스타일을 가장 많이 사용했어요
      </h3>
      <StyleStatsBarList />
    </div>
  );
}
