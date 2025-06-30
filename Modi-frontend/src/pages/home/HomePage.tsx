import style from "./HomePage.module.css";
import Footer from "../../components/common/Footer";
import Diary from "../../components/diary/Diary";

const HomePage = () => {
  return (
    <div className={style.home_wrapper}>
      <div className={style.home_container}>
        <Diary
          emotion="즐거움"
          content="오늘은 벚꽃이 만개한 따뜻한 봄날, 산책도 하고 귀여운 강아지도 만나서 하루 종일 기분이 들떴다!"
          clicked={false}
        />
        <Diary
          emotion="즐거움"
          content="오늘은 벚꽃이 만개한 따뜻한 봄날, 산책도 하고 귀여운 강아지도 만나서 하루 종일 기분이 들떴다!"
          clicked={true}
        />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
