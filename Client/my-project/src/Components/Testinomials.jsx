/* eslint-disable react/jsx-no-comment-textnodes */
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
        "Its a very engaging and amazing community platform.Fantastic application experience.Kudos to Codemap and team",
    },
    {
      name: "Deo Narayan Singh",
      org: "Uday Pratap college",
      rating: 5,
      comment:
        "Really wonderful and nice experience.Very nice and smooth application experience for the Quiz and Registration for the Mentor Mentee Event",
    },
    {
      name: "Chandrapal Singh",
      org: "IIMT Engineering College,Meerut",
      rating: 4,
      comment:
        "Good application and nice event experience for the IIC Mentor-Mentee. Great Event Management by the Codemap Team",
    },
  ];
  return (
    <>
      <div className="testinomialHolder w-[100vw]  space-y-6 lg:space-y-0  pb-10 pt-10 lg:pb-10 bg-bgColor">
        <div>
          <p className="text-[8.95vmin] font-bold ml-3">
            Testimo
            <span className="text-btnColor">nials</span>
          </p>
          <p className="text-btnColor font-bold ml-5 text-[4.25vmin] lg:text-[3.75vmin]">
            //&nbsp;Our Testinomials
          </p>
        </div>
        <div className="testBoxArea pb-2 pt-2 lg:h-[65vh] ml-2 flex justify-center items-center">
          <div className="testBoxHolder flex items-center gap-x-4">
            <div
              className="leftArrowHolder p-1 w-[11vmin] h-[12vmin] lg:w-[10vmin] lg:h-[10vmin] rounded-[5vmin]  flex justify-center items-center"
              onClick={() => {
                if (index <= 0) {
                  setindex(0);
                } else {
                  setindex((index - 1) % 3);
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
                  setindex((index + 1) % 3);
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
