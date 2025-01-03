const LeaderboardPage = (props) => {
  return (
    <>
      <div className="flex flex-col gap-y-6">
        <div className="flex gap-x-5">
          <img src="./first.png" height={125} width={125}></img>
          <div className="font-poppins flex flex-col justify-center  p-3 gap-y-1">
            <p className="text-[6vmin] md:text-[4vmin] font-medium">
              <b>Name:</b> {props.data[0].name}{" "}
            </p>
            <p className="text-[4vmin] md:text-[3.11vmin] font-bold">
              Score: {props.data[0].score}
            </p>
          </div>
        </div>
        <div className="flex gap-x-5">
          <img src="./second.png" height={120} width={120}></img>
          <div className="font-poppins flex flex-col justify-center  p-3 gap-y-1">
            <p className="text-[6vmin] md:text-[4vmin] font-medium">
              <b>Name:</b> {props.data[1].name}{" "}
            </p>
            <p className="text-[4vmin] md:text-[3.11vmin]  font-bold">
              Score: {props.data[1].score}
            </p>
          </div>
        </div>
        <div className="flex gap-x-5">
          <img src="./third.png" height={120} width={120}></img>
          <div className="font-poppins flex flex-col justify-center  p-3 gap-y-1">
            <p className="text-[6vmin] md:text-[4vmin] font-medium">
              <b>Name:</b> {props.data[2].name}{" "}
            </p>
            <p className="text-[4vmin] md:text-[3.11vmin] font-bold">
              Score: {props.data[2].score}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export { LeaderboardPage };
