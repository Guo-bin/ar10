import React from "react";
import phoneCma from "public/images/icon/phoneCma.svg";
import styles from "./index.module.scss";
const IOS = ({ language }) => {
  return (
    <div className={styles.ios}>
      <img src={phoneCma.src} alt='' />
      <p>
        {language == "zh"
          ? "此 AR 服務需要開啟攝影機權限，若您按到不允許，請重新整理網頁並允許權限"
          : "This AR service requires the camera permission to be enabled. If you press Don't allow, please refresh the page and allow permission."}
      </p>
      <br />
      <p>
        {language == "zh"
          ? "若未跳出權限允許視窗，請檢查手機設定，將瀏覽器的相機權限開啟。"
          : "If the permission permission window does not pop up, please check the phone settings and enable the camera permission of the browse"}
      </p>
    </div>
  );
};

export default IOS;
