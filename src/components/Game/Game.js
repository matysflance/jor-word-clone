import React from 'react';

import { NUM_OF_GUESSES_ALLOWED} from '../../constants';
import { sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  const handleAddNewGuess = (label) => {
    const newGuess = {
      id: crypto.randomUUID(),
      label,
      status: checkGuess(label, answer)
    }
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (label.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return <>
    {gameStatus}
    <GuessResults guesses={guesses} />
    <GuessForm gameStatus={gameStatus} handleAddNewGuess={handleAddNewGuess} />
    {gameStatus === 'won' && (
      <WonBanner numOfGuesses={guesses.length}/>
    )}
    {gameStatus === 'lost' && (
      <LostBanner answer={answer}/>
    )}
    
  </>;
}

export default Game;
