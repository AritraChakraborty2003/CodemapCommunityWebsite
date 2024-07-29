import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { NavbarCMS } from "./NavbarCMS";
import InternCard from "./InternCard";
import Footer from "./Footer";

const InternDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const displayObj = [
    {
      image: "./TrainingsIntern.png",
      details: "Intern Training",
    },
    {
      image: "./issuedDoc.png",
      details: "Issued Docx",
    },
    {
      image: "./LeaveApply.png",
      details: " Apply Leave",
    },
    {
      image: "./TaskAllocation.png",
      details: "Task Allocation ",
    },
    { image: "./scoreandleaderboard.png", details: "Check Score" },
    { image: "./suggestionicon.png", details: " Add suggestion" },
    { image: "./complaint.png", details: "Box complaint" },
  ];

  return (
    <>
      {(localStorage.getItem("userIntern") === "internadmin" && (
        <>
          <NavbarCMS type="Interns" />
          <p className="text-[5.75vmin] font-bold ml-3">
            Welcome{" "}
            <span className="text-btnColor text-[6vmin] font-poppins">
              {location.state.data.split(" ")[0]}
            </span>
            ,
          </p>

          <div className="w-[100vw] mt-8 flex justify-center  ml-[-2vmin] lg:ml-[-2vmin] items-center mt-2  gap-x-9 2xl:gap-x-12 flex-wrap  pb-10 gap-y-10">
            <InternCard
              data={displayObj}
              name={location.state.data}
              email={location.state.data1}
            ></InternCard>
          </div>
        </>
      )) || <Navigate to="/InternLogin"></Navigate>}

      <Footer />
    </>
  );
};
export { InternDashboard };
