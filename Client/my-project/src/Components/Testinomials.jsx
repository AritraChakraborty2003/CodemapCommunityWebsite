import TestinomialBox from "./TestinomialBox";

const Testinomials = () => {
  return (
    <>
      <div className="testinomialHolder w-[100vw] h-[100vh] bg-bgColor">
        <p className="text-[13vmin] font-bold ml-3">Testinomials</p>
        <p className="text-btnColor font-bold ml-5 text-[3.75vmin]">
          //Our Testinomials
        </p>
        <div className="testBoxArea h-[70vh] flex justify-center items-center">
          <div className="testBoxHolder flex items-center gap-x-5">
            <div className="leftArrowHolder w-[10vmin] h-[10vmin] rounded-[5vmin] bg-btnColor flex justify-center items-center">
              <img
                src="./left.png"
                alt=""
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <TestinomialBox />

            <div className="rightArrowHolder w-[10vmin] h-[10vmin] rounded-[5vmin] bg-btnColor flex justify-center items-center">
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
