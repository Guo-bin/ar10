import React, { useEffect, useState, memo } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Nav from "components/Nav";
import IntroPage from "components/IntroPage";
import useWindowSize from "utils/windowSize";
import AttractionsPage from "components/AttractionsPage";
import ImageExamplePage from "components/ImageExamplePage";
import ComingSoon from "components/ComingSoon";
import Title from "components/Title";
import CameraAuth from "components/CameraAuth";
import InfoPage from "components/InfoPage";
import CompleteImg from "components/CompleteImg";
import Orientation from "components/Orientation";
import styles from "./index.module.scss";
const ArPage = ({ content, entryData, targetFound, setLanguage, language }) => {
    const { name, description, audio, closeUpImg, _id, parkName, mind, ARProUrl } = content;

    const { completeImage, attractions } = entryData;
    const [openItem, setOpenItem] = useState(null);
    const [isBtnShow, setBtnIsShow] = useState(false);
    const [orientation, setOrientation] = useState(null);
    //相機是否開啟
    const [CmaIsOpen, setCmaIsOpen] = useState(false);
    //集點是否完成
    const [isComplete, setIsComplete] = useState(false);
    const windowSize = useWindowSize();
    const router = useRouter();

    //when data loaded or reloaded, we need to render  one of the following page "ImageExamplePage" or "IntroPage" by detecting whether
    //the mind file and ARproUrl exist or not
    useEffect(() => {
        if (mind && ARProUrl) {
            setOpenItem("ImageExamplePage");
        } else {
            setOpenItem("IntroPage");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content]);

    //to detect orientation of device
    useEffect(() => {
        const body = document.querySelector("body");
        if (windowSize.height > windowSize.width) {
            setOrientation(true);
        } else {
            setOrientation(false);
        }
    }, [windowSize.width, windowSize.height]);
    //if user router to the Ar page by typing the attraction url not from the entry page,
    //then we get the default language from user's device and set it to the setLanguage.
    //else if user router to the Ar page with a correct way, we just get language from router.query and set it to setLanguage.
    useEffect(() => {
        //to get the permission of the user camera
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //When openItem equa to those I writed, let user scroll screen.
    useEffect(() => {
        const body = document.querySelector("body");
        const isScroll =
            CmaIsOpen &&
            (openItem == null ||
                openItem == "ChangeLanguage" ||
                openItem == "LanguageGuide" ||
                openItem == "Closelanguage");

        if (isScroll) {
            body.style.overflow = "auto";
        } else {
            body.style.overflow = "hidden";
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openItem]);
    return (
        <div className={styles.arPage}>
            <Script
                data-consolejs-channel="797a9f0e-daab-5fbc-9260-b6e16f2f69c6"
                src="https://remotejs.com/agent/agent.js"
            ></Script>
            {!CmaIsOpen && <CameraAuth language={language} setLanguage={setLanguage} />}
            {orientation ? (
                <div className={styles.interface}>
                    {openItem !== "AttractionsPage" && openItem !== "IntroPage" && (
                        <Title language={language} name={name} />
                    )}
                    {CmaIsOpen && (
                        <Nav
                            setOpenItem={setOpenItem}
                            openItem={openItem}
                            setLanguage={setLanguage}
                            language={language}
                            audio={audio}
                            closeUpImg={closeUpImg}
                            mind={mind}
                            ARProUrl={ARProUrl}
                        />
                    )}

                    <section className={styles.pageContainer}>
                        {mind && ARProUrl && openItem == "ImageExamplePage" && (
                            <ImageExamplePage
                                setOpenItem={setOpenItem}
                                isBtnShow={isBtnShow}
                                setBtnIsShow={setBtnIsShow}
                                language={language}
                                closeUpImg={closeUpImg}
                            />
                        )}
                        {openItem == "InfoPage" && (
                            <InfoPage setOpenItem={setOpenItem} language={language} parkName={parkName} />
                        )}
                        {openItem == "IntroPage" && (
                            <IntroPage
                                setOpenItem={setOpenItem}
                                language={language}
                                name={name}
                                description={description}
                                setBtnIsShow={setBtnIsShow}
                            />
                        )}
                        {openItem == "AttractionsPage" && (
                            <AttractionsPage
                                setOpenItem={setOpenItem}
                                language={language}
                                attractions={attractions}
                                _id={_id}
                                parkName={parkName}
                                mind={mind}
                                ARProUrl={ARProUrl}
                                targetFound={targetFound}
                                completeImage={completeImage}
                                setIsComplete={setIsComplete}
                            />
                        )}
                        {openItem == "LanguageGuide" && !audio && (
                            <ComingSoon language={language} setOpenItem={setOpenItem} />
                        )}
                        {completeImage && isComplete && (
                            <CompleteImg setIsComplete={setIsComplete} completeImage={completeImage} />
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
