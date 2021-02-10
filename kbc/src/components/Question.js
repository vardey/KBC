import React, {useState} from 'react'
import Option from './Option'

const Question = ({data, resetTimer, pauseTimer}) => {
    const [index, setIndex] = useState[0]

    const  getNextQuestion =()=>{
        if(index ===data.length){
            console.log("You won")
        }else{
            setIndex(index+1)
        }
        
    }
    const question = data[index];
    return (
        
        <div>
            {question.question}
            <Option getNextQuestion={getNextQuestion} name={"A"} resetTimer={resetTimer}  pauseTimer={pauseTimer} value={question.A}/>
            <Option getNextQuestion={getNextQuestion} name={"B"} resetTimer={resetTimer}  pauseTimer={pauseTimer} value={question.B}/>
            <Option getNextQuestion={getNextQuestion} name={"C"} resetTimer={resetTimer}  pauseTimer={pauseTimer} value={question.C}/>
            <Option getNextQuestion={getNextQuestion} name={"D"} resetTimer={resetTimer}  pauseTimer={pauseTimer} value={question.D}/>
        </div>
    )
}

export default Question
