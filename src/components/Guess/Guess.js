import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  const hasGuess = guess?.letters?.length > 0;
  return (
    <p className="guess">
      {
        range(0, 5).map((i) => (
          <span key={i} className={`cell ${hasGuess ? guess?.letters[i].status : ""}`.trim()}>{hasGuess && guess?.word[i]}</span>
        ))
      }
    </p>
  ) ;
}

export default Guess;
