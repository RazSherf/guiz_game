import { useEffect, useState } from "react";
import useSound from "use-sound";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

const Trivia = ({data,
    setStop,
    questionNumber,
    earned,
    setEarned,
    setQuestionNumber}) => {
    const[question,setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const[className,setClassName] = useState('answer')
    useEffect(()=>{
        setQuestion(data[questionNumber-1])
        console.log(question)
    },[data,questionNumber])



   
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);
    const delay = (duration,callback)=>{
      setTimeout(() => {
        callback()
      }, duration);
    }

    const handleClick = (a)=>{
      setSelectedAnswer(a);
        setClassName("answer active")
        delay(3000,()=> setClassName(a.correct? "answer correct":"answer wrong"))
        delay(6000,()=>{
          if(a.correct){
            correctAnswer()
            setQuestionNumber((prev)=>prev+1)
            setSelectedAnswer(null)
            setEarned((prev)=>prev+1000)
          }else{
            wrongAnswer()
            setStop(true)
            setEarned(earned)
            
          }
        })

    }
    return (
        <div className="trivia">
          <div className="question">{question?.question}</div>
          <div className="answers">
            {question?.answers.map((a) => (
              <div
                className={selectedAnswer === a ? className :"answer"}
                onClick={()=> handleClick(a)}
              >
                {a.text}
              </div>
            ))}
          </div>
        </div>
      );
    }
export default Trivia
