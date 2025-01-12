/* eslint-disable react/jsx-no-comment-textnodes */
const About = () => {
  return (
    <>
      <div className="aboutContainer pt-6 pb-4 lg:pb-6">
        <div className="heading text-[9vmin] font-extrabold ">
          <p className="ml-3">
            About <span className="text-btnColor">Us</span>
          </p>
        </div>
        <div className="aboutContainer  flex flex-wrap-reverse justify-center items-center gap-x-2 mt-2">
          <div className="leftHolder w-[94vw] lg:w-[50vw] pb-5 mt-4">
            <div className="text-area ml-1  flex flex-col gap-y-1 lg:gap-y-5">
              <div className="font-poppins">
                <p className="mt-2 lg:ml-1 text-[3.65vmin] lg:text-[2.35vmin] font-bold text-btnColor">
                  //About our Community Platform
                </p>
                <p className="lg:ml-1 text-[3.56vmin] font-extrabold mt-3 lg:mt-6">
                  An Ultimate Technical Community For
                </p>
                <p className="lg:ml-1 text-[3.56vmin] font-extrabold">
                  Your Career Growth
                </p>
              </div>

              <div className="lg:ml-2 holder w-[94%] text-[3.65vmin]  md:text-[2.65vmin] text-bannerGrey leading-[6vmin] md:leading-[5.45vmin] lg:leading-[4.85vmin] flex flex-col justify-center items-center">
                The Codemap community is an ultimate coding community for all
                tech enthusiasts who want to pursue a promising career in the
                contemporary technical industry we have strong vision to help
                students grow and learn new skills with more networking
                oppurtunies by the community.We focus mainly on:
                <ul>
                  <li>1. Technical Bootcamps and Blogs</li>
                  <li>
                    2. Community Support in solving technical problems
                  </li>{" "}
                  <li>3. Certifications on the topics mastered</li>
                  <li>4. Internship oppurtunites to top performing students</li>
                  <li>
                    5. We charge absolutely 0 for all the features as we have
                    the moto to create a skilled and abled technical community
                    for India
                  </li>
                  <li>
                    6. Organizing technical events and sessions online and
                    offline in regular time intervals
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rightHolder  w-[96vw] md:w-[90vw] lg:w-[47vw] ">
            <div className="imageHolder W-[96%] lg:h-[64vh] ">
              <img
                src="./t1.png"
                className="max-h-full max-w-full object-contain"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
