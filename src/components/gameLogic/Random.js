import Words from "./Words";
import Round from "./Round";

function Random(props) {
  class Random {
    random() {
      // const words = new Words();

      const max = props.allWords.length - 1;
      const index = Math.floor(Math.random() * max);
      return props.allWords[index];
    }
  }
  const randomWord = new Random();

  return <Round randomWord={randomWord.random()} testWord="testWord" />;
}

export default Random;
