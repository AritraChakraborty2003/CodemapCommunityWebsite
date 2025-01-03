import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      {(screen.width <= 320 && (
        <div className="h-[100vh] w-[100vw] pb-5 overflow-x-hidden bg-bgColor flex justify-center items-center flex-col gap-y-4">
          <div className="mt-[-5vmin] lg:mt-0 flex gap-x-2 items-center h-[20vmin]  md:h-[25vmin] lg:h-[10vmin]  lg:ml-0">
            <p className="text-center mt-[-2vmin] text-[4.3vmin] md:text-[3.3vmin] lg:text-[4vmin] lg:font-medium font-poppins md:pl-2 md:pr-2">
              Your own Technical Community to develop and nurture your skills
            </p>
          </div>
          <p className="text-center text-[15vmin] md:text-[12.4vmin] mt-[-4vmin] lg:mt-[-1vmin] font-bold font-poppins pb-2">
            CodeMap <span className="text-btnColor">Community</span>
          </p>
          <p className="text-[4.25vmin] md:text-[3.75vmin] lg:text-[4vmin]  font-poppins mt-[-2.5vmin]">
            ( Where Ideas Transform Into Innovation )
          </p>

          <div className="flex gap-x-2 items-center h-[10vmin]">
            <p className="lg:ml-[0.45vmin] text-[4.1vmin] md:text-[3.85vmin] lg:text-[3.65vmin] font-poppins text-bannerGrey mt-[3vmin]">
              Learn - Participate - Innovate - Grow - Impact
            </p>
          </div>

          <div className="hidden lg:block buttonHolder">
            <div className="buttonHolder h-[23vmin] lg:h-[15vmin]  flex items-center justify-center">
              <button className="text-[4.65vmin] lg:text-[3vmin] font-poppins 2xl:w-full bg-btnColor p-2 pl-3 pr-3 lg:p-3 lg:pr-4 lg:pl-4 rounded-lg text-white mt-[-3vmin] md:mt-0">
                Become Campus Lead
              </button>
            </div>
          </div>
        </div>
      )) || (
        <div className="h-[85vh] w-[100vw] pb-5 overflow-x-hidden bg-bgColor flex justify-center items-center flex-col gap-y-4">
          <div className="mt-[-5vmin] lg:mt-[-3.5vmin] flex gap-x-2 items-center h-[20vmin]  md:h-[25vmin] lg:h-[10vmin]  lg:ml-0">
            <p className="text-center mt-[-2vmin] text-[4.15vmin] md:text-[3.65vmin] lg:text-[3.45vmin] lg:font-normal font-poppins pl-3 pr-3 md:pl-2 md:pr-2">
              Your own Technical Community where ideas turn into innovation
            </p>
          </div>
          <p className="text-center text-[15vmin] md:text-[12.4vmin] mt-[-4vmin] lg:mt-[-1vmin] font-bold font-poppins pb-2">
            CodeMap <span className="text-btnColor">Community</span>
          </p>
          <p className="text-[4.25vmin] md:text-[3.75vmin] lg:text-[3vmin]  font-poppins mt-[-2.5vmin]">
            ( Where Ideas Transform Into Innovation )
          </p>

          <div className="flex gap-x-2 items-center h-[10vmin]">
            <p className="lg:ml-[0.45vmin] text-[3.75vmin] md:text-[3.85vmin] lg:text-[3.35vmin] font-poppins text-bannerGrey mt-[3vmin]">
              Learn - Participate - Innovate - Grow - Impact
            </p>
          </div>

          <div className="hidden lg:block buttonHolder">
            <div className="buttonHolder h-[23vmin] lg:h-[15vmin]  flex items-center justify-center">
              <button
                onClick={() => {
                  navigate("/buildProgress", {
                    state: {
                      data: {
                        image: "./c1.png",
                        text: "Campus Lead applications for next round comming soon",
                      },
                    },
                  });
                }}
                className="text-[4.65vmin] lg:text-[3vmin] font-poppins 2xl:w-full bg-btnColor p-2 pl-3 pr-3 lg:p-3 lg:pr-4 lg:pl-4 rounded-lg text-white mt-[-3vmin] md:mt-0"
              >
                Become Campus Lead
              </button>
            </div>
          </div>

          <div className="block lg:hidden buttonHolder">
            <div className="buttonHolder h-[23vmin] lg:h-[15vmin]  flex items-center justify-center">
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
                className="text-[4.5vmin] md:text-[3.75vmin] lg:text-[3vmin] font-poppins 2xl:w-[20vmin] bg-btnColor p-2 pl-3 pr-3 lg:p-3 lg:pr-4 lg:pl-4 rounded-lg text-white mt-[-3vmin] md:mt-0"
              >
                LMS Solution
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Banner;
