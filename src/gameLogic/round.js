const Words = require("./words");
const Random = require('./random');
//redo this where it has to give something (ikea or cheese) and get the guess
class Round {
    constructor() {
        this.words = new Words();
    }

    randomWord() {
        const random = new Random()
        return random.random();
    }

    winOrLose(questionWord, currentGuess) {
      return (currentGuess === "i" && this.words.ikeaWords.includes(questionWord)) || (currentGuess === "c" && this.words.cheeseWords.includes(questionWord)) ? true : false;
      }

    roundResult(winOrLoseResult) {
        return winOrLoseResult === true ? "correct!" : "incorrect";
      }
}

module.exports = Round;