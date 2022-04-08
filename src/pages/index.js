import '../App.css';
import * as React from 'react'
import Navigation from '../components/Navbar'
import { Slide } from 'react-reveal';
import Section2 from '../components/Section2';




function HomePage() {

  return (
    <div className="App">
      <Navigation />
      <header className="Section1">
        <div className="Section1Text">
          <Slide bottom>
            <h1 className="Becker Header1">Shoreline</h1>
            <p className="Goth Header2">DARING CIDERS</p>
          </Slide>
        </div>
      </header>

      <Section2 />


      <div className="Section3">

      </div>
    </div>
  );
}

export default HomePage;
