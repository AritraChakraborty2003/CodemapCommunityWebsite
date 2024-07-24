import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { NavbarCMS } from "./NavbarCMS";

const CMSApply = () => {
  const navigate = useNavigate();

  return (
    <>
      {(localStorage.getItem("user") === "Admin2024" && (
        <>
          <NavbarCMS />

          <Footer />
        </>
      )) || <Navigate to="/CMSLogin"></Navigate>}
    </>
  );
};
export default CMSApply;
