import './App.css';

function Home({ onBack, baseline }) {
  return (
    <div className="App">
      <h2>good morning,<br />friend</h2>
      <p>day 1 - build the foundation</p>

      <div className="metric-row tall">
        <span className="blue">| sleep</span>
        <div className="home-cols">
          <div className="home-col">
            <span className="col-label">yesterday</span>
            <span className="col-value">{baseline?.sleep} hrs</span>
          </div>
          <div className="home-col">
            <span className="col-label">today's target</span>
            <span className="col-value blue">{Number(baseline?.sleep) + 1} hrs</span>
          </div>
        </div>
      </div>

      <div className="metric-row tall">
        <span className="green">| study</span>
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
        <span className="orange">| active</span>
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

      <button onClick={onBack}>back</button>
      <button>log today</button>
    </div>
  );
}

export default Home;