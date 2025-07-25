import EmotionCircleList from "../ChartItem/EmotionCircleList";
import styles from "./StatsCard.module.css";

const emotionData = [
  {
    label: "기쁨",
    value: 15,
    icon: "/emotion_tag/momo/clicked_momo-happy.svg",
  },
  { label: "슬픔", value: 7, icon: "/emotion_tag/momo/momo-sad.svg" },
  { label: "사랑", value: 5, icon: "/emotion_tag/momo/momo-love.svg" },
  { label: "놀람", value: 2, icon: "/emotion_tag/momo/momo-surprised.svg" },
];

export default function EmotionStatsCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>한달 중 가장 많이 기뻤어요</h3>
      <EmotionCircleList data={emotionData} />
    </div>
  );
}
