import React from 'react';

import { NUM_OF_GUESSES_ALLOWED} from '../../constants';
import { sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  console.info({ answer });

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

  const handleRestart = () => {
    setGuesses([]);
    setGameStatus('running');
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
  }

  return <>
    <GuessResults guesses={guesses} />
    <GuessForm gameStatus={gameStatus} handleAddNewGuess={handleAddNewGuess} />
    {gameStatus === 'won' && (
      <WonBanner numOfGuesses={guesses.length} handleRestart={handleRestart} />
    )}
    {gameStatus === 'lost' && (
      <LostBanner answer={answer} handleRestart={handleRestart} />
    )}
  </>;
}

export default Game;
