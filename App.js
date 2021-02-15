import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import Question from "./components/Question";
import Timer from "./components/Timer";
import Message from "./components/Message";
import LifeLine from "./components/Lifeline";
import Cashset from "./components/Cashset";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false); // true -> start
  const [data, setData] = useState();
  const [currentPrizeMoneyIndex, setCurrentPrizeMoneyIndex] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [currentPrizeMoney, setCurrentPrizeMoney] = useState();
  const [isFifty, setIsFifty] = useState(true);
  const [isSwitch, setIsSwitch] = useState(true);
  const [isFiftyClicked, setIsFiftyClicked] = useState(false)
  const [isSwitchClicked, setIsSwitchClicked] = useState(false)

  const pauseTimer = () => {
    console.log("pause");
    setIsActive(false);
  };
  const resetTimer = () => {
    setSeconds(60);
    setIsActive(true);
  };

  /*
    Issues:
    1)If timer hits 60 -> game should end and reset everything
    2)Lifelines
    3)Selecting wrong operation should reset
    4)A way to present the amount of money user won

    Design Issues:
    1)timer
    2)Current selected cashset
    3)In message component question number does not updates for the second question
    */

  //useEffect for timer
  useEffect(() => {
    console.log("Inside isActive useEffect");
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  //useEffect for questions array (getData)
  useEffect(() => {
    console.log("inside getData useEffect");
    getData();
  }, []);

  const getData = () => {
    fetch("questions.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));

    console.log(data);
  };

  const setCurrentQuestionNumber = (value) => {
    setQuestionsAnswered(value);
    setCurrentPrizeMoneyIndex(value + 1);
  };


  const useFifty = () => {
    setIsFiftyClicked(true);
    setIsFifty(false);
  };

  const disableSwitchClicked =() =>{
    console.log("disableSwitchClicked")
    setIsSwitchClicked(false)
  }


  const useSwitch = () => {
    setIsSwitchClicked(true);
    console.log(isSwitchClicked,"isSwitchClicked inside app.js")
    setIsSwitch(false);
  };

  const getCurrentPrizeMoney = (prizeMoney) => {
    setCurrentPrizeMoney(prizeMoney);
  };

  return (
    <div className="App">
      <div className="header">
        <Heading />
        <Timer className="timer" seconds={seconds} />
      </div>

      <Question
        isFiftyClicked={isFiftyClicked}
        isSwitchClicked={isSwitchClicked}
        setCurrentQuestionNumber={setCurrentQuestionNumber}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
        data={data}
        disableSwitchClicked={disableSwitchClicked}
      />
      <Message
        questionNumber={questionsAnswered + 1}
        currentPrizeMoney={currentPrizeMoney}
      />
      <div className="lifeline-container">
        <LifeLine
          isLifeLine={isFifty}
          toggleLifeLine={useFifty}
          lifeLineName={"50-50"}
        />
        <LifeLine
          isLifeLine={isSwitch}
          toggleLifeLine={useSwitch}
          lifeLineName={"Switch the question"}
        />
      </div>

      <Cashset
        getCurrentPrizeMoney={getCurrentPrizeMoney}
        currentPrizeMoneyIndex={currentPrizeMoneyIndex}
      />
    </div>
  );
}

export default App;
