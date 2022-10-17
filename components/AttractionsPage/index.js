import React, { useState, useEffect } from "react";
import Close from "public/images/icon/viewpointGuidClose.svg";
import View from "./View";
import styles from "./index.module.scss";
const AttractionsPage = ({
  setOpenItem,
  language,
  attractions,
  parkName,
  targetFound,
  completeImage,
  setIsComplete,
}) => {
  const closeHandler = () => {
    setOpenItem(null);
  };
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    if (targetFound && targetFound.restAttraction == 0) {
      setComplete(true);
    }
  }, [targetFound.restAttraction, targetFound]);
  return (
    <div className={styles.attractionsPage}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          {language == "zh"
            ? `${parkName[language]}景點一覽`
            : `Attractions in Isingan`}
        </h3>

        <div className={styles.viewpointContainer}>
          {attractions.map((attraction) => {
            return (
              <View
                setOpenItem={setOpenItem}
                language={language}
                data={attraction}
                key={attraction._id}
                targetFound={targetFound}
                id={attraction._id}
              />
            );
          })}
          {complete && completeImage && (
            <div className={styles.complete}>
              <button
                onClick={() => {
                  setIsComplete(true);
                }}>
                {language == "zh" ? "集點完成" : "Complete"}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.close}>
        <img src={Close.src} alt='' onClick={closeHandler} />
      </div>
    </div>
  );
};

export default AttractionsPage;
