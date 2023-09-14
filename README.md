# IkeaOrCheese
A project React to create a web version of the game Ikea or Cheese. The player will see a word appear on the screen. They should guess whether the word is an item on sale at ikea or a type of cheese and get points for correct answers.  

# Game Logic

## Description of the Game
Step 1: A word is displayed on the screen
Step 2: The player is asked for input
Step 3: The player must enter an 'i' for Ikea or a 'c' for Cheese
Step 4: If the player guesses correctly, 'correct' appears on the screen otherwise 'incorrect'
Step 5: After 2 seconds the next word appears on the screen

*Steps 2-5 repeat for 9 more rounds*
Step 6: The game ends, displays a 'Game Over' message and the player's score.

# Game deliverables
* Store and display user name in the user interaction messages based on user input
* Keep a score and display it at the end of the game

# Javascript deliverables
* Create a variable to store the user's name
* Create an array made up of 20 Ikea words
* Create an array made up of 20 Cheese words
* Create an array that is a combination of the word arrays
* Create a score variable
* Create a number of guesses variable
* Display a random item from the combination array and increase the number of guesses variable
* Ask user to choose whether the word is Ikea or Cheese with an input
* Evaluate if the word is in the Ikea array or the Cheese array
* Evaluate if the user matched the word correctly or not
* If the user chose correctly, increase the score and display "Yes, you guessed correctly!" else display "Not this time!"
* Repeat the process until the number of guesses variable reaches 10. After 10 guesses, display "Game over" and the user's score.

# React deliverables
* Create a displayWord component
* Create an input component
* Create a displayAnswer component
* Create an endGame component
  
# How to run the programme
