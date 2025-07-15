import React, { useState } from "react";
import style from "./HomePage.module.css";
import Footer from "../../components/common/Footer";

import PolaroidView from "./PolaroidView";
import PhotoView from "./PhotoView";

export default function HomePage() {
  const [viewType, setViewType] = useState<"photo" | "polaroid">("polaroid");
  return (
    <div className={style.home_wrapper}>
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
