import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavbarGeneral from "./NavbarGeneral";
import { useState } from "react";
import axios from "axios";

const ApplyPortal = () => {
  const location = useLocation();
  const [state, setState] = useState({
    selectedFile: null,
    filename: null,
  });
  const valueData =
    location.state.data.role + " - " + location.state.data.category;

  const fileSelectedHandler = (event) => {
    event.preventDefault();
    let file = event.target.files[0].name;
    setState({
      selectedFile: event.target.files[0],
      filename: document.getElementById("file").value,
    });
    console.log(file);
  };
  const uploadData = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    let control = true;
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "apply", formData, config)
      .then((res) => {
        if (res.data.status == 200) {
          alert("Upload Successful");
        } else {
          alert("Upload not Successful");
        }
      });
  };

  return (
    <>
      <NavbarGeneral />
      <div className="bannerPart flex flex-col w-[100vw] h-[48vmin] bg-bgColor">
        <p className="text-black font-bold mt-5 ml-3 text-[10vmin] lg:text-[12vmin]">
          Application <span className="text-btnColor">Portal</span>
        </p>
        <p className="ml-3 text-[3.5vmin] font-popins">
          (Please Fill the details in the form to apply for the role)
        </p>
      </div>
      <div className="form-area w-[100vw] flex justify-center items-center p-5 pt-7">
        <div className="formHolder flex justify-center items-center gap-y-6 w-[96vw] md:w-[70vmin]   border-[1px] p-5 ">
          <form className="flex flex-col justify-center items-center gap-y-4 ">
            <input
              type="text"
              id="name"
              placeholder="Enter name..."
              className="w-[60vmin] border-b-[1px]"
            ></input>
            <br></br>
            <input
              type="email"
              id="email"
              placeholder="Enter email..."
              className="w-[60vmin] border-b-[1px]"
            ></input>
            <br></br>
            <input
              type="phone"
              id="phone"
              placeholder="Enter phone no..."
              className="w-[60vmin] border-b-[1px]"
            ></input>
            <br></br>
            <input
              type="text"
              value={valueData}
              readOnly
              className="w-[60vmin] border-b-[1px]"
            ></input>
            <br></br>
            <p className="font-poppins font-bold">Upload your resume</p>
            <input
              type="file"
              className="w-[60vmin]"
              id="file"
              onChange={fileSelectedHandler}
            ></input>
            <button
              type="submit"
              className="submit bg-btnColor text-white p-2 mt-3 w-[20vmin]"
              onClick={uploadData}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ApplyPortal;
