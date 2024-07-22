const CardEvent = (props) => {
  return (
    <>
      <div className="cardHolder  bg-bgColor shadow-lg p-3 pb-6 rounded-md border-[1px] w-[80vw] pb-5 pb-2 lg:w-[53vmin] 2xl:w-[50vmin]  flex flex-col justify-center items-center  ">
        <div className="imageHolder bg-white p-1 w-[75vw] h-[35vmin] border-2 lg:w-[49vmin] lg:h-[30vmin] 2xl:w-[45vmin] border-lightGrey border-[1px] mt-1 rounded-md flex justify-center items-center">
          <img
            src={props.image}
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>
        <div className="mt-2 font-poppins space-y-2">
          <p className="text-[6vmin] md:text-[5.15vmin] font-medium mt-1">
            <b>{props.event} </b>
          </p>
          <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">
            Topic: {props.topic}
          </p>
          <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">
            Category: {props.category}
          </p>
        </div>
      </div>
    </>
  );
};
export default CardEvent;
