import axios from "axios";
import moment from "moment";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const CardApply = (props) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    selectedFile: null,
    filename: null,
  });

  const fileSelectedHandler = (event, ind) => {
    event.preventDefault();
    let file = event.target.files[0].name;
    setState({
      selectedFile: event.target.files[0],
      filename: document.getElementById("file" + ind).value,
    });

    console.log(file);
  };

  const sendEmail = (val) => {
    const name1 = val.name;
    const email = val.email;
    const role = val.role;
    const internid = name1.split(" ")[0] + "0307";
    let formData = new FormData();
    formData.append("name", name1);
    formData.append("email", email);
    formData.append("filename", state.filename);
    formData.append("file", state.selectedFile);
    formData.append("role", role);
    formData.append("internid", internid);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    let control = true;
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "interns", formData, config)
      .then((res) => {
        if (res.data.status == 200) {
          alert("Email Sent");
        } else {
          alert("Something went wrong");
        }
      });
  };

  const backendLink = `${import.meta.env.VITE_APP_API_URL_GENERAL}`;

  const responsibilites = {
    "Backend Developer": [
      "Work on developing the backend as per business use case",
      "Build and manage robust APIs",
      "Handling client requests as per the need of the app",
      "Work with technologies like SQL & NOSQL Databases, node.js, express.js, django",
    ],
    "Frontend Developer": [
      "Develop and code the frontend design and logic as per the UI/UX teams suggestions",
      "Use technologies lik HTML, CSS, JS, Tailwind CSS and react.js to develop the frontend",
      "Integrate APIs within the frontend of web app as per the need of the application",
      "Make responsive designs & assure input validation before submitting it to backend",
    ],
    "Fullstack Developer": [
      "Develop robust MERN stack and django app end to end",
      "Work and manage both frontend and backend of application",
      "Manage code documentation and backend security",
      "Work on deployment and hosting of the web application ",
    ],

    "Android Developer": [
      "Work on to build and manage android applications",
      "Work on Java and Kotlin to create android application",
      "Design the UI of the app on the suggestions of  UI and management team",
      "Manage application deployment on playstore and monitor it",
    ],
    "UI/UX Designer": [
      "Design and plan out UI/UX of application with regards to business use case",
      "Provide UI/UX proposal to the team and management",
      "Work on to improve and upgrade existing UI/UX of platform",
      "Collaborate with development team to provide them proper UI documentation",
    ],
    "AI/ML Developer": [
      "Ideate and plan out the business use cases of AI/ML",
      "Solve the technical and business problems with AI/ML principles",
      "Carry out research and be updated on recent improvements in the AI/ML world",
      "Build and Deploy AI/ML models which would help to enhance the app experience of the users",
    ],
    "Project Manager": [
      "Managing projects and make the team to adhere to deadlines",
      "Design and ideate new concepts/ideas within the application",
      "Participate in event management of online events from the technical side",
      "Work closely on technical and management team on addition of new features",
    ],
    "Web Developer": [
      "Work on HTML,CSS,JS,Tailwind CSS and react.js to create static web pages",
      "Work on PHP based projects and manage its deployment",
      "Design the main business web page for codemap and update it regularly",
      "Work with Fullstack developer on required frontend tasks to improve task efficiency",
    ],
    "Cybersecurity Analyst": [
      "Threat detection and analysis within the web application",
      "Incident response and mitigation of potential cyber risks on the firm",
      "Risk assesment and presenting the report of all cyber security documents to  the management",
      "Manage proper server logs and work closely with Development Team to enhance  security",
    ],
    SMM: [
      "Manage and handle social media strategy",
      "Work on engaging content creation",
      "Formulate growth and planing Strategy to team",
      "Growth Management accross platforms like linkedin,instagram etc",
    ],
    SMC: [
      "Coordinate and assist SMM in operations",
      "Consistent posting of updates and posts",
      "Schedule a plan for consistent posts and updates",
      "Work with SMM to ensure social media growth",
    ],
    SMA: [
      "To analyze,track and report social media growth",
      "Follow and update the SMM on recent Trends",
      "Optimize the social media strategy by enganing audience analysis",
      "Report the analysis of the audience engagement to the management",
    ],
    "WB Regional Head": [
      "To manage opertations of student clubs in WB Region",
      "Grow and build the network of codemap accross colleges and schools",
      "Engage audience and plan to organize online events accordingly in the region",
      "Engage and expand the student clubs in the region with proper reports",
    ],
    "MH Regional Head": [
      "To manage opertations of student clubs in MH Region",
      "Grow and build the network of codemap accross colleges and schools",
      "Engage audience and plan to organize online events accordingly in the region",
      "Engage and expand the student clubs in the region with proper reports",
    ],
    "Content Writer": [
      "Create content for blogs and social media posts",
      "Grow the content engagement of the audience",
      "Prepare topic specific and audience specific content for social media and blogs",
      "Collaborate with social media team to work on",
    ],
    "Video Editor": [
      "Edit videos , reels to be posted for social media",
      "Edit the videos, reels such that it ensures proper engagement and align to business use case",
      "Edit and add special effect to videos as per the requirement",
      "Collaborate with Social media team to work for ensuring engagements in the posts",
    ],
    "PR and Media": [
      "Work for PR and to increase the media reach of the firm",
      "Promote our firm in events and talks and manage the online events from management aspect",
      "Organize podcasts around technology and increase our brand awareness",
      "manage all the media platform of the firm primarily the social media",
    ],
    "Graphic Designer": [
      "Design the e-banners and posters for the social media posts",
      "Design e-banner for technical events to be organized",
      "Design e-banners ans post designs for special days",
      "Work with social media team for the design suggestions and post updates",
    ],
    "Content Researcher": [
      "Research the proper content to write for social media posts",
      "Work closely with content writer to manage and execute  the writeup over the researched topic",
      "Prepare and weekly content report and send it to the social media team",
      "Research on tending topic on technology and also the cultural trends to enhance engagement",
    ],
  };

  const getPdf = (val) => {
    const doc = new jsPDF();
    doc.setFont("serif", "normal");
    doc.setFontSize(35);
    doc.text("CodeMap", 44, 24);
    var img = new Image();
    img.src = "./codemap.jpeg";
    doc.addImage(img, "jpeg", 5, 2, 35, 35);
    doc.setFontSize(12);
    doc.text("+91-8090570646 , 7585824862", 133, 10);
    doc.text("codemap2024@gmail.com", 133, 17);
    doc.setFontSize(11.5);
    doc.text("1st Floor,IIMT LBF Incubation Center", 133, 24);
    doc.text("Knowlwdge Park III,Greater Noida,UP", 133, 31);
    doc.text("201310", 133, 38);
    doc.setLineWidth(0.5);

    doc.line(5, 43, 200, 43);

    doc.text("Intern ID: " + val.name.split(" ")[0] + "0307", 10, 55);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 133, 52);

    doc.setFont("roboto", "bold");
    doc.setFontSize(18);
    doc.text("Dear " + val.name + ",", 10, 70);
    doc.setFontSize(14);
    doc.setFont("roboto", "normal");
    doc.text(
      "This is in response to your application for the internship applied to Codemap.Based on",
      10,
      78
    );
    doc.text(
      `your profile , skills and resume we shortlisted you and are pleased to offer you a position of a`,
      10,
      86
    );
    doc.text(
      `${val.role} intern in our firm and we  believe you will make a valuable contribution `,
      10,
      94
    );
    doc.setFont("roboto", "bold");
    doc.text(
      `to team.The benefits and perks associated with the internship are as follows:-`,
      10,
      102
    );
    doc.setFont("roboto", "normal");

    doc.text("1. Recommendation Letter ", 10, 110);
    doc.text(
      "2. Detailed work report on contributions over a specific project ",
      10,
      118
    );
    doc.text("3. Networking Oppurtunites", 10, 126);
    doc.text(
      "4. Flexible Work Hours (10 hours per week recommended)  ",
      10,
      134
    );
    doc.text(
      "5. Chance of getting a PPO oppurtunity on top performance",
      10,
      142
    );
    doc.text(
      "6. Work on real world projects and get hands on training support with certifications",
      10,
      150
    );
    doc.text(
      "7. Get appreciation certificates for being a top performing intern in the firm based on work",
      10,
      158
    );
    doc.setFont("roboto", "bold");
    doc.text(
      `The roles and responsibilites for the ${val.role} intern role in the firm are:`,
      10,
      166
    );
    let role1 = val.role;
    console.log(responsibilites[role1]);
    doc.setFont("roboto", "normal");
    doc.text(`1.${responsibilites[role1][0]}`, 10, 174);
    doc.text(`2.${responsibilites[role1][1]}`, 10, 182);
    doc.text(`3.${responsibilites[role1][2]}`, 10, 190);
    doc.text(`4.${responsibilites[role1][3]}`, 10, 198);

    doc.setFont("roboto", "bold");
    doc.text(
      "The details of the internship oppurtunity are as follows:",
      10,
      206
    );
    doc.setFont("roboto", "normal");
    doc.text("Type: Unpaid", 10, 214);
    doc.text(
      "Work-Hours: Flexible work hours(10 hours per week recommended)",
      10,
      222
    );
    doc.text("Mode & Duration: Online & duration is 3 months", 10, 230);
    if (val.category === "Technical")
      doc.text("Reporting To: Mr. Aritra Chakraborty", 10, 238);
    else doc.text("Reporting To: Mr. Abhishek Kr. Pandey", 10, 238);
    doc.text("Joining Date: 28th July 2024", 10, 246);
    var img1 = new Image();
    img1.src = "./AbhiSign.jpeg";
    doc.addImage(img1, "jpeg", 14, 257, 25, 25);

    doc.text("Abhishek Kr. Pandey", 10, 285);
    doc.text("(Managing Partner)", 10, 290);

    var img3 = new Image();
    img3.src = "./CodeMapStamp.png";
    doc.addImage(img3, "png", 80, 253, 35, 35);

    if (val.category === "Technical") {
      var img2 = new Image();
      img2.src = "./AriSign.png";
      doc.addImage(img2, "png", 155, 257, 25, 25);

      doc.text("Aritra Chakraborty", 150, 285);
      doc.text("(Managing Partner)", 150, 290);
    }
    doc.save(
      val.name.split(" ")[0] +
        "_" +
        val.name.split(" ")[1] +
        "_internship_joiningletter.pdf"
    );
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
      {props.data.map((val, ind) => (
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
              <input
                type="file"
                className="file mt-3"
                id={"file" + ind}
                onChange={(e) => {
                  fileSelectedHandler(e, ind);
                }}
              />
              <>
                <button
                  className="bg-btnColor text-white p-2 rounded-[3px] mt-2"
                  onClick={() => {
                    getPdf(val);
                  }}
                >
                  Generate Hiring Letter
                </button>
                <button
                  className="bg-Green text-white p-2 rounded-[3px] mt-2"
                  onClick={() => {
                    sendEmail(val);
                  }}
                >
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
