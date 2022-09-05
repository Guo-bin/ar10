import React, { memo } from "react";
import { v4 as uuidv4 } from "uuid";
import viewpointGuide from "public/images/icon/viewpointGuide.svg";
import languageGuide from "public/images/icon/languageGuide.svg";
import viewpointMap from "public/images/icon/viewpointMap.svg";
import language from "public/images/icon/language.svg";
import close from "public/images/icon/close.svg";
import styles from "./index.module.scss";
const InfoPageData = {
  Zh: [
    {
      icon: viewpointGuide.src,
      title: "景點介紹",
      introduce: "查看此景點的相關介紹說明。",
    },
    {
      icon: languageGuide.src,
      title: "族語導覽",
      introduce: "提供族語語音導覽服務，為您介紹此景點的特色與故事。",
    },
    {
      icon: viewpointMap.src,
      title: "景點一覽",
      introduce: "顯示園區內的所有景點，點擊即可開啟該景點的AR頁面。",
    },
    {
      icon: language.src,
      title: "語系顯示",
      introduce: "提供您變更介面中顯示的語言。",
    },
  ],
  En: [
    {
      icon: viewpointGuide.src,
      title: "Introduce",
      introduce: "Story or introduction of attractions. ",
    },
    {
      icon: languageGuide.src,
      title: "Audio",
      introduce:
        "Audio guide of ethnic language. Let’s know more about Isingan! ",
    },
    {
      icon: viewpointMap.src,
      title: "Attractions",
      introduce: "To view all attractions. Click to open the AR page.",
    },
    {
      icon: language.src,
      title: "Language",
      introduce: "To change the language.",
    },
  ],
};
const InfoPage = ({ setOpenItem, language }) => {
  const closeHandler = () => {
    setOpenItem(null);
  };
  console.log(language);
  return (
    <div className={styles.infoPage}>
      <h3 className={styles.title}>
        {language == "Zh" ? "操作介紹" : "Infomation"}
      </h3>
      <div className={styles.container}>
        {InfoPageData[language].map((info) => (
          <section className={styles.section} key={uuidv4()}>
            <img className={styles.icon} src={info.icon} alt='' />
            <div className={styles.textArea}>
              <h4 className={styles.infoTitle}>{info.title}</h4>
              <p className={styles.introduce}>{info.introduce}</p>
            </div>
          </section>
        ))}
      </div>
      <img
        className={styles.close}
        src={close.src}
        alt=''
        onClick={closeHandler}
      />
    </div>
  );
};
const InfoPageComponent = memo(InfoPage);
export default InfoPageComponent;
