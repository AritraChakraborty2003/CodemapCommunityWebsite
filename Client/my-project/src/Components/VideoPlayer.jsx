import ReactPlayer from "react-player";
import { useRef } from "react";
const VideoPlayer = (props) => {
  //const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";
  const playerRef = useRef(null);

  return (
    <div className="pb-10 flex justify-center flex-wrap items-center mt-5 gap-x-2 pl-2 pr-3">
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
            <p className="text-2xl font-bold mt-1">{val.name}</p>
          </div>
        </>
      ))}
    </div>
  );
};
export { VideoPlayer };
