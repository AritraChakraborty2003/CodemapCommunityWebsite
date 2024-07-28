import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const InternTraining = () => {
  const navigate = useNavigate();

  return (
    <>
      {(localStorage.getItem("user") === "Admin2024" && (
        <p>This is InternTraining</p>
      )) || <Navigate to="/InternLogin" />}
    </>
  );
};
export default InternTraining;
