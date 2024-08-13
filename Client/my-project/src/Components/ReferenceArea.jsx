import axios from "axios";
import { useEffect, useState } from "react";

const ReferenceArea = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_API_URL}` +
          "references/data?projectname=" +
          props.project
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="pb-10 pt-5 flex justify-center items-center 2xl:mt-[3vmin]">
        <div className="flex  justify-center items-center w-[75vmin] md:w-[55vmin] gap-x-[4vmin] p-2 formHolder border-lightGrey border-[1px]">
          <p className="text-[4vmin] md:text-[3vmin]">
            Technical Documentation
          </p>

          {data.length === 0 && <p>Loading...</p>}
          {data.length > 0 && (
            <div className="imageHolder h-[4vmin] w-[4vmin] ">
              <a
                href={`${import.meta.env.VITE_APP_API_URL_1}` + data[0].file}
                target="_blank"
              >
                <img
                  src="./download.png"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export { ReferenceArea };
