import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our Website</h1>
        <p>
          Explore our website to learn more about us and get in touch with us.
        </p>
        <button>Explore Now</button>
      </div>

      <div className="features">
        <div className="card">
          <h2>Learn</h2>
          <p>Discover useful information and new ideas.</p>
        </div>

        <div className="card">
          <h2>Explore</h2>
          <p>Explore our services and learn about our work.</p>
        </div>

        <div className="card">
          <h2>Connect</h2>
          <p>Contact us anytime for more information.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

