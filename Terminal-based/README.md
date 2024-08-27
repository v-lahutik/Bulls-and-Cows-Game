# Terminal-based Bulls and Cows Game

![cow icon](assets/cow.svg) ![bull icon](assets/bull.svg)

Welcome to the Bulls and Cows Game! 🎉 This is a simple command-line game where you guess a secret number with unique digits. The game will provide feedback on your guesses with "bulls" and "cows."

## 🕹️ How to Play

1. **👋 Introduction**: The game will greet you and ask for your name. If you leave it blank, you will be referred to as "Player."
2. **🎯 Difficulty Level**: You can choose a difficulty level:
   - **Easy (E/e)**: 25 guesses
   - **Medium (M/m)**: 10 guesses
   - **Hard (H/h)**: 5 guesses
3. **🔍 Guessing**: You will have a limited number of guesses based on the difficulty level you chose. Each guess should be a 4-digit number with unique digits.
4. **📊 Feedback**:
   - **Bull**: Correct digit in the correct place.
   - **Cow**: Correct digit but in the wrong place.
5. **🏆 Winning**: If you guess the secret number correctly, you win!
6. **🔄 Play Again**: After each game, you will be asked if you want to play again. You can respond with "yes", "y", "no", or "n".

## 📦 Installation

To run the game, you'll need Node.js installed on your system. Follow these steps to get started:
```bash
git clone https://github.com/your-username/bulls-and-cows-game.git
cd bulls-and-cows-game
cd Terminal-based
node main.js


# Example Gameplay

What is your name? John
Hello, John! 👋
🎯 Welcome to the Bulls 🐂 and Cows 🐄 Game
🔹 The secret number has 4 unique digits.
🔹 If you guess the right number in the right place, you get a bull.
🔹 If you guess the right number but in the wrong place, you get a cow.
🔹 You can choose a difficulty level:
   - Easy (E/e): 25 guesses
   - Medium (M/m): 10 guesses
   - Hard (H/h): 5 guesses
🔹 Let´s start guessing!
Choose a difficulty level: easy (press E), medium (press M) or hard (press H) e
You’ve chosen level: EASY. You have 25 guesses. Good luck! 🍀

Your guess: 1234
You have guessed 1 out of 25 🙂
🙌 You´re on the right track!
💎 Hint: 1 bull 🐂 and 1 cow 🐄
...
