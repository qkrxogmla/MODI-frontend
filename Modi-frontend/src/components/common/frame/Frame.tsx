import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.frame}>
      <div className={styles["image-frame"]}>
        <img
          className={styles.image}
          src="https://placehold.co/215x286"
          alt="사진"
        />
        <span className={styles.date}>25.5.13 12:17</span>
      </div>
      <span className={styles.summary}>일기 내용 한 줄 요약</span>
    </div>
  );
};

export default Frame;
