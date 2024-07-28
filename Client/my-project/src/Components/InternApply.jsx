import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { NavbarCMS } from "./NavbarCMS";
import { useState } from "react";
import axios from "axios";
const InternApply = () => {
  const location = useLocation();
  const [state, setState] = useState({
    selectedFile: null,
    filename: null,
  });
  const fileSelectedHandler = (event) => {
    event.preventDefault();
    let file = event.target.files[0].name;
    setState({
      selectedFile: event.target.files[0],
      filename: document.getElementById("file").value,
    });
    console.log(file);
  };
  const uploadLeave = (e) => {
    e.preventDefault();
    const name = location.state.name;
    const email = location.state.email;
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("filename", state.filename);
    formData.append("file", state.selectedFile);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post(
        `${import.meta.env.VITE_APP_API_URL}` + "interns/apply",
        formData,
        config
      )
      .then((res) => {
        if (res.data.status === 200) {
        } else {
        }
      });
  };

  return (
    <>
      <NavbarCMS type="Interns"></NavbarCMS>
      <div className="mt-4 form-area w-[100vw] flex justify-center items-center p-5 pt-7 pb-8 ">
        <div className="formHolder flex justify-center items-center gap-y-6 w-[96vw] md:w-[70vmin]   border-[1px] p-5 ">
          <form className="flex flex-col justify-center items-center gap-y-4 2xl:text-[2.75vmin]">
            <p className="font-poppins font-bold">
              Upload your Leave Application
            </p>
            <input
              type="file"
              onChange={fileSelectedHandler}
              className="w-[60vmin]"
              id="file"
            ></input>
            <button
              type="submit"
              onClick={uploadLeave}
              className="submit bg-btnColor text-white p-2 mt-3 w-[20vmin]"
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

export default InternApply;
