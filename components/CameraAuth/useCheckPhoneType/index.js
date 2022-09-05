import React, { useState, useEffect } from "react";

const useCheckPhoneType = () => {
  const [phoneType, setPhoneType] = useState();
  useEffect(() => {
    const appDown = () => {
      let u = navigator.userAgent;

      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      if (isiOS) {
        setPhoneType("IOS");
      } else if (isAndroid) {
        setPhoneType("Android");
      }
    };
    appDown();
  }, []);
  return phoneType;
};

export default useCheckPhoneType;
