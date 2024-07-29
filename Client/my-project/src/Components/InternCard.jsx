import { useNavigate } from "react-router-dom";
const InternCard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      {props.data.map((val) => (
        <div className="cardHolder  bg-bgColor shadow-lg p-3 pb-6 rounded-md border-[1px] w-[80vw] pb-5 pb-2 lg:w-[45vmin] 2xl:w-[50vmin]  flex flex-col justify-center items-center  ">
          <div className="imageHolder bg-white p-1 w-[75vw] h-[35vmin] border-2 lg:w-[40vmin] lg:h-[30vmin] 2xl:w-[30vmin] border-lightGrey border-[1px] mt-1 rounded-md flex justify-center items-center">
            <img
              src={val.image}
              className="max-w-full max-h-full object-contain"
            ></img>
          </div>
          <div className="mt-2 font-poppins space-y-2">
            <p className="text-[6vmin] md:text-[4.15vmin] font-medium mt-1">
              <b>{val.details} </b>
            </p>
            <button
              className="bg-btnColor text-white p-2"
              onClick={() => {
                navigate("/Intern" + val.details.split(" ")[1], {
                  state: { email: props.email, name: props.name },
                });
              }}
            >
              Go To Page
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default InternCard;
