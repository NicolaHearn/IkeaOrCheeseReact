import Words from "../gameLogic/words";
class Result {
  constructor(randomWord, userGuess) {
    this.randomWord = randomWord;
    this.userGuess = userGuess;
    // const round = new Round();
    const words = new Words();

    //   const [result, setResult] = useState("");

    const winOrLose = (questionWord, currentGuess) => {
      console.log(`winOrLose: ${questionWord}, ${currentGuess}`);
      return (currentGuess === "You chose IKEA" &&
        words.ikeaWords.includes(questionWord)) ||
        (currentGuess === "You chose CHEESE" &&
          words.cheeseWords.includes(questionWord))
        ? "Correct!"
        : "Incorrect!";
    };
    const result = winOrLose(randomWord, userGuess);

    return <div>{result}</div>;
  }
}

export default Result;
