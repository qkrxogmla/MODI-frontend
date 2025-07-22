import style from "./MyPage.module.css";
import Header from "../../components/common/Header";

const MyPage = () => {
  return (
    <div className={style.mypage_wrapper}>
      <div className={style.mypage_container}>
        <Header
          left="/icons/setting.svg"
          middle="마이페이지"
          right="/icons/notification_O.svg"
        />
      </div>
    </div>
  );
};

export default MyPage;
