import style from "./HomePage.module.css";
import Footer from "../../components/common/Footer";

const HomePage = () => {
  return (
    <div className={style.home_wrapper}>
      <div>
        HomePage
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
