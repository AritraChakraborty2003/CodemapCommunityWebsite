import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavbarGeneral = () => {
  const navigate = useNavigate();
  const [displayNavHam, setdisplayNavHam] = useState(false);
  const showNavHam = () => {
    if (displayNavHam === false) setdisplayNavHam(true);
    else setdisplayNavHam(false);
  };
  return (
    <>
      <div className="holderNav bg-bgColor pb-2">
        <div className="navBarBox w-[100vw] bg-bgColor flex ">
          <div className="logoHolder lg:h-[15vmin]  flex pt-2 lg:pt-0 ml-1">
            <div className="iconHolderflex h-[20vmin] w-[16vmin] lg:h-[15vmin] lg:w-[18vmin] justify-center items-center">
              <img
                src="./CMLogo.png"
                className="max-w-full max-h-full object-contain mt-3 ml-[1.45px]"
              ></img>
            </div>
            <div className="flex font-semibold items-center textHolder h-[12vmin] w-[51vw] md:w-[67vw] lg:h-[10vmin] lg:w-full mt-4 lg:mt-4 ml-4 2xl:mt-5">
              <p className=" text-[5vmin] md:text-[4vmin] 2xl:text-[3.75vmin] ml-1 font-poppins mt-[1vmin] font-bold">
                Code
                <span className="md:text-[4vmin] 2xl:text-[3.75vmin] text-btnColor font-bold">
                  Map
                </span>
              </p>
            </div>
          </div>
          <div className="holderNavIcon hidden lg:block">
            {(screen.width <= 1280 && screen.height >= 800 && (
              <div className="navIconHolder w-[56vw] 2xl:w-[69vw] 2xl:text-[2.45vmin] h-[15vmin] flex justify-center items-center gap-x-4 2xl:gap-x-5">
                <p>
                  <a href="#about">About</a>
                </p>
                <p>
                  <a href="/">Vision</a>
                </p>
                <p
                  onClick={() => {
                    navigate("/InternLogin");
                  }}
                >
                  Intern-HRMS
                </p>

                <p>
                  <a href="#Testinomials">Team</a>
                </p>
                <p>
                  <a href="/">Events</a>
                </p>
                <p
                  onClick={() => {
                    navigate("/career");
                  }}
                >
                  Careers
                </p>

                <p>
                  <a href="/">Vision</a>
                </p>
              </div>
            )) || (
              <div className="navIconHolder w-[56vw] 2xl:w-[69vw] 2xl:text-[2.15vmin] h-[15vmin] flex justify-center items-center gap-x-4 2xl:gap-x-8">
                <p>
                  <a href="#about">About</a>
                </p>
                <p>
                  <a href="/">Vision</a>
                </p>
                <p
                  onClick={() => {
                    navigate("/InternLogin");
                  }}
                >
                  Intern-HRMS
                </p>

                <p>
                  <a href="#Testinomials">Team</a>
                </p>
                <p>
                  <a href="/">Events</a>
                </p>
                <p
                  onClick={() => {
                    navigate("/career");
                  }}
                >
                  Careers
                </p>

                <p>
                  <a href="/">Vision</a>
                </p>
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <div className="buttonHolder h-[23vmin] lg:h-[15vmin]  flex items-center justify-center">
              <button className="w-[25vmin] 2xl:w-full   bg-btnColor p-3 rounded-lg text-lg text-white 2xl:text-[2.45vmin] 2xl:p-4">
                LMS Platform
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
            <p>
              <a href="#about">About</a>
            </p>
            <p
              onClick={() => {
                navigate("/InternLogin");
              }}
            >
              Intern-HRMS
            </p>

            <p>
              <a href="#Testinomials">Team</a>
            </p>

            <p>
              <a href="/">Events</a>
            </p>
            <p
              onClick={() => {
                navigate("/career");
              }}
            >
              Careers
            </p>

            <p>
              <a href="/">Vision</a>
            </p>
          </ul>

          <div className="line w-[94vw]  h-[10px] border-lightGrey border-t-2 mt-2 lg:mt-0"></div>
        </div>
      )}
    </>
  );
};
export default NavbarGeneral;
