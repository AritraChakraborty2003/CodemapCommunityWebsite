import NavbarGeneral from "./NavbarGeneral";
import Footer from "./Footer";
import CareerCard from "./CareerCard";
import { useState, useEffect } from "react";
import axios from "axios";
const Careers = () => {
  const [data, setData] = useState([]);
  const [state1, setstate1] = useState(0);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "openings")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const TechnicalData = data.filter((val) => val.category === "Technical");
  const NonTechnicalData = data.filter(
    (val) => val.category === "Non Technical"
  );

  console.log(data);
  return (
    <>
      <NavbarGeneral />
      <div className="flex gap-x-5 mt-3 ml-4">
        <div>
          <p
            className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
            onClick={() => {
              document.getElementById("firstLine1").style.backgroundColor =
                "#000000";
              document.getElementById("secLine1").style.backgroundColor =
                "#D3D3D3";
              setstate1(0);
            }}
          >
            Technical
          </p>
          <div
            id="firstLine1"
            className="w-[18vmin] 2xl:w-[14vmin] h-[5px] bg-black mt-1"
          ></div>
        </div>

        <div id="code">
          <p
            id="showOpenings"
            className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
            onClick={() => {
              document.getElementById("secLine1").style.backgroundColor =
                "#000000";
              document.getElementById("firstLine1").style.backgroundColor =
                "#D3D3D3";
              setstate1(1);
            }}
          >
            Non Technical
            <div
              id="secLine1"
              className="w-[21vmin] 2xl:w-[18vmin] h-[5px] bg-lightGrey mt-1"
            ></div>
          </p>
        </div>
      </div>
      {state1 === 0 && (
        <div className="w-[100vw] mt-6 flex justify-center  ml-[-2vmin] lg:ml-[-2vmin] items-center mt-2  gap-x-8 2xl:gap-x-12 flex-wrap  pb-10 gap-y-10">
          <CareerCard data={TechnicalData} type="Non CMS" />
        </div>
      )}
      {state1 === 1 && (
        <div className="w-[100vw] mt-6 flex justify-center  ml-[-2vmin] lg:ml-[-2vmin] items-center mt-2  gap-x-8 2xl:gap-x-12 flex-wrap  pb-10 gap-y-10">
          <CareerCard data={NonTechnicalData} type="Non CMS" />
        </div>
      )}

      <Footer />
    </>
  );
};
export default Careers;
