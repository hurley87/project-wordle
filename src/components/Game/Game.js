import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(word) {
    const letters = checkGuess(word, answer)
    const guessWithLetters = {
      id: Math.random(),
      word,
      letters
    }
    setGuesses((guesses) => [...guesses, guessWithLetters]);
  }
  return <><Guesses guesses={guesses} /><GuessInput handleAddGuess={handleAddGuess} /></>;
}

export default Game;

