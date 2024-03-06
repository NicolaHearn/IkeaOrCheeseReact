class UserGuess {
  constructor(userInput) {
    this.userInput = userInput;
  }

  collectGuess() {
    const input = "Please enter a guess: ";
    return "You entered: " + input;
    this.userInput = input;
  }

  checkUserInput() {
    return this.userInput === "i" || this.userInput === "c"
      ? true
      : "Answer must be 'i' or 'c', please try again";
  }
}

module.exports = UserGuess;
