import React, { useState } from "react";
import Game from "./gameLogic/Game";

function LetsPlay(props) {
  const [enteredName, setEnteredName] = useState("");

  const playerNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  let player;
  let game = <Game />;

  const submitHandler = (event) => {
    event.preventDefault();
    player = enteredName;

    props.onSubmitName(player, game);
    setEnteredName("");
  };

  return (
    <div data-testid="startGame">
      <h2>Let's play Ikea or Cheese</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="player">
          Please enter your name to start the game:{" "}
        </label>
        <input
          type="text"
          id="player"
          value={enteredName}
          name="player"
          onChange={playerNameChangeHandler}
        />
        <input type="submit" value="ok" />
      </form>
      <div></div>
    </div>
  );
}

export default LetsPlay;
