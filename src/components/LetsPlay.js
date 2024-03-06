import React, { useState } from "react";

function LetsPlay(props) {
  const [enteredName, setEnteredName] = useState("");

  const playerNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  let player;

  const submitHandler = (event) => {
    event.preventDefault();
    player = enteredName;

    props.onSubmitName(player);
    setEnteredName("");
  };

  return (
    <div data-testid="startGame">
      <form onSubmit={submitHandler}>
        <label className="my-2" htmlFor="player">
          Let's play ikea or cheese, please enter your name to start the game:{" "}
        </label>
        <input
          className="block w-full rounded-md border-0 px-3.5 py-2 my-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          type="text"
          id="player"
          value={enteredName}
          name="player"
          placeholder="Your name here"
          onChange={playerNameChangeHandler}
        />
        <input
          type="submit"
          value="ok"
          className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        />
      </form>
    </div>
  );
}

export default LetsPlay;
