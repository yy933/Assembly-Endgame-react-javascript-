import {useState} from "react";
import languages from "./data/languages";

export default function App() {
  /**
   * Goal: Build out the main parts of our app
   *
   * Challenge:
   * Display the keyboard ⌨️. Use <button>s for each letter
   * since it'll need to be clickable and tab-accessible.
   */
  const [currentWord, setCurrentWord] = useState("react");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetElements = alphabet.split("").map((letter) => {
    return (
      <button key={letter} aria-label={letter}>
        {letter.toUpperCase()}
      </button>
    );
  })
  const wordElements = currentWord.split("").map((letter, index) => {
    return (
      <span key={index} className="letter">
        {letter.toUpperCase()}
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
