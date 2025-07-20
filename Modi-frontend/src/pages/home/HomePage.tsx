import React, { useState } from "react";
import style from "./HomePage.module.css";
import Footer from "../../components/common/Footer";

import PolaroidView from "./PolaroidView";
import PhotoView from "./PhotoView";

import Header from "../../components/common/Header";

export default function HomePage() {
  const [viewType, setViewType] = useState<"photo" | "polaroid">("polaroid");
  return (
    <div className={style.home_wrapper}>
      <Header left="/images/logo/Modi.svg" right="/icons/notification_O.svg" />
      <div className={style.home_container}>
        <main className={style.mainContent}>
          {viewType === "photo" ? (
            <PhotoView onSwitchView={() => setViewType("polaroid")} />
          ) : (
            <PolaroidView onSwitchView={() => setViewType("photo")} />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
