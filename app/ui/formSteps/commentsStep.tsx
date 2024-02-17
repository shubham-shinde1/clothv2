const CommentsStep = ({ comments, onChange, onNext }) => (
    <div>
      <h2>Any additional comments or instructions?</h2>
      <textarea value={comments} onChange={(e) => onChange(e.target.value)} />
      <button onClick={onNext}>Next</button>
    </div>
  );

export default CommentsStep;