/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <>
      <div className="bg-bgColor flex flex-col justify-center items-center  gap-y-8 container pb-5 ml-2 w-[80vw] md:w-[46vmin] 2xl:w-[50vmin] mt-2 border-[1px] rounded-2xl p-2 shadow-lg">
        <div className="bg-white p-2 border-bannerGrey border-[1px] container h-[30vmin] w-[75vw] md:w-[42vmin]  2xl:w-[48vmin]  rounded-2xl  flex justify-center items-center ">
          <img
            src={props.image}
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>
        <div>
          <p className="font-medium lg:font-medium text-[5.4vmin] md:text-[3.4vmin] lg:text-[2.45vmin] ml-2 2xl:text-[2.65vmin] font-poppins ">
            {props.details}
          </p>
        </div>
        <button className="text-[4.65vmin] md:text-[3.65vmin] w-[25vmin] 2xl:w-[24vmin] lg:text-[2.35vmin] font-poppins 2xl:w-full bg-btnColor p-3 pl-2 pr-2 lg:p-1 lg:pr-2 lg:pl-2 rounded-lg text-white mt-[-3vmin] md:mt-0">
          Explore
        </button>
      </div>
    </>
  );
};
export default Card;
