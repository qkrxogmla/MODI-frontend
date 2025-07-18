import styles from "./MapPage.module.css";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import KakaoMap from "../../components/map/KakaoMap";

const MapPage = () => {
  return (
    <div className={styles.mapPage_wrapper}>
      <div className={styles.searchBar}>
        <span>검색 기능 추가</span>
      </div>
      <KakaoMap />
      <Footer />
    </div>
  );
};

export default MapPage;
