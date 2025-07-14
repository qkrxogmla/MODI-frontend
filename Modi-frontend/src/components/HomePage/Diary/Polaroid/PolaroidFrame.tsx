import React from "react";
import Frame from "../../../common/frame/Frame";
import styles from "./PolaroidDiary.module.css";

interface Props {
  photoUrl: string;
  date: string;
  emotion: string;
  summary: string;
}

const PolaroidFrame: React.FC<Props> = ({
  photoUrl,
  date,
  emotion,
  summary,
}) => (
  <Frame
    photoUrl={photoUrl}
    date={date}
    emotion={emotion}
    summary={summary}
    className={styles.frame}
  />
);

export default PolaroidFrame;
