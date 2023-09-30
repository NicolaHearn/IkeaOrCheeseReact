import Words from "./Words";
import Random from "./Random";

function Round(props) {
  class Round {
    constructor() {
      this.words = new Words();
    }

    randomWord() {
      const random = new Random();
      return props.randomWord;
    }

    winOrLose(questionWord, currentGuess) {
      return (currentGuess === "i" &&
        this.words.ikeaWords.includes(questionWord)) ||
        (currentGuess === "c" && this.words.cheeseWords.includes(questionWord))
        ? true
        : false;
    }

    roundResult(winOrLoseResult) {
      return winOrLoseResult === true ? "correct!" : "incorrect";
    }
  }
  const round = new Round();

  return <div newRound={props.onNewRound(round)}></div>;
}
export default Round;
