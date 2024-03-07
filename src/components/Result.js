// import React, { useState } from "react";
import Round from "../gameLogic/round";

function Result(props) {
  const randomWord = props.randomWord;
  const userGuess = props.userGuess;
  const round = new Round();

  //   const [result, setResult] = useState("");

  const resultHandler = () => {
    return round.winOrLose(randomWord, userGuess);
  };

  return <div>{resultHandler()}</div>;
}

export default Result;
