import { useState, useEffect } from "react";
import axios from "axios";
import { SyllabusDisplay } from "./SyllabusDisplay";
const TechnicalSyllabus = () => {
  const [data, setData] = useState([]);
  const [state1, setstate1] = useState(0);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "trainings/syllabus")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  const TechnicalData = data.filter((val) => val.category === "Technical");
  const NonTechnicalData = data.filter(
    (val) => val.category === "Non Technical"
  );

  return (
    <>
      <SyllabusDisplay data={TechnicalData}></SyllabusDisplay>
    </>
  );
};

export { TechnicalSyllabus };
