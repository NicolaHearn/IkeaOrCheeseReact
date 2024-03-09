// import React, { useState } from "react";
import Round from "../gameLogic/round";
import Words from "../gameLogic/words";
function Result(props) {
  const randomWord = props.randomWord;
  const userGuess = props.userGuess;
  // const round = new Round();
  const words = new Words();

  //   const [result, setResult] = useState("");

  const winOrLose = (questionWord, currentGuess) => {
    console.log(`winOrLose: ${questionWord}, ${currentGuess}`);
    return (currentGuess === "You chose IKEA" &&
      words.ikeaWords.includes(questionWord)) ||
      (currentGuess === "You chose CHEESE" &&
        words.cheeseWords.includes(questionWord))
      ? "Correct!"
      : "Incorrect!";
  };
  const result = winOrLose(randomWord, userGuess);

  return <div>{result}</div>;
}

export default Result;
