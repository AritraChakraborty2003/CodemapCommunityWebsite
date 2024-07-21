const SecondComponent = () => {
  return (
    <>
      <div className="about-area flex justify-center items-center flex-wrap ml-[-2vmin]">
        {(screen.width <= 900 && (
          <>
            <div className="photo-area w-[95vw] pb-2 md:text-[2.55vmin] pl-2">
              <p className="font-poppins">
                Our <b>Codemap Community</b> aims to provide the technical
                platform and community <b>pan India</b> which will enable the
                youth of India to nurture and grow their skills.Our platform
                focus on engaging the students of Indian colleges to explore
                various career oppurtunities around technology through impactful
                <b> events, sessions,Bootcamps</b> and many more... . We are on
                the path to upskill India and develop the overall econmical
                condition by making use of the <b>demographic diviend</b> in a
                positive way through our <b>student clubs</b>
              </p>
              <div className="box-area mt-3 flex w-[95vw]  flex  justify-center gap-x-7">
                <div className="box1">
                  <div className="w-[30vmin] pb-5 bg-bgColor flex flex-col  items-center ">
                    <p className="font-bold mt-2 text-lg md:text-xl tracking-[0.15vmin]">
                      Cities
                    </p>

                    <p className="font-bold mt-2 text-[5vmin] tracking-[0.15vmin]">
                      10+
                    </p>
                  </div>
                </div>
                <div className="box2">
                  <div className="w-[30vmin] pb-5 bg-bgColor flex flex-col  items-center">
                    <p className="font-bold mt-2 text-lg md:text-xl tracking-[0.15vmin]">
                      Students
                    </p>

                    <p className="font-bold mt-2 text-[5vmin] tracking-[0.15vmin]">
                      200+
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-area w-[95vw] h-[50vh]  pl-3 flex justify-center mt-5 md:items-center">
              <div className="imageHolder w-[93vw] h-[45vh] flex justify-center md:items-center">
                <img
                  src="./indiaMap.jpg"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>
            </div>
          </>
        )) ||
          (screen.width > 900 &&
            screen.width <= 1280 &&
            screen.height >= 780 && (
              <>
                <div className="photo-area pl-4 w-[75vmin]  h-[80vh] flex flex-col gap-y-4 justify-center items-center">
                  <p className="font-poppins text-[2.5vmin]">
                    Our <b>Codemap Community</b> aims to provide the technical
                    platform and community <b>pan India</b> which will enable
                    the youth of India to nurture and grow their skills.Our
                    platform focus on engaging the students of Indian colleges
                    to explore various career oppurtunities around technology
                    through impactful
                    <b> events, sessions,Bootcamps</b> and many more... . We are
                    on the path to upskill India and develop the overall
                    econmical condition by making use of the{" "}
                    <b>demographic diviend</b> in a positive way through our{" "}
                    <b>student clubs</b>
                  </p>
                </div>

                <div className="text-area w-[81vmin] h-[80vh]  flex justify-end items-center">
                  <div className="imageHolder w-[76vmin] h-[70vh]">
                    <img
                      src="./coders.avif"
                      className="max-w-full max-h-full object-contain"
                    ></img>
                  </div>
                </div>
              </>
            )) ||
          (screen.width >= 1280 && screen.width < 1400 && (
            <>
              <div className="photo-area w-[110vmin] pl-4  h-[75vh] flex flex-col gap-y-2 justify-center items-center">
                <p className="font-poppins">
                  Our <b>Codemap Community</b> aims to provide the technical
                  platform and community <b>pan India</b> which will enable the
                  youth of India to nurture and grow their skills.Our platform
                  focus on engaging the students of Indian colleges to explore
                  various career oppurtunities around technology through
                  impactful
                  <b> events, sessions,Bootcamps</b> and many more... . We are
                  on the path to upskill India and develop the overall econmical
                  condition by making use of the <b>demographic diviend</b> in a
                  positive way through our <b>student clubs</b>
                </p>
              </div>

              <div className="text-area w-[100vmin] pr-5 h-[75vh] flex justify-end items-center">
                <div className="imageHolder w-[83vmin] h-[67vh]">
                  <img
                    src="./coders.avif"
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>
              </div>
            </>
          )) ||
          (screen.width >= 1400 && screen.width <= 2047 && (
            <>
              <div className="photo-area w-[90vmin]  h-[80vh] flex flex-col gap-y-2 justify-center items-center">
                <p className="font-poppins text-[2.95vmin] 2xl:text-[2.75vmin] pl-3">
                  Our <b>Codemap Community</b> aims to provide the technical
                  platform and community <b>pan India</b> which will enable the
                  youth of India to nurture and grow their skills.Our platform
                  focus on engaging the students of Indian colleges to explore
                  various career oppurtunities around technology through
                  impactful
                  <b> events, sessions,Bootcamps</b> and many more... . We are
                  on the path to upskill India and develop the overall econmical
                  condition by making use of the <b>demographic diviend</b> in a
                  positive way through our <b>student clubs</b>
                </p>
                <div className="box-area mt-3 flex gap-x-7">
                  <div className="box1">
                    <div className="w-[30vmin] h-[20vmin] 2xl:h-[18vmin] bg-bgColor flex flex-col  items-center ">
                      <p className="font-bold mt-2 text-lg 2xl:text-2xl  tracking-[0.15vmin]">
                        Cities
                      </p>

                      <p className="font-bold mt-2 text-[5vmin] tracking-[0.15vmin]">
                        10+
                      </p>
                    </div>
                  </div>
                  <div className="box2">
                    <div className="w-[30vmin] h-[20vmin] 2xl:h-[18vmin] bg-bgColor flex flex-col  items-center">
                      <p className="font-bold mt-2 text-lg 2xl:text-2xl tracking-[0.15vmin]">
                        Students
                      </p>

                      <p className="font-bold mt-2 text-[5vmin] tracking-[0.15vmin]">
                        200+
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-area w-[90vmin] h-[80vh]  flex justify-end items-center">
                <div className="imageHolder w-[80vmin] h-[70vh]">
                  <img
                    src="./coders.avif"
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>
              </div>
            </>
          )) ||
          (screen.width >= 2048 && (
            <>
              <div className="photo-area w-[87vmin] h-[80vh] flex flex-col gap-y-2 justify-center items-center">
                <p className="font-poppins text-[2.95vmin] 2xl:text-[2.9vmin] pl-3">
                  Our <b>Codemap Community</b> aims to provide the technical
                  platform and community <b>pan India</b> which will enable the
                  youth of India to nurture and grow their skills.Our platform
                  focus on engaging the students of Indian colleges to explore
                  various career oppurtunities around technology through
                  impactful
                  <b> events, sessions,Bootcamps</b> and many more... . We are
                  on the path to upskill India and develop the overall econmical
                  condition by making use of the <b>demographic diviend</b> in a
                  positive way through our <b>student clubs</b>
                </p>
                <div className="box-area mt-3 flex gap-x-7">
                  <div className="box1">
                    <div className="w-[30vmin] h-[20vmin] 2xl:h-[18vmin] bg-bgColor flex flex-col  items-center ">
                      <p className="font-bold mt-2 text-lg 2xl:text-[3vmin]  tracking-[0.15vmin]">
                        Cities
                      </p>

                      <p className="font-bold mt-3 text-[5vmin] tracking-[0.15vmin]">
                        10+
                      </p>
                    </div>
                  </div>
                  <div className="box2">
                    <div className="w-[30vmin] h-[20vmin] 2xl:h-[18vmin] bg-bgColor flex flex-col  items-center">
                      <p className="font-bold mt-2 text-lg 2xl:text-[3vmin] tracking-[0.15vmin]">
                        Students
                      </p>

                      <p className="font-bold mt-3 text-[5vmin] tracking-[0.15vmin]">
                        200+
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-area w-[87vmin]  pl-10 h-[80vh]">
                <div className="imageHolder w-[83vmin] h-[75vh] mt-3">
                  <img
                    src="./coders.avif"
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>
              </div>
            </>
          ))}
      </div>
      <div className="w-[90vw] ml-2  h-[8vmin] flex justify-center items-center gap-x-4">
        <div className="ml-9 flex justify-center items-center gap-x-4 w-[10vmin]">
          <div className="dot1  h-[2vmin] w-[2vmin] rounded-[1vmin] border-[1px]"></div>
          <div className="dot2  bg-black h-[2vmin] w-[2vmin] rounded-[1vmin] border-[1px]"></div>
        </div>
      </div>
    </>
  );
};
export default SecondComponent;
