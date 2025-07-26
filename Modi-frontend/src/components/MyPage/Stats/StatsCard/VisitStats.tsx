import styles from "./StatsCard.module.css";
import VisitStatsBarList from "../ChartItem/VisitStatsBarList";

export default function StyleStatsCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>한달 간 영통동을 가장 많이 방문했어요</h3>
      <VisitStatsBarList />
    </div>
  );
}
