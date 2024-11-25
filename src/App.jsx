import { useState } from "react";
import "./App.css";

import Display from "./components/Display";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";

function App() {
  const [numbers, setNumbers] = useState([null, null]); // Zamenjuje num1 i num2
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  const handleClickNumber = (number) => {
    setNumbers((prev) => {
      const [num1, num2] = prev;
      return num1 === null ? [number, num2] : [num1, number];
    });
  };

  const calculate = () => {
    const [num1, num2] = numbers;
    if (num1 === null || num2 === null || !operator) {
      return;
    }

    // Mapiranje operatora na odgovarajuće funkcije
    const operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };

    // Izvrši odgovarajuću operaciju
    const compute = operations[operator];
    if (compute) setResult(compute(num1, num2));
  };

  const reset = () => {
    setNumbers([null, null]);
    setOperator(null);
    setResult(null);
  };

  return (
    <div className="calculator-wrapper">
      <Display
        num1={numbers[0]}
        num2={numbers[1]}
        operator={operator}
        result={result}
      />
      <Numbers
        handleClickNumber={handleClickNumber}
        reset={reset}
        calculate={calculate}
      />
      <Operators setOperator={setOperator} />
    </div>
  );
}

export default App;
