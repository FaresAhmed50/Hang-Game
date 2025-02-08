# 🎮 Hangman Game

## 📌 Overview

This project is a **classic Hangman game** built using **JavaScript, HTML, and CSS**. The game allows users to guess words from different categories like **Fruits, Countries, and Animals** while attempting to avoid getting the hangman fully drawn.

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS (Bootstrap)
- **Logic & Functionality:** JavaScript (ES6)

## ✨ Features

- **Multiple Categories:** Users can choose from Fruits, Countries, or Animals.
- **Dynamic Keyboard:** Interactive on-screen keyboard for letter selection.
- **Hint System:** Provides a clue for each word to assist players.
- **Win/Lose Detection:** Displays winning or losing messages based on game progress.
- **Local Storage:** Tracks guessed words and updates UI accordingly.
- **Smooth UI & Responsive Design:** Built with Bootstrap for a clean and adaptable layout.

## 📂 Project Structure

```
📦 hangman-game
 ┣ 📂 css
 ┃ ┗ 📜 main.css (Styling for the game)
 ┣ 📂 js
 ┃ ┣ 📜 main.js (Game logic and UI interactions)
 ┃ ┣ 📜 fruits.js (Word list and logic for Fruits category)
 ┃ ┣ 📜 countries.js (Word list and logic for Countries category)
 ┃ ┗ 📜 animals.js (Word list and logic for Animals category)
 ┣ 📂 pages
 ┃ ┣ 📜 fruits.html (Fruits category page)
 ┃ ┣ 📜 countries.html (Countries category page)
 ┃ ┗ 📜 animals.html (Animals category page)
 ┣ 📂 img
 ┃ ┗ 📜 (Game assets and images)
 ┣ 📜 index.html (Main page to choose category)
 ┗ 📜 README.md (Project documentation)
```

## 🚀 Getting Started

### **1️⃣ Clone the Repository**

```sh
  git clone https://github.com/FaresAhmed50/Hang-Game
  cd hangman-game
```

### **2️⃣ Open the Game**

Simply open `index.html` in a browser:

```sh
  open index.html  # (or double-click on the file)
```

### **3️⃣ Play the Game**

- Choose a category (Fruits, Countries, or Animals).
- Click letters on the keyboard to guess the word.
- Avoid making too many wrong guesses, or the hangman will be drawn!

## 🎨 UI Elements

- **Game Stage:** Displays the hangman figure as incorrect guesses are made.
- **Word Guess Area:** Shows correctly guessed letters and underscores for missing ones.
- **Hint Section:** Provides clues for the selected word.
- **On-screen Keyboard:** Allows users to select letters.
- **Win/Lose Messages:** Displays success or failure messages.

---

Enjoy playing **Hangman with a modern twist!** 🚀

