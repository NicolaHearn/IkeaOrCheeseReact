const Words = require("./words");

class Random {
  // constructor() {
  //     this.randomWord = ""
  //   }

  random() {
    const words = new Words();
    const min = 0;
    const max = words.allWords.length - 1;
    const index = Math.floor(Math.random() * max);
    console.log(words.allWords[index]);
    return words.allWords[index];
  }
}

module.exports = Random;
