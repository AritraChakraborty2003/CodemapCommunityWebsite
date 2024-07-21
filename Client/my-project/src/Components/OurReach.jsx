import FirstReachComponent from "./FirstReachComponent";
import SecondComponent from "./SecondReachComponent";

const OurReach = () => {
  return (
    <>
      <div className="aboutHolder  w-[100vw] lg:h-[110vh] pb-4">
        <h1 className="mt-6 2xl:mt-10 ml-4 font-poppins font-bold text-[12vmin]">
          Our-<span className="text-btnColor">Reach</span>
        </h1>

        <FirstReachComponent />
      </div>
    </>
  );
};
export default OurReach;
