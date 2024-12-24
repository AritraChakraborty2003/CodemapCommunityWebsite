import CardEvent from "./CardEvent";

const UpcommingEvents = () => {
  return (
    <>
      <div className="pb-10 2xl:h-full 2xl:pb-10 flex  flex-wrap flex-col">
        <div>
          <p className="text-btnColor text-[8.95vmin] font-bold mt-3 ml-3">
            Upcoming <span className="text-black"> Events </span>
          </p>
        </div>
        <div className="cardArea  flex flex-wrap gap-y-6 lg:gap-y-7 justify-center items-center mt-8 gap-x-[10vmin]">
          <CardEvent
            image="./quiz.png"
            event="Online Quiz"
            topic="Web Development"
            category="An open to all online quiz competition over web development"
          />
          <CardEvent
            image="./training.png"
            event="Tech Session"
            topic="How to code ?"
            category="Open to All technical session on how to learn coding as freshers"
          />
          <CardEvent
            image="./hackathon.png"
            event="Hackathon"
            topic="Open Innovation"
            category="An online hackathon for developers to develop innovative softwares "
          />
        </div>

        <div className="btnHolder w-[100vw] flex justify-center items-center">
          <button className="bg-btnColor text-white p-2 mt-[6vmin] text-[4.45vmin] lg:text-[3vmin]">
            More Events
          </button>
        </div>
      </div>
    </>
  );
};
export default UpcommingEvents;
