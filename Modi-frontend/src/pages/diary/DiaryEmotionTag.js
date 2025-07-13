import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./DiaryEmotionTag.module.css";
import Header from "../../components/common/Header";
import PrimaryButton from "../../components/common/button/ButtonBar/PrimaryButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const emotionList = [
    { en: "happy", ko: "기쁨" },
    { en: "surprised", ko: "놀람" },
    { en: "nervous", ko: "긴장" },
    { en: "normal", ko: "보통" },
    { en: "love", ko: "사랑" },
    { en: "excited", ko: "신남" },
    { en: "sad", ko: "슬픔" },
    { en: "sick", ko: "아픔" },
    { en: "bored", ko: "지루함" },
    { en: "angry", ko: "화남" },
];
const characterName = "momo"; //캐릭터 momo로 임시 설정
const DiaryEmotionTag = () => {
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const navigate = useNavigate();
    return (_jsx("div", { className: styles.DiaryEmotionTag_wrapper, children: _jsxs("div", { className: styles.DiaryEmotionTag_container, children: [_jsx(Header, {}), _jsxs("div", { className: styles.main_container, children: [_jsx("p", { className: styles.ask, children: "\uC624\uB298\uC740 \uC5B4\uB5A4 \uD558\uB8E8\uC600\uB098\uC694?" }), _jsx("div", { className: styles.img_container, children: emotionList.map((emotion) => {
                                const isSelected = selectedEmotion === emotion.en;
                                const imageName = isSelected
                                    ? `clicked_${characterName}-${emotion.en}.svg`
                                    : `${characterName}-${emotion.en}.svg`;
                                return (_jsxs("div", { className: styles.emotion_item, children: [_jsx("img", { src: `/emotion_tag/${characterName}/${imageName}`, alt: emotion.ko, className: styles.emotion_image, onClick: () => setSelectedEmotion(emotion.en) }), _jsx("span", { className: styles.emotion_label, children: emotion.ko })] }, emotion.en));
                            }) })] }), _jsx(PrimaryButton, { location: "next", label: "\uB2E4\uC74C", onClick: () => navigate("/detail"), disabled: !selectedEmotion })] }) }));
};
export default DiaryEmotionTag;
