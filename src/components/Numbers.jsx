import React from "react";

function Numbers({ handleClickNumber, reset, calculate }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="numbers-wrapper">
      {numbers.map((number) => (
        <div key={number} className="number" onClick={() => handleClickNumber(number)}>
          {number}
        </div>
      ))}
      <div className="number" onClick={reset}>
        C
      </div>
      <div className="number" onClick={calculate}>
        =
      </div>
    </div>
  );
}

export default Numbers;