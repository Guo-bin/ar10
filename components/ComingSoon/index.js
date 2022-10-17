import React, { useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./index.module.scss";
const ComingSoon = ({ language, setOpenItem }) => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 3000);
  }, []);
  return (
    <>
      {isShow && (
        <div className={classnames(styles.comingSoon)}>
          <h3>{language == "zh" ? "敬請期待" : "Coming soon."} </h3>
          <p>{language == "zh" && "此景點尚未提供族語導覽"}</p>
        </div>
      )}
    </>
  );
};

export default ComingSoon;
