import React, { useState } from 'react';
import LetsPlay from './components/LetsPlay';
import './App.css';
import GreetUser from './components/GreetUser';
import DisplayWord from './components/DisplayWord';
import Result from './components/Result';
import EndGame from './components/EndGame';

function App() {

  let heading = "Ikea or Cheese"

  const [title, setTitle] = useState(heading);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
 }
 
   return (
    <div className="App">
      <h1 className="app-header">{title}</h1>
      <LetsPlay />
      <GreetUser />
      <DisplayWord word="cats"/>
      <Result />
      <button>IKEA</button>
      <button onClick={clickHandler}>CHEESE</button>
      <EndGame />
    </div>
  );
}

export default App;
