import './App.css';

function Home({ onBack, baseline }) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'good morning' : hour < 17 ? 'good afternoon' : 'good evening';

  const day = 1;
  const streakPill = day === 1 ? '🌱 day 1' : `🔥 ${day} day streak`;

  return (
    <div className="App">
      <div className="home-header">
        <h2>{greeting},<br />friend</h2>
        <span className="streak-pill">{streakPill}</span>
      </div>
      <p>day 1 - build the foundation</p>

      <div className="metric-row tall">
        <span className="blue metric-label">| sleep</span>
        <div className="home-cols">
          <div className="home-col">
            <span className="col-label">yesterday</span>
            <span className="col-value">{baseline?.sleep} hrs</span>
          </div>
          <div className="home-col">
            <span className="col-label">today's target</span>
            <span className="col-value blue">{baseline?.sleep} hrs</span>
          </div>
        </div>
      </div>

      <div className="metric-row tall">
        <span className="green metric-label">| study</span>
        <div className="home-cols">
          <div className="home-col">
            <span className="col-label">yesterday</span>
            <span className="col-value">{baseline?.study} hrs</span>
          </div>
          <div className="home-col">
            <span className="col-label">today's target</span>
            <span className="col-value green">{baseline?.study} hrs</span>
          </div>
        </div>
      </div>

      <div className="metric-row tall">
        <span className="orange metric-label">| active</span>
        <div className="home-cols">
          <div className="home-col">
            <span className="col-label">yesterday</span>
            <span className="col-value">{baseline?.active} mins</span>
          </div>
          <div className="home-col">
            <span className="col-label">today's target</span>
            <span className="col-value orange">{baseline?.active} mins</span>
          </div>
        </div>
      </div>

      <button style={{marginTop: '32px'}}>log today</button>
      <button className="back-link" onClick={onBack}>back</button>
    </div>
  );
}

export default Home;