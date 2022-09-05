import React from "react";
import phone from "public/images/icon/phone.svg";
import rotateArrow from "public/images/icon/rotateArrow.svg";
import styles from "./index.module.scss";
const Orientation = ({ language }) => {
  console.log(language);
  return (
    <div className={styles.orientation}>
      <h3 className={styles.title}>
        {language == "Zh"
          ? "目前尚未提供橫式顯示，請把裝置轉成直式！"
          : "Please turn your device into vertical to make sure you can have a good experience of this AR servic"}
      </h3>
      <img src={phone.src} alt='' />
      <img src={rotateArrow.src} alt='' />
    </div>
  );
};

export default Orientation;
