import { useState, useEffect } from "react";
import CardApply from "./CardApply";
import axios from "axios";
const AcceptersDisplay = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "accepted")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  const TechnicalData = data.filter((val) => val.category === props.type);
  console.log(TechnicalData);

  return (
    <>
      <CardApply data={TechnicalData} type1="accept1" />
    </>
  );
};
export default AcceptersDisplay;
