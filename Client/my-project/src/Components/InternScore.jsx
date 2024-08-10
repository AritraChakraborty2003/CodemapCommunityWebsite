import Footer from "./Footer";
import { LeaderboardPage } from "./LeaderboardPage";
import { NavbarCMS } from "./NavbarCMS";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const InternScore = () => {
  const [state, setState] = useState("0");
  const location = useLocation();
  useEffect(() => {
    document.getElementById("0").style.backgroundColor = "black";
  }, []);
  const data = location.state.scoreData;
  const yourScoreObj = data.filter((val) => val.email === location.state.email);

  console.log(yourScoreObj);
  const yourScore = yourScoreObj[0].score;

  const frontendTopScore = data
    .filter((val) => val.role === "Frontend Development")
    .sort((b, a) => a.score - b.score)
    .slice(0, 3);

  const backendTopScore = data
    .filter((val) => val.role === "Fullstack/Backend Development")
    .sort((b, a) => a.score - b.score)
    .slice(0, 3);
  console.log(frontendTopScore);

  const nonTechnicalScore = data
    .filter((val) => val.role === "Non Technical")
    .sort((b, a) => a.score - b.score)
    .slice(0, 3);
  console.log(frontendTopScore);

  return (
    <>
      <NavbarCMS type="Interns"></NavbarCMS>

      <div className="resHolder p-5 lg:p-5">
        <p className="text-[8vmin] lg:text-[12vmin] font-bold">
          Check
          <span className="text-btnColor">&nbsp;Scores</span>
        </p>

        <div className="optionsArea flex flex-wrap gap-x-6 gap-y-4 lg:gap-x-12 text-[4.45vmin] md:text-[3.5vmin] lg:text-[4vmin] font-normal mt-6">
          <div
            onClick={() => {
              document.getElementById(state).style.backgroundColor = "#D3D3D3";
              document.getElementById("0").style.backgroundColor = "black";
              setState("0");
            }}
          >
            <p>Your Score</p>
            <div
              id="0"
              className="line w-[18vmin] bg-lightGrey h-[1vmin]"
            ></div>
          </div>
          <div
            onClick={() => {
              document.getElementById(state).style.backgroundColor = "#D3D3D3";
              document.getElementById("1").style.backgroundColor = "black";
              setState("1");
            }}
          >
            <p>Frontend</p>
            <div
              id="1"
              className="line w-[18vmin] bg-lightGrey h-[1vmin]"
            ></div>
          </div>
          <div
            onClick={() => {
              document.getElementById(state).style.backgroundColor = "#D3D3D3";
              document.getElementById("2").style.backgroundColor = "black";
              setState("2");
            }}
          >
            <p>Backend/Fullstack</p>
            <div
              id="2"
              className="line w-[27vmin] bg-lightGrey h-[1vmin]"
            ></div>
          </div>
          <div
            onClick={() => {
              document.getElementById(state).style.backgroundColor = "#D3D3D3";
              document.getElementById("3").style.backgroundColor = "black";
              setState("3");
            }}
          >
            <p>Non Technical</p>
            <div
              id="3"
              className="line w-[18vmin] bg-lightGrey h-[1vmin]"
            ></div>
          </div>
        </div>
      </div>

      {state === "0" && (
        <>
          <div className="mainArea p-10 flex flex-col justify-center items-center">
            <div className="imgageHolder w-[30vmin] h-[30vmin] md:w-[21vmin] md:h-[21vmin]">
              <img
                src="./score3.png"
                alt="score-icon"
                className="src max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-[5.6vmin] font-medium mt-[4vmin] font-poppins">
              Your total score is: <b>{yourScore}</b>
            </p>
          </div>
        </>
      )}

      {state === "1" && (
        <>
          <p className="text-[7vmin] lg:text-[9vmin] font-bold p-2">
            The
            <span className="text-btnColor">&nbsp;Results are:</span>
          </p>
          <div className="holder p-10 flex justify-center items-center">
            <LeaderboardPage data={frontendTopScore} />
          </div>
        </>
      )}

      {state === "2" && (
        <>
          <p className="text-[7vmin] lg:text-[9vmin] font-bold p-2">
            The
            <span className="text-btnColor">&nbsp;Results are:</span>
          </p>
          <div className="holder p-10 flex justify-center items-center">
            <LeaderboardPage data={backendTopScore} />
          </div>
        </>
      )}

      {state === "3" && (
        <>
          <p className="text-[7vmin] lg:text-[9vmin] font-bold p-2">
            The
            <span className="text-btnColor">&nbsp;Results are:</span>
          </p>
          <div className="holder p-10 flex justify-center items-center">
            <LeaderboardPage data={nonTechnicalScore} />
          </div>
        </>
      )}

      <Footer />
    </>
  );
};
export { InternScore };
