import { useState } from "react";
import "./App.css";

import Display from "./components/Display";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  // Unified handler for input
  const handleInput = (char) => {
    const validCharacters = /^[0-9+\-*/.()]*$/; // Only allow valid characters
    if (!validCharacters.test(char)) return;

    const openParenCount = (input.match(/\(/g) || []).length;
    const closeParenCount = (input.match(/\)/g) || []).length;

    if (char === ")" && closeParenCount >= openParenCount) return; // Unbalanced parentheses

    // Prevent starting with an operator (except '-')
    if (input === "" && /[+*/]/.test(char)) return;

    // Replace consecutive operators with the new one
    if (/[+\-*/]$/.test(input) && /[+\-*/]/.test(char)) {
      setInput((prev) => prev.slice(0, -1) + char);
      return;
    }

    // Prevent overly long expressions
    if (input.length >= 20) {
      setResult("Error: Input Too Long");
      return;
    }

    setInput((prev) => prev + char);
  };

  const calculate = () => {
    if (!input) {
      setResult("Error: No Expression");
      return;
    }

    try {
      if (input.includes("/0")) {
        setResult("Error: Division by Zero");
      } else {
        const evalResult = eval(input); // Evaluate the input string
        const roundedResult = parseFloat(evalResult.toFixed(10)); // Fix floating-point precision
        setResult(roundedResult);
      }
    } catch {
      setResult("Error: Invalid Expression");
    }
  };

  const reset = () => {
    if (window.confirm("Are you sure you want to reset?")) {
      setInput("");
      setResult(null);
    }
  };

  return (
    <div className="calculator-wrapper">
      <Display input={input} result={result} />
      <Numbers handleInput={handleInput} reset={reset} calculate={calculate} />
      <Operators handleInput={handleInput} />
    </div>
  );
}

export default App;
