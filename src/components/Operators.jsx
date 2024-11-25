import React from "react";

function Operators({ setOperator }) {
  const operators = ["+", "-", "*", "/"];

  return (
    <div className="operators-wrapper">
      {operators.map((op) => (
        <div key={op} className="operator" onClick={() => setOperator(op)}>
          {op}
        </div>
      ))}
    </div>
  );
}

export default Operators;
