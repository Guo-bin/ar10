import React from "react";
import icon from "public/images/icon/attraction.svg";
import styles from "./index.module.scss";
const Attractions = ({ language }) => {
  return (
    <div className={styles.attractions} id='AttractionsPage'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>
        {language == "zh" ? "景點一覽" : "Attractions"}
      </p>
    </div>
  );
};

export default Attractions;
