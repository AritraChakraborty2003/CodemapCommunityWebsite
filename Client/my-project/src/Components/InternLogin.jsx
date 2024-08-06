import NavbarGenral from "./NavbarGeneral";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InternLogin = () => {
  const navigate = useNavigate();
  const LoginUser = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const internid = document.getElementById("internid").value;
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "interns/find", {
        email: email,
        internid: internid,
      })
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          if (res.data.name === "Invalid user") {
            alert("Invalid Credentials");
          } else {
            localStorage.setItem("userIntern", "internadmin");
            navigate("/InternDashboard", {
              state: { data: res.data.name, data1: email },
            });
          }
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
      <NavbarGenral />
      <div className="bg-bgColor w-[96w] h-[87vh] md:h-[85vh] flex  justify-center items-center">
        <div className="mt-[-20vmin] lg:mt-0 card w-[87vw] md:w-[80vmin] 2xl:w-[60vmin] p-6  2xl:p-10 border-lightGrey border-[1px] shadow-2xl">
          <form className="flex flex-col gap-y-2">
            <div className="holder flex w-[100%] flex justify-center items-center gap-x-3">
              <div className="imageHolder w-[26vmin] h-[26vmin] md:w-[19vmin] md:h-[19vmin] lg:w-[13vmin] lg:h-[13vmin] ">
                <img
                  src="./CMLogo.png"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <p className="text-[7vmin] lg:text-[5.15vmin] font-bold">
                Intern<span className="text-btnColor">-Login</span>
              </p>
            </div>

            <input
              type="text"
              className="2xl:text-[2.25vmin] p-2 mt-6"
              id="email"
              placeholder="Enter your email...."
            />
            <br></br>
            <input
              type="text"
              className="2xl:text-[2.25vmin] email p-2"
              id="internid"
              placeholder="Enter your internId..."
            />
            <br></br>
            <div className="btnHolder w-[100%] flex justify-center items-center">
              <button
                onClick={LoginUser}
                className="2xl:text-[2.35vmin] p-2 bg-btnColor text-white w-[20vmin]"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export { InternLogin };
