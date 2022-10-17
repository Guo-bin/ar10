import React from "react";
import styles from "./index.module.scss";
const Thumbnail = ({ closeUpImg }) => {
  return (
    <div className={styles.thumbnail} id='ImageExamplePage'>
      <img className={styles.img} src={closeUpImg} alt='' />
    </div>
  );
};

export default Thumbnail;
