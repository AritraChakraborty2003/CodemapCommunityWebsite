import axios from "axios";
import { useNavigate } from "react-router-dom";
const CardApply = (props) => {
  const navigate = useNavigate();
  const backendLink = `${import.meta.env.VITE_APP_API_URL_GENERAL}`;
  return (
    <>
      {props.data.map((val) => (
        <div className="flex flex-col box-Holder rounded-lg bg-bgColor w-[90vw] pb-3 p-2 md:w-[65vmin] md:h-[50vmin] 2xl:w-[49vmin]  2xl:h-[35vmin] border-[1px] mt-2 ml-3">
          <div className="row1 font-bold text-[4.15vmin] 2xl:text-[4vmin]  ml-1 mt-3">
            <div className="flex gap-x-3">
              <div>
                <p>{val.name}</p>
              </div>
            </div>
          </div>
          <div className="row2  w-[80%] lg:w-[55vmin]  2xl:w-[44vmin] pr-2 pborder-t-[2px] ml-3"></div>
          <div className="row4">
            <p className="ml-[6px] mt-3  2xl:text-[2.15vmin]">
              {" "}
              <b>Role:</b> {val.role}
            </p>
          </div>
          <div className="row3">
            <p className="ml-[6px] mt-3  2xl:text-[2.15vmin]">
              {" "}
              <b>Email:</b> {val.email}
            </p>
          </div>

          <div className="row4">
            <p className="ml-[6px] mt-3  2xl:text-[2.15vmin]">
              <b>Number: </b>
              {val.PhoneNumber}
            </p>
          </div>

          <div className="row5">
            <p className="ml-[6px] mt-3  2xl:text-[2.15vmin] mt-[1vmin]">
              <b>Resume: </b>
              <a href={backendLink + val.resume} target="_blank">
                {" "}
                {val.resume}{" "}
              </a>
            </p>
          </div>

          <div className="flex justify-center items-center mt-4 gap-x-5">
            {props.type === "Apply" && (
              <>
                <button className="bg-btnColor text-white p-2 rounded-[3px]">
                  Accept
                </button>
                <button className="bg-Green text-white p-2 rounded-[3px]">
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
export default CardApply;
