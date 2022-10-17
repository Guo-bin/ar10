import React from "react";
import icon from "public/images/icon/instruction.svg";
import styles from "./index.module.scss";
const Info = ({ language }) => {
  return (
    <div className={styles.info} id='InfoPage'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}> {language == "zh" ? "操作介紹" : "Info"}</p>
    </div>
  );
};

export default Info;
