import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import ArPageComponent from "components/ArPage";
const DynamicArjs = dynamic(() => import("../../components/Ar"), {
  ssr: false,
});

function TestAr({ target }) {
  const router = useRouter();

  return (
    <div>
      <DynamicArjs
        targetUrl={`/mind/${target}.mind`}
        model='/glb/women.glb'
        key={router.asPath + uuidv4()}
      />

      {/* <ArPageComponent /> */}
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  return { props: { target: query.id || "targets" } };
};

export default TestAr;
