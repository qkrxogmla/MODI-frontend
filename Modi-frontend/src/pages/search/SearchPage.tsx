import styles from "./SearchPage.module.css";
import Header from "../../components/common/Header";

const SearchPage = () => {
  return (
    <div className={styles.SearchPage_wrapper}>
      <div className={styles.SearchPage_container}>
        <Header middle="일기 검색하기" />
        <div className={styles.main_container}></div>
      </div>
    </div>
  );
};

export default SearchPage;
