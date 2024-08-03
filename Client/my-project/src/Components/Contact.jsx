import axios from "axios";
const Contact = () => {
  const UploadData = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(`${import.meta.env.VITE_APP_API_URL}`);

    if (name === "" || email === "" || message === "") {
      alert("All fields are mandatory");
    } else {
      axios
        .post(`${import.meta.env.VITE_APP_API_URL}` + "messages", {
          name: name,
          email: email,
          message: message,
        })
        .then((res) => {
          if (res.data.status === 200) {
            alert("Data Added Successfully");
          } else {
            alert("Something went wrong");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //console.log([name, email, message]);
  };
  return (
    <>
      <div className="aboutHolder  w-[100vw] ml-[2vmin] 2xl:h-full 2xl:pb-[10vmin] mt-5 pb-[11vmin]">
        <h1 className="mt-6 2xl:mt-10  font-poppins font-bold text-[12vmin]">
          <span className="text-btnColor">Contact-</span>Us
        </h1>
        <div className="about-area flex justify-center items-center flex-wrap-reverse ml-[-2vmin]">
          {(screen.width <= 900 && (
            <>
              <div className="text-area w-[95vw] md:w-[80vw]  mt-[6vmin]  border-[2px] p-3 flex flex-col justify-center items-center">
                <p className="text-[4vmin] font-bold font-poppins">
                  Please fill the details...
                </p>
                <div className=" w-[85vw] md:w-[70vw] rounded-lg mt-[4vmin]  ">
                  <form>
                    <div className="inputHolder  bg-bgColor flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg">
                      <img src="./user.png" height={17} width={25}></img>

                      <input
                        type="text"
                        placeholder="Enter your name..."
                        className="  w-[70vw] md:w-[65vw] p-1  bg-bgColor"
                      ></input>
                    </div>
                    <br></br>
                    <br></br>
                    <div className=" bg-bgColor inputHolder flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg">
                      <img src="./email1.png" height={17} width={25}></img>

                      <input
                        type="email"
                        placeholder="Enter your  email..."
                        className="  w-[70vw]  md:w-[65vw] p-1 bg-bgColor"
                      ></input>
                    </div>
                    <br></br>
                    <br></br>
                    <textarea
                      name=""
                      id=""
                      rows="4"
                      placeholder="Enter Your message..."
                      className=" bg-bgColor p-3 w-[98%] border-[1px] rounded-lg md:w-[98%] lg:w-full"
                    ></textarea>
                    <br></br>
                    <br></br>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Data added Sucessfully");
                      }}
                      className="bg-btnColor p-2 text-white text-[4vmin] w-[20vw]"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </>
          )) ||
            (screen.width > 900 &&
              screen.width <= 1280 &&
              screen.height >= 780 && (
                <>
                  <div className="text-area w-[81vmin]  h-[80vh] flex justify-end items-center">
                    <div className="imageHolder w-[71vmin] h-[60vh] p-3">
                      <img
                        src="./customersupport.png"
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="form-area ml-[-5vmin] w-[75vmin] pt-2  border-[2px] flex flex-col justify-center rounded-lg items-center shadow-2xl pb-2">
                    <p className="text-[4vmin] font-bold font-poppins">
                      Please fill the details...
                    </p>
                    <div className=" w-[60vmin] h-[60vmin] rounded-[3px] mt-[4vmin]  ">
                      <form>
                        <div className="inputHolder  bg-bgColor flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg">
                          <img src="./user.png" height={17} width={25}></img>

                          <input
                            type="text"
                            placeholder="Enter your name..."
                            className="  w-[60vmin] p-1  bg-bgColor"
                          ></input>
                        </div>
                        <br></br>
                        <br></br>
                        <div className=" bg-bgColor inputHolder flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg">
                          <img src="./email1.png" height={17} width={25}></img>

                          <input
                            type="email"
                            placeholder="Enter your  email..."
                            className="  w-[60vmin] p-1 bg-bgColor"
                          ></input>
                        </div>
                        <br></br>
                        <br></br>
                        <textarea
                          name=""
                          id=""
                          rows="5"
                          cols="61"
                          placeholder="Enter Your message..."
                          className=" bg-bgColor p-3  border-[1px] rounded-lg"
                        ></textarea>
                        <br></br>
                        <br></br>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            alert("Data added Sucessfully");
                          }}
                          className="bg-btnColor p-2 text-white text-[2.45vmin] w-[10vw]"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </>
              )) ||
            (screen.width >= 1280 && screen.width < 1400 && (
              <>
                <div className="photo-area w-[100vmin] h-[75vh] flex justify-end items-center">
                  <div className="imageHolder w-[90vmin] h-[60vh] p-3">
                    <img
                      src="./customersupport.png"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>

                <div className="form-area w-[110vmin]  border-[1px] pb-4  pt-2 ml-[-10vmin] flex flex-col justify-center rounded-lg items-center shadow-2xl">
                  <p className="text-[4vmin] font-bold font-poppins">
                    Please fill the details...
                  </p>
                  <div className=" w-[90vmin] rounded-[3px] mt-[4vmin] ">
                    <form>
                      <div className="inputHolder  bg-bgColor flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg">
                        <img src="./user.png" height={17} width={25}></img>

                        <input
                          type="text"
                          placeholder="Enter your name..."
                          id="name"
                          className="  w-[70vmin] p-1  bg-bgColor"
                        ></input>
                      </div>
                      <br></br>
                      <br></br>
                      <div className=" bg-bgColor inputHolder flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg">
                        <img src="./email1.png" height={17} width={25}></img>

                        <input
                          type="email"
                          placeholder="Enter your  email..."
                          id="email"
                          className="  w-[70vmin] p-1 bg-bgColor"
                        ></input>
                      </div>
                      <br></br>
                      <br></br>
                      <textarea
                        name=""
                        id="message"
                        rows="5"
                        cols="65"
                        placeholder="Enter Your message..."
                        className=" bg-bgColor p-3  border-[1px] rounded-lg"
                      ></textarea>
                      <br></br>
                      <br></br>
                      <button
                        onClick={UploadData}
                        className="bg-btnColor p-2 text-white text-[2.45vmin] w-[10vw]"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )) ||
            (screen.width >= 1400 && screen.width <= 2047 && (
              <>
                {(screen.height >= 901 && (
                  <>
                    <div className="photo-area w-[90vmin] h-[80vh] flex justify-end items-center">
                      <div className="imageHolder w-[80vmin] h-[60vh] p-3">
                        <img
                          src="./customersupport.png"
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="shadow-2xl form-area w-[85vmin] flex flex-col items-center  rounded-lg  border-[1px] justify-center h-[70vh] ml-[-12vmin]">
                      <p className="text-[4vmin] font-bold font-poppins">
                        Please fill the details...
                      </p>
                      <div className=" w-[70vmin] h-[50vh] mt-3 ">
                        <form>
                          <div className="inputHolder  bg-bgColor flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg ">
                            <img src="./user.png" height={20} width={37}></img>

                            <input
                              type="text"
                              placeholder="Enter your name..."
                              className="  w-[70vmin] p-3  bg-bgColor text-[2vmin]"
                            ></input>
                          </div>
                          <br></br>
                          <br></br>
                          <div className=" bg-bgColor inputHolder flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg">
                            <img
                              src="./email1.png"
                              height={20}
                              width={37}
                            ></img>

                            <input
                              type="email"
                              placeholder="Enter your  email..."
                              className="  w-[70vmin] p-3 bg-bgColor text-[2vmin]"
                            ></input>
                          </div>
                          <br></br>
                          <br></br>
                          <textarea
                            name=""
                            id=""
                            rows="5"
                            cols="72"
                            placeholder="Enter Your message..."
                            className=" bg-bgColor p-3  border-[1px] rounded-lg text-[2vmin]"
                          ></textarea>
                          <br></br>
                          <br></br>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              alert("Data added Sucessfully");
                            }}
                            className="bg-btnColor p-2 text-white text-[2.15vmin] w-[10vw]"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </>
                )) || (
                  <div className="shadow-2xl form-area w-[85vmin] flex flex-col items-center  rounded-lg  border-[1px] justify-center h-[70vh] ml-[-12vmin]">
                    <p className="text-[4vmin] font-bold font-poppins">
                      Please fill the details...
                    </p>
                    <div className=" w-[70vmin]  mt-3 ">
                      <form>
                        <div className="inputHolder  bg-bgColor flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg ">
                          <img src="./user.png" height={20} width={37}></img>

                          <input
                            type="text"
                            placeholder="Enter your name..."
                            className="  w-[70vmin] p-3  bg-bgColor text-[2vmin]"
                          ></input>
                        </div>
                        <br></br>
                        <br></br>
                        <div className=" bg-bgColor inputHolder flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg">
                          <img src="./email1.png" height={20} width={37}></img>

                          <input
                            type="email"
                            placeholder="Enter your  email..."
                            className="  w-[70vmin] p-3 bg-bgColor text-[2vmin]"
                          ></input>
                        </div>
                        <br></br>
                        <br></br>
                        <textarea
                          name=""
                          id=""
                          rows="5"
                          cols="61"
                          placeholder="Enter Your message..."
                          className=" bg-bgColor p-3  border-[1px] rounded-lg text-[2vmin]"
                        ></textarea>
                        <br></br>
                        <br></br>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            alert("Data added Sucessfully");
                          }}
                          className="bg-btnColor p-2 text-white text-[2.15vmin] w-[10vw]"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </>
            )) ||
            (screen.width >= 2048 && (
              <>
                <div className="flex justify-end items-center text-area w-[87vmin] ">
                  <div className="imageHolder w-[80vmin] h-[60vh] p-3">
                    <img
                      src="./customersupport.png"
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <div className=" flex flex-col items-center  rounded-lg  border-[1px] justify-center  ml-[-15vmin] photo-area w-[87vmin]   h-[70vh]">
                  <p className="text-[4vmin] font-bold font-poppins">
                    Please fill the details...
                  </p>
                  <div className=" w-[70vmin]  ">
                    <form>
                      <div className="inputHolder  bg-bgColor flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg ">
                        <img src="./user.png" height={20} width={37}></img>

                        <input
                          type="text"
                          placeholder="Enter your name..."
                          className="  w-[70vmin] p-3  bg-bgColor text-[2vmin]"
                        ></input>
                      </div>
                      <br></br>
                      <br></br>
                      <div className=" bg-bgColor inputHolder flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg">
                        <img src="./email1.png" height={20} width={37}></img>

                        <input
                          type="email"
                          placeholder="Enter your  email..."
                          className="  w-[70vmin] p-3 bg-bgColor text-[2vmin]"
                        ></input>
                      </div>
                      <br></br>
                      <br></br>
                      <textarea
                        name=""
                        id=""
                        rows="5"
                        cols="72"
                        placeholder="Enter Your message..."
                        className=" bg-bgColor p-3  border-[1px] rounded-lg text-[2vmin]"
                      ></textarea>
                      <br></br>
                      <br></br>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          alert("Data added Sucessfully");
                        }}
                        className="bg-btnColor p-2 text-white text-[2.15vmin] w-[10vw]"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
export default Contact;
