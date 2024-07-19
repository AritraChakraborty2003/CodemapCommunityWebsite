const Card = (props) => {
  return (
    <>
      <div className="bg-bgColor flex flex-col justify-center items-center  gap-y-8 container pb-10 ml-2 w-[80vw] md:w-[60vmin] 2xl:w-[50vmin] mt-2 border-[1px] rounded-2xl p-2">
        <div className="bg-white p-2 border-bannerGrey border-[1px] container h-[35vmin] w-[75vw] md:w-[55vmin] 2xl:w-[48vmin]  rounded-2xl  flex justify-center items-center ">
          <img
            src={props.image}
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>
        <div>
          <p className="font-medium lg:font-medium text-[4.5vmin] md:text-[3.4vmin] lg:text-[3.15vmin] 2xl:text-[2.65vmin] font-poppins ">
            {props.details}
          </p>
        </div>
        <button className="text-[4.65vmin] md:text-[3.65vmin] w-[25vmin] 2xl:w-[24vmin] lg:text-[3vmin] font-poppins 2xl:w-full bg-btnColor p-2 pl-2 pr-2 lg:p-3 lg:pr-4 lg:pl-4 rounded-lg text-white mt-[-3vmin] md:mt-0">
          Explore
        </button>
      </div>
    </>
  );
};
export default Card;
