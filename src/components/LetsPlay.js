function LetsPlay() {
    return(
        <div data-testid="startGame">
            <h2>Let's play Ikea or Cheese</h2>
            <form >
                <label for="player">Please enter your name to start the game: </label>
                <input type="text" id="player" name="player" />
                <input type="submit" value="ok"/>
            </form>
        </div>
    )
}

export default LetsPlay