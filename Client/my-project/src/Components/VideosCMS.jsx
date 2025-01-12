/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { NavbarCMS } from "./NavbarCMS.jsx";
import axios from "axios";
import { TechnicalVideo } from "./TechnicalVideo.jsx";
import { TechnicalVideos } from "./TechnicalVideos.jsx";
import { NonTechnicalVideo } from "./NonTechnicalVideo.jsx";
const VideoCMS = () => {
  const [state, setstate] = useState(0);
  const [state1, setstate1] = useState(0);

  const postData = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const link = document.getElementById("link").value;
    const category = document.getElementById("category").value;
    const timestamp1 = document.getElementById("timestamp1").value;
    const timestamp2 = document.getElementById("timestamp2").value;

    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "videos/trainings", {
        name: name,
        link: link,
        category: category,
        timestamp1: timestamp1,
        timestamp2: timestamp2,
      })
      .then((res) => {
        if (res.data.status === 200) {
          alert("Data updated successfully");
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
              Add Videos
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
              Show Videos
              <div
                id="secLine"
                className="w-[23vmin] 2xl:w-[19vmin] h-[5px] bg-lightGrey mt-1"
              ></div>
            </p>
          </div>
        </div>
      </div>

      {state === 0 && (
        <div className="flex flex-col w-[100vw] pb-10 p-3 flex justify-center items-center">
          <div className="flex flex-col gap-y-3 formHolder bg-bgColor p-[10vmin] 2xl:p-[6vmin] mt-6">
            <p className="text-[4.65vmin] font-bold">Fill Video Details</p>
            <form className="space-y-4 mt-1 ml-2 2xl:text-[2.15vmin]">
              <input
                type="text"
                className="w-[67vmin] p-2"
                id="name"
                placeholder="Enter the video name..."
              />
              <br></br>
              <input
                type="text"
                className="w-[67vmin] p-2"
                id="link"
                placeholder="Enter the video link..."
              />
              <br></br>
              <input
                type="text"
                id="category"
                className="w-[67vmin] p-2"
                placeholder="Enter the category..."
              />
              <br></br>

              <input
                type="text"
                id="timestamp1"
                className="w-[67vmin] p-2"
                placeholder="Enter the timestamp..."
              />
              <br></br>

              <input
                type="text"
                id="timestamp2"
                className="w-[67vmin] p-2"
                placeholder="Enter the timestamp..."
              />
              <br></br>
              <button
                className="p-2 bg-black text-white"
                type="submit"
                onClick={postData}
              >
                Add Video
              </button>
            </form>
          </div>
        </div>
      )}

      {state === 1 && (
        <>
          <div className="flex flex-col w-[100vw] p-2 flex  mt-3">
            <div className="flex gap-x-[7vmin]">
              <div>
                <p
                  className="text-[3.5vmin] 2xl:text-[2.75vmin] font-medium"
                  onClick={() => {
                    document.getElementById(
                      "firstLine1"
                    ).style.backgroundColor = "#000000";
                    document.getElementById("secLine1").style.backgroundColor =
                      "#D3D3D3";
                    setstate1(0);
                  }}
                >
                  Technical
                </p>
                <div
                  id="firstLine1"
                  className="w-[23vmin] 2xl:w-[19vmin] h-[5px] bg-black mt-1"
                ></div>
              </div>
              <div id="code">
                <p
                  id="showOpenings"
                  className="text-[3.5vmin] 2xl:text-[2.75vmin] font-medium"
                  onClick={() => {
                    document.getElementById("secLine1").style.backgroundColor =
                      "#000000";
                    document.getElementById(
                      "firstLine1"
                    ).style.backgroundColor = "#D3D3D3";
                    setstate1(1);
                  }}
                >
                  Non Technical
                  <div
                    id="secLine1"
                    className="w-[23vmin] 2xl:w-[19vmin] h-[5px] bg-lightGrey mt-1"
                  ></div>
                </p>
              </div>
            </div>
          </div>

          {state1 === 0 && (
            <div className="flex justify-center items-center">
              <TechnicalVideo />
            </div>
          )}
          {state1 === 1 && (
            <div className="flex justify-center items-center">
              <NonTechnicalVideo />
            </div>
          )}
        </>
      )}
      <Footer />
    </>
  );
};
export default VideoCMS;
