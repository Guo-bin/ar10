import React, { useEffect, useState } from "react";
import phoneCma from "public/images/icon/phoneCma.svg";
import { useRouter } from "next/router";
import useCheckPhoneType from "./useCheckPhoneType";
import IOS from "./IOS";
import Android from "./Android";
import styles from "./index.module.scss";
const CameraAuth = ({ language }) => {
  const phoneType = useCheckPhoneType();
  useEffect(() => {
    alert(phoneType);
  }, [phoneType]);
  return (
    <div className={styles.cameraAuth}>
      {phoneType == "IOS" && <IOS language={language} />}
      {phoneType == "Android" && <Android language={language} />}
      {phoneType == "undefined" && <Android language={language} />}
    </div>
  );
};

export default CameraAuth;
