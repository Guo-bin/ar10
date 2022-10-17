import React, { useEffect, useRef, useLayoutEffect, memo } from "react";
import { clientFetch } from "request";
import { useRouter } from "next/router";
import "aframe-extras";
import styles from "./index.module.scss";
const Ar = ({ content, host, setTargetFound, targetFound }) => {
    const { mind, ARProUrl, closeUpImg, _id } = content;
    const size = `${content.size.x} ${content.size.y} ${content.size.z}`;
    const orientation = `${content.orientation.x} ${content.orientation.y} ${content.orientation.z}`;
    const position = `${content.position.x} ${content.position.y} ${content.position.z}`;
    const sceneRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const sceneEl = sceneRef.current;
        const exampleTarget = document.querySelector("#example-target");
        const foundTargetHandler = (event) => {
            setTargetFound({
                ...targetFound,
                [_id]: true,
                ["restAttraction"]: targetFound["restAttraction"] - 1,
            });
            const obj = {
                ...targetFound,
                [_id]: true,
                ["restAttraction"]: targetFound["restAttraction"] - 1,
            };
            window.sessionStorage.setItem("targetFound", JSON.stringify(obj));
        };

        //如果沒有3D物件，進來後直接集點完成
        if (!mind && !ARProUrl[router.query.language]) {
            if (!targetFound[_id]) {
                foundTargetHandler();
            }
        }
        //如果有3D物件，掃描完後集點完成
        if (mind && ARProUrl[router.query.language]) {
            if (!targetFound[_id] && exampleTarget) {
                exampleTarget.addEventListener("targetFound", foundTargetHandler);
            }
        }

        return () => {
            if (sceneEl) {
                exampleTarget = document.querySelector("#example-target");
                const arSystem = sceneEl.systems["mindar-image-system"];
                arSystem.stop(); // stop AR
                sceneEl.renderer.forceContextLoss();
                exampleTarget.removeEventListener("targetFound", foundTargetHandler);
            }
        }; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sceneRef.current, content]);

    // useLayoutEffect(() => {
    //     const url = `${host}api/home/count/${_id}`;
    //     clientFetch(url, "GET", "")
    //         .then((e) => {
    //             console.log(e);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    return (
        <>
            <div className={styles.container} id="container">
                {!mind && !ARProUrl[router.query.language] && (
                    <div className={styles.background}>
                        <img src={closeUpImg} alt="" />
                    </div>
                )}
                {mind && ARProUrl && (
                    <a-scene
                        autoClear={true}
                        ref={sceneRef}
                        mindar-image={`imageTargetSrc:${mind};uiScanning: no;uiLoading: no;`}
                        color-space="sRGB"
                        embedded
                        renderer="colorManagement: true, physicallyCorrectLights"
                        vr-mode-ui="enabled: false"
                        device-orientation-permission-ui="enabled: false"
                    >
                        <a-assets>
                            <a-asset-item id="avatarModel" src={ARProUrl[router.query.language]}></a-asset-item>
                        </a-assets>
                        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
                        <a-entity mindar-image-target="targetIndex: 0" id="example-target">
                            <a-gltf-model
                                rotation={orientation}
                                position={position}
                                scale={size}
                                src="#avatarModel"
                                animation-mixer="clip:*"
                            ></a-gltf-model>
                        </a-entity>
                        <a-entity light="color: #fff; intensity: 2" position="0 0 2" type="directional"></a-entity>
                    </a-scene>
                )}
            </div>
        </>
    );
};
function reRender() {
    return true;
}
export default memo(Ar, reRender);
