import React, { useState } from "react";
import style from "./HomePage.module.css";

import Footer from "../../components/common/Footer";
<<<<<<< HEAD
=======
import Header from "../../components/common/Header";
import Diary from "../../components/diary/Diary";
>>>>>>> 0bbc57a ([feat] 홈화면 전체 파일 구조 생성)

import HomeHeader from "./components/HomeHeader";
import PolaroidView from "./components/PolaroidView";
import PhotoView from "./components/PhotoView";

const HomePage = () => {
  return (
    <div className={style.home_wrapper}>
      <div className={style.home_container}>
<<<<<<< HEAD
=======
        <Header />
        <HomeHeader viewType={viewType} onChangeView={setViewType} />
        <main className={style.mainContent}>
          {viewType === "polaroid" ? (
            <PolaroidView diary={todayDiary} />
          ) : (
            <PhotoView diaries={monthDiaries} />
          )}
        </main>
>>>>>>> 0bbc57a ([feat] 홈화면 전체 파일 구조 생성)
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
