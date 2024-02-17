const QuantityStep = ({ quantity, onChange, onNext }) => (
    <div>
      <h2>How many items would you like to donate?</h2>
      <input type="number" value={quantity} onChange={(e) => onChange(e.target.value)} />
      <button onClick={onNext}>Next</button>
    </div>
  );

  export default QuantityStep;