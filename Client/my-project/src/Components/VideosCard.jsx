import axios from "axios";
import { useNavigate } from "react-router-dom";
const Videocard = (props) => {
  const removeOpening = (name) => {
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "videos/delete", {
        name: name,
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
                  id={val.name}
                  onClick={() => {
                    removeOpening(val.name);
                  }}
                >
                  <img src="./cancel.png" height={25} width={25} />
                </div>
              )}
              <div>
                <p>{val.name}</p>
              </div>
            </div>
          </div>
          <div className="row2  w-[80%] lg:w-[55vmin]  2xl:w-[44vmin] pr-2 pborder-t-[2px] ml-3"></div>
          <div className="row3">
            <a href={val.link} className="ml-[6px] mt-3  2xl:text-[2.15vmin]">
              {val.link}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
export default Videocard;
