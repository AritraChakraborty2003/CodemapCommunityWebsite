/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Rating } from "react-simple-star-rating";

const TestinomialBox = (props) => {
  return (
    <>
      <div className="Holderarea bg-white flex rounded-lg  pr-1 flex-col gap-y-7 items-center w-[96vw] md:w-[85vw] pl-2 lg:pl-0  h-[125vmin] md:h-[91vmin] mt-4 lg:w-[95vmin] lg:h-[55vmin] border-lightGrey border-[1px]  pb-5">
        {(screen.width <= 1000 && (
          <>
            <div className="mt-3 ImageHolderBox h-[25vmin] w-[25vmin]">
              <img
                src="./uicon.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <div className="detailsArea font-poppins">
              <p className="text-[4.45vmin] md:text-[3.95vmin] font-medium ml-2">
                <span className="text-btnColor">Name:</span> {props.data.name}
              </p>
              <p className="text-[4.45vmin] md:text-[3.95vmin] font-medium mt-1 ml-2">
                {" "}
                <span className="text-btnColor">Org:</span> {props.data.org}
              </p>
              {screen.width < 800 && (
                <Rating
                  readonly
                  SVGstyle={{
                    display: "inline",
                    height: "37px",
                    width: "30px",
                    marginTop: "1.25vmin",
                    marginLeft: "1vmin",
                  }}
                  initialValue={props.data.rating}
                />
              )}
              {screen.width >= 800 && (
                <Rating
                  readonly
                  SVGstyle={{
                    display: "inline",
                    height: "50px",
                    width: "50px",
                    marginTop: "2vmin",
                    marginLeft: "1vmin",
                  }}
                  initialValue={props.data.rating}
                />
              )}
              <div className="line w-[98%] md:w-[70vw] h-[1px] border-t-2 md:mt-2 "></div>
            </div>

            <div className="commentArea w-[100%] flex justify-center items-center ml-1">
              <p className="text-[4.8vmin] md:text-[4vmin] ml-1 mt-[-0.5vmin] font-poppins">
                "{props.data.comment}"
              </p>
            </div>
          </>
        )) || (
          <div className="boxHolder flex flex-col">
            <div className="row1  h-[25vmin] w-[94vmin] ml-1 flex gap-y-2 gap-x-3 justify-center items-center">
              <div className="imageHolder h-[18vmin] w-[18vmin] ml-1">
                <img
                  src="./uicon.png"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>
              <div className="textHolder h-[20vmin] w-[73vmin]  flex flex-col justify-center pl-2">
                <p className="text-[3.25vmin]">
                  <b>Name:</b> {props.data.name}
                </p>
                <p className="text-[3.25vmin]">
                  <b>Org:</b> {props.data.org}
                </p>
                <p className="text-[3.25vmin]">
                  {(screen.width < 1600 && (
                    <Rating
                      readonly
                      SVGstyle={{
                        display: "inline",
                        height: "36px",
                        width: "36px",
                        marginTop: "1.25vmin",
                        marginLeft: "0.5vmin",
                      }}
                      initialValue={props.data.rating}
                    />
                  )) || (
                    <Rating
                      readonly
                      SVGstyle={{
                        display: "inline",
                        height: "52px",
                        width: "52px",
                        marginTop: "1.25vmin",
                        marginLeft: "0.5vmin",
                      }}
                      initialValue={props.data.rating}
                    />
                  )}
                </p>
              </div>
            </div>
            <div className="row2 border-t-2 h-[30vmin] w-[91vmin] ml-1 flex justify-center ">
              <p className="text-[3.8vmin] lg:text-[3.25vmin] 2xl:text-[2.85vmin] mt-[5vmin]  text-center tracking-[1.35px]">
                " {props.data.comment} "
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default TestinomialBox;
