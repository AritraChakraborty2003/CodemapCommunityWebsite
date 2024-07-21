import Card from "./Card";

const SupportProvided = () => {
  return (
    <>
      <div className="supportAreaHolder w-[100vw] bg-bgColor pt-5 pb-10">
        <div className="supportHeading">
          <p className="font-bold text-[11vmin] ml-3">
            What we <span className="text-btnColor">support?</span>
          </p>
        </div>

        <div className="supportBoxHolder gap-x-12 lg:gap-x-14 2xl:gap-x-14 gap-y-7 lg:gap-y-5 mt-[10vmin] w-[100vw] flex flex-wrap justify-center items-center pb-6 mt-[-3vmin]">
          <div className="supportBox">
            <Card
              image={"./training.png"}
              details={"Free Bootcamps & Certifications"}
            />
          </div>
          <div className="supportBox">
            <Card
              image={"./network.png"}
              details={"Networking and Tech Events"}
            />
          </div>
          <div className="supportBox">
            <Card image={"./g1.png"} details={"Career Roadmap and Guidance"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default SupportProvided;
