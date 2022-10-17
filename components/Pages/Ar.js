import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { serverFetch } from "request";
import ArPageComponent from "components/ArPage";
import { useRouter } from "next/router";
const DynamicArjs = dynamic(() => import("../Ar"), {
    ssr: false,
});

function TestAr({ content, entryData, host }) {
    const router = useRouter();
    const [language, setLanguage] = useState("zh");
    const [targetFound, setTargetFound] = useState({});
    useEffect(() => {
        let targetFoundList = {};
        if (window.sessionStorage.getItem("targetFound")) {
            const List = window.sessionStorage.getItem("targetFound");
            const parseList = JSON.parse(List);
            targetFoundList = parseList;
        } else if (entryData.attractions) {
            entryData.attractions.forEach((attraction) => {
                targetFoundList[attraction._id] = false;
            });
            targetFoundList.restAttraction = entryData.attractions.length;
        }
        setTargetFound(targetFoundList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (!router.query.language) {
            const userLanguage = window.navigator.userLanguage || window.navigator.language;
            const pathName = `${router.basePath}/${router.query.parkId}/${router.query.attraction}`;
            if (userLanguage.substr(0, 2) == "en" || userLanguage.substr(0, 2) == "En") {
                setLanguage("en");
                router.push({ pathname: pathName, query: { language: "en" } });
            } else {
                setLanguage("zh");
                router.push({ pathname: pathName, query: { language: "zh" } });
            }
        } else {
            setLanguage(router.query.language);
        }
    }, []);
    return (
        <div>
            <DynamicArjs
                content={content}
                key={router.asPath}
                host={host}
                targetFound={targetFound}
                setTargetFound={setTargetFound}
                language={language}
            />
            <ArPageComponent
                content={content}
                entryData={entryData}
                targetFound={targetFound}
                setLanguage={setLanguage}
                language={language}
            />
        </div>
    );
}

export default TestAr;
