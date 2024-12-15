/* eslint-disable react/prop-types */
const CardEvent = (props) => {
  return (
    <>
      <div className="cardHolder  bg-bgColor  p-3 rounded-md  w-[80vw]  pb-10 pt-10 lg:w-[28vw] 2xl:w-[27vw]  flex flex-col justify-center items-center  ">
        <div className="imageHolder p-1 w-[75vw] h-[35vmin]  lg:w-[15vw] lg:h-[15vmin] 2xl:w-[15vw]  mt-1 rounded-md flex justify-center items-center">
          <img
            src={props.image}
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>
        <div className="mt-2 font-poppins space-y-2 pl-3 pr-2">
          <p className="text-[6vmin] md:text-[3.35vmin] text-center font-medium mt-1">
            <b>{props.event} </b>
          </p>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[4vmin] md:text-[2.65vmin] 2xl:text-[2.15vmin] text-bannerGrey text-center ">
              Topic: {props.topic}
            </p>
            <p className="text-[4vmin] md:text-[2.15vmin] 2xl:text-[2.15vmin] w-[90%] text-bannerGrey text-center mt-3">
              {props.category}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardEvent;
