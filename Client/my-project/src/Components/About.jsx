const About = () => {
  return (
    <>
      <div className="aboutHolder  w-[100vw]">
        <h1 className="mt-6 2xl:mt-10 ml-6 font-poppins font-bold text-[12vmin]">
          About-<span className="text-btnColor">us</span>
        </h1>
        <div className="about-area flex ml-3 flex-wrap-reverse">
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
                <div className="text-area w-[110vmin] border-2 h-[80vh]"></div>
                <div className="photo-area w-[100vmin] border-2 h-[80vh]"></div>
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
