import React, { useState } from "react";
import LetsPlay from "./components/LetsPlay";
import "./App.css";
import GreetUser from "./components/GreetUser";
import Random from "./components/Random";
import Cheese from "./images/Cheese.jpg";
import IKEA from "./images/IKEA.jpg";
import Result from "./components/Result";

function App() {
  const newPlayerHandler = (enteredName) => {
    setStartGame(<GreetUser name={enteredName} />);
    playRound();
    console.log(enteredName);
  };

  const [choice, setChoice] = useState("");
  const [startGame, setStartGame] = useState(
    <LetsPlay onSubmitName={newPlayerHandler} />
  );
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [result, setResult] = useState("");
  const [randomWord, setRandomWord] = useState(<Random />);
  const [gameArea, setGameArea] = useState([<Random />]);
  const [gameAreaVisible, setGameAreaVisible] = useState(false);

  const cheeseHandler = () => {
    const userGuess = "You chose CHEESE";
    setGameArea([...gameArea, userGuess]);
    setTimeout(() => {
      resultHandler();
    }, 3000);
  };

  const ikeaHandler = () => {
    const userGuess = "You chose IKEA";
    setGameArea([...gameArea, userGuess]);
    setTimeout(() => {
      resultHandler();
    }, 3000);
  };

  const playRound = () => {
    setGameAreaVisible(true);
  };

  const resultHandler = () => {
    setResult(<Result randomWord={randomWord} userGuess={choice} />);
    setGameArea([...gameArea, result]);
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
      <div className="my-4">{startGame}</div>
      <div className={`game-area ${gameAreaVisible ? "" : "invisible"}`}>
        {gameArea.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      {result}
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
