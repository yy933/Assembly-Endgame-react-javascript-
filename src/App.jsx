import React from "react";
import languages from "./data/languages";

export default function App() {
  const [currentWord, setCurrentWord] = React.useState("react");
  const wordElements = currentWord.split("").map((letter, index) => {
    return (
      <span key={index} className="letter">
        {letter.toUpperCase()}
      </span>
    );
  })
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

  /**
   * Goal: Build out the main parts of our app
   *
   * Challenge:
   * 1. Save a "currentWord" in state. Initialize as "react".
   * 2. Map over the letters of the word (you'll need to turn
   *    the string into an array of letters first) and display
   *    each one as a <span>. Capitalize the letters when
   *    displaying them.
   * 3. Style to look like the design. You can get the underline
   *    effect on the box using `border-bottom`.
   */

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
    </main>
  );
}
