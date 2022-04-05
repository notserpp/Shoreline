import '../App.css';
import * as React from 'react'
import Navigation from '../components/Navbar'



function HomePage() {
  return (
    <div className="App">
      <Navigation />
      <header className="Section1">
        <div className="Section1Text slide-up">
          <h1 className="Becker Header1">Shoreline</h1>
          <p className="Goth Header2 slide-up">DARING CIDERS</p>
        </div>
      </header>
      <div className="Section2">
        <header>
          <h1>Shoreline</h1>
        </header>
      </div>
      <div className="Section3">
        <header>
          <h1>Shoreline</h1>
        </header>
      </div>
    </div>
  );
}

export default HomePage;
