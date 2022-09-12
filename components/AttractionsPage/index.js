import React from "react";
import Close from "public/images/icon/viewpointGuidClose.svg";

import View2 from "./View2";
import View3 from "./View3";
import View4 from "./View4";

import View from "./View";
import styles from "./index.module.scss";
const AttractionsPage = ({ setOpenItem, language }) => {
  const closeHandler = () => {
    setOpenItem(null);
  };
  return (
    <div className={styles.attractionsPage}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          {language == "Zh" ? "雙龍部落景點一覽" : "Attractions in Isingan"}
        </h3>

        <div className={styles.viewpointContainer}>
          {/* <View language={language} target='sun' img={sun.src} />
          <View language={language} target='snack' img={snake.src} />
          <View language={language} target='water' img={water.src} />
          <View language={language} target='original' img={original.src} /> */}
          <View language={language} />
          <View2 language={language} />
          <View3 language={language} />
          <View4 language={language} />
        </div>
      </div>
      <div className={styles.close}>
        <img src={Close.src} alt='' onClick={closeHandler} />
      </div>
    </div>
  );
};

export default AttractionsPage;
