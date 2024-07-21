import { useLocation } from "react-router-dom";

const BuildProgress = () => {
  const location = useLocation();
  return (
    <>
      <div className="progressHolder bg-bgColor w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <div className="imageHolder w-[60vmin] h-[50vmin]">
          <img
            src={location.state.data.image}
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>

        <p className="mt-10 text-btnColor pl-2 lg:p-0 text-[6vmin] font-bold">
          {location.state.data.text}
        </p>
      </div>
    </>
  );
};
export default BuildProgress;
