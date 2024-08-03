import ReactPlayer from "react-player";
import { useRef } from "react";
const VideoPlayer = (props) => {
  //const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";
  const playerRef = useRef(null);

  return (
<<<<<<< HEAD
    <div className="pb-10 flex justify-center flex-wrap items-center mt-5 gap-x-2 gap-y-4 pl-2 pr-3">
=======
    <div className="pb-10 flex justify-center flex-wrap items-center mt-5 gap-x-5 gap-y-10 pl-2 pr-3">
>>>>>>> ae3ac9388a08f5fc603d5c078bcdff404c298052
      {props.data.map((val) => (
        <>
          <div>
            <ReactPlayer
              ref={playerRef}
              url={val.link}
              controls={true}
              width={380}
              height={230}
            />
            <p className="text-md md:text-lg font-bold mt-1">{val.name}</p>
          </div>
        </>
      ))}
    </div>
  );
};
export { VideoPlayer };
