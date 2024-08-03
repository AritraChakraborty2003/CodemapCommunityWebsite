import { NavbarCMS } from "./NavbarCMS";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const QuestionArea = () =>{
    const [index,setIndex]=useState(0);
    //const [option,setOption]=useState(0)
    const setChoice = (val) =>{
      
       localStorage.setItem(index,val.toString())
       
    }

    const checkAns = () =>{
       if(index<=8){
         
        setIndex(index+1)
       }
       else{
          
       }
          
    }

 

    return (
        <><NavbarCMS type="Interns"></NavbarCMS>
        {index}
        <div className="flex  justify-center items-center p-5">
        <div className="pb-5 pt-3  p-5 bg-bgColor holder w-[95vw] md:w-[85vw] border-[1px] rounded-xl flex  flex-col gap-y-5 justify-center items-center">
            <p className="text-[6vmin] font-bold">
                <div className="timerArea w-[12vmin] h-[12vmin] rounded-[6vmin] border-[1px] bg-btnColor text-white flex justify-center items-center">90</div>
            </p>
            <ul className="flex flex-col gap-y-4 p-2">
                <li className="font-bold p-3 text-[4vmin]  md:text-[3.9vmin] w-[83vw] border-[1px] rounded-md">
                    Q1. Who invented computer and on which date?
                </li>

                <div className="optionsArea flex flex-wrap gap-x-4 gap-y-4">
                <li className="p-2 text-[4vmin] md:text-[3vmin] md:h-[10vmin] w-[83vw] lg:w-[40vw] border-[1px] rounded-md flex justify-center items-center" onClick={()=>{
                    setChoice(1)
                }}>2.&nbsp;&nbsp;There are total 10 questions and total marks in 100 </li>
                <li onClick={()=>{
                       setChoice(2)
                }} className="p-2 text-[4vmin] md:text-[3vmin] md:h-[10vmin]  w-[83vw]  lg:w-[40vw] border-[1px] rounded-md flex justify-center items-center">3.&nbsp;&nbsp;Cheating and plagiarism is not allowed in the test</li>
              
                </div>
                <div className="optionsArea flex flex-wrap gap-x-4 gap-y-4">
                <li className="p-2 text-[4vmin] md:text-[3vmin] md:h-[10vmin]  w-[83vw] lg:w-[40vw] border-[1px] rounded-md flex justify-center items-center" onClick={()=>{
                       setChoice(3)
                }}>2.&nbsp;&nbsp;There are total 10 questions and total marks in 100 </li>
                <li className="p-2 text-[4vmin] md:text-[3vmin] md:h-[10vmin]  w-[83vw]  lg:w-[40vw] border-[1px] rounded-md flex justify-center items-center" onClick={()=>{
                      setChoice(4)
                }}>3.&nbsp;&nbsp;Cheating and plagiarism is not allowed in the test</li>
              
                </div>
            </ul>

            <button className="bg-btnColor text-white p-2 w-[25vmin] text-[3vmin]" onClick={checkAns}>Next</button>
        </div>

        </div>
        <Footer /></>
    )
}
export default QuestionArea