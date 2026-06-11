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
        <span className="blue metric-label">| sleep</span>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
          <input type="number" value={sleep} onChange={(e) => setSleep(e.target.value)} />
          <span style={{color:'white', fontWeight:'700'}}>hrs</span>
        </div>
      </div>

      <div className="metric-row">
        <span className="green metric-label">| study</span>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
          <input type="number" value={study} onChange={(e) => setStudy(e.target.value)} />
          <span style={{color:'white', fontWeight:'700'}}>hrs</span>
        </div>
      </div>

      <div className="metric-row">
        <span className="orange metric-label">| active</span>
        <div style={{display:'flex', alignItems:'center', gap:'6px'}}>
          <input type="number" value={active} onChange={(e) => setActive(e.target.value)} />
          <span style={{color:'white', fontWeight:'700'}}>mins</span>
        </div>
      </div>

      <button style={{marginTop:'32px'}} onClick={() => onContinue({ sleep, study, active })}>continue</button>
      <button className="back-link" onClick={onBack}>back</button>
    </div>
  );
}

export default Baseline;