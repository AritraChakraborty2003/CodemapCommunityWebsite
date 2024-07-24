import axios from "axios";
import { useNavigate } from "react-router-dom";
const CareerCard = (props) => {
  const navigate = useNavigate();

  const removeOpening = (role) => {
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "Openings/delete", {
        role: role,
      })
      .then((res) => {
        if (res.data.status === 200) {
          alert("Opening removed succesfully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {props.data.map((val) => (
        <div className="flex flex-col box-Holder rounded-lg bg-bgColor w-[90vw] pb-10 md:w-[61vmin]  2xl:w-[49vmin]  border-[1px] mt-2 ml-3">
          <div className="row1 font-bold text-[5vmin] 2xl:text-[4vmin]  ml-3 mt-3">
            <div className="flex gap-x-3">
              {props.type === "CMS" && (
                <div
                  id={val.role}
                  onClick={() => {
                    removeOpening(val.role);
                  }}
                >
                  <img src="./cancel.png" height={25} width={25} />
                </div>
              )}
              <div>
                <p>{val.role}</p>
              </div>
            </div>
          </div>
          <div className="row2  w-[80%] lg:w-[55vmin]  2xl:w-[44vmin] pr-2 pborder-t-[2px] ml-3"></div>
          <div className="row3">
            <p className="ml-[6px] mt-3  2xl:text-[2.15vmin]">
              {val.description}
            </p>
          </div>
          <div className="flex justify-center items-center mt-3">
            <button className="w-[26vmin] p-[1.35vmin] ml-3 bg-btnColor mt-2 text-white">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default CareerCard;
