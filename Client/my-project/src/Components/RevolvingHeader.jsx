import Marquee from "react-fast-marquee";
const RevolvingHeader = () => {
  return (
    <Marquee speed={90}>
      <div className="mainBody w-[100vw] p-1 bg-btnColor text-white border-mainText">
        {screen.width < 1700 && (
          <div className="offerHeader flex justify-center text-center">
            <p>Your trusted community</p>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <p>Phone no: +91 7585824862</p>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <p>Best Technical Community</p>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <p>email: codemap2024@gmail.com</p>
          </div>
        )}

        {screen.width >= 1700 && screen.width < 2048 && (
          <div className="offerHeader flex justify-center text-center text-[1.85vmin]">
            <p>Your trusted community</p>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <p>Phone no: +91 7585824862</p>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <p>Best Technical Community</p>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <p>email: codemap2024@gmail.com</p>
          </div>
        )}
        {screen.width >= 2048 && (
          <div className="offerHeader flex justify-center text-center text-[2.35vmin] p-1">
            <p>Your trusted community</p>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <p>Phone no: +91 7585824862</p>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <p>Best Technical Community</p>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <p>email: codemap2024@gmail.com</p>
          </div>
        )}
      </div>
    </Marquee>
  );
};
export default RevolvingHeader;
