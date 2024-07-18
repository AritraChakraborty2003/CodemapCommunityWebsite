const Banner = () => {
  return (
    <>
      <div className=" w-[100vw] pb-5 overflow-x-hidden bg-bgColor flex justify-center items-center flex-col gap-y-4">
        <div className="flex gap-x-2 items-center h-[10vmin]">
          <div className="h-[4px] w-[19px] border-grey border-b-[1px]"></div>
          <p className="text-[3.65vmin] font-medium font-poppins">
            The Technical Community to nurture your skills
          </p>
        </div>
        <p className="text-[8vmin] lg:text-[10vmin] font-medium font-poppins">
          CodeMap Community
        </p>
        <p className="text-[3.45vmin] lg:text-[3vmin]  font-poppins mt-[-2.5vmin]">
          ( Where Ideas Transform Into Innovation )
        </p>

        <div className="flex gap-x-2 items-center h-[10vmin]">
          <div className="hidden md:block h-[4px] w-[17px] border-bannerGrey border-b-[2px] mt-[3vmin]"></div>
          <p className="lg:ml-[0.45vmin] text-[4.15vmin] lg:text-[3.45vmin] font-poppins text-bannerGrey mt-[3vmin]">
            Learn - Participate - Groww - Innovate
          </p>
        </div>

        <div className="buttonHolder">
          <div className="buttonHolder h-[23vmin] lg:h-[15vmin]  flex items-center justify-center">
            <button className="font-poppins 2xl:w-[20vmin] bg-btnColor p-2 pl-3 pr-3 lg:p-3 lg:pr-4 lg:pl-4 rounded-lg text-white mt-[-3vmin] md:mt-0">
              Become Campus Lead
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
