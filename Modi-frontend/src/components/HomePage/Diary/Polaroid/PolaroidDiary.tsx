import React from "react";
import styles from "./PolaroidDiary.module.css";
import PolaroidFrame from "./PolaroidFrame";
import EmotionCharacter from "./EmotionCharacter";
import EmotionTagList from "./EmotionTagList";
import type { CharacterType } from "../../../../utils/emotionImages";
import type { Emotion } from "../../../../utils/emotionImages";

export interface PolaroidDiaryProps {
  date: string;
  photoUrl: string;
  emotion: Emotion;
  content: string;
  clicked: boolean;
  tags?: string[];
  characterId: CharacterType;
}

const PolaroidDiary: React.FC<PolaroidDiaryProps> = ({
  date,
  photoUrl,
  emotion,
  content,
  tags = [],
  characterId,
}) => (
  <div className={styles.container}>
    <PolaroidFrame
      photoUrl={photoUrl}
      date={date}
      emotion={emotion}
      summary={content}
    />
    <div className={styles.info}>
      <EmotionCharacter characterId={characterId} emotion={emotion} />
      <EmotionTagList tags={tags} />
    </div>
  </div>
);

export default PolaroidDiary;
