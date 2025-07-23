import React, { useState } from "react";
import style from "./MyPage.module.css";
import Header from "../../components/common/Header";
import ProfileCard from "../../components/MyPage/Profile/ProfileCard";
import TabBar from "../../components/MyPage/TabBar";
import Footer from "../../components/common/Footer";
import FavoriteDiary, {
  FavoriteDiaryProps,
} from "../../components/MyPage/Favorite/FavoriteDiary";
import { allDiaries, Diary } from "../../data/diaries";

const MyPage = () => {
  const filtered: Diary[] = allDiaries;
  return (
    <div className={style.mypage_wrapper}>
      <div className={style.mypage_container}>
        <Header
          left="/icons/setting.svg"
          middle="마이페이지"
          right="/icons/notification_O.svg"
        />
        <div className={style.content}>
          <ProfileCard nickname="닉네임" email="user123@email.com" />
        </div>
        <div className={style.tab_bar}>
          <TabBar />
        </div>
        <div className={style.photoGrid}>
          {filtered.map((d) => (
            <FavoriteDiary
              key={d.id}
              id={d.id}
              photoUrl={d.photoUrl}
              date={d.date}
              emotion={d.emotion}
              clicked={false}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MyPage;
