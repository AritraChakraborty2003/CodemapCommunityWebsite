import { useState } from "react";
import Banner from "./Banner";
import About from "./About";
import "./overflow.css";
import SupportProvided from "./SupportProvided";
import Footer from "./Footer";
import Collab from "./Collab";
import Contact from "./Contact";
import UpcommingEvents from "./UpcommingEvents";
import Testinomials from "./Testinomials";
import OurReach from "./OurReach";
import { useNavigate } from "react-router-dom";
// import SecondComponent from "./SecondReachComponent";
const Navbar = () => {
  const [displayNavHam, setdisplayNavHam] = useState(false);
  const showNavHam = () => {
    if (displayNavHam === false) setdisplayNavHam(true);
    else setdisplayNavHam(false);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="holderNav bg-bgColor pb-2">
        <div className="navBarBox w-[100vw] bg-bgColor flex ">
          <div className="logoHolder lg:h-[15vmin]  flex pt-2 lg:pt-0 ml-2">
            <div className="iconHolder flex h-[20vmin] w-[15vmin] lg:h-[15vmin] lg:w-[15vmin] justify-center items-center ">
              <img
                src="./CMLogo.png"
                className="max-w-full max-h-full object-contain"
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
              <div className="navIconHolder w-[65vw] 2xl:w-[64vw] 2xl:text-[2.15vmin] h-[15vmin] flex justify-center items-center gap-x-6 2xl:gap-x-8">
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
                  <a href="/">Events</a>
                </p>

                <p>
                  <a href="#Testinomials">Team</a>
                </p>
                <p
                  onClick={() => {
                    navigate("/career");
                  }}
                >
                  Careers
                </p>
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <div className="buttonHolder h-[23vmin] lg:h-[15vmin]  flex items-center justify-start">
              <button
                onClick={() => {
                  navigate("/buildProgress", {
                    state: {
                      data: {
                        image: "./progress.webp",
                        text: "LMS will be open soon...",
                      },
                    },
                  });
                }}
                className="w-[24vmin] 2xl:w-[19vmin]  bg-btnColor p-3 rounded-lg text-lg text-white 2xl:text-[2.45vmin] 2xl:p-4"
              >
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
          <ul className="space-y-[3vmin] text-[4vmin] md:text-[3vmin]">
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

      <div id="banner">
        <Banner />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="support">
        <SupportProvided />
      </div>

      <div id="Our-Reach">
        <OurReach />
      </div>

      <div id="Testinomials">
        <Testinomials />
      </div>

      <div id="uEvents">
        <UpcommingEvents />
      </div>
      <div id="collab">
        <Collab />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};
export default Navbar;
