import React, { useEffect, useState } from "react";
import phoneCma from "public/images/icon/phoneCma.svg";
import { useRouter } from "next/router";
import useCheckPhoneType from "./useCheckPhoneType";
import IOS from "./IOS";
import Android from "./Android";
import styles from "./index.module.scss";
const CameraAuth = ({ language }) => {
  const phoneType = useCheckPhoneType();
  useEffect(() => {}, [phoneType]);
  return (
    <div className={styles.cameraAuth}>
      {phoneType == "IOS" && <IOS language={language} />}
      {phoneType !== "IOS" && <Android language={language} />}
    </div>
  );
};

export default CameraAuth;
