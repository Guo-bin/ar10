import React, { useEffect } from "react";
import arrow from "public/images/icon/arrow.svg";
import { useRouter } from "next/router";
import rectangle1 from "public/images/rectangle1.png";
import rectangle2 from "public/images/rectangle2.png";
import dottedLine from "public/images/icon/dottedLine.svg";
import classnames from "classnames";
import styles from "./index.module.scss";
const CardLeft = ({ data, classname, currentLan, final, id }) => {
  const { name, fullImg, url } = data;
  const router = useRouter();

  useEffect(() => {
    function getElementPagePosition(element) {
      //計算x座標
      var actualLeft = element.offsetLeft;
      var current = element.offsetParent;
      while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
      }
      //計算y座標
      var actualTop = element.offsetTop;
      var current = element.offsetParent;
      while (current !== null) {
        actualTop += current.offsetTop + current.clientTop;
        current = current.offsetParent;
      }
      //結果
      return { x: actualLeft, y: actualTop };
    }
    const text = document.querySelectorAll(".title");
    window.addEventListener("scroll", () => {
      text.forEach((ele) => {
        const { y: top_of_object } = getElementPagePosition(ele);
        const bottom_of_window = window.scrollY + window.screen.height;

        if (bottom_of_window - window.screen.height / 2 > top_of_object) {
          ele.style.backgroundSize = "100% 50%";
        }
      });
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const lastElement = text[text.length - 1];
        lastElement.style.backgroundSize = "100% 50%";
      }
    });
  }, []);
  return (
    <div
      onClick={() =>
        router.push({
          pathname: `${router.asPath}/${url}`,
          query: { language: currentLan },
        })
      }
      className={classnames({
        [styles.cardLeft]: classname == "left",
        [styles.cardRight]: classname == "right",
      })}>
      <div className={styles.cardTitle}>
        <p className='title'>{name[currentLan]}</p>
      </div>

      <img
        className={styles.backgroundImg}
        src={classname == "left" ? rectangle2.src : rectangle1.src}
        alt=''></img>
      <img className={styles.arrow} src={arrow.src} alt=''></img>
      <div className={styles.picture}>
        <img src={fullImg} alt='' />
      </div>
      {final || (
        <img className={styles.dottedLine} src={dottedLine.src} alt='' />
      )}
    </div>
  );
};

export default CardLeft;
