const Numbers = ({ handleInput, reset, calculate }) => (
  <div className="numbers">
    {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "(", ")"].map(
      (num) => (
        <button key={num} onClick={() => handleInput(num)}>
          {num}
        </button>
      )
    )}
    <button onClick={reset}>C</button>
    <button onClick={calculate}>=</button>
  </div>
);

export default Numbers;