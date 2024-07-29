import { useEffect, useState } from "react";
import FirstReachComponent from "./FirstReachComponent";
import SecondComponent from "./SecondReachComponent";

const OurReach = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="aboutHolder  w-[100vw]  pb-4">
        <h1 className="mt-6 2xl:mt-10 ml-4 font-poppins font-bold text-[12vmin]">
          Our-<span className="text-btnColor">Reach</span>
        </h1>
        <FirstReachComponent />
      </div>
    </>
  );
};
export default OurReach;
