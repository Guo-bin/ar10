import React, { useEffect, useState } from "react";
import go from "public/images/icon/go.svg";
import { v4 as uuidv4 } from "uuid";
import classnames from "classnames";
import Card from "./Card";
import icon from "public/images/icon/changeLanguage.svg";
import rectangle1 from "public/images/rectangle.png";
import arrow from "public/images/icon/arrow.svg";
import bununWarrior from "public/images/icon/bununWarrior.svg";
import dottedLine from "public/images/icon/dottedLine.svg";
import rectangle2 from "public/images/rectangle2.png";
import hundredPaceSnake from "public/images/icon/hundredPaceSnake.svg";
import shootingSun from "public/images/icon/shootingSun.svg";
import flood from "public/images/icon/flood.svg";
import styles from "./index.module.scss";
const datas = {
  Zh: [
    {
      cardTitle: "布農族勇士傳說",
      picture: bununWarrior,
    },
    {
      cardTitle: "布農族百步蛇的報仇",
      picture: hundredPaceSnake,
    },
    {
      cardTitle: "布農族射日英雄傳說",
      picture: shootingSun,
    },
    {
      cardTitle: "布農族洪水傳說",
      picture: flood,
      finial: true,
    },
  ],
  En: [
    {
      cardTitle: "Legend of Bunun Warriors",

      picture: bununWarrior,
    },
    {
      cardTitle: "Revenge of the Bunun Hundred-step Snake",

      picture: hundredPaceSnake,
    },
    {
      cardTitle: "The legend of the Bunun people shooting the sun",

      picture: shootingSun,
    },
    {
      cardTitle: "Bunun flood legend",

      picture: flood,
    },
  ],
};
const title = {
  Zh: "歡迎來到雙龍部落",
  En: "Welcome to Summoning Canyon",
};
const description = {
  Zh: "雙龍部落有很多歷史人文景觀，等待你來探險，讓我們看看有哪些景點吧！",
  En: "Shuanglong tribe has many historical and cultural landscapes, waiting for you to explore, let us see what attractions are there",
};
const Entry = () => {
  const [currentLan, setCurrentLan] = useState();
  const [showLanguageBtn, setShowLanguageBtn] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    // body.style.overflow = "hidden";
    // body.classList.remove("arBody");
    // html.classList.remove("arBody");
    body.style.overflow = "auto";

    const setUserDefaultLanguage = () => {
      const userLanguage =
        window.navigator.userLanguage || window.navigator.language;
      if (
        userLanguage.substr(0, 2) == "en" ||
        userLanguage.substr(0, 2) == "En"
      ) {
        setCurrentLan("En");
      } else {
        setCurrentLan("Zh");
      }
    };
    setUserDefaultLanguage();
  }, []);

  return (
    <div className={styles.entry}>
      <h4 className={styles.title}>{title[currentLan]}</h4>
      <p className={styles.description}>{description[currentLan]}</p>
      <img className={styles.go} src={go.src} alt='' />
      <div className={styles.container}>
        {datas[currentLan] &&
          datas[currentLan].map((data, index) => {
            const lastIndex = datas[currentLan].length - 1;
            return (
              <Card
                data={data}
                classname={index % 2 == 0 ? "right" : "left"}
                key={uuidv4()}
                currentLan={currentLan}
                final={index == lastIndex}
              />
            );
          })}
      </div>
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
              [styles.isSelector]: currentLan == "En",
            })}
            onClick={() => {
              setCurrentLan("En");
            }}>
            En
          </div>
          <div
            className={classnames(styles.chinese, {
              [styles.showChineseBtn]: showLanguageBtn,
              [styles.isSelector]: currentLan == "Zh",
            })}
            onClick={() => setCurrentLan("Zh")}>
            中
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
