import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import HobbyCard from "./HobbyCard";

import reading from "./assets/read.jpg";
import music from "./assets/music.jpg";
import painting from "./assets/art.jpg";
import photography from "./assets/photo.jpg";
import gardening from "./assets/garden.jpg";
import coding from "./assets/coding.jpg";

function App() {
  return (
     
    <div className="container">
      <HobbyCard
        hobbyName="Reading"
        description="Reading books improves knowledge and imagination."
        image={reading}
      />

      <HobbyCard
        hobbyName="Music"
        description="Listening to music helps in relaxation and entertainment."
        image={music}
      />

      <HobbyCard
        hobbyName="Painting"
        description="Painting is a creative hobby that expresses emotions."
        image={painting}
      />

      <HobbyCard
        hobbyName="Photography"
        description="Photography captures beautiful moments forever."
        image={photography}
      />

      <HobbyCard
        hobbyName="Gardening"
        description="Gardening keeps us close to nature and reduces stress."
        image={gardening}
      />

      <HobbyCard
        hobbyName="Coding"
        description="Coding develops logical thinking and problem-solving skills."
        image={coding}
      />

    </div>
  );
}
export default App;
