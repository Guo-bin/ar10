import React from "react";
import styles from "./index.module.scss";
const Title = ({ language, name }) => {
  return (
    <div className={styles.title}>{name && <h3>{name[language]}</h3>}</div>
  );
};

export default Title;
