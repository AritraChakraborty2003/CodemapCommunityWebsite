/* eslint-disable no-unused-vars */
import axios from "axios";
import { Link } from "react-router-dom";
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
        <div className="contactAccountHolder">
          <h1 className="mt-6 2xl:mt-10  font-poppins font-bold text-[8.95vmin]">
            <span className="text-btnColor">Contact-</span>Us
          </h1>
        </div>

        <div className="msgBoxHolder w-[96vw] border-lightGrey border-[2px] flex flex-wrap  rounded-[1.25vmin] mt-6">
          <div className="formHolder w-[100%] md:w-[50%] p-4">
            <div className="textHolder p-3">
              <p className="text-purple text-[7vmin] font-medium ">
                Get In Touch
              </p>
              <p className="tracking-wide text-lg mt-3">
                We are here for help ! How can we help?
              </p>
            </div>

            <div className="formHolderBody pl-4">
              <div className="form flex flex-col w-[96%] gap-y-9 mt-12">
                <input
                  type="text"
                  className="border-[1px] p-3 border-lightGrey rounded-md"
                  placeholder="Enter your name..."
                />
                <input
                  type="email"
                  className="border-[1px] p-3 border-lightGrey rounded-md"
                  placeholder="Enter your email..."
                />
                <input
                  type="text"
                  className="border-[1px] p-3 border-lightGrey rounded-md"
                  placeholder="Enter your organization / Institute..."
                />
                <textarea
                  type="texts"
                  rows={7}
                  cols={10}
                  className="border-[1px] p-3 border-lightGrey rounded-md"
                  placeholder="Enter your organization / Institute..."
                />
                <button className="bg-purple text-white text-[3vmin] p-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="contactDetailsHolder w-[100%] md:w-[50%] border-lightGrey border-l-[1px]  hidden lg:block">
            <div className="Holder flex flex-col  justify-center  gap-y-5 p-6">
              <div className="imageHolder w-[90%] ">
                <img
                  src="contactImage.jpg"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="detailsHolder">
                <div className="detailsHolder flex flex-col gap-y-4">
                  <div className="flex  w-[100%] gap-x-3">
                    <div className="flex  pl-3 pr-3 justify-center items-center gap-x-3">
                      <div className="imageHolder  flex justify-center items-center h-[7vmin] w-[7vmin] border-[1px] border-lightGrey rounded-[3.5vmin]">
                        <img
                          src="phone123.png"
                          height={40}
                          width={40}
                          className="p-1 "
                        />
                      </div>

                      <li className="text-purple tracking-wider">
                        &nbsp;7585824862 / 9382993983
                      </li>
                    </div>
                  </div>
                  <div className="flex  w-[100%] gap-x-3">
                    <div className="flex  pl-3 pr-3 justify-center items-center gap-x-3">
                      <div className="imageHolder  flex justify-center items-center h-[7vmin] w-[7vmin] border-[1px] border-lightGrey rounded-[3.5vmin]">
                        <img
                          src="email123.png"
                          height={40}
                          width={40}
                          className="p-1 "
                        />
                      </div>

                      <li className="text-purple tracking-widest">
                        &nbsp;codemap2024@gmail.com
                      </li>
                    </div>
                  </div>
                  <div className="flex  w-[100%] gap-x-3">
                    <div className="flex  pl-3 pr-3 justify-center items-center gap-x-3">
                      <div className="imageHolder  flex justify-center items-center h-[7vmin] w-[7vmin] border-[1px] border-lightGrey rounded-[3.5vmin]">
                        <img
                          src="gps.png"
                          height={40}
                          width={40}
                          className="p-1 "
                        />
                      </div>

                      <li className="text-purple tracking-wider">
                        &nbsp;1st Floor IIMT-LBF Incubation Center,Greater
                        Noida,UP
                      </li>
                    </div>
                  </div>
                  <div className="flex  w-[100%] gap-x-3">
                    <div className="flex  pl-3 pr-3 justify-center items-center gap-x-3">
                      <div className="imageHolder  flex justify-center items-center h-[7vmin] w-[7vmin] border-[1px] border-lightGrey rounded-[3.5vmin]">
                        <img
                          src="web.png"
                          height={45}
                          width={45}
                          className="p-1 "
                        />
                      </div>

                      <li className="text-purple tracking-wider">
                        &nbsp;
                        <Link to="https://community.codemap.online/">
                          https://community.codemap.online/
                        </Link>
                      </li>
                    </div>
                  </div>

                  <div className="mt-4 flex  w-[100%] gap-x-6">
                    <div className="flex  pl-3 pr-3 justify-center items-center gap-x-3">
                      <div className="imageHolder  flex justify-center items-center h-[7vmin] w-[7vmin] border-[1px] border-lightGrey rounded-[3.5vmin]">
                        <img
                          src="linkedin.png"
                          height={40}
                          width={40}
                          className="p-1 "
                        />
                      </div>
                    </div>

                    <div className="flex  pl-3 pr-3 justify-center items-center gap-x-3">
                      <div className="imageHolder border-[1px]   flex justify-center items-center h-[7vmin] w-[7vmin] border-lightGrey rounded-[3.5vmin]">
                        <img
                          src="instagram.jpg"
                          height={40}
                          width={40}
                          className="p-[0.56px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
