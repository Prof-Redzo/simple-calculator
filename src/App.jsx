import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";

function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  const handleClickNumber = (number) => {
    if (num1 === null) {
      setNum1(number);
    } else {
      setNum2(number);
    }
  };

  const calculate = () => {
    if (num1 === null || num2 === null || !operator) {
      return;
    }
    if (operator === "+") {
      setResult(num1 + num2);
    } else if (operator === "-") {
      setResult(num1 - num2);
    } else if (operator === "*") {
      setResult(num1 * num2);
    } else if (operator === "/") {
      setResult(num1 / num2);
    }
  };

  const reset = () => {
    setNum1(null);
    setNum2(null);
    setOperator(null);
    setResult(null);
  };

  return (
    <div className="calculator-wrapper">
      <Display num1={num1} num2={num2} operator={operator} result={result} />
      <Numbers handleClickNumber={handleClickNumber} reset={reset} calculate={calculate} />
      <Operators setOperator={setOperator} />
    </div>
  );
}

export default App;
