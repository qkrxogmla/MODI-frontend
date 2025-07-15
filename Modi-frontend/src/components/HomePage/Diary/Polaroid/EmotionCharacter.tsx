import React from "react";
import { useCharacter } from "../../../../contexts/CharacterContext";
import { getEmotionIcon } from "../../../../utils/emotionImages";
import type { Emotion } from "../../../../data/diaries";
import styles from "./PolaroidDiary.module.css";

interface Props {
  emotion: Emotion;
}

const EmotionCharacter: React.FC<Props> = ({ emotion }) => {
  // 1) 초기 설정 페이지에서 골라서 저장한 캐릭터 정보
  const { character: selectedCharacter } = useCharacter();

  // 2) util에서 순수 매핑만 해 둔 함수/맵을 사용
  const Icon = getEmotionIcon(selectedCharacter!, emotion);

  return <Icon className={styles.characterSvg} />;
};

export default EmotionCharacter;
