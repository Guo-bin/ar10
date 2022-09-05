import React from "react";
import Close from "public/images/icon/viewpointGuidClose.svg";
import styles from "./index.module.scss";
const IntroPage = ({ setOpenItem, language }) => {
  const closeHandler = () => {
    setOpenItem(null);
  };

  return (
    <div className={styles.introPage}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          {language == "Zh" ? "百步蛇傳說" : "Deinagkistrodon"}
        </h3>
        <div className={styles.borderBottom}></div>
        <p className={styles.content}>
          {language == "Zh"
            ? "故事講述有一布農族婦女，因為丈夫要參加一個重要的慶典，她想要讓丈夫非常出眾 ，便想幫丈夫編一個最漂亮的八編織衣服紋樣，可是她一直想不出來要編織什麼花樣。有一天婦女去山上採野菜，從山上要回家的時候，她看見了小百步蛇身上美麗的花紋，實在是太漂亮了，不禁讚歎萬分。她便開口對小百步蛇的母親說明自己要借小蛇的原因，於是雙方約定七日後將小蛇還給母蛇。參考小蛇身上花紋所編織出的花樣實在是太漂亮了，村子裡的婦人們也都跑來借用，沒想到在爭搶的過程中，把小蛇弄死了。小百步蛇的母親非常生氣，發動蛇族攻擊布農族部落，百年來布農族和百步蛇相互攻擊，死傷慘重。後來人、蛇兩族的族長為免生靈塗炭，相互立下誓約，蛇族願意借用牠們的花紋給布農族做衣服，布農族需遵守和平約定，世世代代不得殺害百步蛇，百步蛇亦不會亂咬布農族人。"
            : "The Hobson family had been meaning to buy some new furniture for ages, but somehow they never got round to it. There were always so many other things to do. Then one day there was a big shout from Joe's room.The Hobson family had been meaning to buy some new furniture for ages, but somehow they never got round to it. There were always so many other things to do. Then one day there was a big shout from Joe's room.The Hobson family had been meaning to buy some new furniture for ages, but somehow they never got round to it. There were always so many other things to do. Then one day there was a big shout from Joe's room.The Hobson family had been meaning to buy some new furniture for ages, but somehow they never got round to it. There were always so many other things to do. Then one day there was a big shout from Joe's room.The Hobson family had been meaning to buy some new furniture for ages, but somehow they never got round to it. There were always so many other things to do. Then one day there was a big shout from Joe's room.The Hobson family had been meaning to buy some new furniture for ages, but somehow they never got round to it. There were always so many other things to do. Then one day there was a big shout from Joe's room.The Hobson family had been meaning to buy some new furniture for ages, but somehow they never got round to it. There were always so many other things to do. Then one day there was a big shout from Joe's room."}
        </p>
      </div>
      <div className={styles.close}>
        <img src={Close.src} alt='' onClick={closeHandler} />
      </div>
    </div>
  );
};

export default IntroPage;
