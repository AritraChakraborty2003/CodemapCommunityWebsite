/* eslint-disable no-unused-vars */
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarGeneral from "./NavbarGeneral";
import { NavbarCMS } from "./NavbarCMS";
import { useEffect, useState } from "react";
import CareerCard from "./CareerCard";
import { useNavigate } from "react-router-dom";
const CMSOpenings = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("user") != "Admin2024") {
    navigate("/CMSLogin");
  }
  const [state, setstate] = useState(0);
  const [state1, setstate1] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "openings")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  const addPosition = (e) => {
    e.preventDefault();

    const role = document.getElementById("role").value;
    const description = document.getElementById("description").value;
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "Openings", {
        role: role,
        description: description,
        type: type,
        category: category,
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

  console.log(data);
  const TechnicalData = data.filter((val) => val.category === "Technical");
  const NonTechnicalData = data.filter(
    (val) => val.category === "Non Technical"
  );
  console.log(TechnicalData);

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
              Add Openings
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
              Show Openings
              <div
                id="secLine"
                className="w-[23vmin] 2xl:w-[19vmin] h-[5px] bg-lightGrey mt-1"
              ></div>
            </p>
          </div>
        </div>
      </div>
      {state === 0 && (
        <>
          <div className="flex flex-col w-[100vw] pb-10 p-3 flex justify-center items-center">
            <div className="flex flex-col gap-y-3 formHolder bg-bgColor p-[10vmin] 2xl:p-[6vmin] mt-6">
              <p className="text-[4.65vmin] font-bold">Fill Openings Details</p>
              <form className="space-y-4 mt-1 ml-2 2xl:text-[2.15vmin]">
                <input
                  type="text"
                  className="w-[67vmin] p-2"
                  id="role"
                  placeholder="Enter the role name..."
                />
                <br></br>
                <input
                  type="text"
                  className="w-[67vmin] p-2"
                  id="description"
                  placeholder="Enter the description..."
                />
                <br></br>
                <input
                  type="text"
                  id="type"
                  className="w-[67vmin] p-2"
                  placeholder="Enter the type..."
                />
                <br></br>
                <input
                  type="text"
                  id="category"
                  className="w-[67vmin] p-2"
                  placeholder="Enter the category of role..."
                />
                <br></br>
                <button
                  className="p-2 bg-black text-white"
                  type="submit"
                  onClick={addPosition}
                >
                  Add Position
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </>
      )}

      {state === 1 && (
        <>
          <div className="flex flex-wrap  pt-[4vmin] pb-[6vmin] gap-y-4 gap-x-8 ml-6 mt-4">
            <div className="flex gap-x-[5vmin]">
              <div>
                <p
                  className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
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
                  className="w-[18vmin] 2xl:w-[14vmin] h-[5px] bg-black mt-1"
                ></div>
              </div>

              <div id="code">
                <p
                  id="showOpenings"
                  className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
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
                    className="w-[21vmin] 2xl:w-[18vmin] h-[5px] bg-lightGrey mt-1"
                  ></div>
                </p>
              </div>
            </div>
          </div>

          {state1 === 0 && (
            <div className="w-[100vw] flex justify-center  ml-[-2vmin] lg:ml-[-2vmin] items-center mt-2  gap-x-8 2xl:gap-x-12 flex-wrap  pb-10 gap-y-10">
              <CareerCard data={TechnicalData} type="CMS" />
            </div>
          )}

          {state1 === 1 && (
            <>
              <div className="w-[100vw] flex justify-center items-center mt-4 ml-[-2vmin] lg:ml-0 gap-x-8 2xl:gap-x-12 flex-wrap  pb-10 gap-y-10">
                <CareerCard data={NonTechnicalData} type="CMS" />
              </div>
            </>
          )}

          {state === 2 && (
            <>
              <p>This is code</p>
            </>
          )}
          <Footer />
        </>
      )}
    </>
  );
};
export { CMSOpenings };
