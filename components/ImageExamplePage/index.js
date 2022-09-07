import React, { useState } from "react";
import { useRouter } from "next/router";
import arrow from "public/images/icon/arrow.svg";
import img from "public/images/bridge.png";
import close from "public/images/icon/viewpointGuidClose.svg";
import leftArrow from "public/images/icon/left_arrow.svg";
import phone from "public/images/phone.png";
import styles from "./index.module.scss";
const data = {
  Zh: {
    title: "尋找與照片中相同的景點圖像來發現3D娃娃吧",
    button: "開始探索",
  },
  En: {
    title: "Go and find the attractions to meet our tour guide",
    button: "START",
  },
};
const ImageExamplePage = ({
  setOpenItem,
  setBtnIsShow,
  isBtnShow,
  language,
}) => {
  const router = useRouter();
  const closeHandler = () => {
    setOpenItem(null);
    setBtnIsShow(true);
  };
  const goBackPage = () => {
    router.push("/");
  };
  return (
    <div
      className={styles.imageExamplePage}
      onClick={(e) => {
        e.preventDefault();
      }}>
      {isBtnShow && (
        <div className={styles.close}>
          <img src={close.src} alt='' onTouchStart={closeHandler} />
        </div>
      )}
      {!isBtnShow && (
        <img
          className={styles.leftArrow}
          src={leftArrow.src}
          alt=''
          onClick={goBackPage}
        />
      )}

      <div className={styles.container}>
        <h3 className={styles.title}>{data[language].title}</h3>
        <img className={styles.arrow} src={arrow.src} alt='' />
        <div className={styles.imgContainer}>
          <img className={styles.img} src={img.src} alt='' />
          <div className={styles.phoneContainer}>
            <img className={styles.phone} src={phone.src} alt='' />
          </div>
        </div>
        {!isBtnShow && (
          <a
            className={styles.btn}
            onClick={closeHandler}
            style={{ fontWeight: language == "Zh" ? "500" : "700" }}>
            {data[language].button}
          </a>
        )}
      </div>
    </div>
  );
};

export default ImageExamplePage;
