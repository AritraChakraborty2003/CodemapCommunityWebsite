import { useState, useEffect } from "react";
import axios from "axios";
import Videocard from "./VideosCard";
const TechnicalVideo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "videos/trainings")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const TechnicalData = data.filter((val) => val.category === "Technical");
  console.log(data);

  return (
    <>
      <div className="flex justify-center items-center pb-5">
        <Videocard type="CMS" data={TechnicalData} />
      </div>
    </>
  );
};

export { TechnicalVideo };
