import { useState } from "react";
import Banner from "./Banner";
import About from "./About";
import "./overflow.css";
const Navbar = () => {
  const [displayNavHam, setdisplayNavHam] = useState(false);
  const showNavHam = () => {
    if (displayNavHam === false) setdisplayNavHam(true);
    else setdisplayNavHam(false);
  };
  return (
    <>
      <div className="holderNav bg-bgColor pb-2">
        <div className="navBarBox   md:h-[15vmin] w-[100vw] bg-bgColor flex ">
          <div className="logoHolder h-[23vmin] lg:h-[15vmin]  flex pt-2 lg:pt-0">
            <div className="iconHolder h-[17vmin] w-[17vmin] md:h-[10vmin] md:w-[10vmin] lg:h-[14vmin] lg:w-[14vmin]  mt-1 lg:mt-1 md:mt-4 ml-2 2xl:ml-4 2xl:mt-3 flex justify-center items-center pt-1">
              <img
                src="./CMLogo.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <div className="flex font-semibold items-center textHolder h-[12vmin] w-[51vw] md:w-[67vw] lg:h-[10vmin] lg:w-full mt-4 lg:mt-4 ml-2 2xl:mt-5">
              <p className=" text-[5vmin] md:text-[4vmin] 2xl:text-[3.75vmin] ml-1 font-poppins ">
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
                <p>Support</p>
                <p>Our-Reach</p>
                <p>Vision</p>
                <p>Testinomials</p>
                <p>Careers</p>
                <p>Student-Clubs</p>
                <p>Team</p>
                <p>Contact</p>
              </div>
            )) || (
              <div className="navIconHolder w-[65vw] 2xl:w-[69vw] 2xl:text-[2.45vmin] h-[15vmin] flex justify-center items-center gap-x-4 2xl:gap-x-5">
                <p>
                  <a href="#about">About-us</a>
                </p>
                <p>Support</p>
                <p>Our-Reach</p>
                <p>Vision</p>
                <p>Testinomials</p>
                <p>Careers</p>
                <p>Student-Clubs</p>
                <p>Team</p>
                <p>Contact</p>
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <div className="buttonHolder h-[23vmin] lg:h-[15vmin]  flex items-center justify-center">
              <button className="w-[30vmin] 2xl:w-[20vmin] bg-btnColor p-3 rounded-lg text-white">
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
        <div className="navHamMobile block lg:hidden w-[100vw] bg-bgColor  pl-3 pb-5 ">
          <ul className="space-y-[3vmin] text-lg md:text-[3vmin]">
            <li>About-us</li>
            <li>Support</li>
            <li>Our Reach</li>
            <li>Vision</li>
            <li>Testinomials</li>
            <li>Careers</li>
            <li>Student-Clubs</li>
            <li>Team</li>
            <li>Contact</li>
            <li>
              <button className=" 2xl:w-[20vmin] bg-btnColor p-3 rounded-lg text-white ml-[-0.5vmin]">
                LMS Solution
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
    </>
  );
};
export default Navbar;
