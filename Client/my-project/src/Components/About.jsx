const About = () => {
  return (
    <>
      <div className="aboutHolder  w-[100vw] pb-6 md:pb-9 lg:pb-2">
        <h1 className="mt-8 2xl:mt-12 ml-2 pt-6 lg:ml-7 font-poppins font-bold text-[12vmin] 2xl:text-[10vmin]">
          About-<span className="text-btnColor">us</span>
        </h1>
        <div className=" about-area flex justify-center items-center flex-wrap-reverse ml-[-2vmin]">
          {(screen.width <= 900 && (
            <>
              <div className="text-area w-[95vw]  pb-6 pt-3">
                <div className="font-poppins">
                  <p className="ml-3 text-[3.5vmin] font-bold text-btnColor">
                    //About our Community Platform
                  </p>
                  <p className="ml-3 text-[4vmin] font-extrabold mt-1">
                    An Ultimate Technical Community For
                  </p>
                  <p className="ml-3 text-[4.56vmin] font-extrabold">
                    Your Career Growth
                  </p>
                </div>

                <div className=" text-[4.5vmin] md:text-[3.56vmin] ml-2 holder w-[90vw]  text-bannerGrey">
                  The Codemap community is an ultimate coding community for all
                  tech enthusiasts who want to pursue a promising career in the
                  contemporary technical industry we have strong vision to help
                  students grow and learn new skills with more networking
                  oppurtunies by the community.We focus mainly on:
                  <ul className="text-[4.5vmin] md:text-[3.56vmin]">
                    <li>1. Technical Bootcamps and Blogs</li>
                    <li>
                      2. Community Support in solving technical problems
                    </li>{" "}
                    <li>3. Certifications on the topics mastered</li>
                    <li>
                      4. Internship oppurtunites to top performing students
                    </li>
                    <li>
                      5. We charge absolutely 0 for all the features as we have
                      the moto to create a skilled and abled technical community
                      for India
                    </li>
                    <li>
                      6. Organizing technical events and sessions online and
                      offline in regular time intervals
                    </li>
                    <li>
                      <div className="flex ml-[1vmin] mt-[4vmin]">
                        <div className="w-[5vmin] h-[5vmin]">
                          <img src="./rightarrow.png"></img>
                        </div>
                        <p className="text-lightBlue font-medium text-md">
                          &nbsp;LEARN MORE ABOUT OUR TEAM
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="photo-area w-[95vw] flex justify-center item-center ">
                <div className="area w-[75vmin]  mt-1 ml-2 flex flex-start items-center">
                  <img
                    src="./team.avif"
                    className="max-h-full max-w-full object-contain"
                  ></img>
                </div>
              </div>
            </>
          )) ||
            (screen.width > 900 &&
              screen.width <= 1280 &&
              screen.height >= 780 && (
                <>
                  <div className="text-area w-[81vmin]  h-[80vh]">
                    <div className="font-poppins">
                      <p className="ml-3 text-[2.5vmin] font-bold text-btnColor">
                        //About our Community Platform
                      </p>
                      <p className="ml-3 text-[4vmin] font-extrabold mt-1">
                        An Ultimate Technical Community For
                      </p>
                      <p className="ml-3 text-[4vmin] font-extrabold">
                        Your Career Growth
                      </p>
                    </div>

                    <div className=" text-[2.55vmin] ml-2 holder w-[80vmin]  text-bannerGrey">
                      The Codemap community is an ultimate coding community for
                      all tech enthusiasts who want to pursue a promising career
                      in the contemporary technical industry we have strong
                      vision to help students grow and learn new skills with
                      more networking oppurtunies by the community.We focus
                      mainly on:
                      <ul className="text-[2.55vmin]">
                        <li>1. Technical Bootcamps and Blogs</li>
                        <li>
                          2. Community Support in solving technical problems
                        </li>{" "}
                        <li>3. Certifications on the topics mastered</li>
                        <li>
                          4. Internship oppurtunites to top performing students
                        </li>
                        <li>
                          5. We charge absolutely 0 for all the features as we
                          have the moto to create a skilled and abled technical
                          community for India
                        </li>
                        <li>
                          6. Organizing technical events and sessions online and
                          offline in regular time intervals
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="photo-area w-[75vmin] h-[80vh]">
                    <div className="area w-[70vmin] h-[60vh] mt-10 ml-6 flex flex-start items-center">
                      <img
                        src="./team.avif"
                        className="max-h-full max-w-full object-contain"
                      ></img>
                    </div>
                    <div className="w-[70vmin] flex ml-[4vmin]">
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
            (screen.width >= 1280 && screen.width < 1400 && (
              <>
                <div className="text-area w-[110vmin]  h-[85vh]">
                  <div className="font-poppins">
                    <p className="ml-8 text-[2.5vmin] font-bold text-btnColor">
                      //About our Community Platform
                    </p>
                    <p className="ml-8 text-[4.56vmin] font-extrabold mt-1">
                      An Ultimate Technical Community For
                    </p>
                    <p className="ml-8 text-[4.56vmin] font-extrabold">
                      Your Career Growth
                    </p>
                  </div>

                  <div className="ml-8 holder w-[90vmin]  text-bannerGrey">
                    The Codemap community is an ultimate coding community for
                    all tech enthusiasts who want to pursue a promising career
                    in the contemporary technical industry we have strong vision
                    to help students grow and learn new skills with more
                    networking oppurtunies by the community.We focus mainly on:
                    <ul>
                      <li>1. Technical Bootcamps and Blogs</li>
                      <li>
                        2. Community Support in solving technical problems
                      </li>{" "}
                      <li>3. Certifications on the topics mastered</li>
                      <li>
                        4. Internship oppurtunites to top performing students
                      </li>
                      <li>
                        5. We charge absolutely 0 for all the features as we
                        have the moto to create a skilled and abled technical
                        community for India
                      </li>
                      <li>
                        6. Organizing technical events and sessions online and
                        offline in regular time intervals
                      </li>
                    </ul>
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
                <div className="text-area w-[90vmin]  h-[80vh]">
                  <div className="font-poppins">
                    <p className="ml-8 text-[2.5vmin] font-bold text-btnColor">
                      //About our Community Platform
                    </p>
                    <p className="ml-8 text-[3.56vmin] font-extrabold mt-1">
                      An Ultimate Technical Community For
                    </p>
                    <p className="ml-8 text-[3.56vmin] font-extrabold">
                      Your Career Growth
                    </p>
                  </div>

                  <div className="ml-8 holder w-[85vmin] text-[2.65vmin] text-bannerGrey">
                    The Codemap community is an ultimate coding community for
                    all tech enthusiasts who want to pursue a promising career
                    in the contemporary technical industry we have strong vision
                    to help students grow and learn new skills with more
                    networking oppurtunies by the community.We focus mainly on:
                    <ul>
                      <li>1. Technical Bootcamps and Blogs</li>
                      <li>
                        2. Community Support in solving technical problems
                      </li>{" "}
                      <li>3. Certifications on the topics mastered</li>
                      <li>
                        4. Internship oppurtunites to top performing students
                      </li>
                      <li>
                        5. We charge absolutely 0 for all the features as we
                        have the moto to create a skilled and abled technical
                        community for India
                      </li>
                      <li>
                        6. Organizing technical events and sessions online and
                        offline in regular time intervals
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="photo-area w-[90vmin] h-[70vh] ml-3">
                  <div className="area w-[88vmin] h-[50vh] mt-5 ml-3 flex flex-start items-center">
                    <img
                      src="./t1.png"
                      className="max-h-full max-w-full object-contain"
                    ></img>
                  </div>
                  <div className="w-[90vmin] flex ml-[4vmin] mt-[3vmin]">
                    <div className="w-[5vmin] h-[5vmin]">
                      <img src="./rightarrow.png"></img>
                    </div>
                    <p className="text-lightBlue font-medium text-xl mt-2">
                      &nbsp;LEARN MORE ABOUT OUR TEAM
                    </p>
                  </div>
                </div>
              </>
            )) ||
            (screen.width >= 2048 && (
              <>
                <div className="text-area w-[83vmin] h-[80vh]">
                  <div className="font-poppins">
                    <p className="ml-8 text-[2.5vmin] font-bold text-btnColor">
                      //About our Community Platform
                    </p>
                    <p className="ml-8 text-[3.75vmin] font-extrabold mt-1">
                      An Ultimate Technical Community For
                    </p>
                    <p className="ml-8 text-[3.75vmin] font-extrabold">
                      Your Career Growth
                    </p>
                  </div>

                  <div className="ml-8 holder w-[79vmin] text-[2.7vmin]  text-bannerGrey">
                    The Codemap community is an ultimate coding community for
                    all tech enthusiasts who want to pursue a promising career
                    in the contemporary technical industry we have strong vision
                    to help students grow and learn new skills with more
                    networking oppurtunies by the community.We focus mainly on:
                    <ul>
                      <li>1. Technical Bootcamps and Blogs</li>
                      <li>
                        2. Community Support in solving technical problems
                      </li>{" "}
                      <li>3. Certifications on the topics mastered</li>
                      <li>
                        4. Internship oppurtunites to top performing students
                      </li>
                      <li>
                        5. We charge absolutely 0 for all the features as we
                        have the moto to create a skilled and abled technical
                        community for India
                      </li>
                      <li>
                        6. Organizing technical events and sessions online and
                        offline in regular time intervals
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col justify-center photo-area w-[87vmin]   h-[80vh]">
                  <div className="area w-[84vmin] h-[50vh] mt-1 ml-3 flex flex-start items-center">
                    <img
                      src="./t1.png"
                      className="max-h-full max-w-full object-contain"
                    ></img>
                  </div>
                  <div className="w-[110vmin] flex ml-3 mt-[3vmin]">
                    <div className="w-[5vmin] h-[5vmin]">
                      <img src="./rightarrow.png"></img>
                    </div>
                    <p className="text-lightBlue font-medium text-xl mt-2">
                      &nbsp;LEARN MORE ABOUT OUR TEAM
                    </p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
export default About;
