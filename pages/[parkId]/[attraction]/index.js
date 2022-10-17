import React from "react";
import Arpages from "components/Pages/Ar";
const index = ({ content, entryData, host }) => {
    // return <></>;
    return <Arpages content={content} entryData={entryData} host={host} />;
};

export const getServerSideProps = async ({ query }) => {
    const data2 = await fetch(
        `https://cipar.cacdidemo.com/api/home/${query.parkId}/${query.attraction}`,
        { method: "GET" },
        ""
    );
    const parseData = await data2.json();
    const content = parseData.extras.content;

    const data = await fetch(`https://cipar.cacdidemo.com/api/home/${query.parkId}`, { method: "GET" }, "");

    const { extras } = await data.json();

    const { content: entryData } = extras;

    const host = process.env.API_ENDPOINT;

    return { props: { entryData, content, host } };
};

export default index;
