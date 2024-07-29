import { useLocation } from "react-router-dom";
import { DataCardPost } from "./DataCardPost";
const Interncomplaint = () => {
  const location = useLocation();
  return (
    <DataCardPost
      type="complaint"
      name={location.state.name}
      email={location.state.email}
    />
  );
};
export { Interncomplaint };
