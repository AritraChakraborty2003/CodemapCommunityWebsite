import { useEffect, useState } from "react";
import Footer from "./Footer";
import { NavbarCMS } from "./NavbarCMS";
import { useLocation } from "react-router-dom";
import axios from "axios";
import TaskCard from "./TaskCard";
import { ReferenceArea } from "./ReferenceArea";

const InternAllocation = () => {
  const [state, setstate] = useState(0);
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_API_URL}` +
          `task/data?email=${location.state.email}&attempted=false`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <>
      <NavbarCMS type="Interns" />

      <div className="flex flex-col w-[100vw] p-2 flex justify-center items-center mt-3">
        <div className="flex gap-x-[15vmin]">
          <div>
            <p
              className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
              onClick={() => {
                document.getElementById("firstLine").style.backgroundColor =
                  "#000000";
                document.getElementById("secLine").style.backgroundColor =
                  "#D3D3D3";
                setstate(0);
              }}
            >
              Allocated Tasks
            </p>
            <div
              id="firstLine"
              className="w-[23vmin] 2xl:w-[19vmin] h-[5px] bg-black mt-1"
            ></div>
          </div>
          <div id="code">
            <p
              id="showOpenings"
              className="text-[4vmin] 2xl:text-[2.75vmin] font-medium"
              onClick={() => {
                document.getElementById("secLine").style.backgroundColor =
                  "#000000";
                document.getElementById("firstLine").style.backgroundColor =
                  "#D3D3D3";
                setstate(1);
              }}
            >
              Reference Data
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
          <TaskCard data={data} email={location.state.email} />
        </>
      )}

      {state === 1 && (
        <>
          <ReferenceArea project={data[0].projectname} />
        </>
      )}
      <Footer />
    </>
  );
};
export { InternAllocation };
