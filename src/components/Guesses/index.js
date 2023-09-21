import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {
        range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
          <Guess key={i} guess={guesses[i] ? guesses[i] : ''} />
        ))
      }
    </div>
  ) ;
}

export default Guesses;
