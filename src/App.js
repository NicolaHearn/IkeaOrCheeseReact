import React, { useState } from "react";
import LetsPlay from "./components/LetsPlay";
import GreetUser from "./components/GreetUser";
import Cheese from "./images/Cheese.jpg";
import IKEA from "./images/IKEA.jpg";
import Random from "./gameLogic/random";
import Words from "./gameLogic/words";

function App() {
  const newPlayerHandler = (enteredName) => {
    setPlayerName(enteredName);
    if (enteredName) {
      playRound();
    }
  };

  const [playerName, setPlayerName] = useState("");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [randomWord, setRandomWord] = useState("");
  const [gameArea, setGameArea] = useState([]);
  const [gameAreaVisible, setGameAreaVisible] = useState(false);
  const [choiceButtonDisabled, setChoiceButtonDisabled] = useState(false);

  const cheeseHandler = () => {
    setChoiceButtonDisabled(true);
    const newChoice = "You chose CHEESE";
    setGameArea([...gameArea, newChoice]);
    setTimeout(() => {
      resultHandler(newChoice);
    }, 3000);
  };

  const ikeaHandler = () => {
    setChoiceButtonDisabled(true);
    const newChoice = "You chose IKEA";
    setGameArea([...gameArea, newChoice]);
    setTimeout(() => {
      resultHandler(newChoice);
    }, 3000);
  };

  const playRound = () => {
    const newRandom = new Random();
    const wordToGuess = newRandom.random();
    setRandomWord(wordToGuess);
    setGameArea(gameArea.pop());
    setGameArea([...gameArea, wordToGuess]);
    setRound((prevRound) => prevRound + 1);
    setGameAreaVisible(true);
  };

  const resultHandler = (newChoice) => {
    const words = new Words();
    const winOrLose = (questionWord, currentGuess) => {
      return (currentGuess === "You chose IKEA" &&
        words.ikeaWords.includes(questionWord)) ||
        (currentGuess === "You chose CHEESE" &&
          words.cheeseWords.includes(questionWord))
        ? "Correct!"
        : "Incorrect!";
    };
    const result = winOrLose(randomWord, newChoice);
    setGameArea([...gameArea, result]);
    if (result === "Correct!") {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      if (round <= 9) {
        setChoiceButtonDisabled(false);
        playRound();
      } else {
        const endGame = `Game over, you scored ${score}/10`;
        setGameArea([endGame]);
      }
    }, 2000);
  };

  return (
    <div className="App relative bg-white mx-auto p-12 w-6/12 flex flex-col justify-start items-center mt-32 h-3/5 rounded-xl shadow-lg min-w-96">
      <h1 className="font-bold flex justify-center ">IKEA OR CHEESE</h1>
      <div className="mt-4 flex justify-around w-full">
        <h2 className="bg-blue-700 p-4 text-white font-bold rounded">
          Round: {round}
        </h2>
        <h2 className="bg-blue-700 p-4 text-white font-bold rounded">
          Score: {score}
        </h2>
      </div>
      <div className="my-4">
        {playerName ? (
          <GreetUser name={playerName} />
        ) : (
          <LetsPlay onSubmitName={newPlayerHandler} />
        )}
      </div>
      <div className={`game-area ${gameAreaVisible ? "" : "invisible"}`}>
        {gameArea.map((item, index) => (
          <p className="pt-4 flex justify-center" key={index}>
            {item}
          </p>
        ))}
      </div>
      <div className="absolute bottom-0 my-12 flex justify-center space-x-2 w-full">
        <button
          disabled={choiceButtonDisabled}
          onClick={ikeaHandler}
          className={`bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            choiceButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
        >
          <img src={IKEA} alt="ikea building" className="w-auto h-28"></img>
        </button>
        <button
          disabled={choiceButtonDisabled}
          onClick={cheeseHandler}
          className={`bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            choiceButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
        >
          <img src={Cheese} alt="cheese" className="w-auto h-28"></img>
        </button>
      </div>
    </div>
  );
}

export default App;
