const PickupOptionsStep = ({ onNext }) => (
    <div>
      <h2>How would you like to donate your items?</h2>
      <button onClick={onNext}>Schedule a Pickup</button>
      <button onClick={onNext}>Drop-off at Location</button>
    </div>
  );

  export default PickupOptionsStep;