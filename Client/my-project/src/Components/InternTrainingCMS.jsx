/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { NavbarCMS } from "./NavbarCMS";
import Footer from "./Footer";

const InternTrainingCMS = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState({
    selectedFile: null,
    filename: null,
  });

  const uploadData = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const role = document.getElementById("role").value;
    const topic1 = document.getElementById("topic1").value;
    const topic2 = document.getElementById("topic2").value;
    const topic3 = document.getElementById("topic3").value;
    const topic4 = document.getElementById("topic4").value;

    if (
      name != "" &&
      role != "" &&
      category != "" &&
      topic1 != "" &&
      topic1 != "" &&
      topic3 != "" &&
      topic4 != ""
    ) {
      let control = true;
      axios
        .post(`${import.meta.env.VITE_APP_API_URL}` + "trainings/syllabus", {
          name: name,
          role: role,
          category: category,
          topic1: topic1,
          topic2: topic2,
          topic3: topic3,
          topic4: topic4,
        })
        .then((res) => {
          if (res.data.status == 200) {
            alert("Data sent successfully");
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
      {(localStorage.getItem("user") === "Admin2024" && (
        <>
          <NavbarCMS type="CMS" />
          <div className="bannerPart flex flex-col w-[100vw] h-[48vmin] 2xl:h-[45vmin] bg-bgColor">
            <p className="text-black font-bold mt-8 ml-[4vmin] text-[10vmin] lg:text-[13vmin] 2xl:text-[10vmin]">
              Syllabus <span className="text-btnColor">Portal</span>
            </p>
            <p className="ml-[4vmin] text-[3.5vmin] lg:text-[2.75vmin] font-popins">
              (Please Fill the details in the form to apply for the role)
            </p>
          </div>
          <div className="mt-4 form-area w-[100vw] flex justify-center items-center p-5 pt-7 pb-8 ">
            <div className="formHolder flex justify-center items-center gap-y-6 w-[96vw] md:w-[70vmin]   border-[1px] p-6 ">
              <form className="flex flex-col justify-center items-center gap-y-4 2xl:text-[2.35vmin]">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name..."
                  className="w-[60vmin] border-b-[1px]"
                ></input>
                <br></br>
                <input
                  type="text"
                  id="category"
                  placeholder="Enter category..."
                  className="w-[60vmin] border-b-[1px]"
                ></input>
                <br></br>
                <input
                  type="role"
                  id="role"
                  placeholder="Enter phone no..."
                  className="w-[60vmin] border-b-[1px]"
                ></input>
                <br></br>
                <input
                  type="text"
                  id="topic1"
                  placeholder="Enter topic 1..."
                  className="w-[60vmin] border-b-[1px]"
                ></input>
                <br></br>
                <input
                  type="text"
                  id="topic2"
                  placeholder="Enter topic 2..."
                  className="w-[60vmin] border-b-[1px]"
                ></input>
                <br></br>
                <input
                  type="text"
                  id="topic3"
                  placeholder="Enter topic 3..."
                  className="w-[60vmin] border-b-[1px]"
                ></input>
                <br></br>
                <input
                  type="text"
                  id="topic4"
                  placeholder="Enter topic 4..."
                  className="w-[60vmin] border-b-[1px]"
                ></input>
                <br></br>

                <button
                  type="submit"
                  className="submit bg-btnColor text-white p-2 mt-3 w-[20vmin]"
                  onClick={uploadData}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )) || <Navigate to="/CMSLogin"></Navigate>}
      <Footer />
    </>
  );
};
export { InternTrainingCMS };
