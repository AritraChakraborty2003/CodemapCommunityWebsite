import { useNavigate } from "react-router-dom";

const CmsLogin = () => {
  const navigate = useNavigate();
  const LoginUser = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (
      (email === "aritra.codemap2024@gmail.com" &&
        password === "Aritra0307@2024") ||
      (email === "animetra14@gmail.com" && password === "Anish0307@2024") ||
      (email === "abhishek.codemap2024@gmail.com" &&
        password === "Abhi0307@2024")
    ) {
      localStorage.setItem("user", "Admin2024");
      navigate("/CMSOpenings");
    }
  };
  return (
    <>
      <div className="bg-bgColor w-[100vw] h-[100vh] flex  justify-center items-center">
        <div className="card w-[96vw] lg:w-[80vmin] 2xl:w-[60vmin] p-8 2xl:p-10 border-lightGrey border-[1px] shadow-2xl">
          <form className="flex flex-col gap-y-2">
            <div className="holder flex w-[100%] flex justify-center items-center gap-x-3">
              <div className="imageHolder w-[26vmin] h-[26vmin] lg:w-[19vmin] lg:h-[19vmin] lg:w-[13vmin] lg:h-[13vmin] ">
                <img
                  src="./CM_CMS.png"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>

              <p className="text-[7vmin] lg:text-[5.15vmin] font-bold">
                CMS<span className="text-btnColor">-Login</span>
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
              type="password"
              className="2xl:text-[2.25vmin] email p-2"
              id="password"
              placeholder="Enter your password..."
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
export default CmsLogin;
