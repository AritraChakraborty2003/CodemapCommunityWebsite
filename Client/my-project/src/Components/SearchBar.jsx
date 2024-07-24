import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "Openings")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const searchData = () => {
    const role = document.getElementById("role").value;
    const filterData = data.filter((val) => val.role === role);
    navigate("/searchOpenings", { state: { data: filterData } });
  };
  return (
    <>
      <div className="flex gap-x-2 p-1 pr-2 lg:pr-0 holder w-[86vmin] border-gray border-[1px]">
        <input
          type="text"
          id="role"
          className="w-[80vmin] p-2 "
          placeholder="Enter your role..."
        />
        <div className="image-Holder w-[9vmin] h-[9vmin] md:w-[8vmin] md:h-[6vmin] mt-1 md:mt-0">
          <img
            src="./search.webp"
            className="max-w-full max-h-full object-contain"
            onClick={searchData}
          ></img>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
