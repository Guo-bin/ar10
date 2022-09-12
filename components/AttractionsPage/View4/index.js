import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dog from "public/images/dog.jpg";
import styles from "./index.module.scss";
import snake from "public/images/snake.jpg";
import { lang } from "moment";
const View = ({ data, language, target, img }) => {
  const router = useRouter();

  return (
    <div
      className={styles.view}
      onClick={() => {
        router.push({
          pathname: `/test/snake`,
          query: { language: language },
        });
      }}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={snake.src} alt='' />
      </div>
      <p className={styles.title}>
        {language == "Zh" ? "布農族百步蛇的報仇" : "Nimama hou pon"}
      </p>
    </div>
  );
};

export default View;
