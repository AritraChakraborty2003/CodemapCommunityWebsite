import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
const TestinomialBox = () => {
  const [rating, setRating] = useState(4);
  return (
    <>
      <div className="boxArea bg-white flex flex-col w-[85vmin] h-[45vmin] border-[1px] pl-3 pt-[1px] rounded-lg shadow-2xl">
        <div className="row1 flex w-[85vmin] h-[20vmin]">
          <div className="col1">
            <div className="imgBox w-[19vmin] h-[14vmin]  mt-2 ml-1">
              <img
                src="./uicon.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
          </div>
          <div className="col2">
            <div className="font-poppins space-y-1 detailsBox w-[69vmin]  h-[19vmin] mt-1 text-[2.45vmin]">
              <p className="text-btnColor">
                <b>Name:</b>
                <span className="text-black font-medium tracking-[0.1vmin]">
                  {" "}
                  Akash Kumar
                </span>
              </p>
              <p className="text-btnColor">
                <b>Institute:</b>{" "}
                <span className="text-black font-medium tracking-[0.1vmin]">
                  {" "}
                  Allen Business House{" "}
                </span>
              </p>
              <p className="text-btnColor">
                <b>Designation:</b>{" "}
                <span className="text-black font-medium tracking-[0.1vmin] ">
                  {" "}
                  HOD{" "}
                </span>
              </p>

              <Rating
                readonly
                SVGstyle={{ display: "inline", height: "31px" }}
                initialValue={rating}
              />
            </div>
          </div>
        </div>
        <div className=" flex   font-poppins row2 w-[80vmin] h-[25vmin]  letter-spacing-[1px] ml-1 border-black border-t-[1px] pt-4 p-2 font-medium">
          <p className="mt-2 text-[2.8vmin] tracking-[0.17vmin]">
            " One of The best and Excellent Platform. Really engaging and
            efficient "
          </p>
        </div>
      </div>
    </>
  );
};
export default TestinomialBox;
