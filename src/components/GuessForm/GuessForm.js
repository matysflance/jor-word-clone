import React from "react";

function GuessForm({handleAddNewGuess}) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info({guess});
    handleAddNewGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => {handleSubmit(e)}}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern="[A-Z]{5}" value={guess} onChange={(e) => {setGuess(e.target.value.toUpperCase())}} />
    </form>
    );
}

export default GuessForm;
