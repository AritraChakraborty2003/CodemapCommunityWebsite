import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarGeneral from "./NavbarGeneral";
import { NavbarCMS } from "./NavbarCMS";
import { useState } from "react";
import Footer from "./Footer";
import { TechnicalSyllabus } from "./TechnicalSyllabus";
import { NonTechnicalSyllabus } from "./NonTechnicalSyllabus";
import { TechnicalVideos } from "./TechnicalVideos";
import { NonTechnicalVideos } from "./NonTechnicalVideos";

const InternTraining = () => {
  const navigate = useNavigate();
  const [state1, setstate1] = useState(0);
  const [state, setstate] = useState(0);
  return (
    <>
      {(localStorage.getItem("userIntern") === "internadmin" && (
        <>
          <NavbarCMS type="Interns" />
          <div className="flex gap-x-[12vmin] mt-10 ml-4 2xl:ml-8 pb-5 justify-center items-center">
            <div>
              <p
                className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
                onClick={() => {
                  document.getElementById("firstLine1").style.backgroundColor =
                    "#000000";
                  document.getElementById("secLine1").style.backgroundColor =
                    "#D3D3D3";
                  setstate(0);
                }}
              >
                Training Syllabus
              </p>
              <div
                id="firstLine1"
                className="w-[24vmin] 2xl:w-[14vmin] h-[5px] bg-black mt-1"
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
                  setstate(1);
                }}
              >
                Videos Rec.
                <div
                  id="secLine1"
                  className="w-[20vmin] 2xl:w-[18vmin] h-[5px] bg-lightGrey mt-1"
                ></div>
              </p>
            </div>
          </div>
          <div className="flex gap-x-7 mt-1 ml-4 2xl:ml-8 pb-5">
            <div>
              <p
                className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
                onClick={() => {
                  document.getElementById("firstLine2").style.backgroundColor =
                    "#000000";
                  document.getElementById("secLine2").style.backgroundColor =
                    "#D3D3D3";
                  setstate1(0);
                }}
              >
                Technical
              </p>
              <div
                id="firstLine2"
                className="w-[19vmin] 2xl:w-[14vmin] h-[5px] bg-black mt-1"
              ></div>
            </div>

            <div id="code">
              <p
                id="showOpenings"
                className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
                onClick={() => {
                  document.getElementById("secLine2").style.backgroundColor =
                    "#000000";
                  document.getElementById("firstLine2").style.backgroundColor =
                    "#D3D3D3";
                  setstate1(1);
                }}
              >
                Non Technical
                <div
                  id="secLine2"
                  className="w-[24vmin] 2xl:w-[18vmin] h-[5px] bg-lightGrey mt-1"
                ></div>
              </p>
            </div>
          </div>

          {state === 0 && state1 === 0 && <TechnicalSyllabus />}
          {state === 0 && state1 == 1 && <NonTechnicalSyllabus />}

          {state === 1 && state1 === 0 && <TechnicalVideos />}
          {state === 1 && state1 === 1 && <NonTechnicalVideos />}
          <Footer />
        </>
      )) || <Navigate to="/InternLogin" />}
    </>
  );
};
export default InternTraining;
