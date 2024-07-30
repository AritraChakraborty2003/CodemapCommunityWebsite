import { useEffect, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import axios from "axios";

const TechnicalVideos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "videos/trainings")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  console.log(data);
  const TechnicalData = data.filter((val) => val.category === "Technical");
  return <VideoPlayer data={TechnicalData}></VideoPlayer>;
};
export { TechnicalVideos };
