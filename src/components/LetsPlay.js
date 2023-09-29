import React, { useState } from 'react';

function LetsPlay() {
   
    const [enteredName, setEnteredName] = useState('');

    const playerNameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const player = enteredName;
        console.log(player);
    }

    return(
        <div data-testid="startGame">
            <h2>Let's play Ikea or Cheese</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="player">Please enter your name to start the game: </label>
                <input type="text" id="player" name="player" onChange={playerNameChangeHandler}/>
                <input type="submit" value="ok"/>
            </form>
        </div>
    )
}

export default LetsPlay