import { useState } from "react";
import TestinomialBox from "./TestinomialBox";

const Testinomials = () => {
  const [index, setindex] = useState(0);
  const testinomialObj = [
    {
      name: "Prashant Diwivedi",
      org: "Allenhouse Business School",
      rating: 5,
      comment:
        "Its a very engaging and amazing community platform.Fantastic application experience",
    },
    {
      name: "Deo Narayan Singh",
      org: "Uday Pratap college",
      rating: 5,
      comment:
        "Really wonderful and nice experience.Very nice and smooth application experience",
    },
    {
      name: "Chandrapal Singh",
      org: "IIMT Engineering College,Meerut",
      rating: 4,
      comment:
        "Good application and nice event experience for the IIC Mentor-Mentee Event",
    },
  ];
  return (
    <>
      <div className="testinomialHolder w-[100vw]  space-y-6 lg:space-y-0  pb-10 lg:pb-5 lg:h-[100vh] bg-bgColor">
        <div>
          <p className="text-[13vmin] font-bold ml-3">
            Testino
            <span className="text-btnColor">mials</span>
          </p>
          <p className="text-btnColor font-bold ml-5 text-[4.25vmin] lg:text-[3.75vmin]">
            //Our Testinomials
          </p>
        </div>
        <div className="testBoxArea pb-2 pt-2 lg:h-[70vh] ml-2 flex justify-center items-center">
          <div className="testBoxHolder flex items-center gap-x-4">
            <div
              className="leftArrowHolder p-1 w-[11vmin] h-[12vmin] lg:w-[10vmin] lg:h-[10vmin] rounded-[5vmin]  flex justify-center items-center"
              onClick={() => {
                if (index <= 0) {
                  setindex(0);
                } else {
                  setindex(index - 1);
                }
              }}
            >
              <img
                src="./licon.png"
                alt=""
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <TestinomialBox data={testinomialObj[index]} />

            <div
              className="rightArrowHolder mr-2 p-1  w-[11vmin] h-[12vmin] lg:w-[10vmin] lg:h-[10vmin] rounded-[5vmin]  flex justify-center items-center"
              onClick={() => {
                if (index >= 2) {
                  setindex(2);
                } else {
                  setindex(index + 1);
                }
              }}
            >
              <img
                src="./ricon.png"
                alt=""
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testinomials;
