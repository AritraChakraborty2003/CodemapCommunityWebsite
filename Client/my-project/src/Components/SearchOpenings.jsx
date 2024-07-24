import NavbarGeneral from "./NavbarGeneral";
import Footer from "./Footer";
import CareerCard from "./CareerCard";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";
const SearchOpenings = () => {
  const location = useLocation();
  return (
    <>
      <NavbarGeneral />
      <div className="h-[26vmin] flex justify-center items-center">
        <SearchBar table="Openings" />
      </div>
      {(location.state.data.length === 0 && (
        <div className="w-[100vw] mt-6 flex justify-center  ml-[-2vmin] lg:ml-[-2vmin] items-center mt-2  gap-x-8 2xl:gap-x-12 flex-wrap  pb-10 gap-y-10">
          <p className="text-[5vmin] font-medium">No results found...</p>
        </div>
      )) || (
        <div className="w-[100vw] mt-6 flex justify-center  ml-[-2vmin] lg:ml-[-2vmin] items-center mt-2  gap-x-8 2xl:gap-x-12 flex-wrap  pb-10 gap-y-10">
          <CareerCard data={location.state.data} type="Non CMS" />
        </div>
      )}

      <Footer />
    </>
  );
};
export default SearchOpenings;
