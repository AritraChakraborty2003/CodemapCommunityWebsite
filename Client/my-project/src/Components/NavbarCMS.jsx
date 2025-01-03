/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavbarCMS = (props) => {
  const [displayNavHam, setdisplayNavHam] = useState(false);
  const navigate = useNavigate();
  const showNavHam = () => {
    if (displayNavHam === false) setdisplayNavHam(true);
    else setdisplayNavHam(false);
  };
  return (
    <>
      <div className="holderNav bg-bgColor pb-2">
        <div className="navBarBox w-[100vw] bg-bgColor flex ">
          <div className="logoHolder lg:h-[15vmin]  flex pt-2 lg:pt-0 ml-2">
            <div className="iconHolderflex h-[20vmin] w-[15vmin] lg:h-[15vmin] lg:w-[16vmin] justify-center items-center">
              <img
                src="./Codemap_CMS.png"
                className="max-w-full max-h-full object-contain mt-3"
              ></img>
            </div>
            <div className="flex font-semibold items-center textHolder h-[12vmin] w-[51vw] md:w-[67vw] lg:h-[10vmin] lg:w-full mt-4 lg:mt-4 ml-2 2xl:mt-5">
              <p className=" text-[5vmin] md:text-[4vmin] 2xl:text-[3.75vmin] ml-1 font-poppins mt-[1vmin] font-bold">
                Code
                <span className="md:text-[4vmin] 2xl:text-[3.75vmin] text-btnColor">
                  Map
                </span>
              </p>
            </div>
          </div>
          <div className="holderNavIcon hidden lg:block">
            {(screen.width <= 1280 && screen.height >= 800 && (
              <div className="navIconHolder w-[58.5vw] 2xl:w-[69vw] 2xl:text-[2.45vmin] h-[15vmin] flex justify-center items-center gap-x-4 2xl:gap-x-5">
                {props.type === "CMS" && (
                  <>
                    <p>
                      <a>LMS</a>
                    </p>
                    <p>Events</p>
                    <p>CL</p>
                    <p>HiringLetter</p>
                    <p onClick={() => navigate("/CMSTaskManager")}>
                      Task-Manager
                    </p>
                    <p>Team Data</p>
                    <p onClick={() => navigate("/InternTraining")}>
                      TrainingIntern
                    </p>
                    <p
                      onClick={() => {
                        navigate("/CMSApply");
                      }}
                    >
                      Apply
                    </p>
                    <p
                      onClick={() => {
                        navigate("/CMSAddQuestions");
                      }}
                    >
                      Add Questions
                    </p>
                  </>
                )}
              </div>
            )) || (
              <div className="navIconHolder w-[65vw] text-[2vmin] 2xl:w-[69vw] 2xl:text-[1.85vmin] h-[15vmin] flex justify-center items-center gap-x-4 2xl:gap-x-5">
                {props.type === "CMS" && (
                  <>
                    <p>
                      <a>LMS</a>
                    </p>
                    <p>Events</p>
                    <p>CL</p>
                    <p>HiringLetter</p>
                    <p onClick={() => navigate("/CMSTaskManager")}>
                      Task-Manager
                    </p>
                    <p>Team Data</p>
                    <p
                      onClick={() => {
                        navigate("/VideoCMS");
                      }}
                    >
                      CMS_Videos
                    </p>
                    <p
                      onClick={() => {
                        navigate("/CMSAddQuestions");
                      }}
                    >
                      CMS_Questions
                    </p>
                  </>
                )}
                {props.type === "CMS" && (
                  <>
                    <p onClick={() => navigate("/InternTrainingCMS")}>
                      TrainingIntern
                    </p>
                    <p
                      onClick={() => {
                        navigate("/CMSApply");
                      }}
                    >
                      Apply
                    </p>
                    <p
                      onClick={() => {
                        navigate("/CMSOpenings");
                        if (displayNavHam === false) setdisplayNavHam(true);
                        else setdisplayNavHam(false);
                      }}
                    >
                      Openings
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <div className="buttonHolder h-[21vmin] lg:h-[15vmin]  flex items-center justify-center">
              <button
                className="w-[20vmin] 2xl:w-full   bg-btnColor p-3 rounded-lg text-lg text-white 2xl:text-[2.45vmin] 2xl:p-4"
                onClick={() => {
                  if (props.type === "CMS") {
                    localStorage.removeItem("user");
                    navigate("/CMSOpenings");
                  } else if (props.type === "Interns") {
                    localStorage.removeItem("userIntern");
                    navigate("/InternLogin");
                  }
                }}
              >
                Logout
              </button>
            </div>
          </div>

          <div className="HamHolder block lg:hidden ml-6 " onClick={showNavHam}>
            <div className="iconHolder h-[17vmin] w-[17vmin]  mt-3 md:mt-1 ml-2 flex justify-center items-center pt-1">
              <img
                src="./ham1.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
          </div>
        </div>

        <div className="line w-[96vw] ml-[2vw] mr-[3vw] h-[10px] border-lightGrey border-t-2 mt-2 lg:mt-0"></div>
      </div>
      {displayNavHam === true && (
        <div className="navHamMobile block lg:hidden w-[100vw] bg-bgColor  pl-3 pb-6 ">
          <ul className="space-y-[3vmin] text-lg md:text-[3vmin]">
            {props.type === "CMS" && (
              <>
                <p>
                  <a>LMS</a>
                </p>
                <p>Events</p>
                <p>CL</p>
                <p>HiringLetter</p>
                <p onClick={() => navigate("/CMSTaskManager")}>Task-Manager</p>
                <p>Team Data</p>
                <p
                  onClick={() => {
                    navigate("/VideoCMS");
                  }}
                >
                  CMS_Videos
                </p>
              </>
            )}
            {props.type === "CMS" && (
              <>
                <p
                  onClick={() => {
                    showNavHam;
                    navigate("/InternTrainingCMS");
                  }}
                >
                  TrainingIntern
                </p>
                <p
                  onClick={() => {
                    navigate("/CMSApply");
                    if (displayNavHam === false) setdisplayNavHam(true);
                    else setdisplayNavHam(false);
                  }}
                >
                  Apply
                </p>
                <p
                  onClick={() => {
                    navigate("/CMSApply");
                    if (displayNavHam === false) setdisplayNavHam(true);
                    else setdisplayNavHam(false);
                  }}
                >
                  Openings
                </p>
              </>
            )}

            <li>
              <button
                onClick={() => {
                  if (props.type === "CMS") {
                    localStorage.removeItem("user");
                    navigate("/CMSOpenings");
                  } else if (props.type === "Interns") {
                    localStorage.removeItem("userIntern");
                    navigate("/InternLogin");
                  }
                }}
                className=" 2xl:w-[20vmin] bg-btnColor p-3 rounded-lg text-white ml-[-0.5vmin]"
              >
                Logout
              </button>
            </li>
          </ul>

          <div className="line w-[94vw]  h-[10px] border-lightGrey border-t-2 mt-2 lg:mt-0"></div>
        </div>
      )}
    </>
  );
};

export { NavbarCMS };
