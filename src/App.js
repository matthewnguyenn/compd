import './App.css';
import { useState } from 'react';
import Home from './Home';
import Baseline from './Baseline';

function App() {
  const [screen, setScreen] = useState('onboarding');
  const [baseline, setBaseline] = useState(null);

  if (screen === 'baseline') {
    return <Baseline onContinue={(data) => { setBaseline(data); setScreen('home'); }} onBack={() => setScreen('onboarding')} />;
  }

  if (screen === 'home') {
    return <Home onBack={() => setScreen('baseline')} baseline={baseline} />;
  }

  return (
    <div className="App">
      <h1>compd</h1>
      <h2>let's get to know you</h2>
      <p>let's personalize your experience</p>
      <input placeholder="your name" />
      <input placeholder="why are you starting?" />
      <input placeholder="what's your main goal?" />
      <button onClick={() => setScreen('baseline')}>continue</button>
    </div>
  );
}

export default App;