import React from "react";
// import pass from "public/images/icon/pass.svg";
import pass from "public/images/icon/pinktick.svg";
import classNames from "classnames";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
const View = ({ data, language, setOpenItem, targetFound, id }) => {
  const { fullImg, name, url } = data;
  const router = useRouter();

  const clickHandler = () => {
    if (router.query.attraction !== url) {
      router.push({
        pathname: `/${router.query.parkId}/${url}`,
        query: { language: language },
      });
      setOpenItem("null");
    } else {
      setOpenItem("ImageExamplePage");
    }
  };
  return (
    <div className={styles.view} onClick={clickHandler}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={fullImg} alt='' />
        <img
          className={classNames(styles.pass, {
            [styles.isPass]: targetFound[id],
          })}
          src={pass.src}
          alt=''
        />
      </div>
      <p className={styles.title}>{name[language]}</p>
    </div>
  );
};

export default View;
