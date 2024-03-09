const Words = require("./words");

class Random {
  random() {
    const words = new Words();
    const max = words.allWords.length - 1;
    const index = Math.floor(Math.random() * max);
    return words.allWords[index];
  }
}

export default Random;
