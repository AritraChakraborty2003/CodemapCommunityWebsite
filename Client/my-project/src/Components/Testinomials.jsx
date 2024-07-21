import { useState } from "react";
import TestinomialBox from "./TestinomialBox";

const Testinomials = () => {
  const [index, setindex] = useState(0);
  const testinomialObj = [
    {
      name: "Abhinav Anand",
      designation: "HOD(CSE)",
      institute: "IIMT College, Meerut",
      rating: 5,
      comment: "Wonderful Platform and Excellent event management in the event",
    },
    {
      name: "Akash Kumar",
      designation: "Director",
      institute: "NIET MCA",
      rating: 4,
      comment: "Wonderful Platform and Excellent event management in the event",
    },
    {
      name: "Abhinav Khanna",
      designation: "Asst. Professor",
      institute: "Allenhouse Business School",
      rating: 3,
      comment: "Wonderful Platform and Excellent event management in the event",
    },
  ];
  return (
    <>
      <div className="testinomialHolder w-[100vw]  space-y-6 lg:space-y-0  pb-10 lg:pb-5 lg:h-[100vh] bg-bgColor">
        <p className="text-[13vmin] font-bold ml-3">Testinomials</p>
        <p className="text-btnColor font-bold ml-5 text-[3.75vmin]">
          //Our Testinomials
        </p>
        <div className="testBoxArea pb-2 pt-2 lg:h-[70vh] ml-2 flex justify-center items-center">
          <div className="testBoxHolder flex items-center gap-x-4">
            <div
              className="leftArrowHolder p-1 w-[6vmin] h-[6vmin] lg:w-[10vmin] lg:h-[10vmin] rounded-[5vmin] bg-btnColor flex justify-center items-center"
              onClick={() => {
                if (index <= 0) {
                  setindex(0);
                } else {
                  setindex(index - 1);
                }
              }}
            >
              <img
                src="./left.png"
                alt=""
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <TestinomialBox data={testinomialObj[index]} />

            <div
              className="rightArrowHolder mr-2 p-1  w-[6vmin] h-[6vmin] lg:w-[10vmin] lg:h-[10vmin] rounded-[5vmin] bg-btnColor flex justify-center items-center"
              onClick={() => {
                if (index >= 2) {
                  setindex(2);
                } else {
                  setindex(index + 1);
                }
              }}
            >
              <img
                src="./r1.png"
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
