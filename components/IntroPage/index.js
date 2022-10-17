import React from "react";
import Close from "public/images/icon/viewpointGuidClose.svg";
import styles from "./index.module.scss";
const IntroPage = ({
  setOpenItem,
  language,
  description,
  name,
  setBtnIsShow,
}) => {
  const closeHandler = () => {
    setOpenItem(null);
    setBtnIsShow(true);
  };
  const descript = description[language].replace(/\n/g, "<br />");
  return (
    <div className={styles.introPage}>
      <div className={styles.container}>
        <h3 className={styles.title}>{name[language]}</h3>
        <div className={styles.borderBottom}></div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: descript }}
        />
      </div>
      <div className={styles.close}>
        <img src={Close.src} alt='' onClick={closeHandler} />
      </div>
    </div>
  );
};

export default IntroPage;
