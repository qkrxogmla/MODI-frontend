import styles from "./DiaryStylePage.module.css";
import Header from "../../components/common/Header";

const DiaryStylePage = () => {
  return (
    <div className={styles.DiaryStyle_wrapper}>
      <div className={styles.DiaryStyle_container}>
        <Header />
        <div className={styles.main_container}></div>
      </div>
    </div>
  );
};

export default DiaryStylePage;
