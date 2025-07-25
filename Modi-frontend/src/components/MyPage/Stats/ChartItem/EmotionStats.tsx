import EmotionCircleList from "./EmotionCircleList";
import momo_happy from "../../public/emotion_tag/momo/clicked_momo-happy.svg";
import momo_sad from "../../public/emotion_tag/momo/momo-sad.svg";
import momo_love from "../../public/emotion_tag/momo/momo-love.svg";
import momo_surprised from "../../public/emotion_tag/momo/momo-surprised.svg";

const emotionData = [
  { label: "기쁨", value: 15, icon: momo_happy },
  { label: "슬픔", value: 7, icon: momo_sad },
  { label: "사랑", value: 5, icon: momo_love },
  { label: "놀람", value: 2, icon: momo_surprised },
];

export default function EmotionStats() {
  return <EmotionCircleList data={emotionData} />;
}
