import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-y-4 mainBanner h-[100vh] w-[100vw] bg-bgColor justify-center items-center">
        <div className="imageHolder w-[45vmin] h-[45vmin]">
          <img
            src="./success.png"
            className="max-w-full max-h-full object-contain"
          ></img>
        </div>

        <p className="text-[5vmin] mt-6 font-medium font-poppins">
          Your application is submitted successfully please wait for results !!!
        </p>

        <button
          className="bg-btnColor text-white p-3"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back!!!
        </button>
      </div>
    </>
  );
};
export default Success;
