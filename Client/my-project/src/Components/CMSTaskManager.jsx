import { NavbarCMS } from "./NavbarCMS";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
const CMSTaskManager = () => {
  const [state, setstate] = useState(0);

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
  return (
    <>
      <NavbarCMS type="CMS" />
      <div className="flex flex-col w-[100vw] p-2 flex justify-center items-center mt-3">
        <div className="flex gap-x-[7vmin]">
          <div>
            <p
              className="text-[3.5vmin] 2xl:text-[2.75vmin] font-medium"
              onClick={() => {
                document.getElementById("firstLine").style.backgroundColor =
                  "#000000";
                document.getElementById("secLine").style.backgroundColor =
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
              className="text-[3.5vmin] 2xl:text-[2.75vmin] font-medium"
              onClick={() => {
                document.getElementById("secLine").style.backgroundColor =
                  "#000000";
                document.getElementById("firstLine").style.backgroundColor =
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
        </div>
      </div>

      {state === 1 && (
        <div className="formHolder p-10 flex justify-center items-center">
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
      <Footer />
    </>
  );
};
export default CMSTaskManager;
