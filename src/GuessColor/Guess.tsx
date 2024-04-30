import React, { useState, useEffect } from 'react'
const generateColor = () => {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "5", "a", "b", "c", "d", "e", "f"]
  const color = new Array(6).fill('').map(() => digits[Math.floor(Math.random() * digits.length)]).join("");
  return `#${color}`
}

enum Result{
  Correct,
  Wrong
}
const Guess = () => {
const [correct, setCorrect]= useState('')
const [anwsers,setAnwsers] = useState<string[]>([])
const [result, setResult] = useState<Result | undefined>(undefined);

 
  useEffect(()=>{
    createNewColors()
  },[])

  const createNewColors =()=>{
    let winner = generateColor()
    setCorrect(winner);
    setAnwsers([winner, generateColor(), generateColor()].sort(() => 0.5 - Math.random()))
  }

  const handleButtonClick=(color: string)=>{
    console.log(color,correct)
    if(color==correct){
      console.log("correct");
      setResult(Result.Correct)
      createNewColors()
    } else{
      setResult(Result.Wrong)
    }
  }

  return (
    <div >
      <h1>Guess</h1>
      <div className="guess-me" style={{ background: correct }}/>
      <div className='button-list' >
        {anwsers.map(color => <button onClick={()=>handleButtonClick(color)} className='buttons' key={color}>{color}</button>)}
      </div>
      {result === Result.Correct && <div className='correct'> Correct Anwser</div>}
      {result === Result.Wrong &&<div className='wrong'> Wrong Anwser</div>}
    </div>
  )
}

export default Guess
