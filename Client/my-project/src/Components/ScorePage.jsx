/* eslint-disable no-undef */
import { NavbarCMS } from "./NavbarCMS";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
// import axios from "axios";

const Scorepage = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  return (
    <>
      <NavbarCMS type="Interns"></NavbarCMS>
      <div className="main w-full flex flex-col items-center pb-8">
        <div className="main w-full h-[40vmin] flex flex-col justify-center items-center">
          <p className="text-[10vmin] font-bold">
            Hey <span className="text-btnColor">{location.state.name},</span>
          </p>
          {(parseInt(localStorage.getItem("score")) >= 80 && (
            <p className="text-[4vmin] font-medium">
              Very Good,&nbsp;Your Score is:&nbsp;
              {parseInt(localStorage.getItem("score"))}/100
            </p>
          )) ||
            (parseInt(localStorage.getItem("score")) > 50 &&
              parseInt(localStorage.getItem("score")) < 80 && (
                <p className="text-[4vmin] font-medium">
                  Good,&nbsp;Your Score is:&nbsp;
                  {parseInt(localStorage.getItem("score"))}/100
                </p>
              )) || (
              <p className="text-[4vmin] font-medium">
                OOps,&nbsp;Your Score is:&nbsp;
                {parseInt(localStorage.getItem("score"))}/100
              </p>
            )}
        </div>

        {(parseInt(localStorage.getItem("score")) >= 80 && (
          <img
            src="./happyicon.png"
            height={120}
            width={120}
            className="mt-[-3vmin]"
          ></img>
        )) ||
          (parseInt(localStorage.getItem("score")) > 50 &&
            parseInt(localStorage.getItem("score")) < 80 && (
              <img
                src="./neutralicon.png"
                height={120}
                width={120}
                className="mt-[-3vmin]"
              ></img>
            )) || (
            <p className="text-[4vmin] font-medium">
              <img
                src="./sadicon.png"
                height={120}
                width={120}
                className="mt-[1vmin]"
              ></img>
            </p>
          )}

        <button
          className="bg-btnColor text-white p-2 mt-5"
          onClick={updateData}
        >
          Submit Test !!!
        </button>
      </div>
      <Footer />
    </>
  );
};
export default Scorepage;
