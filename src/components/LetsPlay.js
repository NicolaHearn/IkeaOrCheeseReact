import React, { useState } from 'react';
import GreetUser from './GreetUser';
function LetsPlay() {
   
    const [enteredName, setEnteredName] = useState('');
    const [greetUser, setGreetUser] = useState('')

    const playerNameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    };

    let player;

    const submitHandler = (event) => {
        event.preventDefault();
        player = enteredName;
        setGreetUser(<GreetUser name={player} />)
        setEnteredName('');
    }

    return(
        <div data-testid="startGame">
            <h2>Let's play Ikea or Cheese</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="player">Please enter your name to start the game: </label>
                <input type="text" id="player" value={enteredName} name="player" onChange={playerNameChangeHandler}/>
                <input type="submit" value="ok"/>
            </form>
            <div>{greetUser}</div>
        </div>
    )
}

export default LetsPlay