import dynamic from "next/dynamic";
import ArPageComponent from "components/ArPage";
const DynamicArjs = dynamic(() => import("../../components/Ar"), {
  ssr: false,
});

function TestAr({ target }) {
  return (
    <div>
      <DynamicArjs targetUrl={`/mind/${target}.mind`} model='/glb/women.glb' />
      <ArPageComponent />
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  return { props: { target: query.id || "targets" } };
};

export default TestAr;
