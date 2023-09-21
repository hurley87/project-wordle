import React from 'react';

function Banner({ winner }) {
  return (
    <div className={`banner ${winner ? 'happy' : 'sad'}`}>
        {
            winner ? (
                <p>
                    <strong>Congratulations!</strong> Got it in{" "}
                    <strong>3 guesses</strong>.
                </p>
            ) : (
                <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
            )
        }
    </div>
  ) 
}

export default Banner;

