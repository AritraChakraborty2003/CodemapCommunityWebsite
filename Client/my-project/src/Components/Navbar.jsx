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
const Navbar = () => {
  const [displayNavHam, setdisplayNavHam] = useState(false);
  const showNavHam = () => {
    if (displayNavHam === false) setdisplayNavHam(true);
    else setdisplayNavHam(false);
  };
  return (
    <>
      <div className="holderNav bg-bgColor pb-2">
        <div className="navBarBox w-[100vw] bg-bgColor flex ">
          <div className="logoHolder lg:h-[15vmin]  flex pt-2 lg:pt-0">
            <div className="iconHolder h-[15vmin] w-[17vmin] md:h-[10vmin] md:w-[10vmin] lg:h-[14vmin] lg:w-[14vmin]  mt-1 lg:mt-1 md:mt-4 ml-2 2xl:ml-4 2xl:mt-3 flex justify-center items-center pt-1">
              <img
                src="./CMLogo.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <div className="flex font-semibold items-center textHolder h-[12vmin] w-[51vw] md:w-[67vw] lg:h-[10vmin] lg:w-full mt-4 lg:mt-4 ml-2 2xl:mt-5">
              <p className=" text-[5vmin] md:text-[4vmin] 2xl:text-[3.75vmin] ml-1 font-poppins mt-[1vmin]">
                Code
                <span className="md:text-[4vmin] 2xl:text-[3.75vmin]">Map</span>
              </p>
            </div>
          </div>
          <div className="holderNavIcon hidden lg:block">
            {(screen.width <= 1280 && screen.height >= 800 && (
              <div className="navIconHolder w-[58.5vw] 2xl:w-[69vw] 2xl:text-[2.45vmin] h-[15vmin] flex justify-center items-center gap-x-4 2xl:gap-x-5">
                <p>
                  <a href="#about">About-us</a>
                </p>
                <p>
                  <a href="#support">Support</a>
                </p>
                <p>
                  <a href="#Our-Reach">Our-Reach</a>
                </p>
                <p>
                  {" "}
                  <a href="#uEvents">Events</a>
                </p>
                <p>
                  <a href="#Testinomials">Testinomials</a>
                </p>
                <p>Careers</p>
                <p>Team</p>

                <p>
                  <a href="contact">Contact</a>
                </p>
              </div>
            )) || (
              <div className="navIconHolder w-[65vw] 2xl:w-[69vw] 2xl:text-[2.45vmin] h-[15vmin] flex justify-center items-center gap-x-4 2xl:gap-x-5">
                <p>
                  <a href="#about">About-us</a>
                </p>
                <p>
                  <a href="#support">Support</a>
                </p>
                <p>
                  <a href="#Our-Reach">Our-Reach</a>
                </p>
                <p>
                  {" "}
                  <a href="#uEvents">Events</a>
                </p>
                <p>
                  <a href="#Testinomials">Testinomials</a>
                </p>
                <p>Careers</p>
                <p>Team</p>

                <p>
                  <a href="#contact">Contact</a>
                </p>
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <div className="buttonHolder h-[23vmin] lg:h-[15vmin]  flex items-center justify-center">
              <button className="w-[30vmin] 2xl:w-full   bg-btnColor p-3 rounded-lg text-lg text-white 2xl:text-[2.45vmin] 2xl:p-4">
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
            <li onClick={showNavHam}>
              <a href="#about">About-us</a>
            </li>
            <li onClick={showNavHam}>
              <a href="#support">Support</a>
            </li>
            <li onClick={showNavHam}>
              <a href="#Our-Reach">Our Reach</a>
            </li>

            <li onClick={showNavHam}>
              <a href="#Testinomials">Testinomials</a>
            </li>
            <li onClick={showNavHam}>Careers</li>

            <li onClick={showNavHam}>Team</li>
            <li onClick={showNavHam}>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button className=" 2xl:w-[20vmin] bg-btnColor p-3 rounded-lg text-white ml-[-0.5vmin]">
                Become Campus Lead
              </button>
            </li>
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
