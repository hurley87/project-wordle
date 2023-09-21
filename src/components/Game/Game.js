import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

console.log(answer)

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);

  function handleAddGuess(word) {
    const letters = checkGuess(word, answer)
    const guessWithLetters = {
      id: Math.random(),
      word,
      letters
    }
    setGuesses((guesses) => [...guesses, guessWithLetters]);
    if(guesses.length === 5 || answer === word) {
      setGameOver(true);
    }
  }
  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput disabled={gameOver} handleAddGuess={handleAddGuess} />
      { gameOver && <Banner winner={answer === guesses[guesses.length - 1].word} /> }
    </>
  ) 
}

export default Game;

