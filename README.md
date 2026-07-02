# Assembly: Endgame

Assembly: Endgame is a React-powered word-guessing game built with Vite. Players try to guess a randomly selected word one letter at a time, with only 8 incorrect guesses allowed. Each wrong guess costs one language chip, and the game ends when the player wins or the programming world falls to Assembly.

## Features

- Hangman-style word guessing gameplay
- 26-letter clickable on-screen keyboard
- 8 incorrect guess limit represented by programming language chips
- Animated confetti celebration when the player wins
- Reveals the full word on loss
- Accessible ARIA status announcements for screen readers
- Random word selection from a built-in dictionary

## Tech stack

- React
- Vite
- JavaScript (ES modules)
- CSS for styling
- `react-confetti` for win effects
- `clsx` for conditional class names

## Project structure

- `src/App.jsx` — main game UI and state management
- `src/helper/renderGameStatus.jsx` — result/status rendering logic
- `src/data/languages.js` — language chip definitions and styles
- `src/data/words.js` — word list for random selection
- `src/utils/getRandomWord.js` — random word picker
- `src/utils/getFarewellText.js` — random farewell messages for wrong guesses
- `src/index.css` — application styling

## Getting started

### Prerequisites

- Node.js 18.x or newer
- npm 10.x or newer

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local development URL shown in the terminal to play the game.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Gameplay rules

- A random word is selected at the start of each game.
- Click letters to guess them.
- Correct letters are revealed in the word.
- Incorrect letters reduce the remaining attempts.
- After 8 wrong guesses, the game is lost and the full word is shown.
- A winning game triggers confetti and a victory message.

## Notes

- The word list is defined in `src/data/words.js` and can be extended.
- The game uses an accessible, screen-reader-friendly status region for feedback.
- Language chips visually track how many wrong guesses remain.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint checks
- `npm run format` — format code with Prettier
- `npm run format:check` — verify formatting with Prettier


