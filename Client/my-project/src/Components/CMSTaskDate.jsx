import Footer from "./Footer";
import { NavbarCMS } from "./NavbarCMS";
import axios from "axios";

const CMSTaskDate = () => {
  const updateDeadline = (e) => {
    e.preventDefault();
    const deadline = document.getElementById("deadline").value;
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "deadline", {
        date: deadline,
      })
      .then((res) => {
        if (res.data.status === 200) {
          alert("Data added successfully");
        } else {
          alert("Data removed successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="p-10 flex justify-center items-center ">
        <form className="flex flex-col gap-y-5 p-5 w-[95vw] md:w-[70vmin]  border-lightGrey border-[1px]">
          <p className="text-[5vmin] font-bold">Enter the deadline date</p>
          <input
            type="text"
            name="deadline"
            className="p-2 border-lightGrey border-b-[1px]"
            id="deadline"
            placeholder="Enter deadline date..."
          />
          <button
            className="bg-black p-2 text-white w-[25vmin]"
            onClick={updateDeadline}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export { CMSTaskDate };
