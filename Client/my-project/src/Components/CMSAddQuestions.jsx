/* eslint-disable no-unused-vars */
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarGeneral from "./NavbarGeneral";
import { NavbarCMS } from "./NavbarCMS";
import { useEffect, useState } from "react";
import CareerCard from "./CareerCard";
import { useNavigate } from "react-router-dom";
const CMSAddQuestions = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("user") != "Admin2024") {
    navigate("/CMSLogin");
  }
  const [state, setstate] = useState(0);
  const [state1, setstate1] = useState(0);
  const [data, setData] = useState([]);

  const updateData = (e) => {
    e.preventDefault();
    console.log("Hi");
    const category = document.getElementById("category").value;
    const question = document.getElementById("question").value;
    const option1 = document.getElementById("option1").value;
    const option2 = document.getElementById("option2").value;
    const option3 = document.getElementById("option3").value;
    const option4 = document.getElementById("option4").value;
    const correct = document.getElementById("correct").value;

    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "questions/trainings", {
        category: category,
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        correct: correct,
      })
      .then((res) => {
        if (res.data.status === 200) {
          alert("Data sent successfully");
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

      {state === 0 && (
        <>
          <div className="flex flex-col w-[100vw] pb-10 p-3 flex justify-center items-center">
            <div className="flex flex-col gap-x-3 gap-y-3 formHolder bg-bgColor p-[10vmin] 2xl:p-[6vmin] mt-6">
              <p className="text-[4.65vmin] font-bold">Fill Openings Details</p>
              <form className="space-y-4 mt-1 ml-2 2xl:text-[2.15vmin]">
                <input
                  type="text"
                  className="w-[67vmin] p-2"
                  id="category"
                  placeholder="Enter category..."
                />
                <br></br>
                <input
                  type="text"
                  className="w-[67vmin] p-2"
                  id="question"
                  placeholder="Enter the questions..."
                />
                <br></br>
                <input
                  type="text"
                  className="w-[67vmin] p-2"
                  id="option1"
                  placeholder="Enter the option1..."
                />
                <br></br>
                <input
                  type="text"
                  id="option2"
                  className="w-[67vmin] p-2"
                  placeholder="Enter the option2..."
                />
                <br></br>
                <input
                  type="text"
                  id="option3"
                  className="w-[67vmin] p-2"
                  placeholder="Enter the option3..."
                />
                <br></br>
                <input
                  type="text"
                  id="option4"
                  className="w-[67vmin] p-2"
                  placeholder="Enter the option4..."
                />
                <br></br>
                <input
                  type="text"
                  id="correct"
                  className="w-[67vmin] p-2"
                  placeholder="Enter correct option..."
                />
                <br></br>
                <button
                  className="p-2 bg-black text-white"
                  type="submit"
                  onClick={updateData}
                >
                  Add Questions
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export { CMSAddQuestions };
