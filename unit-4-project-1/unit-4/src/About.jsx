import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>

      <p className="intro">
        We are a team of passionate people who love learning,
        creating and sharing knowledge.
      </p>

      <div className="about-box">
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide simple and useful solutions
            that help people learn and grow.
          </p>
        </div>

        <div>
          <h2>Our Vision</h2>
          <p>
            We aim to create a friendly and innovative environment
            where everyone can explore new ideas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
