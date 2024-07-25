import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { NavbarCMS } from "./NavbarCMS";
import { useEffect, useState } from "react";
import axios from "axios";
import CardApply from "./CardApply";
import { RejecterDisplay } from "./RejctersDisplay";
import AcceptersDisplay from "./AcceptersDisplay";

const CMSApply = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState(0);
  const [state1, setstate1] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "apply")
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

  return (
    <>
      {(localStorage.getItem("user") === "Admin2024" && (
        <>
          <NavbarCMS />
          <div className="flex flex-col w-[100vw] p-6 flex justify-center items-center mt-3">
            <div className="flex gap-x-[9vmin]">
              <div>
                <p
                  className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
                  onClick={() => {
                    document.getElementById("firstLine").style.backgroundColor =
                      "#000000";
                    document.getElementById("secLine").style.backgroundColor =
                      "#D3D3D3";
                    setstate(0);
                  }}
                >
                  Technical
                </p>
                <div
                  id="firstLine"
                  className="w-[20vmin] 2xl:w-[11vmin] h-[5px] bg-black mt-1"
                ></div>
              </div>
              <div id="code">
                <p
                  id="showOpenings"
                  className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
                  onClick={() => {
                    document.getElementById("secLine").style.backgroundColor =
                      "#000000";
                    document.getElementById("firstLine").style.backgroundColor =
                      "#D3D3D3";
                    setstate(1);
                  }}
                >
                  Non Technical
                  <div
                    id="secLine"
                    className="w-[23vmin] 2xl:w-[16vmin] h-[5px] bg-lightGrey mt-1"
                  ></div>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100vw] p-2 flex justify-start items-start mt-3 ml-5">
            <div className="flex gap-x-[8vmin]">
              <div>
                <p
                  className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
                  onClick={() => {
                    document.getElementById(
                      "firstLine1"
                    ).style.backgroundColor = "#000000";
                    document.getElementById("secLine1").style.backgroundColor =
                      "#D3D3D3";
                    document.getElementById("thirdLine").style.backgroundColor =
                      "#D3D3D3";
                    setstate1(0);
                  }}
                >
                  Applied
                </p>
                <div
                  id="firstLine1"
                  className="w-[16vmin] 2xl:w-[10vmin] h-[5px] bg-black mt-1"
                ></div>
              </div>
              <div id="code">
                <p
                  id="showOpenings"
                  className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
                  onClick={() => {
                    document.getElementById("secLine1").style.backgroundColor =
                      "#000000";
                    document.getElementById(
                      "firstLine1"
                    ).style.backgroundColor = "#D3D3D3";
                    document.getElementById("thirdLine").style.backgroundColor =
                      "#D3D3D3";

                    setstate1(1);
                  }}
                >
                  Accepted
                  <div
                    id="secLine1"
                    className="w-[16vmin] 2xl:w-[10vmin] h-[5px] bg-lightGrey mt-1"
                  ></div>
                </p>
              </div>

              <div>
                <p
                  className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
                  onClick={() => {
                    document.getElementById("thirdLine").style.backgroundColor =
                      "#000000";
                    document.getElementById("secLine1").style.backgroundColor =
                      "#D3D3D3";
                    document.getElementById(
                      "firstLine1"
                    ).style.backgroundColor = "#D3D3D3";
                    setstate1(2);
                  }}
                >
                  Rejected
                </p>
                <div
                  id="thirdLine"
                  className="w-[18vmin] 2xl:w-[10vmin] h-[5px] bg-lightGrey mt-1"
                ></div>
              </div>
            </div>
          </div>

          <div className="flex  flex-wrap  justify-center items-center p-5 gap-y-4">
            {/* The State===0 for Non Technical */}
            {state === 0 && state1 == 0 && (
              <CardApply data={TechnicalData} type="Apply" type1="Accepted" />
            )}
            {state === 0 && state1 === 1 && (
              <AcceptersDisplay type="Technical" type1="accept1" />
            )}
            {state === 0 && state1 === 2 && (
              <RejecterDisplay type="Technical" />
            )}

            {/* The State===1 for Non Technical */}
            {state === 1 && state1 === 0 && (
              <CardApply
                data={NonTechnicalData}
                type="Apply"
                type1="Accepted"
              />
            )}
            {state === 1 && state1 === 1 && (
              <AcceptersDisplay type="Non Technical" type1="accept1" />
            )}
            {state === 1 && state1 === 2 && (
              <RejecterDisplay type="Non Technical" />
            )}
          </div>

          <Footer />
        </>
      )) || <Navigate to="/CMSLogin"></Navigate>}
    </>
  );
};
export default CMSApply;
