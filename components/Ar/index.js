import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import Script from "next/script";
// import "mind-ar/dist/mindar-image.prod.js";
// import "aframe";
// import "mind-ar/dist/mindar-image-aframe.prod.js";
import "aframe-extras";
import styles from "./index.module.scss";
const Ar = ({ targetUrl, model }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    // if (sceneEl) {
    //   const arSystem = sceneEl.systems["mindar-image-system"];
    //   sceneEl.addEventListener("renderstart", () => {
    //     arSystem.start(); // start AR
    //   });
    // }

    return () => {
      if (sceneEl) {
        const arSystem = sceneEl.systems["mindar-image-system"];
        arSystem.stop(); // stop AR
      }
    };
  }, [sceneRef.current]);
  // useEffect(() => {
  //   const sceneEl = sceneRef.current;
  //   const arSystem = sceneEl.systems["mindar-image-system"];
  //   sceneEl.addEventListener("renderstart", () => {
  //     arSystem.start(); // start AR
  //   });
  //   return () => {
  //     arSystem.stop();
  //   };
  // }, []);
  return (
    <>
      <div className={styles.container} id='container'>
        {/* <a-scene
          ref={sceneRef}
          mindar-image={`imageTargetSrc: ${targetUrl}; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;`}
          color-space='sRGB'
          embedded
          renderer='colorManagement: true, physicallyCorrectLights'
          vr-mode-ui='enabled: false'
          device-orientation-permission-ui='enabled: false'> */}
        <a-scene
          ref={sceneRef}
          mindar-image={`imageTargetSrc:${targetUrl};uiLoading: no;uiScanning: no;`}
          color-space='sRGB'
          embedded
          renderer='colorManagement: true, physicallyCorrectLights'
          vr-mode-ui='enabled: false'
          device-orientation-permission-ui='enabled: false'>
          <a-assets>
            <a-asset-item id='avatarModel' src={model}></a-asset-item>
          </a-assets>
          <a-camera position='0 0 0' look-controls='enabled: false'></a-camera>
          <a-entity mindar-image-target='targetIndex: 0'>
            <a-gltf-model
              rotation='0 0 0 '
              position='0.4 -0.4 0'
              scale='0.003 0.003 0.003'
              src='#avatarModel'
              animation-mixer='clip:Bip001|Take 001|BaseLayer'></a-gltf-model>
          </a-entity>
          <a-entity
            light='color: #fff; intensity: 2'
            position='0 0 2'
            type='directional'></a-entity>
        </a-scene>
      </div>
    </>
  );
};
export default Ar;
