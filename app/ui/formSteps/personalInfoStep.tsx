const PersonalInfoStep = ({ personalInfo, onChange, onNext }) => (
    <div>
      <h2>Please provide your personal information:</h2>
      <input type="text" placeholder="Name" value={personalInfo.name} onChange={(e) => onChange('name', e.target.value)} />
      <input type="email" placeholder="Email" value={personalInfo.email} onChange={(e) => onChange('email', e.target.value)} />
      <input type="tel" placeholder="Phone Number" value={personalInfo.phone} onChange={(e) => onChange('phone', e.target.value)} />
      <button onClick={onNext}>Next</button>
    </div>
  );

  export default PersonalInfoStep;