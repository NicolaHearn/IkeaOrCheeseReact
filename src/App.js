import React, { useState } from "react";
import LetsPlay from "./components/LetsPlay";
import "./App.css";
import GreetUser from "./components/GreetUser";
import Cheese from "./images/Cheese.jpg";
import IKEA from "./images/IKEA.jpg";
import RandomWord from "./gameLogic/random";
import Words from "./gameLogic/words";

function App() {
  const newPlayerHandler = (enteredName) => {
    setPlayerName(enteredName);
    if (enteredName) {
      playRound();
    }

    console.log(enteredName);
  };

  const [playerName, setPlayerName] = useState("");
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [randomWord, setRandomWord] = useState("");
  const [gameArea, setGameArea] = useState([]);
  const [gameAreaVisible, setGameAreaVisible] = useState(false);
  const [ikeaButtonDisabled, setIkeaButtonDisabled] = useState(false);
  const [cheeseButtonDisabled, setCheeseButtonDisabled] = useState(false);

  const cheeseHandler = () => {
    const newChoice = "You chose CHEESE";
    setChoice(newChoice);
    setGameArea([...gameArea, newChoice]);
    console.log(`choice set in ikea handler: ${choice}`);
    setTimeout(() => {
      resultHandler(newChoice);
    }, 3000);
  };

  const ikeaHandler = () => {
    const newChoice = "You chose IKEA";
    setChoice(newChoice);
    setGameArea([...gameArea, newChoice]);
    console.log(`choice set in ikea handler: ${choice}`);
    setTimeout(() => {
      resultHandler(newChoice);
    }, 3000);
  };

  const playRound = () => {
    const newRandom = new RandomWord();
    const wordToGuess = newRandom.random();
    setRandomWord(wordToGuess);
    // console.log(`random word in playround: ${randomWord}`);
    setGameArea(gameArea.pop());
    setGameArea([...gameArea, wordToGuess]);
    setRound((prevRound) => prevRound + 1);
    setGameAreaVisible(true);
  };

  const resultHandler = (newChoice) => {
    console.log(`random word: ${randomWord}, userGuess: ${newChoice}`);
    // setResultData({ randomWord: randomWord, userGuess: newChoice });

    const words = new Words();
    const winOrLose = (questionWord, currentGuess) => {
      console.log(`winOrLose: ${questionWord}, ${currentGuess}`);
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
      // setScore((prevResult) => prevResult + 1);
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      if (round <= 9) {
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
          <p className="pt-4" key={index}>
            {item}
          </p>
        ))}
      </div>
      <div className="absolute bottom-0 my-12 flex justify-center space-x-2 w-full">
        <button
          onClick={ikeaHandler}
          className="bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img src={IKEA} alt="ikea building" className="w-auto h-28"></img>
        </button>
        <button
          onClick={cheeseHandler}
          className="bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img src={Cheese} alt="cheese" className="w-auto h-28"></img>
        </button>
      </div>
    </div>
  );
}

export default App;
