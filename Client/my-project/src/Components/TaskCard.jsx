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
          axios
            .post(`${import.meta.env.VITE_APP_API_URL}` + "progress", {
              task: task,
              projectname: projectname,
              email: props.email,
              link: link,
            })
            .then((res) => {
              if (res.data.status === 200) {
                window.location.reload();
              } else {
                alert("Something went wrong");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const UpdateTask = (val, project, task, email) => {
    if (val === "Accept") {
      axios
        .post(`${import.meta.env.VITE_APP_API_URL}` + "questions/update", {
          email: email,
        })
        .then((res) => {
          if (res.data.status === 200) {
            axios
              .post(`${import.meta.env.VITE_APP_API_URL}` + "progress/delete", {
                projectname: project,
                task: task,
              })
              .then((res) => {
                if (res.data.status === 200) {
                  axios
                    .post(`${import.meta.env.VITE_APP_API_URL}` + "reports", {
                      projectname: project,
                      email: email,
                      task: task,
                    })
                    .then((res) => {
                      if (res.data.status === 200) {
                        axios
                          .post(
                            `${import.meta.env.VITE_APP_API_URL}` +
                              "task/remove",
                            {
                              projectname: project,
                              email: email,
                              task: task,
                            }
                          )
                          .then((res) => {
                            if (res.data.status === 200) {
                              alert("Updated succesfully");
                              window.location.reload();
                            } else {
                              alert("Something went wrong");
                            }
                          })
                          .catch((err) => {
                            alert("Something went wrong");
                          });
                      } else {
                        alert("Something went wrong");
                      }
                    })
                    .catch((err) => {
                      alert("Something went wrong");
                    });
                } else {
                  alert("Something went wrong");
                }
              })
              .catch((err) => {
                alert("Something went wrong");
              });
          } else {
            alert("Something went wrong");
          }
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    } else {
      axios
        .post(`${import.meta.env.VITE_APP_API_URL}` + "progress/delete", {
          projectname: project,
          task: task,
        })
        .then((res) => {
          if (res.data.status === 200) {
            axios
              .post(`${import.meta.env.VITE_APP_API_URL}` + "task/revert", {
                projectname: project,
                task: task,
              })
              .then((res) => {
                if (res.data.status === 200) {
                  window.location.reload();
                } else {
                  alert("Something went wrong");
                }
              });
          } else {
            alert("Something went wrong");
          }
        });
    }
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
              {(props.type === "user" && (
                <>
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
                </>
              )) || (
                <>
                  <div className="ProjectName font-poppins font-medium text-[3vmin] 2xl:text-[2.5vmin]">
                    <b>Email: </b>&nbsp;&nbsp;{val.email}
                  </div>
                  <div className="ProjectName font-poppins font-medium text-[3vmin] 2xl:text-[2.5vmin]">
                    <b>Link:</b>&nbsp;&nbsp;
                    <a href={val.link} target="_blank">
                      Click on the link
                    </a>
                  </div>
                  <div className="flex gap-x-[6vmin]">
                    <button
                      className="bg-btnColor text-white p-2"
                      onClick={() => {
                        UpdateTask(
                          "Accept",
                          val.projectname,
                          val.task,
                          val.email
                        );
                      }}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-btnColor text-white p-2"
                      onClick={() => {
                        UpdateTask(
                          "Reject",
                          val.projectname,
                          val.task,
                          val.email
                        );
                      }}
                    >
                      Reject
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default TaskCard;
