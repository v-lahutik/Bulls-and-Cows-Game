# UI-based Bulls and Cows Game

![cow icon](assets/cow.svg) ![bull icon](assets/bull.svg)

Welcome to the Bulls and Cows Game with UI! 🎉 This version of the game features a graphical user interface where you can guess a secret number with unique digits. The game will provide feedback on your guesses with "bulls" and "cows."

## 🕹️ How to Play

1. **👋 Introduction**: The game will greet you and ask for your name. If you leave it blank, you will be referred to as "Player."
2. **🎯 Difficulty Level**: You can choose a difficulty level:
   - **Easy**: 25 guesses
   - **Medium**: 10 guesses
   - **Hard**: 5 guesses
3. **🔍 Guessing**: You will have a limited number of guesses based on the difficulty level you chose. Each guess should be a 4-digit number with unique digits.
4. **📊 Feedback**:
   - **Bull**: Correct digit in the correct place.
   - **Cow**: Correct digit but in the wrong place.
5. **🏆 Winning**: If you guess the secret number correctly, you win!
6. **🔄 Play Again**: After each game, you will be asked if you want to play again.

## Docker Image

The Docker image can be built with:

```
docker image build -t bulls_and_cows:latest .
```

The chosen tag is just a suggestion (latest can later be replaced with release versions, for example).

The simplest way to run the created image is achieved with:

```
docker run -p 5173:5173 bulls_and_cows:latest
```

The `-p` option specifies a port mapping: inside of Docker the app listens (by default) to port 5173. To make the app accessible outside of the running container, i.e. the host machine, you need to specify to which port on the host machine you want to map the 'docker port' to. The syntax is as follows:

```
docker run -p [host_port]:[container_port] [image_name]
```

You can also run the container in so-called detached mode, i.e. it runs in the background. You can achieve this by adding the `-d` flag to your command:

```
docker run -d -p 5173:5173 bulls_and_cows:latest
```

