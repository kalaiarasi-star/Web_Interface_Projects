import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Profile from "./Profile";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Profile</Link>{" | "}
          <Link to="/home">Home</Link>{" | "}
          <Link to="/about">About</Link>{" | "}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Profile />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </BrowserRouter> 
    </div>
       );
}
export default App;

