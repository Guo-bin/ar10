import React from "react";
import threeDot from "public/images/icon/threeDot.svg";
import arrow from "public/images/icon/arrow.svg";
import styles from "./index.module.scss";
const Android = ({ language }) => {
  const data = {
    zh: {
      step1: `點選右上角的⋮符號。`,
      step2: "選擇設定 > 進階 > 網站設定 > 攝影機。",
      step3: "在已封鎖的網址裡找到該服務網址並允許使用權限。",
      step4: "關閉 Chrome 應用程式並重新掃描 QR Code。",
    },
    en: {
      step1: `Click ⋮`,
      step2: "Choose “settings” > “Advanced” > “Websites” > “Camera”",
      step3: "To find the blocked URL for our service and allow access.",
      step4: "Close the web application and scan again.",
    },
  };
  return (
    <div className={styles.android}>
      <h3 className={styles.title}>允許你的攝影機權限</h3>
      <div className={styles.step}>
        <h4>{language == "zh" ? "步驟一" : "Step1"}：</h4>
        <p>{data[language].step1}</p>
      </div>
      <div className={styles.step}>
        <h4>{language == "zh" ? "步驟二" : "Step2"}：</h4>
        <p>{data[language].step2}</p>
      </div>
      <div className={styles.step}>
        <h4>{language == "zh" ? "步驟三" : "Step3"}：</h4>
        <p>{data[language].step3}</p>
      </div>
      <div className={styles.step}>
        <h4>{language == "zh" ? "步驟四" : "Step4"}：</h4>
        <p>{data[language].step4}</p>
      </div>
      <div className={styles.topSection}>
        <p>從這裡開始！</p>
        <img className={styles.arrow} src={arrow.src} alt='' />
      </div>
    </div>
  );
};

export default Android;
