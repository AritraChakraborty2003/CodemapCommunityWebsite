import CardEvent from "./CardEvent";

const UpcommingEvents = () => {
  return (
    <>
      <div className="pb-5 2xl:h-full 2xl:pb-10 flex  flex-wrap flex-col pb-4">
        <div>
          <p className="text-btnColor text-[11vmin] font-bold mt-3 ml-3">
            Upcomming <span className="text-black"> Events </span>
          </p>
        </div>
        <div className="cardArea  flex flex-wrap gap-y-6 lg:gap-y-7 justify-center items-center mt-3 gap-x-[10vmin]">
          <CardEvent
            image="./Quiz.avif"
            event="Online Quiz"
            topic="Web Development"
            category="Open to All"
          />
          <CardEvent
            image="./seminar.png"
            event="Technical Session"
            topic="How to start coding?"
            category="Open to All"
          />
          <CardEvent
            image="./hackathon.png"
            event="Hackathon"
            topic="Open Innovation"
            category="Intermediate Coders"
          />
        </div>

        <div className="btnHolder w-[100vw] flex justify-center items-center">
          <button className="bg-btnColor text-white p-2 mt-[6vmin] text-[2.85vmin]">
            More Events
          </button>
        </div>
      </div>
    </>
  );
};
export default UpcommingEvents;
