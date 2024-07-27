import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { NavbarCMS } from "./NavbarCMS";

const InternDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {(localStorage.getItem("userIntern") === "internadmin" && (
        <>
          <NavbarCMS />
          <p>{location.state.data}</p>
          <button
            onClick={() => {
              localStorage.removeItem("userIntern");
              navigate("/InternLogin");
            }}
            className="bg-black text-white p-2"
          >
            Logout
          </button>
        </>
      )) || <Navigate to="/InternLogin"></Navigate>}
    </>
  );
};
export { InternDashboard };
