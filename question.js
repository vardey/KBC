import React, { useState } from "react";
import Option from "./Option";
import "./Question.css";


//useFifty,
//useSwitch,
const Question = ({
  data,
  resetTimer,
  pauseTimer,
  setCurrentQuestionNumber,
  isSwitchClicked,
  isFiftyClicked,
  disableSwitchClicked
}) => {
  const [index, setIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const questionObj = data?.length > 0 ? data[index] : null;

  console.log(isSwitchClicked,"isSwitchClicked")

  const getNextQuestion = () => {
    if (answeredQuestions === 15) {
      alert("Congratulations!!! you won Rs. 1 crore");
    } else {
      setIndex(index + 1);
    }
  };
  const optionsAvailable = ["A", "B", "C", "D"];
  const wrongOptions = [{}];
  const answer = questionObj?.answer ? questionObj.answer : null;

  /*
  if (useFifty()) {
    for (const item of optionsAvailable) {
      let wrongOptionsIndex = 0;
      if (answer !== item) {
        wrongOptions[wrongOptionsIndex].name = item;
        wrongOptions[wrongOptionsIndex].available = true;
        wrongOptionsIndex++;
      }
    }
  }
  */

  

  if (isSwitchClicked) {

    console.log("isSwitched inside question.js")
    getNextQuestion();
    disableSwitchClicked();
   

  }


  const isCorrect = (selectedOption) => {
    if (answer === selectedOption) {
      setAnsweredQuestions(answeredQuestions + 1);
      setCurrentQuestionNumber(answeredQuestions);
      return true;
    }

    return false;
  };

  return (
    <div>
      <div className="question">{questionObj?.question}</div>
      <div className="options">
        <div className="options-row">
          <Option
            isCorrect={isCorrect}
            getNextQuestion={getNextQuestion}
            name={"A"}
            resetTimer={resetTimer}
            pauseTimer={pauseTimer}
            value={questionObj?.A}
          />
          <Option
            isCorrect={isCorrect}
            getNextQuestion={getNextQuestion}
            name={"B"}
            resetTimer={resetTimer}
            pauseTimer={pauseTimer}
            value={questionObj?.B}
          />
        </div>
        <div className="options-row">
          <Option
            isCorrect={isCorrect}
            getNextQuestion={getNextQuestion}
            name={"C"}
            resetTimer={resetTimer}
            pauseTimer={pauseTimer}
            value={questionObj?.C}
          />
          <Option
            isCorrect={isCorrect}
            getNextQuestion={getNextQuestion}
            name={"D"}
            resetTimer={resetTimer}
            pauseTimer={pauseTimer}
            value={questionObj?.D}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
