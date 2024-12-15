/* eslint-disable react/jsx-no-comment-textnodes */
const About = () => {
  return (
    <>
      <div className="aboutHolder  w-[100vw] pb-6 md:pb-9 lg:pb-1 2xl:pb-3">
        <h1 className="mt-2 2xl:mt-12 ml-2 pt-2 lg:ml-3 2xl:ml-5 font-poppins font-bold text-[12vmin] lg:text-[8.95vmin] pb-3">
          About-<span className="text-btnColor">us</span>
        </h1>
        <div className=" about-area flex justify-center items-center flex-wrap-reverse ml-[-2vmin]">
          {(screen.width <= 900 && (
            <>
              <div className="text-area w-[95vw]  pb-6 pt-3">
                <div className="font-poppins">
                  <p className="ml-3 text-[3.5vmin] font-bold text-btnColor">
                    About our Community Platform
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
                  <div className="text-area w-[55vw] h-[80vh] pl-3">
                    <div className="font-poppins">
                      <p className="ml-3 text-[2.5vmin] font-bold text-btnColor">
                        //About our Community Platform
                      </p>
                      <p className="ml-3 text-[4vmin] font-extrabold mt-3">
                        An Ultimate Technical Community For
                      </p>
                      <p className="ml-3 text-[4vmin] font-extrabold">
                        Your Career Growth
                      </p>
                    </div>

                    <div className=" text-[2.55vmin] ml-2 pl-2 holder w-[80vmin]  text-bannerGrey mt-2 leading-[4vmin]">
                      The Codemap community is an ultimate coding community for
                      all tech enthusiasts who want to pursue a promising career
                      in the contemporary technical industry we have strong
                      vision to help students grow and learn new skills with
                      more networking oppurtunies by the community.We focus
                      mainly on:
                      <ul className="text-[2.55vmin] leading-[4.5vmin]">
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
                  <div className="photo-area  w-[45vw]  h-[80vh]">
                    <div className="area w-[90%] h-[60vh] mt-10 ml-6 flex flex-start items-center">
                      <img
                        src="./team.avif"
                        className="max-h-full max-w-full object-contain"
                      ></img>
                    </div>
                    <div className="w-[95%] flex ml-[4vmin]">
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
                <div className="text-area w-[50vw]   ">
                  <div className="font-poppins ">
                    <p className="ml-1 text-[2.5vmin] font-bold text-btnColor">
                      //About our Community Platform
                    </p>
                    <p className="ml-8 text-[4vmin] font-extrabold mt-1">
                      An Ultimate Technical Community For
                    </p>
                    <p className="ml-8 text-[4.56vmin] font-extrabold">
                      Your Career Growth
                    </p>
                  </div>

                  <div className="ml-1 holder w-[95%]  text-bannerGrey leading-[4.5vmin] text-[2.35vmin]">
                    The Codemap community is an ultimate coding community for
                    all tech enthusiasts who want to pursue a promising career
                    in the contemporary technical industry we have strong vision
                    to help students grow and learn new skills with more
                    networking oppurtunies by the community.We focus mainly on:
                    <ul className="leading-[4.5vmin]">
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
                <div className="photo-area w-[50vw] ">
                  <div className="area w-[90%] h-[60vh]  mt-1 ml-6 flex flex-start items-center">
                    <img
                      src="./team.avif"
                      className="max-h-full max-w-full object-contain"
                    ></img>
                  </div>
                  <div className="w-[100%] flex ml-[7vmin] mt-[3vmin]">
                    <div className="w-[5vmin] h-[5vmin]">
                      <img src="./rightarrow.png"></img>
                    </div>
                    <p className="text-lightBlue font-medium text-[2.75vmin] md:text-[2vmin]">
                      &nbsp;LEARN MORE ABOUT OUR TEAM
                    </p>
                  </div>
                </div>
              </>
            )) ||
            (screen.width >= 1400 && screen.width <= 2047 && (
              <>
                {(screen.height >= 901 && (
                  <>
                    <div className="text-area w-[50%]   h-[80vh] ml-1">
                      <div className="font-poppins">
                        <p className="ml-1 text-[2.5vmin] font-bold text-btnColor">
                          //About our Community Platform
                        </p>
                        <p className="ml-1 text-[3.56vmin] font-extrabold mt-1">
                          An Ultimate Technical Community For
                        </p>
                        <p className="ml-1 text-[3.56vmin] font-extrabold">
                          Your Career Growth
                        </p>
                      </div>

                      <div className="ml-2 holder w-[75vmin] text-[2.65vmin] text-bannerGrey">
                        The Codemap community is an ultimate coding community
                        for all tech enthusiasts who want to pursue a promising
                        career in the contemporary technical industry we have
                        strong vision to help students grow and learn new skills
                        with more networking oppurtunies by the community.We
                        focus mainly on:
                        <ul>
                          <li>1. Technical Bootcamps and Blogs</li>
                          <li>
                            2. Community Support in solving technical problems
                          </li>{" "}
                          <li>3. Certifications on the topics mastered</li>
                          <li>
                            4. Internship oppurtunites to top performing
                            students
                          </li>
                          <li>
                            5. We charge absolutely 0 for all the features as we
                            have the moto to create a skilled and abled
                            technical community for India
                          </li>
                          <li>
                            6. Organizing technical events and sessions online
                            and offline in regular time intervals
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="photo-area w-[70vmin] h-[70vh] ml-3">
                      <div className="area w-[68vmin] h-[56vh] mt-5 ml-3 flex flex-start items-center">
                        <img
                          src="./t1.png"
                          className="max-h-full max-w-full object-contain"
                        ></img>
                      </div>
                      <div className="w-[90vmin] flex ml-[4vmin] mt-[3vmin]">
                        <div className="w-[5vmin] h-[5vmin]">
                          <img src="./rightarrow.png"></img>
                        </div>
                        <p className="text-lightBlue font-medium text-[2.75vmin] md:text-[2vmin]">
                          &nbsp;LEARN MORE ABOUT OUR TEAM
                        </p>
                      </div>
                    </div>
                  </>
                )) || (
                  <>
                    <div className="text-area  w-[55%] lg:pl-4 2xl:pl-2 h-[80vh]">
                      <div className="font-poppins">
                        <p className="text-[2.5vmin] font-bold text-btnColor">
                          //About our Community Platform
                        </p>
                        <p className="ml-1 text-[3.56vmin] font-extrabold mt-1">
                          An Ultimate Technical Community For
                        </p>
                        <p className="ml-1 text-[3.56vmin] font-extrabold">
                          Your Career Growth
                        </p>
                      </div>

                      <div className="ml-1 holder w-[94%]  text-[2.65vmin] text-bannerGrey mt-5 leading-[5vmin]">
                        The Codemap community is an ultimate coding community
                        for all tech enthusiasts who want to pursue a promising
                        career in the contemporary technical industry we have
                        strong vision to help students grow and learn new skills
                        with more networking oppurtunies by the community.We
                        focus mainly on:
                        <ul className="leading-[4.45vmin]">
                          <li>1. Technical Bootcamps and Blogs</li>
                          <li>
                            2. Community Support in solving technical problems
                          </li>{" "}
                          <li>3. Certifications on the topics mastered</li>
                          <li>
                            4. Internship oppurtunites to top performing
                            students
                          </li>
                          <li>
                            5. We charge absolutely 0 for all the features as we
                            have the moto to create a skilled and abled
                            technical community for India
                          </li>
                          <li>
                            6. Organizing technical events and sessions online
                            and offline in regular time intervals
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="photo-area w-[80vmin] h-[70vh] ml-3">
                      <div className="area w-[88vmin] h-[54vh] mt-5 ml-3 flex flex-start items-center">
                        <img
                          src="./t1.png"
                          className="max-h-full max-w-full object-contain"
                        ></img>
                      </div>
                      <div className="w-[70vmin] flex ml-[4vmin] mt-[3vmin]">
                        <div className="w-[3vmin] h-[3vmin]">
                          <img src="./rightarrow.png"></img>
                        </div>
                        <p className="text-lightBlue font-medium text-[2.75vmin] md:text-[2vmin]">
                          &nbsp;LEARN MORE ABOUT OUR TEAM
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </>
            )) ||
            (screen.width >= 2048 && (
              <>
                <div className="text-area w-[55%]  h-[80vh]">
                  <div className="font-poppins pl-4">
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

                  <div className="ml-8 holder w-[90%] text-[2.7vmin]  text-bannerGrey pl-4 leading-[4.5vmin]">
                    The Codemap community is an ultimate coding community for
                    all tech enthusiasts who want to pursue a promising career
                    in the contemporary technical industry we have strong vision
                    to help students grow and learn new skills with more
                    networking oppurtunies by the community.We focus mainly on:
                    <ul className="leading-[4.5vmin]">
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
                <div className="flex flex-col justify-center photo-area w-[45%]   h-[80vh]">
                  <div className="area w-[90%] h-[50vh] mt-1 ml-3 flex flex-start items-center">
                    <img
                      src="./t1.png"
                      className="max-h-full max-w-full object-contain"
                    ></img>
                  </div>
                  <div className="w-[100%] flex ml-3 mt-[3vmin]">
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
