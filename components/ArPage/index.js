import React, { useEffect, useState, memo, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import Nav from "components/Nav";
import IntroPage from "components/IntroPage";
import useWindowSize from "utils/windowSize";
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
  const [CmaIsOpen, setCmaIsOpen] = useState(false);
  const windowSize = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
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
    if (typeof window !== undefined) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then((e) => {
          setCmaIsOpen(true);
        })
        .catch((e) => {
          setCmaIsOpen(false);
        });
    }
  }, []);
  return (
    <div className={styles.arPage}>
      {!CmaIsOpen && (
        <CameraAuth language={language} setLanguage={setLanguage} />
      )}
      {orientation ? (
        <div className={styles.interface}>
          {openItem !== "AttractionsPage" && openItem !== "IntroPage" && (
            <Title language={language} />
          )}

          <Nav
            setOpenItem={setOpenItem}
            openItem={openItem}
            setLanguage={setLanguage}
            language={language}
          />
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
        <Orientation />
      )}
    </div>
  );
};
const ArPageComponent = memo(ArPage);
export default ArPageComponent;
