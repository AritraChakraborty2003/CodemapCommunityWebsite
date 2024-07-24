const SecondComponent = () => {
  return (
    <>
      <div className="about-area flex justify-center mt-[-5vmin]  lg:items-center flex-wrap-reverse ml-[-2vmin]">
        {(screen.width <= 900 && (
          <>
            <div className="photo-area w-[95vw] pb-2 md:text-[2.55vmin] pl-2 mt-[-5vmin] md:mt-[0vmin]">
              <p className="font-poppins  text-[5.6vmin] font-bold ">
                Our Student Clubs and Its Goals
              </p>
              <p className="font-poppins  text-[4vmin] text-banneGrey">
                Our <b>Codemap community</b> is associated with multiple student
                clubs which promote our vision and mindset to students across
                pan India.Codemap thrive to become the leading company with
                largest technical clubs spread accross India.Our company equips
                our student community in multiple domain accross wide bandwidth
                of soft and hardskills.The Top Performing student clubs of India
                are:
                <ol className="space-y-3 mt-3">
                  <li className="font-medium text-[4vmin] md:text-[3.6vmin] ">
                    1. MAIT Student Club
                  </li>
                  <li className="font-medium text-[4vmin] md:text-[3.6vmin] ">
                    2. IGDTUW Student Club
                  </li>
                  <li className="font-medium text-[4vmin] md:text-[3.6vmin] ">
                    3. KCC Student Club
                  </li>
                  <li className="font-medium text-[4vmin] md:text-[3.6vmin] ">
                    4. IIMT Student Club
                  </li>
                </ol>
              </p>
            </div>

            <div className="text-area w-[95vw]   pl-3 flex justify-center mt-7 md:items-center">
              <div className="imageHolder w-[93vw] h-[40vh] flex justify-center md:items-center">
                <img
                  src="./desk.jpg"
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
                  <p className="font-poppins  text-[5vmin] font-bold ">
                    Our Student Clubs and Its Goals
                  </p>
                  <p className="font-poppins  text-[2.75vmin] text-bannerGrey">
                    Our <b>Codemap community</b> is associated with multiple
                    student clubs which promote our vision and mindset to
                    students across pan India.Codemap thrive to become the
                    leading company with largest technical clubs spread accross
                    India.Our company equips our student community in multiple
                    domain accross wide bandwidth of soft and hardskills.The Top
                    Performing student clubs of India are:
                    <ol className="space-y-3">
                      <li className="font-medium text-[2.45vmin] ">
                        1. MAIT Student Club
                      </li>
                      <li className="font-medium text-[2.45vmin] ">
                        2. IGDTUW Student Club
                      </li>
                      <li className="font-medium text-[2.45vmin] ">
                        3. KCC Student Club
                      </li>
                      <li className="font-medium text-[2.45vmin] ">
                        4. IIMT Student Club
                      </li>
                    </ol>
                  </p>
                </div>

                <div className="text-area w-[81vmin] h-[80vh]  flex justify-end items-center mt-5">
                  <div className="imageHolder w-[76vmin] h-[70vh]">
                    <img
                      src="./desk.jpg"
                      className="max-w-full max-h-full object-contain"
                    ></img>
                  </div>
                </div>
              </>
            )) ||
          (screen.width >= 1280 && screen.width < 1400 && (
            <>
              <div className="photo-area w-[111vmin] pl-2  h-[75vh] flex flex-col gap-y-2 justify-center items-center">
                <p className="font-poppins  text-[5vmin] font-bold ml-[-2vmin]">
                  Our Student Clubs and Its Goals & Mission
                </p>
                <p className="font-poppins  text-[3.15vmin] text-bannerGrey">
                  Our <b>Codemap community</b> is associated with multiple
                  student clubs which promote our vision and mindset to students
                  across pan India.Codemap thrive to become the leading company
                  with largest technical clubs spread accross India.Our company
                  equips our student community in multiple domain accross wide
                  bandwidth of soft and hardskills.The Top Performing student
                  clubs of India are:
                  <ol className="space-y-3 mt-2">
                    <li className="font-medium text-[2.75vmin] ">
                      1. MAIT Student Club
                    </li>
                    <li className="font-medium text-[2.75vmin] ">
                      2. IGDTUW Student Club
                    </li>
                    <li className="font-medium text-[2.75vmin] ">
                      3. KCC Student Club
                    </li>
                    <li className="font-medium text-[2.75vmin] ">
                      4. IIMT Student Club
                    </li>
                  </ol>
                </p>
              </div>

              <div className="text-area w-[100vmin] pr-5 h-[75vh] flex justify-end items-center">
                <div className="imageHolder w-[88vmin] h-[70vh] mt-5 ">
                  <img
                    src="./desk.jpg"
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>
              </div>
            </>
          )) ||
          (screen.width >= 1400 && screen.width <= 2047 && (
            <>
              <div className="photo-area  w-[94vmin]  pb-2 pl-5 flex flex-col gap-y-2 justify-center items-center">
                <p className="font-poppins  text-[5.3vmin] font-bold ml-[-2vmin] mt-3">
                  Our Student Clubs and Its Goals & Mission
                </p>
                <p className="font-poppins text-[3.27vmin] text-bannerGrey">
                  Our <b>Codemap community</b> is associated with multiple
                  student clubs which promote our vision and mindset to students
                  across pan India.Codemap thrive to become the leading company
                  with largest technical clubs spread accross India.Our company
                  equips our student community in multiple domain accross wide
                  bandwidth of soft and hardskills.The Top Performing student
                  clubs of India are:
                  <ol className="space-y-3">
                    <li className="font-medium text-[3vmin] ">
                      1. MAIT Student Club
                    </li>
                    <li className="font-medium text-[3vmin] ">
                      2. IGDTUW Student Club
                    </li>
                    <li className="font-medium text-[3vmin] ">
                      3. KCC Student Club
                    </li>
                    <li className="font-medium text-[3vmin] ">
                      4. IIMT Student Club
                    </li>
                  </ol>
                </p>
              </div>

              <div className="text-area w-[80vmin]  flex justify-start items-center">
                <div className="imageHolder w-[80vmin] h-[75vh] flex justify-start items-center ml-4">
                  <img
                    src="./desk.jpg"
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>
              </div>
            </>
          )) ||
          (screen.width >= 2048 && (
            <>
              <div className="photo-area ml-2 w-[87vmin] h-[80vh] flex flex-col gap-y-2 justify-center items-center">
                <p className="font-poppins  text-[5.6vmin] font-bold">
                  Our Student Clubs and Its Goals
                </p>
                <p className="font-poppins  text-[3.25vmin]">
                  Our <b>Codemap community</b> is associated with multiple
                  student clubs which promote our vision and mindset to students
                  across pan India.Codemap thrive to become the leading company
                  with largest technical clubs spread accross India.Our company
                  equips our student community in multiple domain accross wide
                  bandwidth of soft and hardskills.The Top Performing student
                  clubs of India are:
                  <ol clasName="space-y-3">
                    <li className="font-medium text-[3vmin] ">
                      1. MAIT Student Club
                    </li>

                    <li className="font-medium text-[3vmin] ">
                      2. IGDTUW Student Club
                    </li>
                    <li className="font-medium text-[3vmin] ">
                      3. KCC Student Club
                    </li>
                    <li className="font-medium text-[3vmin] ">
                      4. IIMT Student Club
                    </li>
                  </ol>
                </p>
              </div>

              <div className="text-area w-[87vmin]  pl-10 h-[80vh]">
                <div className="imageHolder w-[83vmin] h-[75vh] mt-[5vmin]">
                  <img
                    src="./desk.jpg"
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
