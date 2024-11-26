import { useState } from "react";
import "./App.css";

import Display from "./components/Display";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";

function App() {
  const [input, setInput] = useState(""); // String to track the entire expression
  const [result, setResult] = useState(null); // Stores the calculated result

  const handleClickNumber = (number) => {
    setInput((prev) => prev + number); // Append number to the input
  };

  const handleClickOperator = (operator) => {
    if (input && !isNaN(input[input.length - 1])) {
      // Only add an operator if the last character is a number
      setInput((prev) => prev + operator);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Evaluate the input string to calculate result
    } catch {
      setResult("Error"); // Handle invalid expressions
    }
  };

  const reset = () => {
    setInput(""); // Clear the input
    setResult(null); // Clear the result
  };

  return (
    <div className="calculator-wrapper">
      <Display input={input} result={result} />
      <Numbers handleClickNumber={handleClickNumber} reset={reset} calculate={calculate} />
      <Operators handleClickOperator={handleClickOperator} />
    </div>
  );
}

export default App;
