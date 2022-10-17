import React from "react";
import icon from "public/images/icon/intro2.svg";
import styles from "./index.module.scss";
const Intro = ({ language }) => {
  return (
    <div className={styles.intro} id='IntroPage'>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={icon.src} alt='' />
      </div>

      <p className={styles.title}>{language == "zh" ? "景點介紹" : "Intro"}</p>
    </div>
  );
};

export default Intro;
