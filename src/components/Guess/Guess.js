import React from "react";
import { range } from "../../utils";

function Guess({guess}) {
  return (
    <p className="guess">
      {range(5).map((cell) => {
        const statusClass = guess ? guess.status[cell].status : '';
        return <span key={cell} className={`cell ${statusClass}`}>{guess && guess.label[cell]}</span>
      })}
    </p>
  );
}

export default Guess;
