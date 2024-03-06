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

  const cheeseHandler = () => {
    setChoice("CHEESE");
    console.log(choice);
  };

  const ikeaHandler = () => {
    setChoice("IKEA");
    console.log(choice);
  };

  const newPlayerHandler = (enteredName) => {
    setGreetUser(<GreetUser name={enteredName} />);
    console.log(enteredName);
  };

  return (
    <div className="App bg-white mx-auto w-6/12 flex flex-col justify-center mt-32 h-3/5">
      <h1 className="font-bold ">Ikea or Cheese</h1>
      <LetsPlay onSubmitName={newPlayerHandler} />
      <div>{greetUser}</div>
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
