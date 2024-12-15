/* eslint-disable react/prop-types */
// import Navbar from "./Navbar";
import { NavbarCMS } from "./NavbarCMS";
import Footer from "./Footer";
import axios from "axios";
const DataCardPost = (props) => {
  const uploadData = (e) => {
    e.preventDefault();
    const msg = document.getElementById("msg").value;

    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + props.type + "/interns", {
        name: props.name,
        email: props.email,
        message: msg,
      })
      .then((res) => {
        if (res.data.status === 200) {
          alert("Data sent successfully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <NavbarCMS type="Interns"></NavbarCMS>
      <form className=" flex justify-center items-center pb-5">
        <div className="mt-5 bg-bgColor w-[85vw] h-[60vmin] lg:w-[75vmin]  flex flex-col justify-center items-center">
          <p className="text-[4.25vmin] font-bold">
            Please share your{" "}
            <span className="text-btnColor">{props.type}</span>
          </p>
          <textarea
            cols="40"
            rows="6"
            placeholder="Enter message..."
            className="border-[1px] mt-2 p-2"
            id="msg"
          ></textarea>
          <button
            className="bg-btnColor text-white p-2 mt-4"
            onClick={uploadData}
          >
            Add {props.type}
          </button>
        </div>
      </form>

      <Footer />
    </>
  );
};
export { DataCardPost };
