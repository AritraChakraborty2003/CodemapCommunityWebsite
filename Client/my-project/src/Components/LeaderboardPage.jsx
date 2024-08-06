const LeaderboardPage = (props) => {
  return (
    <>
      <div className="flex flex-col gap-y-6">
        <div className="flex gap-x-5">
          <img src="./first.png" height={125} width={125}></img>
          <div className="font-poppins flex flex-col justify-center  p-3 gap-y-1">
            <p className="text-[4vmin] font-medium">
              <b>Name:</b> {props.data[0].name}{" "}
            </p>
            <p className="text-[3.12vmin] font-bold">
              Score: {props.data[0].score}/100
            </p>
          </div>
        </div>
        <div className="flex gap-x-5">
          <img src="./second.png" height={130} width={130}></img>
          <div className="font-poppins flex flex-col justify-center  p-3 gap-y-1">
            <p className="text-[4vmin] font-medium">
              <b>Name:</b> {props.data[1].name}{" "}
            </p>
            <p className="text-[3.12vmin] font-bold">
              Score: {props.data[1].score}/100
            </p>
          </div>
        </div>
        <div className="flex gap-x-5">
          <img src="./third.png" height={130} width={130}></img>
          <div className="font-poppins flex flex-col justify-center  p-3 gap-y-1">
            <p className="text-[4vmin] font-medium">
              <b>Name:</b> {props.data[2].name}{" "}
            </p>
            <p className="text-[3.12vmin] font-bold">
              Score: {props.data[2].score}/100
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export { LeaderboardPage };
