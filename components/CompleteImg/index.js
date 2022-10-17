import React from "react";
import styles from "./index.module.scss";
import close from "public/images/icon/viewpointGuidClose.svg";
const CompleteImg = ({ setIsComplete, completeImage }) => {
  return (
    <div className={styles.completeImg}>
      <img className={styles.image} src={completeImage} alt='' />
      <img
        className={styles.close}
        src={close.src}
        alt=''
        onClick={() => {
          setIsComplete(false);
        }}
      />
    </div>
  );
};

export default CompleteImg;
