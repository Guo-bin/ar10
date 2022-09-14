import React, { memo } from "react";
import Info from "./Info";
import { useRouter } from "next/router";
import LanguageGuide from "./LanguageGuide";
import classnames from "classnames";
import Intro from "./Intro";
import Attractions from "./Attractions";
import { AudioPlayer } from "components/AudioPlayer";
import ChangeLanguage from "./ChangeLanguage";
import Thumbnail from "./Thumbnail";
import styles from "./index.module.scss";
const Nav = ({ setOpenItem, openItem, language, setLanguage }) => {
  const router = useRouter();
  const clickItemHandler = (e) => {
    const clickItemName = e.target.id;
    if (openItem !== clickItemName) {
      setOpenItem(clickItemName);
    } else {
      setOpenItem(null);
    }
  };

  return (
    <nav
      className={classnames(styles.nav, {
        [styles.showAudio]: openItem == "LanguageGuide",
      })}>
      <div className={styles.navItem} onClick={clickItemHandler}>
        <Thumbnail />
        <Info setOpenItem={setOpenItem} language={language} />
        <LanguageGuide setOpenItem={setOpenItem} language={language} />
        <Intro setOpenItem={setOpenItem} language={language} />
        <Attractions setOpenItem={setOpenItem} language={language} />
        <ChangeLanguage
          setOpenItem={setOpenItem}
          openItem={openItem}
          setLanguage={setLanguage}
          language={language}
        />
      </div>
      <div className={styles.languagePlayer} key={router.asPath}>
        <AudioPlayer setOpenItem={setOpenItem} openItem={openItem} />
      </div>
    </nav>
  );
};
const NavComponent = memo(Nav);
export default NavComponent;
