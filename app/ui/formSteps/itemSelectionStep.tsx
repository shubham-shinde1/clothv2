const ItemSelectionStep = ({ selectedItems, onSelectItems, onNext }) => (
    <div>
      <h2>What type of items would you like to donate?</h2>
      <input type="checkbox" value="clothes" onChange={onSelectItems} /> Clothes
      <input type="checkbox" value="books" onChange={onSelectItems} /> Books
      <input type="checkbox" value="electronics" onChange={onSelectItems} /> Electronics
      <button disabled={selectedItems.length === 0} onClick={onNext}>Next</button>
    </div>
  );

  export default ItemSelectionStep;