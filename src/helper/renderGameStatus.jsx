import languages from "../data/languages";
import { getFarewellText } from "../utils/getFarewellText";
export default function renderGameStatus(gameStatus) {
  const {
    isGameOver,
    isGameWon,
    isGameLost,
    isLastGuessIncorrect,
    wrongGuessCount,
  } = gameStatus;

  if (!isGameOver && isLastGuessIncorrect) {
    const lostLanguageName = languages[wrongGuessCount - 1]?.name || "Language";

    return (
      <p className="farewell-message">{getFarewellText(lostLanguageName)}</p>
    );
  }

  if (!isGameOver) {
    return null;
  }

  if (isGameWon) {
    return (
      <>
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </>
    );
  } else if (isGameLost) {
    return (
      <>
        <h2>Game over!</h2>
        <p>You lose! Better start learning Assembly 😭</p>
      </>
    );
  }
}
