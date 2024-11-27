const Operators = ({ handleInput }) => (
  <div className="operators">
    {["+", "-", "*", "/"].map((op) => (
      <button key={op} onClick={() => handleInput(op)}>
        {op}
      </button>
    ))}
  </div>
);

export default Operators;