import './App.css';
import { useState } from 'react';

function Baseline({ onContinue, onBack }) {
  const [sleep, setSleep] = useState(0);
  const [study, setStudy] = useState(0);
  const [active, setActive] = useState(0);

  return (
    <div className="App">
      <h2>your starting point</h2>
      <p>where are you today</p>

      <div className="metric-row">
        <span className="blue">| sleep</span>
        <input type="number" value={sleep} onChange={(e) => setSleep(e.target.value)} /> hrs
      </div>

      <div className="metric-row">
        <span className="green">| study</span>
        <input type="number" value={study} onChange={(e) => setStudy(e.target.value)} /> hrs
      </div>

      <div className="metric-row">
        <span className="orange">| active</span>
        <input type="number" value={active} onChange={(e) => setActive(e.target.value)} /> mins
      </div>

      <button onClick={onBack}>back</button>
      <button onClick={() => onContinue({ sleep, study, active })}>continue</button>
    </div>
  );
}

export default Baseline;