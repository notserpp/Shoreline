import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useRef, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap'


function Section2() {
    const myRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState();
    console.log(myElementIsVisible)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])


    return (
        <div>
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
                        :
                        <Row>
                            <Col>
                                <div className="Section2Text opacity">
                                    <h1 className="Becker Section2Header1">CALIDAD BEER "CLASSIC"</h1>
                                    <p className="Goth Header2 Section2Header">Born out of California, Calidad is a crisp Mexican-style lager handcrafted with more high-quality ingredients (and more SoCal attitude!) than any leading Mexican beer on the market.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="Section2Image opacity">
                                    <img src="https://media4.giphy.com/media/jRrCWZo0kuDSl3soNI/giphy.gif" alt="funny" />
                                </div>
                            </Col>
                        </Row>
                    }
                </div>
            </div>
        </div>




    );
}

export default Section2;
