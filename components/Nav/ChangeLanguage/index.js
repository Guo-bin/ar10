import React from "react";
import { useRouter } from "next/router";
import icon from "public/images/icon/changeLanguage.svg";
import classnames from "classnames";
import styles from "./index.module.scss";
const ChangeLanguage = ({ openItem, setLanguage, language }) => {
  const router = useRouter();
  const pushRouterHandler = (language) => {
    if (router.query.language !== language) {
      const pathName = `${router.basePath}/${router.query.parkId}/${router.query.attraction}`;
      router.push({ pathname: pathName, query: { language: language } }, undefined, { shallow: true });
    }
  };
  return (
    <div className={styles.changeLanguage} id='ChangeLanguage'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>{language == "zh" ? "切換語系" : "Language"}</p>

      <div className={styles.language}>
        <div
          className={classnames(styles.english, {
            [styles.englishAnimation]: openItem == "ChangeLanguage",
            [styles.isSelector]: language == "en",
          })}
          onClick={() => {
            setLanguage("en");
            pushRouterHandler("en");
          }}
          id='Closelanguage'>
          En
        </div>
        <div
          className={classnames(styles.chinese, {
            [styles.chineseAnimation]: openItem == "ChangeLanguage",
            [styles.isSelector]: language == "zh",
          })}
          onClick={() => {
            setLanguage("zh");
            pushRouterHandler("zh");
          }}
          id='Closelanguage'>
          中
        </div>
      </div>
    </div>
  );
};

export default ChangeLanguage;
