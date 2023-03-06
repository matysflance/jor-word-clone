import React from "react";
import { range } from "../../utils";

function Guess({guess}) {
  return (
    <p className="guess">
      {range(5).map((cell) => {
        return <span key={cell} className="cell">{guess && guess.label[cell]}</span>
      })}
    </p>
  );
}

export default Guess;
