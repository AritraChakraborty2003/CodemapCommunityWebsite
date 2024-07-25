import axios from "axios";
import { useEffect, useState } from "react";
import CareerCard from "./CareerCard";
import CardApply from "./CardApply";
const RejecterDisplay = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "rejected")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const TechnicalData = data.filter((val) => val.category === props.type);
  console.log(TechnicalData);

  return (
    <>
      <CardApply data={TechnicalData} type1="Accepted" />
    </>
  );
};

export { RejecterDisplay };
