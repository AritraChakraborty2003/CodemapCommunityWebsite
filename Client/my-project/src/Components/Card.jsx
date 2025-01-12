/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center  gap-y-8 container pb-5 ml-1 w-[80vw] md:w-[46vmin] 2xl:w-[27vw] mt-2 border-lightGrey border-[1px] rounded-lg p-2 shadow-lg">
        <div className="p-2 border-bannerGrey  container  h-[30vmin] w-[35vmin]  md:h-[16vmin] md:w-[15vmin] rounded-2xl  flex justify-center items-center ">
          <img
            src={props.image}
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[5.4vmin] mt-[-0.35vmin] md:mt-0 md:text-[3.4vmin] lg:text-[2.45vmin] ml-2 2xl:text-[2.95vmin] font-poppins font-extrabold">
            {props.details}
          </p>
          <div className="w-[85%]">
            <p className="pl-2 pr-2 mt-2 text-greyColor 2xl:text-[2.25vmin]">
              Top notch web development services give us a chance to make your
              business come online
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
