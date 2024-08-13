import { NavbarCMS } from "./NavbarCMS";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import RemoveTask from "./RemoveTask";
import TaskCard from "./TaskCard";
import { CMSTaskDate } from "./CMSTaskDate";
const CMSTaskManager = () => {
  const [state, setstate] = useState(0);

  const [data, setData] = useState([]);
  const [state1, setState1] = useState({
    selectedFile: null,
    filename: null,
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "progress")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fileSelectedHandler = (event) => {
    event.preventDefault();
    let file = event.target.files[0].name;
    setState1({
      selectedFile: event.target.files[0],
      filename: document.getElementById("file").value,
    });
    console.log(file);
  };

  const updateData = (e) => {
    e.preventDefault();
    const pname = document.getElementById("pname").value;
    const email = document.getElementById("email").value;
    const task1 = document.getElementById("task1").value;
    const task2 = document.getElementById("task2").value;
    const task3 = document.getElementById("task3").value;
    const task4 = document.getElementById("task4").value;

    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "task", {
        pname: pname,
        email: email,
        task1: task1,
        task2: task2,
        task3: task3,
        task4: task4,
      })
      .then((res) => {
        if (res.data.status === 200) {
          alert("data sent successully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateReference = (e) => {
    e.preventDefault();
    const pname1 = document.getElementById("pname1").value;
    const link = document.getElementById("link").value;

    if (pname1 != "" && link != "") {
      let formData = new FormData();
      formData.append("pname", pname1);
      formData.append("link", link);

      formData.append("filename", state1.filename);
      formData.append("file", state1.selectedFile);

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      axios
        .post(
          `${import.meta.env.VITE_APP_API_URL}` + "references",
          formData,
          config
        )
        .then((res) => {
          if (res.data.status == 200) {
            alert("Data added successfully");
          } else {
            alert("Something went wrong");
          }
        });
    } else {
      alert("All fields are mandatory");
    }
  };
  return (
    <>
      <NavbarCMS type="CMS" />
      <div className="flex flex-col w-[100vw] p-2 flex justify-center items-center mt-3">
        <div className="flex flex-wrap gap-x-[6vmin] gap-y-[4vmin] lg:gap-x-[10vmin]">
          <div>
            <p
              className="text-[3.15vmin] 2xl:text-[2.75vmin] font-medium"
              onClick={() => {
                document.getElementById("firstLine").style.backgroundColor =
                  "#000000";
                document.getElementById("secLine").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine1").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine2").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine3").style.backgroundColor =
                  "#D3D3D3";
                setstate(0);
              }}
            >
              Add Reference
            </p>
            <div
              id="firstLine"
              className="w-[23vmin] 2xl:w-[19vmin] h-[5px] bg-black mt-1"
            ></div>
          </div>
          <div id="code">
            <p
              id="showOpenings"
              className="text-[3.15vmin] 2xl:text-[2.75vmin] font-medium"
              onClick={() => {
                document.getElementById("secLine").style.backgroundColor =
                  "#000000";
                document.getElementById("firstLine").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine1").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine2").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine3").style.backgroundColor =
                  "#D3D3D3";
                setstate(1);
              }}
            >
              Add Task
              <div
                id="secLine"
                className="w-[23vmin] 2xl:w-[19vmin] h-[5px] bg-lightGrey mt-1"
              ></div>
            </p>
          </div>

          <div id="code">
            <p
              id="showOpenings1"
              className="text-[3.15vmin] 2xl:text-[2.75vmin] font-medium"
              onClick={() => {
                document.getElementById("secLine1").style.backgroundColor =
                  "#000000";
                document.getElementById("firstLine").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine2").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine3").style.backgroundColor =
                  "#D3D3D3";
                setstate(3);
              }}
            >
              Remove Task
              <div
                id="secLine1"
                className="w-[23vmin] 2xl:w-[19vmin] h-[5px] bg-lightGrey mt-1"
              ></div>
            </p>
          </div>

          <div id="code">
            <p
              id="showOpenings2"
              className="text-[3.15vmin] 2xl:text-[2.75vmin] font-medium"
              onClick={() => {
                document.getElementById("secLine2").style.backgroundColor =
                  "#000000";
                document.getElementById("secLine1").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("firstLine").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine3").style.backgroundColor =
                  "#D3D3D3";
                setstate(4);
              }}
            >
              Submitted Task
              <div
                id="secLine2"
                className="w-[23vmin] 2xl:w-[19vmin] h-[5px] bg-lightGrey mt-1"
              ></div>
            </p>
          </div>

          <div id="code">
            <p
              id="showOpenings1"
              className="text-[3.15vmin] 2xl:text-[2.75vmin] font-medium"
              onClick={() => {
                document.getElementById("secLine3").style.backgroundColor =
                  "#000000";
                document.getElementById("firstLine").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine2").style.backgroundColor =
                  "#D3D3D3";
                document.getElementById("secLine1").style.backgroundColor =
                  "#D3D3D3";
                setstate(5);
              }}
            >
              Add Date
              <div
                id="secLine3"
                className="w-[23vmin] 2xl:w-[19vmin] h-[5px] bg-lightGrey mt-1"
              ></div>
            </p>
          </div>
        </div>
      </div>

      {state === 0 && (
        <div className="formHolder p-5 flex justify-center items-center">
          <form className="p-[5vmin] flex flex-col gap-y-6  border-gray-light border-2 w-[95vw] md:w-[70vmin]">
            <input
              type="text"
              id="pname1"
              className="text border-b-[1px] p-2"
              placeholder="Enter project name..."
            />
            <input
              type="text"
              id="link"
              className="text border-b-[1px] p-2"
              placeholder="Enter video link..."
            />
            <input
              type="file"
              id="file"
              className="text border-b-[1px] p-2"
              onChange={fileSelectedHandler}
              placeholder="Enter Reference file..."
            />
            <button
              type="submit"
              className="w-[50vmin] md:w-[30vmin] p-3 bg-black text-white"
              onClick={updateReference}
            >
              Add Reference
            </button>
          </form>
        </div>
      )}
      {state === 1 && (
        <div className="formHolder p-5 flex justify-center items-center">
          <form className="p-[5vmin] flex flex-col gap-y-6  border-gray-light border-2 w-[95vw] md:w-[70vmin]">
            <input
              type="text"
              id="pname"
              className="text border-b-[1px] p-2"
              placeholder="Enter Project Name..."
            />
            <input
              type="email"
              id="email"
              className="text border-b-[1px] p-2"
              placeholder="Enter your email"
            />
            <input
              type="text"
              id="task1"
              className="text border-b-[1px] p-2"
              placeholder="Enter task 1...."
            />
            <input
              type="text"
              id="task2"
              className="text border-b-[1px] p-2"
              placeholder="Enter task 2...."
            />
            <input
              type="text"
              id="task3"
              className="text border-b-[1px] p-2"
              placeholder="Enter task 3...."
            />
            <input
              type="text"
              id="task4"
              className="text border-b-[1px] p-2"
              placeholder="Enter task 4...."
            />

            <button
              type="submit"
              className="p-2 bg-black text-white w-[25vmin]"
              onClick={updateData}
            >
              Add data
            </button>
          </form>
        </div>
      )}

      {state == 3 && (
        <div className="formHolder p-5 flex justify-center items-center">
          <RemoveTask />
        </div>
      )}

      {state == 4 && <TaskCard data={data} type="admin" />}

      {state === 5 && <CMSTaskDate />}
      <Footer />
    </>
  );
};
export default CMSTaskManager;
