import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
const TestinomialBox = (props) => {
  return (
    <>
      <div className="boxArea bg-white flex flex-col w-[85vmin] border-[1px] pl-3 pt-[1px] rounded-lg shadow-2xl">
        <div className="row1 flex w-[85vmin] pb-1 ">
          <div className="col1">
            <div className="imgBox w-[19vmin] h-[14vmin]  mt-4 ml-2">
              <img
                src="./uicon.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
          </div>
          <div className="col2 mt-2">
            <div className="font-poppins space-y-1 detailsBox w-[85vmin]  mt-1 text-[2.45vmin]">
              <p className="text-btnColor text-[3.5vmin] md:text-[2.65vmin]">
                <b>Name:</b>
                <span className="text-black font-medium text-[3.5vmin] md:text-[2.7vmin]">
                  {" "}
                  {props.data.name}
                </span>
              </p>

              <p className="text-btnColor text-[3.5vmin] md:text-[2.65vmin]">
                <b>Designation:</b>{" "}
                <span className="text-black font-medium text-[3.5vmin] md:text-[2.7vmin]">
                  {" "}
                  {props.data.designation}{" "}
                </span>
              </p>
              {(screen.width > 1000 && (
                <Rating
                  readonly
                  SVGstyle={{
                    display: "inline",
                    height: "35px",
                    width: "30px",
                  }}
                  initialValue={props.data.rating}
                />
              )) || (
                <Rating
                  readonly
                  SVGstyle={{
                    display: "inline",
                    height: "20px",
                    width: "20px",
                  }}
                  initialValue={props.data.rating}
                />
              )}
            </div>
          </div>
        </div>
        <div className=" flex font-poppins w-[65vmin] row2 lg:w-[80vmin] h-[25vmin] lg:letter-spacing-[1px] lg:ml-1 border-black border-t-[1px] pt-4 lg:p-2 font-medium">
          <p className="mt-2 text-[3.7vmin] md:text-[3.15vmin] md:pl-2 lg:text-[2.8vmin] lg:tracking-[0.17vmin]">
            " {props.data.comment} "
          </p>
        </div>
      </div>
    </>
  );
};
export default TestinomialBox;
