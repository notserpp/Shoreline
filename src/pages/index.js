import '../App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import * as React from 'react'
import Navigation from '../components/Navbar'
import jumpingDrink from '../jumpingdrink.gif'
import { Row, Col } from 'react-bootstrap'




function HomePage() {
  return (
    <div className="App">
      <Navigation />
      <header className="Section1">
        <div className="Section1Text slide-up">
          <h1 className="Becker Header1">Shoreline</h1>
          <p className="Goth Header2">DARING CIDERS</p>
        </div>
      </header>


      <div className="Section2">
        <header>
          <Row>
            <Col>
              <div className="Section2Text">
                <h1 className="Becker Section2Header1">CALIDAD BEER "CLASSIC"</h1>
                <p className="Goth Header2">Born out of California, Calidad is a crisp Mexican-style lager handcrafted with more high-quality ingredients (and more SoCal attitude!) than any leading Mexican beer on the market.</p>
              </div>
            </Col>
            <Col md="auto">
              <img src={jumpingDrink} alt="Jumping Drink" className="jumpingDrink"></img>
            </Col>
          </Row>
        </header>
      </div>


      <div className="Section3">
        <header>
          <ScrollAnimation animateIn="fadeIn">
            <h1>Shoreline</h1>
          </ScrollAnimation>
        </header>
      </div>
    </div>
  );
}

export default HomePage;
