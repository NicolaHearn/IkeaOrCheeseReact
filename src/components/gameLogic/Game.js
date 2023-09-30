import Round from "./Round";

function Game() {
  class NewGame {
    constructor() {
      this.rounds = 1;
      this.score = 0;
      this.wordThisRound = "";
      this.round = 0;
      this.previousWords = [];
    }

    startRound() {
      // let result = false;
      this.round = new Round();
      this.wordThisRound = this.round.randomWord();

      while (this.previousWords.includes(this.wordThisRound)) {
        this.wordThisRound = this.round.randomWord();
        console.log("new word" + this.wordThisRound);
      }

      this.previousWords.push(this.wordThisRound);
      this.rounds++;
      console.log(this.previousWords);
      return `${this.wordThisRound}`;
    }

    checkUserInput(userInput) {
      return userInput === "i" || userInput === "c"
        ? true
        : "Answer must be 'i' for ikea or 'c' for cheese, please try again";
    }

    endRound(userInput) {
      const result = this.round.winOrLose(this.wordThisRound, userInput);
      if (result) {
        this.score++;
      }
      return this.round.roundResult(result);
    }
    //start new game, keeps track of rounds. Pull the while loop into the thing that's using the game.

    gameInPlay() {
      return this.rounds <= 10;
    }

    displayScore() {
      return "game over, you scored: " + this.score;
    }
  }

  return <div>I am a new game</div>;
}

export default Game;
