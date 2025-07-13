import { jsx as _jsx } from "react/jsx-runtime";
import EmotionChip from "../../../components/tag/EmotionChip/EmotionChip";
import styles from "./EmotionTab.module.css";
const DEFAULT_EMOTIONS = [
    "기쁨",
    "놀람",
    "보통",
    "떨림",
    "사랑",
    "신남",
    "아픔",
    "슬픔",
    "지루함",
    "화남",
];
export default function EmotionTab({ emotions = DEFAULT_EMOTIONS, selectedEmotion, onSelectEmotion, userCharacter, }) {
    return (_jsx("div", { className: styles.wrapper, children: emotions.map((emotion) => (_jsx(EmotionChip, { label: emotion, type: userCharacter, selected: selectedEmotion === emotion, onClick: () => onSelectEmotion(emotion) }, emotion))) }));
}
