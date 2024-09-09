import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import data from "./data";
import Start from "./components/Start";




function App() {

  const[userName, setUserName] = useState(null)
  const[questionNumber, setQuestionNumber] = useState(1)
  const[stop, setStop] = useState(false)
  const[earned, setEarned] = useState("$ 0")

  // const data = [
  //   {
  //     id:1,
  //     question: "Waxad shegta mid ka mid ah magaca nabiga aderadis?",
  //     answers: [
  //       {
  //         text: "cusman bunu cafan",
  //         correct: false,
  //       },
  //       {
  //         text: "cusman bunu cafan",
  //         correct: false,
  //       },
  //       {
  //         text: "xamza",
  //         correct: true,
  //       },
  //       {
  //         text: "cusman bunu cafan",
  //         correct: false,
  //       },
  //     ],
  //   },
  //   {
  //     id:2,
  //     question: "Waxad sheegtaa mid ka mid ah magaca nabiga aderadis?",
  //     answers: [
  //       {
  //         text: "cumar bunu khDHab",
  //         correct: false,
  //       },
  //       {
  //         text: "cusman bunu cafan",
  //         correct: false,
  //       },
  //       {
  //         text: "xamza",
  //         correct: true,
  //       },
  //       {
  //         text: "cali bunu cafan",
  //         correct: false,
  //       },
  //     ],
  //   },
  //   {
  //     id:3,
  //     question: "Waxad shegta mid ka mid ah magaca nabiga aderadis?",
  //     answers: [
  //       {
  //         text: "cusman bunu cafan",
  //         correct: false,
  //       },
  //       {
  //         text: "cusman bunu cafan",
  //         correct: false,
  //       },
  //       {
  //         text: "xamza",
  //         correct: true,
  //       },
  //       {
  //         text: "cusman bunu cafan",
  //         correct: false,
  //       },
  //     ],
  //   },
    

  // ];

  



  const moneyPay = useMemo(() =>
    [
    {id:1, amount:"$ 30"},
    {id:2, amount:"$ 40"},
    {id:3, amount:"$ 60"},
    {id:4, amount:"$ 80"},
    {id:5, amount:"$ 100"},
    {id:6, amount:"$ 150"},
    {id:7, amount:"$ 200"},
    {id:8, amount:"$ 300"},
    {id:9, amount:"$ 400"},
    {id:10, amount:"$ 500"},
    {id:11, amount:"$ 600"},
    {id:12, amount:"$ 700"},
    {id:13, amount:"$ 800"},
    {id:14, amount:"$ 900"},
    {id:15, amount:"$ 1,000"},
  ].reverse(),

  []) 
    

  useEffect(() =>{
    questionNumber >1 && 
    setEarned(moneyPay.find((m) => m.id == questionNumber -1).amount);
  }, [moneyPay, questionNumber])


  return (
    <div className="app">
      {userName ? (
        <>
           <div className="main">
        {stop ? (
          <h1 className="moneyText">You earned: {earned}</h1>
        ): (
          <>

        <div className="top">
          <div className="timer">
            <Timer stop ={stop} setStop={setStop} questionNumber = {questionNumber}/>
            </div>
        </div>

        <div className="bottom">
        
          <Quiz 
            data={data} 
            setStop={setStop } 
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            /> 
            </div>
            </>
        )}

      </div>

      <div className="money">
        <ul className="moneyList">
          {moneyPay.map((m) =>(
               <li className={questionNumber === m.id ? "moneyListItem active": "moneyListItem"}>
               <span className="moneyListItemNumber">{m.id}</span>
               <span className="moneyListItemAmount">{m.amount}</span>
             </li>
          ))}
       
 
        </ul>
      </div>
        </>
      ) : <Start setUserName = {setUserName}/>}
   
    </div>
  );
}

export default App;
