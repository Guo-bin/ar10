import React from "react";
import styles from "./index.module.scss";
const Title = ({ language, name }) => {
  return (
    <div className={styles.title}>
      <h3>
        {language == "Zh"
          ? "百步蛇傳說"
          : "The legend of the hundred-step snake"}
      </h3>
    </div>
  );
};

export default Title;
