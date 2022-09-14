import dynamic from "next/dynamic";
import { useState } from "react";
import ArPageComponent from "components/ArPage";
import { useRouter } from "next/router";
const DynamicArjs = dynamic(() => import("../../components/Ar"), {
  ssr: false,
});

function TestAr({ target }) {
  const router = useRouter();
  const [targetIsFound, setTargetIsFound] = useState({});
  return (
    <div>
      <DynamicArjs
        targetUrl={`/mind/${target}.mind`}
        model='/glb/women.glb'
        key={router.asPath}
        setTargetIsFound={setTargetIsFound}
      />
      <ArPageComponent targetIsFound={targetIsFound} />
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  return { props: { target: query.id || null } };
};

export default TestAr;
