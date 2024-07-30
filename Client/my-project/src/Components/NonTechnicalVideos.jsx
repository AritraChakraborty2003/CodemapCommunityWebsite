import { useEffect, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import axios from "axios";

const NonTechnicalVideos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "videos/trainings")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  console.log(data);
  const NonTechnicalData = data.filter(
    (val) => val.category === "NonTechnical"
  );
  return <VideoPlayer data={NonTechnicalData}></VideoPlayer>;
};
export { NonTechnicalVideos };
