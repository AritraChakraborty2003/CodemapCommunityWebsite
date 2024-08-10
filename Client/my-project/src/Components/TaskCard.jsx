import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const TaskCard = (props) => {
  const getDate = () => {
    const today = new Date();

    const date = today.getDate() + 7;
    const month = today.getMonth();
    const year = today.getFullYear();

    return `${date}/${month}/${year}`;
  };

  const addProgress = (task, projectname) => {
    const link = document.getElementById("link").value;
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "task/update", {
        task: task,
        projectname: projectname,
      })
      .then((res) => {
        if (res.data.status === 200) {
          /*axios
            .post(`${import.meta.env.VITE_APP_API_URL}` + "progress", {
              task: task,
              projectname: projectname,
              email: props.email,
              link: link,
            })
            .then((res) => {
              if (res.data.status === 200) {
                alert("Data added successfully");
              } else {
                alert("Something went wrong");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("Something went wrong");
        }*/
          alert("Done");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [currentdate, setDate] = useState(getDate());
  return (
    <>
      <div className="pt-8 pb-12 pl-10 pr-10 flex flex-wrap gap-x-[7vmin] gap-y-[4vmin] justify-center items-center">
        {props.data.map((val) => (
          <div className="bg-bgColor w-[95vw] md:w-[80vmin] p-5 CardHolder border-lightGrey border-[1px] rounded-[3vmin]">
            <div className="contentHolder flex gap-y-[5vmin] flex-col justify-center items-center">
              <div className="ProjectName font-poppins text-[4vmin]">
                <b>Project:</b>
                <span className="font-medium"> {val.projectname}</span>
              </div>
              <div className="ProjectName font-poppins font-medium text-[3.5vmin] md:text-[3vmin] 2xl:text-[2.5vmin]">
                <b>Tasks:</b>&nbsp;&nbsp;{val.task}
              </div>

              <div className="ProjectName font-poppins font-medium text-[3vmin] 2xl:text-[2.5vmin]">
                <b>Deadline:</b>&nbsp;&nbsp;{currentdate}
              </div>
              <input
                type="text"
                id="link"
                className="text p-2 w-[97%] text-[3vmin] 2xl:text-[2.5vmin]"
                placeholder="Enter the github Link of work"
              />
              <button
                className="bg-btnColor text-white p-2 text-[3vmin] 2xl:text-[2.5vmin]"
                id="done"
                onClick={() => {
                  addProgress(val.task, val.projectname);
                }}
              >
                Submit Work
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default TaskCard;
