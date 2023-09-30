import React, { useState } from "react";
import LetsPlay from "./components/LetsPlay";
import "./App.css";
import GreetUser from "./components/GreetUser";
import DisplayWord from "./components/DisplayWord";
import Result from "./components/Result";
import EndGame from "./components/EndGame";

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

  const newPlayerHandler = (enteredName, game) => {
    setGreetUser(<GreetUser name={enteredName} />);
    setNewGame(game);
    console.log(enteredName + "  " + newGame);
  };

  return (
    <div className="App">
      <h1 className="app-header">"Ikea or Cheese"</h1>
      <LetsPlay onSubmitName={newPlayerHandler} />
      <div>{greetUser}</div>
      <div>{newGame}</div>
      <DisplayWord on />
      <p>{choice}</p>
      <Result>{choice}</Result>
      <button onClick={ikeaHandler}>IKEA</button>
      <button onClick={cheeseHandler}>CHEESE</button>
      <EndGame />
    </div>
  );
}

export default App;
