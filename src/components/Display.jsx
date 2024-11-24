import React from "react";

function Display({ num1, num2, operator, result }) {
  return (
    <div className="calculator-preview">
      {num1} {operator} {num2} {result ? "=" + result : ""}
    </div>
  );
}

export default Display;