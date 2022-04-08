import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import React, { useState, useRef, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import sun from '../sun.gif'
import { Row, Col } from 'react-bootstrap'


function FadeSpy() {
    const myRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])


    return (
        <div ref={myRef}>
            <div className="Section2" id="section-2">
                {myElementIsVisible ?
                    <Fade duration={5000}>
                        <Row>
                            <Col>
                                <div className="Section2Text">
                                    <h1 className="Becker Section2Header1">CALIDAD BEER "CLASSIC"</h1>
                                    <p className="Goth Header2 Section2Header">Born out of California, Calidad is a crisp Mexican-style lager handcrafted with more high-quality ingredients (and more SoCal attitude!) than any leading Mexican beer on the market.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="Section2Image">
                                    <img src="https://media4.giphy.com/media/jRrCWZo0kuDSl3soNI/giphy.gif" alt="funny" />
                                </div>
                            </Col>
                        </Row>
                    </Fade>
                    : "Hello"}
            </div>
        </div>




    );
}

export default FadeSpy;
