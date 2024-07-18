const About = () => {
  return (
    <>
      <div className="aboutHolder  w-[100vw]">
        <h1 className="mt-8 2xl:mt-10 ml-6 font-poppins font-bold text-[12vmin]">
          About-<span className="text-btnColor">us</span>
        </h1>
        <div className="about-area flex justify-center items-center flex-wrap-reverse ml-[-2vmin]">
          {(screen.width <= 900 && (
            <>
              <div className="text-area w-[95vw] border-2 h-[50vh]"></div>
              <div className="photo-area w-[95vw] border-2 h-[50vh]"></div>
            </>
          )) ||
            (screen.width > 900 &&
              screen.width <= 1280 &&
              screen.height >= 780 && (
                <>
                  <div className="text-area w-[81vmin] border-2 h-[80vh]"></div>
                  <div className="photo-area w-[75vmin] border-2 h-[80vh]"></div>
                </>
              )) ||
            (screen.width >= 1280 && screen.width < 1400 && (
              <>
                <div className="text-area w-[110vmin]  h-[80vh]">
                  <div className="font-poppins">
                    <p className="ml-3 text-[2.5vmin] font-bold text-btnColor">
                      //About our Community Platform
                    </p>
                    <p className="ml-3 text-[4.56vmin] font-extrabold mt-1">
                      An Ultimate Technical Community For
                    </p>
                    <p className="ml-3 text-[4.56vmin] font-extrabold">
                      Your Career Growth
                    </p>
                  </div>

                  <div className="holder w-[100vmin] h-[30vmin] border-2 text-bannerGrey">
                    This is about area
                  </div>
                </div>
                <div className="photo-area w-[100vmin]  h-[80vh]">
                  <div className="area w-[80vmin] h-[60vh] mt-1 ml-1 flex flex-start items-center">
                    <img
                      src="./team.avif"
                      className="max-h-full max-w-full object-contain"
                    ></img>
                  </div>
                  <div className="w-[110vmin] flex ml-[7vmin] mt-[3vmin]">
                    <div className="w-[5vmin] h-[5vmin]">
                      <img src="./rightarrow.png"></img>
                    </div>
                    <p className="text-lightBlue font-medium text-md">
                      &nbsp;LEARN MORE ABOUT OUR TEAM
                    </p>
                  </div>
                </div>
              </>
            )) ||
            (screen.width >= 1400 && screen.width <= 2047 && (
              <>
                <div className="text-area w-[90vmin] border-2 h-[80vh]"></div>
                <div className="photo-area w-[90vmin]  border-2 h-[80vh]"></div>
              </>
            )) ||
            (screen.width >= 2048 && (
              <>
                <div className="text-area w-[87vmin] border-2 h-[80vh]"></div>
                <div className="photo-area w-[87vmin]   border-2 h-[80vh]"></div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
export default About;
