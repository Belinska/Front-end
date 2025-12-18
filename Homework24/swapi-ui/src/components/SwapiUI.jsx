function SwapiUI() {
  return (
    <div className="swapi-page">
      <header className="swapi-header text-center py-5">
        <h1 className="swapi-title">SWAPI</h1>
        <p className="swapi-subtitle">The Star Wars API</p>
      </header>
      <section className="swapi-description text-center py-4">
        <p>
          All the Star Wars data you've ever wanted:
          <br />
          <strong>
            Planets, Spaceships, Vehicles, People, Films and Species
          </strong>
        </p>
        <p>From all <strong>SEVEN</strong> Star Wars films!</p>
        <p>Now with The Force Awakens data!</p>
      </section>
      <section className="swapi-try text-center py-5">
        <h2 className="mb-4">Try it now!</h2>

        <div className="container">
          <div className="input-group input-group-lg">
            <span className="input-group-text">
              https://swapi.co/api/
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="people/1/"
            />
            <button className="btn btn-secondary">
              request
            </button>
          </div>
          <small className="text-muted d-block mt-2">
            Need a hint? try <b>people/1/</b> or <b>planets/3/</b> or <b>starships/9/</b>
          </small>
        </div>
      </section>
    </div>
  );
}

export default SwapiUI;
