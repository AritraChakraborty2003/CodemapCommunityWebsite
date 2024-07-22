import { useEffect, useState } from "react";
import FirstReachComponent from "./FirstReachComponent";
import SecondComponent from "./SecondReachComponent";

const OurReach = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 6000);
  }, [count]);
  return (
    <>
      <div className="aboutHolder  w-[100vw]  pb-4">
        <h1 className="mt-6 2xl:mt-10 ml-4 font-poppins font-bold text-[12vmin]">
          Our-<span className="text-btnColor">Reach</span>
        </h1>
        {count % 2 == 0 && <FirstReachComponent />}
        {count % 2 != 0 && <SecondComponent />}
      </div>
    </>
  );
};
export default OurReach;
