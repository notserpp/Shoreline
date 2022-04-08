import '../App.css';
import * as React from 'react'
import Navigation from '../components/Navbar'

import { Row, Col } from 'react-bootstrap'
import { Zoom, Slide, Fade } from 'react-reveal';
import FadeSpy from '../components/FadeSpy';
import BeerCan from '../components/Beercan';



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

      <FadeSpy />


      <div className="Section3">

      </div>
    </div>
  );
}

export default HomePage;
