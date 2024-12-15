import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavbarGeneral from "./NavbarGeneral";
import { useState } from "react";
import axios from "axios";

const ApplyPortal = () => {
  const navigate = useNavigate();
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

    if (name != "" && email != "" && phone != "") {
      const role = location.state.data.role;
      const category = location.state.data.category;
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("filename", state.filename);
      formData.append("file", state.selectedFile);
      formData.append("role", role);
      formData.append("category", category);
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      // let control = true;
      axios
        .post(`${import.meta.env.VITE_APP_API_URL}` + "apply", formData, config)
        .then((res) => {
          if (res.data.status == 200) {
            navigate("/success");
          } else {
            alert("Something went wrong");
          }
        });
    } else {
      alert("All fields are mandatory");
    }
  };

  return (
    <>
      <NavbarGeneral />
      <div className="bannerPart flex flex-col w-[100vw] h-[48vmin] 2xl:h-[35vmin] bg-bgColor">
        <p className="text-black font-bold mt-5 ml-[4vmin] text-[10vmin] lg:text-[12vmin] 2xl:text-[10vmin]">
          Application <span className="text-btnColor">Portal</span>
        </p>
        <p className="ml-[4vmin] text-[3.5vmin] font-popins">
          (Please Fill the details in the form to apply for the role)
        </p>
      </div>
      <div className="mt-4 form-area w-[100vw] flex justify-center items-center p-5 pt-7 pb-8 ">
        <div className="formHolder flex justify-center items-center gap-y-6 w-[96vw] md:w-[70vmin]   border-[1px] p-5 ">
          <form className="flex flex-col justify-center items-center gap-y-4 2xl:text-[2.75vmin]">
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
