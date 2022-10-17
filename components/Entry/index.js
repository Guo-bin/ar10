import React, { useEffect, useState } from "react";
import go from "public/images/icon/go.svg";
import classnames from "classnames";
import Card from "./Card";
import rec from "public/images/Rectangle25.png";
import icon from "public/images/icon/changeLanguage.svg";
import styles from "./index.module.scss";

const Entry = ({ content }) => {
  const { attractions, title, description, mapImage, greetings, tourGuideImage } = content;

  //當前語言
  const [currentLan, setCurrentLan] = useState();
  //count是api中greetings的index
  const [count, setCount] = useState(0);
  //地圖是否關閉
  const [closeMap, setCloseMap] = useState(false);
  //控制是否顯示更換語言按鈕
  const [showLanguageBtn, setShowLanguageBtn] = useState(false);

  //抓取使用者裝置語言並設為currentLan
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "auto";
    const setUserDefaultLanguage = () => {
      const userLanguage = window.navigator.userLanguage || window.navigator.language;
      if (userLanguage.substr(0, 2) == "en" || userLanguage.substr(0, 2) == "En") {
        setCurrentLan("en");
      } else {
        setCurrentLan("zh");
      }
    };
    setUserDefaultLanguage();
  }, []);

  return (
    <div className={styles.entry}>
      {!closeMap && (
        <div className={styles.map}>
          <img src={mapImage} alt='' />
          {greetings[currentLan] && (
            <>
              <div
                className={styles.greeting}
                style={{
                  display: count >= greetings[currentLan].length ? "none" : "block",
                }}>
                {/* <img className={styles.dialog} src={dialog.src} alt='' /> */}
                <div className={styles.triangle}></div>
                {greetings[currentLan][count]}
              </div>
              <div
                className={styles.tourGuideImage}
                style={{
                  display: count >= greetings[currentLan].length ? "none" : "block",
                }}>
                <img src={tourGuideImage} alt='' />
              </div>
              <button
                className={styles.click}
                onClick={() => {
                  setCount((pre) => pre + 1);
                }}
                style={{
                  display: count >= greetings[currentLan].length ? "none" : "block",
                }}>
                {currentLan == "zh" ? "點擊" : "click"}
              </button>
            </>
          )}

          <button
            className={styles.tribe}
            onClick={() => {
              setCloseMap(true);
            }}>
            {currentLan == "zh" ? "前往部落" : "Let’s go"}
          </button>
        </div>
      )}
      {closeMap && (
        <>
          <img className={styles.rec} src={rec.src} alt='' />
          <h4 className={styles.title}>{title && title[currentLan]}</h4>
          <p className={styles.description}>{description && description[currentLan]}</p>
          <img className={styles.go} src={go.src} alt='' />
          <div className={styles.container}>
            {attractions &&
              attractions.map((data, index) => {
                const lastIndex = attractions.length - 1;
                return (
                  <Card
                    data={data}
                    classname={index % 2 == 0 ? "right" : "left"}
                    id={data._id}
                    key={data._id}
                    currentLan={currentLan}
                    final={index == lastIndex}
                  />
                );
              })}
          </div>
        </>
      )}
      <div
        className={styles.changeLanguage}
        onClick={() => {
          setShowLanguageBtn((pre) => !pre);
        }}>
        <img src={icon.src} alt='' />
        <div className={styles.language}>
          <div
            className={classnames(styles.english, {
              [styles.showEnglishBtn]: showLanguageBtn,
              [styles.isSelector]: currentLan == "en",
            })}
            onClick={() => {
              setCurrentLan("en");
            }}>
            En
          </div>
          <div
            className={classnames(styles.chinese, {
              [styles.showChineseBtn]: showLanguageBtn,
              [styles.isSelector]: currentLan == "zh",
            })}
            onClick={() => setCurrentLan("zh")}>
            中
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
