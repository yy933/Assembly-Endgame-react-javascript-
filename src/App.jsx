import { useState } from "react";
import languages from "./data/languages";
import { clsx } from "clsx";

export default function App() {
  /**
   * Goal: Add in the incorrect guesses mechanism to the game
   *
   * Challenge: Derive a variable (`wrongGuessCount`) for the
   * number of incorrect guesses by using the other state
   * values we're already holding in the component.
   *
   * console.log the wrongGuessCount for now
   */
  const [currentWord, setCurrentWord] = useState("javascript");
  const [guessWord, setGuessWord] = useState([]);
  const wrongGuessCount = guessWord.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  function handleGuess(letter) {
    setGuessWord((prev) => (prev.includes(letter) ? prev : [...prev, letter]));
  }
  const alphabetElements = alphabet.split("").map((letter) => {
    const isGuessed = guessWord.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        className={className}
        key={letter}
        aria-label={letter}
        onClick={() => handleGuess(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const wordElements = currentWord.split("").map((letter, index) => {
    const isGuessed = guessWord.includes(letter);
    return (
      <span key={index} className="letter">
        {isGuessed ? letter.toUpperCase() : ""}
      </span>
    );
  });

  // Create a new array of JSX elements from the languages array
  const languageElements = languages.map((language) => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    return (
      <span key={language.name} style={styles} className="language-chip">
        {language.name}
      </span>
    );
  });

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{wordElements}</section>
      <section className="keyboard">{alphabetElements}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}
