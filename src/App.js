import React, { useState } from "react";
import LetsPlay from "./components/LetsPlay";
import "./App.css";
import GreetUser from "./components/GreetUser";
import Random from "./components/Random";
import Result from "./components/Result";
import EndGame from "./components/EndGame";

function App() {
  const newPlayerHandler = (enteredName) => {
    setStartGame(<GreetUser name={enteredName} />);
    setRandomWord(<Random />);
    console.log(enteredName);
  };

  const [choice, setChoice] = useState("");
  const [startGame, setStartGame] = useState(
    <LetsPlay onSubmitName={newPlayerHandler} />
  );
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [randomWord, setRandomWord] = useState();

  const cheeseHandler = () => {
    setChoice("CHEESE");
    console.log(choice);
  };

  const ikeaHandler = () => {
    setChoice("IKEA");
    console.log(choice);
  };

  return (
    <div className="App bg-white mx-auto p-12 w-6/12 flex flex-col justify-start items-center mt-32 h-3/5 rounded-xl shadow-lg min-w-96">
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

      <p>{randomWord}</p>
      <p>{choice}</p>
      <Result>{choice}</Result>
      <button onClick={ikeaHandler}>IKEA</button>
      <button onClick={cheeseHandler}>CHEESE</button>
      <EndGame />
    </div>
  );
}

export default App;
