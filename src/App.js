import React, { useState } from "react";
import LetsPlay from "./components/LetsPlay";
import "./App.css";
import GreetUser from "./components/GreetUser";
import DisplayWord from "./components/DisplayWord";
import Result from "./components/Result";
import EndGame from "./components/EndGame";
import Game from "./components/Game";

function App() {
  const [choice, setChoice] = useState("");
  const [greetUser, setGreetUser] = useState("");
  const [newGame, setNewGame] = useState("");

  const cheeseHandler = () => {
    setChoice("CHEESE");
    console.log(choice);
  };

  const ikeaHandler = () => {
    setChoice("IKEA");
    console.log(choice);
  };

  const newGameHandler = (game) => {
    setNewGame(game);
    console.log("started new game");
    game.startRound();
  };

  const newPlayerHandler = (enteredName) => {
    setGreetUser(<GreetUser name={enteredName} />);
    console.log(enteredName);
    newGameHandler();
  };

  return (
    <div className="App">
      <h1 className="app-header">"Ikea or Cheese"</h1>
      <LetsPlay onSubmitName={newPlayerHandler} />
      <div>{greetUser}</div>
      <Game onTrigger={newGameHandler} />
      <DisplayWord />
      <p>{choice}</p>
      <Result>{choice}</Result>
      <button onClick={ikeaHandler}>IKEA</button>
      <button onClick={cheeseHandler}>CHEESE</button>
      <EndGame />
    </div>
  );
}

export default App;
