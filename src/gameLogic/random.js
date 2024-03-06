const Words = require('./words');

class Random {
    random() {
        const words = new Words();
        const min = 0;
        const max = words.allWords.length-1;
        const index = Math.floor(Math.random() * max);
        return words.allWords[index];
      }
}

module.exports = Random