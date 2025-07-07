import style from "./HomePage.module.css";
import Footer from "../../components/common/Footer";

const HomePage = () => {
  return (
    <div className={style.home_wrapper}>
      <div className={style.home_container}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
