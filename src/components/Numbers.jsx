
const Numbers = ({ handleClickNumber, reset, calculate }) => {
  const numbers = Array.from({ length: 10 }, (_, i) => i); // Generate numbers 0-9

  return (
    <div className="numbers-wrapper">
      {numbers.map((num) => (
        <div key={num} className="number" onClick={() => handleClickNumber(num)}>
          {num}
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
};

export default Numbers;
