import { questions } from "../Model/questions.js"
const getQuestions = () =>
{
    questions
    .find()
    .then((val)=>{
        res.json(val)
    })
    .catch((err)=>{
        console.log(err)
    })

}
export {getQuestions}