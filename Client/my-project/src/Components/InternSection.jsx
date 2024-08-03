import { NavbarCMS } from "./NavbarCMS";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
const InternSection = () =>{
    const location=useLocation()
    const navigate=useNavigate()
    const submitData = () =>{
            const role=document.getElementById("role").value;
            if(role==="*"){
                alert("Please select your role")
            }
            else{
                navigate("/rulesPage",{state:{data:role}})
            }
    }
 return(
    <>
    <NavbarCMS type="Interns"></NavbarCMS>
        <div className="mainArea w-[100vw] p-10 flex justify-center items-center ">
            <div className="formArea flex  flex-col  gap-y-6 border-[1px] p-5 w-[90vw] md:w-[60vmin]">
            <p  className="font-bold text-lg">Please Fill the details:</p>
                <input type="text" name="name" id="name" placeholder="Enter name...." className="border-b-[1px] p-1" readOnly value={location.state.name} />
                <input type="email" name="email" id="email" placeholder="Enter email..." className="border-b-[1px] p-1" readOnly value={location.state.email}/>
                 <select name="role" id="role" className="border-b-[1px] p-2">
                    
                    <option value="*">Select Your Role:</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Fullstack/Backend Development</option>
                    <option value="Non Technical">Non Technical</option>
                </select>
                 <button className="p-2  text-white w-[30vmin] bg-btnColor" onClick={submitData}>Submit</button>
            </div>
        </div>
    <Footer />
    </>
 )
}
export default InternSection;