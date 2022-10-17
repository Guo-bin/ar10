import React from "react";
import icon from "public/images/icon/languageGuide.svg";
import styles from "./index.module.scss";
const LanguageGuide = ({ language }) => {
  return (
    <div className={styles.languageGuide} id='LanguageGuide'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>{language == "zh" ? "族語導覽" : "Audio"}</p>
    </div>
  );
};

export default LanguageGuide;
