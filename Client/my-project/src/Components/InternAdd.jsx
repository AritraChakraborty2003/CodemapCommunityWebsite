/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import { DataCardPost } from "./DataCardPost";
import { NavbarCMS } from "./NavbarCMS";

const InternAdd = (props) => {
  const location = useLocation();
  return (
    <>
      <DataCardPost
        type="suggestion"
        name={location.state.name}
        email={location.state.email}
      />
    </>
  );
};
export { InternAdd };
