import React from 'react';

function GuessInput({ handleAddGuess }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setGuess('');
      handleAddGuess(guess);
    }} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          value={guess}
          minLength={5}
          maxLength={5}
          id="guess-input" 
          type="text" />
    </form>
  ) ;
}

export default GuessInput;
