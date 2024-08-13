import jsPDF from "jspdf";
import moment from "moment";
const Termination = () => {
  const getPdf = () => {
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

    doc.text("Date: " + moment().format("Do MMM YYYY"), 133, 52);
    doc.setFontSize(15);
    doc.setFont("roboto", "bold");
    doc.text("Subject: Letter of Internship Termination", 10, 61);

    doc.setFont("roboto", "bold");
    doc.setFontSize(18);
    doc.text("Mayank Saini" + ",", 10, 80);
    doc.setFontSize(16);
    doc.setFont("roboto", "normal");

    doc.text(
      "We regret to inform you that after careful consideration, we have decided to",
      10,
      93
    );
    doc.text(
      `terminate your internship with Codemap, effective from 13th Aug 2024.The decision `,
      10,
      101
    );
    doc.text(
      `was not made lightly and is due to your misconduct and your lack of interest in `,
      10,
      109
    );
    doc.text(
      `collaboration within the Technical team hereafter.From the date 13th Aug. 2024 `,
      10,
      117
    );
    doc.text(
      `the joining letter which is previously issued is not valid and shall not be considered  `,
      10,
      125
    );
    doc.text(`with InternId: Mayank0307.`, 10, 133);
    doc.text(`Return of Company Property: Null to return`, 10, 141);
    doc.text(`Final Responsibilities:No further responsibility`, 10, 148);
    doc.text(
      `Acknowledgment of Contributions:We appreciate the contributions you have made  `,
      10,
      156
    );
    doc.text(
      `during your time with Codemap.While the internship is ending earlier `,
      10,
      164
    );

    doc.text(
      `than expected, we hope the experience has been beneficial for your professional`,
      10,
      172
    );
    doc.text(`growth.`, 10, 180);

    var img1 = new Image();
    img1.src = "./AbhiSign.jpeg";
    doc.addImage(img1, "jpeg", 14, 235, 25, 25);

    doc.text("Abhishek Kr. Pandey", 10, 262);
    doc.text("(Managing Partner)", 10, 270);

    var img3 = new Image();
    img3.src = "./CodeMapStamp.png";
    doc.addImage(img3, "png", 80, 230, 35, 35);

    var img2 = new Image();
    img2.src = "./AriSign.png";
    doc.addImage(img2, "png", 155, 235, 25, 25);

    doc.text("Aritra Chakraborty", 150, 262);
    doc.text("(Managing Partner)", 150, 270);

    doc.save("internship_terminationetter.pdf");
  };
  return (
    <button onClick={getPdf} className="bg-black text-white p-2">
      Button
    </button>
  );
};

export { Termination };
