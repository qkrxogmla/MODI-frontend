import styles from "./MapPage.module.css";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import KakaoMap from "../../components/map/KakaoMap";

const MapPage = () => {
  return (
    <div className={styles.mapPage_wrapper}>
      <div className={styles.mapPage}>
        <Header />
        <div className={styles.mapContainer}>
          <KakaoMap />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MapPage;
