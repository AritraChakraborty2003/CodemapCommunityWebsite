import { useState, useEffect } from "react";
import axios from "axios";
import Videocard from "./VideosCard";
const NonTechnicalVideo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "videos/trainings")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const NonTechnicalData = data.filter(
    (val) => val.category === "Non Technical"
  );
  console.log(data);

  return (
    <>
      <div className="flex justify-center items-center pb-5">
        <Videocard type="CMS" data={NonTechnicalData} />
      </div>
    </>
  );
};

export { NonTechnicalVideo };
