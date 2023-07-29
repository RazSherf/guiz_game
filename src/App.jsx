import { useState,useEffect,useMemo } from 'react';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import useSound from 'use-sound';
import play from '../src/sounds/play.mp3'
import data from '../src/data'
import '../src/app.css'


function App() {
  const [questionNumber,setQuestionNumber] = useState(1)
  const [stop,setStop] = useState(false)
  const[earned,setEarned] = useState(0)
  const[letsPlay] = useSound(play)
 


  useEffect(()=>{
    letsPlay()
  },[letsPlay])
 

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$1,000" },
        { id: 2, amount: "$2,000"},
        { id: 3, amount: "$3,000"},
        { id: 4, amount: "$4,000"},
        { id: 5, amount: "$5,000"},
        { id: 6, amount: "$6,000"},
        { id: 7, amount: "$7,000"},
        { id: 8, amount: "$8,000"},
        { id: 9, amount: "$9,000"},
        { id: 10, amount: "$10,000"},
        { id: 11, amount: "$11,000"},
        { id: 12, amount: "$12,000"},
        { id: 13, amount: "$13,000"},
        { id: 14, amount: "$14,000"},
        { id: 15, amount: "$15,000"},
      ].reverse(),
    []
  );

  return (
    <div className="app">
         <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}$</h1>
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
                    earned={earned}
                    setEarned={setEarned}
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
