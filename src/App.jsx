import { useState,useEffect,useMemo } from 'react';
import '../src/app.css'
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import useSound from 'use-sound';
import play from '../src/sounds/play.mp3'
import wrong from '../src/sounds/wrong.mp3'
import wait from '../src/sounds/wait.mp3'
import correct from '../src/sounds/correct.mp3'
import data from '../src/data'


function App() {
  const [questionNumber,setQuestionNumber] = useState(1)
  const [stop,setStop] = useState(false)
  const[earned,setEarned] = useState("$0")
  const[letsPlay] = useSound(play)
  const[correctAnswer] = useSound(correct)
  const[wrongAnswer] = useSound(wrong)



  useEffect(()=>{
    letsPlay()
  },[letsPlay])
 

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  return (
    <div className="app">
         <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                   <Timer setStop={setStop} questionNumber={questionNumber} /></div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
      <div className="pyramid">
      <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
      </div>
    </div>
  );
}

export default App;
