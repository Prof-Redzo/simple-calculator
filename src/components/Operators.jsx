
const Operators = ({ handleClickOperator }) => {
  const operators = ["+", "-", "*", "/"]; // Supported operators

  return (
    <div className="operators-wrapper">
      {operators.map((op) => (
        <div key={op} className="operator" onClick={() => handleClickOperator(op)}>
          {op}
        </div>
      ))}
    </div>
  );
};

export default Operators;
