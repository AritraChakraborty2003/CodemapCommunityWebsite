import { NavbarCMS } from "./NavbarCMS";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const QuestionArea = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [time, setTime] = useState(90);
  useEffect(() => {
    //Implementing the setInterval method

    const interval = setInterval(() => {
      const cnt = time - 1;

      setTime(cnt);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [time]);

  console.log([location.state.email, location.state.name]);
  const data = location.state.data;
  const [index, setIndex] = useState(0);
  //const [option,setOption]=useState(0)
  const setChoice = (val) => {
    if (localStorage.getItem(index) != null) {
      document.getElementById(
        localStorage.getItem(index)
      ).style.backgroundColor = "#f0f2ff";
      document.getElementById(localStorage.getItem(index)).style.color =
        "black";
    }

    document.getElementById(val.toString()).style.backgroundColor = "#3f53d8";
    document.getElementById(val.toString()).style.color = "white";

    localStorage.setItem(index, val.toString());
  };

  const checkAns = () => {
    if (index <= 8) {
      if (localStorage.getItem(index) === data[index].correct) {
        console.log("correct");
        localStorage.setItem(
          "score",
          parseInt(localStorage.getItem("score")) + 10
        );
        console.log(parseInt(localStorage.getItem("score")));

        document.getElementById(
          localStorage.getItem(index)
        ).style.backgroundColor = "#f0f2ff";
        document.getElementById(localStorage.getItem(index)).style.color =
          "black";
      } else {
        console.log("Incorrect");

        console.log(localStorage.getItem("score"));

        document.getElementById(
          localStorage.getItem(index)
        ).style.backgroundColor = "#f0f2ff";
        document.getElementById(localStorage.getItem(index)).style.color =
          "black";
      }
      setIndex(index + 1);
    } else {
      if (data[9].correct === localStorage.getItem(index)) {
        console.log("correct");
        localStorage.setItem(
          "score",
          parseInt(localStorage.getItem("score")) + 10
        );
        console.log(parseInt(localStorage.getItem("score")));

        document.getElementById(
          localStorage.getItem(index)
        ).style.backgroundColor = "#f0f2ff";
        document.getElementById(localStorage.getItem(index)).style.color =
          "black";
      } else {
        console.log("Incorrect");

        console.log(localStorage.getItem("score"));

        document.getElementById(
          localStorage.getItem(index)
        ).style.backgroundColor = "#f0f2ff";
        document.getElementById(localStorage.getItem(index)).style.color =
          "black";
      }

      navigate("/ScorePage", {
        state: {
          name: location.state.name,
          email: location.state.email,
          score: localStorage.getItem("score"),
        },
      });
    }
  };

  return (
    <>
      <NavbarCMS type="Interns"></NavbarCMS>
      {(time > 0 && (
        <>
          <div className="flex  justify-center items-center p-5">
            <div className="pb-5 pt-3  p-5 bg-bgColor holder w-[95vw] md:w-[85vw] border-[1px] rounded-xl flex  flex-col gap-y-5 justify-center items-center">
              <p className="text-[6vmin] font-bold">
                <div className="timerArea w-[12vmin] h-[12vmin] rounded-[6vmin] border-[1px] bg-btnColor text-white flex justify-center items-center">
                  {time}
                </div>
              </p>
              <ul className="flex flex-col gap-y-4 p-2">
                <li className="font-bold p-3 text-[4vmin]  md:text-[3.9vmin] w-[83vw] border-[1px] rounded-md">
                  Q{index + 1}. {data[index].question}
                </li>

                <div className="optionsArea flex flex-wrap gap-x-4 gap-y-4">
                  <li
                    id="1"
                    className="p-2 text-[4vmin] md:text-[3vmin]  w-[83vw] lg:w-[40vw] border-[1px] rounded-md flex items-center"
                    onClick={() => {
                      setChoice(1);
                    }}
                  >
                    &nbsp;&nbsp;{data[index].option1}{" "}
                  </li>
                  <li
                    onClick={() => {
                      setChoice(2);
                    }}
                    id="2"
                    className="p-2 text-[4vmin] md:text-[3vmin]   w-[83vw]  lg:w-[40vw] border-[1px] rounded-md flex items-center"
                  >
                    &nbsp;&nbsp;{data[index].option2}{" "}
                  </li>
                </div>
                <div className="optionsArea flex flex-wrap gap-x-4 gap-y-4">
                  <li
                    id="3"
                    className="p-2 text-[4vmin] md:text-[3vmin]   w-[83vw] lg:w-[40vw] border-[1px] rounded-md flex  items-center"
                    onClick={() => {
                      setChoice(3);
                    }}
                  >
                    &nbsp;&nbsp;{data[index].option3}{" "}
                  </li>
                  <li
                    id="4"
                    className="p-2 text-[4vmin] md:text-[3vmin]   w-[83vw]  lg:w-[40vw] border-[1px] rounded-md flex  items-center"
                    onClick={() => {
                      setChoice(4);
                    }}
                  >
                    &nbsp;&nbsp;{data[index].option4}{" "}
                  </li>
                </div>
              </ul>

              <button
                className="bg-btnColor text-white p-2 w-[25vmin] text-[3vmin]"
                onClick={checkAns}
              >
                Next
              </button>
            </div>
          </div>
          <Footer />
        </>
      )) ||
        navigate("/ScorePage", {
          state: {
            name: location.state.name,
            email: location.state.email,
          },
        })}
    </>
  );
};
export default QuestionArea;
