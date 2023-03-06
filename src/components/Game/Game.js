import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleAddNewGuess = (label) => {
    const newGuess = {
      id: crypto.randomUUID(),
      label
    }
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  }

  return <>
    <GuessResults guesses={guesses} />
    <GuessForm handleAddNewGuess={handleAddNewGuess} />
  </>;
}

export default Game;
