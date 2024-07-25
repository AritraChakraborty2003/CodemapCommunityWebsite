import axios from "axios";
import moment from "moment";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";
const CardApply = (props) => {
  const navigate = useNavigate();
  const backendLink = `${import.meta.env.VITE_APP_API_URL_GENERAL}`;
  const getPdf = () => {
    const doc = new jsPDF();
    doc.setFont("serif", "normal");
    doc.setFontSize(35);
    doc.text("CodeMap", 44, 21);
    var img = new Image();
    img.src = "./codemap.jpeg";
    doc.addImage(img, "jpeg", 5, 2, 35, 30);
    doc.setFontSize(12);
    doc.text("+91-7585824862", 133, 10);
    doc.text("codemap2024@gmail.com", 133, 17);
    doc.setFontSize(11.5);
    doc.text("1st Floor,IIMT-LBF Incubation Center", 133, 24);
    doc.text("Knowlwdge Park III,Greater Noida,UP", 133, 31);
    doc.text("201310", 133, 38);
    doc.setLineWidth(1);

    doc.line(5, 43, 200, 43);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 133, 52);
    doc.save("document.pdf");
  };
  const postApply = (val) => {
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "accepted", {
        name: val.name,
        email: val.email,
        phone: val.PhoneNumber,
        role: val.role,
        category: val.category,
        resume: val.resume,
      })
      .then((res) => {
        if (res.data.status === 200) {
          axios
            .post(`${import.meta.env.VITE_APP_API_URL}` + "apply/delete", {
              email: val.email,
            })
            .then((res) => {
              if (res.data.status === 200) {
                alert("Updated Successfully");
              } else {
                alert("Something went wrong");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postReject = (val) => {
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "rejected", {
        name: val.name,
        email: val.email,
        phone: val.PhoneNumber,
        role: val.role,
        category: val.category,
        resume: val.resume,
      })
      .then((res) => {
        if (res.data.status === 200) {
          if (res.data.status === 200) {
            axios
              .post(`${import.meta.env.VITE_APP_API_URL}` + "apply/delete", {
                email: val.email,
              })
              .then((res) => {
                if (res.data.status === 200) {
                  alert("Updated Successfully");
                } else {
                  alert("Something went wrong");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            alert("Something went wrong");
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
      {props.data.map((val) => (
        <div className="flex flex-col box-Holder rounded-lg bg-bgColor w-[90vw] pb-3 p-2 md:w-[65vmin] md:h-[50vmin] 2xl:w-[49vmin]  2xl:h-[35vmin] border-[1px] mt-2 ml-3">
          <div className="row1 font-bold text-[4.15vmin] 2xl:text-[4vmin]  ml-1 mt-3">
            <div className="flex gap-x-3">
              <div>
                <p>{val.name}</p>
              </div>
            </div>
          </div>
          <div className="row2  w-[80%] lg:w-[55vmin]  2xl:w-[44vmin] pr-2 pborder-t-[2px] ml-3"></div>
          <div className="row4">
            <p className="ml-[6px] mt-3  2xl:text-[2.15vmin]">
              {" "}
              <b>Role:</b> {val.role}
            </p>
          </div>
          <div className="row3">
            <p className="ml-[6px] mt-3  2xl:text-[2.15vmin]">
              {" "}
              <b>Email:</b> {val.email}
            </p>
          </div>
          {props.type1 === "Accepted" && (
            <>
              <div className="row4">
                <p className="ml-[6px] mt-3  2xl:text-[2.15vmin]">
                  <b>Number: </b>
                  {val.PhoneNumber}
                </p>
              </div>
              <div className="row5">
                <p className="ml-[6px] mt-3  2xl:text-[2.15vmin] mt-[1vmin]">
                  <b>Resume: </b>
                  <a href={backendLink + val.resume} target="_blank">
                    {" "}
                    {val.resume}{" "}
                  </a>
                </p>
              </div>
            </>
          )}

          {props.type1 === "accept1" && (
            <>
              <input type="file" className="file mt-3" />
              <>
                <button
                  className="bg-btnColor text-white p-2 rounded-[3px] mt-2"
                  onClick={getPdf}
                >
                  Generate Hiring Letter
                </button>
                <button className="bg-Green text-white p-2 rounded-[3px] mt-2">
                  Send Email
                </button>
              </>
            </>
          )}
          <div className="flex justify-center items-center mt-4 gap-x-5">
            {props.type === "Apply" && (
              <>
                <button
                  className="bg-btnColor text-white p-2 rounded-[3px]"
                  onClick={() => {
                    postApply(val);
                  }}
                >
                  Accept
                </button>
                <button
                  className="bg-Green text-white p-2 rounded-[3px]"
                  onClick={() => {
                    postReject(val);
                  }}
                >
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
export default CardApply;
