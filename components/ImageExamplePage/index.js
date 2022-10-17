import React from "react";
import { useRouter } from "next/router";
import arrow from "public/images/icon/arrow.svg";

import leftArrow from "public/images/icon/left_arrow.svg";
import phone from "public/images/phone.png";
import styles from "./index.module.scss";
const data = {
  zh: {
    title: "尋找與照片中相同的景點圖像來發現3D娃娃吧",
    button: "開始探索",
  },
  en: {
    title: "Go and find the attractions to meet our tour guide",
    button: "START",
  },
};

const ImageExamplePage = ({
  setOpenItem,
  setBtnIsShow,
  isBtnShow,
  language,
  closeUpImg,
}) => {
  const router = useRouter();
  const closeHandler = () => {
    setOpenItem(null);
    setBtnIsShow(true);
  };

  const clickAnywhereCloseHandler = () => {
    if (isBtnShow) {
      setOpenItem(null);
    }
  };

  return (
    <>
      {closeUpImg && (
        <div
          className={styles.imageExamplePage}
          onClick={clickAnywhereCloseHandler}>
          {/* {isBtnShow && (
            <div className={styles.close}>
              <img src={close.src} alt='' onClick={closeHandler} />
            </div>
          )} */}
          {!isBtnShow && (
            <img
              className={styles.leftArrow}
              src={leftArrow.src}
              alt=''
              onClick={() => {
                router.push({ pathname: `/${router.query.parkId}` });
              }}
            />
          )}

          <div
            className={styles.container}
            style={{ marginTop: isBtnShow ? "50px" : "4px" }}>
            <h3 className={styles.title}>{data[language].title}</h3>
            <img className={styles.arrow} src={arrow.src} alt='' />
            <div className={styles.imgContainer}>
              <img className={styles.img} src={closeUpImg} alt='' />
              <div className={styles.phoneContainer}>
                <img className={styles.phone} src={phone.src} alt='' />
              </div>
            </div>

            <a
              className={styles.btn}
              onClick={closeHandler}
              style={{ fontWeight: language == "zh" ? "500" : "700" }}>
              {data[language].button}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageExamplePage;
