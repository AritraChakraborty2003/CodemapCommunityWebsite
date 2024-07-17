const Banner = () => {
  return (
    <>
      <div className=" w-[100vw] overflow-x-hidden bg-bgColor flex justify-center items-center flex-col gap-y-4">
        <div className="flex gap-x-2 items-center h-[10vmin]">
          <div className="h-[4px] w-[19px] border-grey border-b-[1px]"></div>
          <p className="text-[2.75vmin] font-medium font-poppins">
            Your own Technical Community to nurture your skills
          </p>
        </div>
        <p className="text-[9vmin] font-medium font-poppins">
          CodeMap Community
        </p>
        <p className="text-[2.5vmin]  font-poppins mt-[-3vmin]">
          CodeMap Community
        </p>
        <p className="text-[2.85vmin] ">The only technical community,</p>
      </div>
    </>
  );
};
export default Banner;
