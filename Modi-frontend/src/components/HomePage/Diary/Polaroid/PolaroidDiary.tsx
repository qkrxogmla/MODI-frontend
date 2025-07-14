import React from "react";
import styles from "./PolaroidDiary.module.css";
import PolaroidFrame from "./PolaroidFrame";
import EmotionCharacter from "./EmotionCharacter";
import EmotionTagList from "./EmotionTagList";

export interface PolaroidDiaryProps {
  date: string;
  photoUrl: string;
  emotion: string;
  content: string;
  clicked: boolean;
  tags?: string[];
  characterId: string;
}

const PolaroidDiary: React.FC<PolaroidDiaryProps> = ({
  date,
  photoUrl,
  emotion,
  content,
  tags,
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
      <EmotionCharacter emotion={emotion} characterId={characterId} />
      <EmotionTagList tags={tags} />
    </div>
  </div>
);

export default PolaroidDiary;
