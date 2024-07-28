import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavbarCMS } from "./NavbarCMS";
import Footer from "./Footer";
import axios from "axios";
const InternDocx = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  console.log(location.state.email);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_API_URL}` +
          "interns/data?email=" +
          location.state.email
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const showalert = () => {
    alert("Will be available soon");
  };

  return (
    <>
      <NavbarCMS type="Interns"></NavbarCMS>

      <>
        <p className="text-[9vmin] font-bold ml-2">
          Issued <span className="text-btnColor">Documents</span>
        </p>
        <div className="flex flex-wrap justify-center  items-center gap-x-6 gap-y-5 holder p-10">
          <div className="flex justify-evenly gap-x-7 card p-2 text-black border-grey border-[1px] w-[60vmin] lg:w-[40vmin] text-[4vmin] lg:text-[3vmin]">
            Hiring Letter
            <a
              href={`${import.meta.env.VITE_APP_API_URL}` + data.hiringletter}
              target="_blank"
            >
              <img src="./download.png" height={20} width={20}></img>
            </a>
          </div>

          <div className="flex justify-evenly gap-x-7 card p-2 text-black border-grey border-[1px] w-[60vmin] lg:w-[40vmin] text-[4vmin] lg:text-[3vmin]">
            Reccomendation
            <a onClick={showalert}>
              <img src="./download.png" height={20} width={20}></img>
            </a>
          </div>
          <div className="flex justify-evenly gap-x-7 card p-2 text-black border-grey border-[1px] w-[60vmin] lg:w-[40vmin] text-[4vmin] lg:text-[3vmin]">
            Work Report Letter
            <a onClick={showalert}>
              <img src="./download.png" height={20} width={20}></img>
            </a>
          </div>

          <div className="flex justify-evenly gap-x-7 card p-2 text-black border-grey border-[1px] w-[60vmin] lg:w-[40vmin] text-[4vmin] lg:text-[3vmin]">
            Training Certificate
            <a onClick={showalert}>
              <img src="./download.png" height={20} width={20}></img>
            </a>
          </div>

          <div className="flex justify-evenly gap-x-7 card p-2 text-black border-grey border-[1px] w-[60vmin] lg:w-[40vmin] text-[4vmin] lg:text-[3vmin]">
            Internship Certificate
            <a onClick={showalert}>
              <img src="./download.png" height={20} width={20}></img>
            </a>
          </div>

          <div className="flex justify-evenly gap-x-7 card p-2 text-black border-grey border-[1px] w-[60vmin] lg:w-[40vmin] text-[4vmin] lg:text-[3vmin]">
            Appreciation letter
            <a onClick={showalert}>
              <img src="./download.png" height={20} width={20}></img>
            </a>
          </div>
        </div>
        {console.log(data.hiringletter)}
      </>
      <Footer />
    </>
  );
};
export default InternDocx;
