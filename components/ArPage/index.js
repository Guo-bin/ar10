import React, { useEffect, useState, memo, useLayoutEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import Nav from "components/Nav";
import IntroPage from "components/IntroPage";
import useWindowSize from "utils/windowSize";
import classnames from "classnames";
import AttractionsPage from "components/AttractionsPage";
import ImageExamplePage from "components/ImageExamplePage";
import Title from "components/Title";
import CameraAuth from "components/CameraAuth";
import InfoPage from "components/InfoPage";
import Orientation from "components/Orientation";
import styles from "./index.module.scss";
const ArPage = () => {
  const [openItem, setOpenItem] = useState("ImageExamplePage");
  const [isBtnShow, setBtnIsShow] = useState(false);
  const [language, setLanguage] = useState("Zh");
  const [orientation, setOrientation] = useState(null);
  const [CmaIsOpen, setCmaIsOpen] = useState(true);
  const [banScroll, setBanScroll] = useState(true);
  const windowSize = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    // body.classList.add("arBody");
    // html.classList.add("arBody");
    if (windowSize.height > windowSize.width) {
      setOrientation(true);
    } else {
      setOrientation(false);
    }
  }, [windowSize.width, windowSize.height]);
  useEffect(() => {
    if (!router.query.language) {
      const userLanguage =
        window.navigator.userLanguage || window.navigator.language;
      if (
        userLanguage.substr(0, 2) == "en" ||
        userLanguage.substr(0, 2) == "En"
      ) {
        setLanguage("En");
      } else {
        setLanguage("Zh");
      }
    } else {
      setLanguage(router.query.language);
    }
    // if (typeof window !== undefined) {
    //   navigator.mediaDevices
    //     .getUserMedia({ video: { facingMode: "environment" } })
    //     .then((e) => {
    //       setCmaIsOpen(true);
    //     })
    //     .catch((e) => {
    //       setCmaIsOpen(false);
    //     });
    // }
  }, []);
  console.log("ASD");
  useEffect(() => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const isBanScroll =
      openItem == null ||
      openItem == "ChangeLanguage" ||
      openItem == "LanguageGuide" ||
      openItem == "";
    if (isBanScroll) {
      setBanScroll(false);
      // html.style.overflow = "auto";
      body.style.overflow = "auto";
    } else {
      // html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      setBanScroll(true);
    }
  }, [openItem]);
  return (
    <div className={styles.arPage}>
      <Script
        data-consolejs-channel='b84657b6-66d6-33dc-f5f7-ce3470d2733b'
        src='https://remotejs.com/agent/agent.js'
      />
      {!CmaIsOpen && (
        <CameraAuth language={language} setLanguage={setLanguage} />
      )}
      {orientation ? (
        <div className={styles.interface}>
          {openItem !== "AttractionsPage" && openItem !== "IntroPage" && (
            <Title language={language} />
          )}
          {CmaIsOpen && (
            <Nav
              setOpenItem={setOpenItem}
              openItem={openItem}
              setLanguage={setLanguage}
              language={language}
            />
          )}

          <section className={styles.pageContainer}>
            {openItem == "ImageExamplePage" && (
              <ImageExamplePage
                setOpenItem={setOpenItem}
                isBtnShow={isBtnShow}
                setBtnIsShow={setBtnIsShow}
                language={language}
              />
            )}
            {openItem == "InfoPage" && (
              <InfoPage setOpenItem={setOpenItem} language={language} />
            )}
            {openItem == "IntroPage" && (
              <IntroPage setOpenItem={setOpenItem} language={language} />
            )}
            {openItem == "AttractionsPage" && (
              <AttractionsPage setOpenItem={setOpenItem} language={language} />
            )}
          </section>
        </div>
      ) : (
        <Orientation language={language} />
      )}
    </div>
  );
};
const ArPageComponent = memo(ArPage);
export default ArPageComponent;
