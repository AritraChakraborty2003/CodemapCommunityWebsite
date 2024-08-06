import { NavbarCMS } from "./NavbarCMS";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const TestResult = () => {
  const [data, setData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "questions/attempts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selfObj = data.filter((val) => val.email === location.state.email);
  const score = selfObj[0].score;
  const role = selfObj[0].role;
  console.log(selfObj);
  return (
    <>
      <NavbarCMS type="Interns"></NavbarCMS>
      <p className="text-[5vmin] font-medium">Your Score: {score}</p>
      <p className="text-[4vmin] font-medium">
        Your role: <b>{role}</b>
      </p>
      <Footer />
    </>
  );
};
export default TestResult;
