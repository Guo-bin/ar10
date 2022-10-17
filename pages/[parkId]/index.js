import EntryPage from "components/Entry";
import React from "react";

const Entry = ({ content }) => {
    return <EntryPage content={content} />;
};

export const getServerSideProps = async ({ query }) => {
    const data = await fetch(`https://cipar.cacdidemo.com/api/home/${query.parkId}`, { method: "GET" }, "");
    const { extras } = await data.json();
    const { content } = extras;
    console.log(content);
    return {
        props: { content },
    };
};

export default Entry;
