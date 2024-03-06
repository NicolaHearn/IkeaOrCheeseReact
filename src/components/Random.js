import Words from "./Words";
import Round from "./Round";

function Random() {
  class Random {
    random() {
      const words = new Words();

      const max = words.allWords.length - 1;
      const index = Math.floor(Math.random() * max);
      return words.allWords[index];
    }
  }
  const randomWord = new Random();

  return <p>{randomWord}</p>;
}

export default Random;
