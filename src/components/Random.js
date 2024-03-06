import Words from "./Words";

function Random() {
  const words = new Words();

  const max = words.allWords.length - 1;
  const index = Math.floor(Math.random() * max);
  const randomWord = words.allWords[index];

  return <p>{randomWord.charAt(0).toUpperCase() + randomWord.slice(1)}</p>;
}

export default Random;
