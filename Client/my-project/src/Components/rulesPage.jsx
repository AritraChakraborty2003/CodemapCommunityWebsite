import { NavbarCMS } from "./NavbarCMS";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const RulesPage = () =>{
    const location = useLocation();
    return (
        <><NavbarCMS type="Interns"></NavbarCMS>
        <div className="flex justify-center items-center p-5">
        <div className="pb-4 holder w-[76vw] border-[1px] rounded-xl flex  flex-col gap-y-5 justify-center items-center">
            <p className="text-[6vmin] font-bold">Rules</p>
            <ul className="flex flex-col gap-y-3 p-2">
                <li className="text-[4vmin] md:text-[3vmin]">1.&nbsp;&nbsp;There are total 10 question and each question carries 10 marks</li>
                <li className="text-[4vmin] md:text-[3vmin]">2.&nbsp;&nbsp;There are total 10 questions and total marks in 100 </li>
                <li className="text-[4vmin] md:text-[3vmin]">3.&nbsp;&nbsp;Cheating and plagiarism is not allowed in the test</li>
                <li className="text-[4vmin] md:text-[3vmin]">4.&nbsp;&nbsp;The total time duration of the test is 90 seconds </li>
                <li className="text-[4vmin] md:text-[3vmin]">5.&nbsp;&nbsp;Scores of the test will effect the overall score so please attempt it seriously</li>
            </ul>

            <button className="bg-btnColor text-white p-2">Attempt</button>
        </div>

        </div>
        <Footer /></>
    )
}
export default RulesPage;