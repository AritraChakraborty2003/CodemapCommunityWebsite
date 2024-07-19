import "./input.css";
const Footer = () => {
  return (
    <>
      <div className="footerHolder bg-bgColor flex flex-col justify-center items-center h-[120vh] lg:h-[80vh]">
        <div className="flex flex-col justify-center items-center row1 h-[40vh] lg:h-[40vh] w-[100vw]">
          <div className="logoHolder flex  gap-x-4  justify-center items-center">
            <div className="logoPic h-[25vmin] w-[25vmin] lg:h-[17vmin] lg:w-[17vmin]">
              <img
                src="./CMLogo.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <div className="logoText">
              <p className="text-[9vmin] font-bold">
                Code<span className="text-btnColor">Map</span>
              </p>
            </div>
          </div>

          <div className="emailBoxHolder flex h-[10vmin] lg:h-[7vmin] mt-[7vmin] lg:mt-6">
            <input
              type="text"
              className="w-[80vw] lg:w-[48vw] p-1 lg:p-3"
              placeholder="Enter your mail..."
            ></input>

            <div className="imageHolder h-[10vmin] lg:h-[7vmin] bg-lightBlue p-2">
              <img
                src="./sendicon.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
          </div>
        </div>
        <div className="row2 flex justify-evenly items-center flex-wrap h-[70vh] lg:h-[30vh] border-2 w-[100vw]">
          <div className="col1 w-[40vmin] border-2">1</div>
          <div className="col2 w-[40vmin] border-2">2</div>
          <div className="col3 w-[40vmin] border-2">3</div>
        </div>
        <div className="row3 flex justify-center items-center h-[10vh]  lg:h-[10vh]  w-[96vw] p-2">
          <p>Copyright &copy; 2024 Codemap partners.All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
