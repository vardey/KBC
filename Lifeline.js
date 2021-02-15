import React from "react";
import "./Lifeline.css";

const Lifeline = ({ lifeLineName, isLifeLine, toggleLifeLine }) => {
  const activeLifeLine = () => {
    if (lifeLineName === "50-50") {
      //logic for removing two incorrect options
    } else {
      //logic for switching the question
    }
    toggleLifeLine();
  };

  return (
    <div>
      {isLifeLine ? (
        <button className="lifeline-btn" onClick={activeLifeLine}>
          {lifeLineName}
        </button>
      ) : null}
    </div>
  );
};

export default Lifeline;
