const Words = require("./words");
// const Random = require("./random");
//redo this where it has to give something (ikea or cheese) and get the guess
class Round {
  constructor() {
    this.words = new Words();
  }

  // randomWord() {
  //   const random = new Random();
  //   return random.random();
  // }

  winOrLose(questionWord, currentGuess) {
    return (currentGuess === "You chose IKEA" &&
      this.words.ikeaWords.includes(questionWord)) ||
      (currentGuess === "You chose CHEESE" &&
        this.words.cheeseWords.includes(questionWord))
      ? "Correct!"
      : "Incorrect!";
  }

  // roundResult(winOrLoseResult) {
  //   return winOrLoseResult === true ? "correct!" : "incorrect";
  // }
}

module.exports = Round;
