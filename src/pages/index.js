import '../App.css';
import * as React from 'react'
import Navigation from '../components/Navbar'



function HomePage() {
  return (
    <div className="App">
      <Navigation />
      <header className="Section1">
        <div className="Section1Text">
          <h1 className="Becker Header1">Shoreline</h1>
          <p className="Goth Header2">DARING CIDERS</p>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
