const ItemDetailsStep = ({ itemDetails, onChange, onNext }) => (
    <div>
      <h2>Please provide details about the items you're donating:</h2>
      <input type="text" placeholder="Item name" value={itemDetails.name} onChange={(e) => onChange('name', e.target.value)} />
      <input type="text" placeholder="Item condition" value={itemDetails.condition} onChange={(e) => onChange('condition', e.target.value)} />
      <button onClick={onNext}>Next</button>
    </div>
  );

  export default ItemDetailsStep;