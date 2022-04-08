import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useRef, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import { Row, Col, Button } from 'react-bootstrap'


function Section2() {
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
        <div>
            <div ref={myRef}>
                <div className="Section2">
                    {myElementIsVisible ?
                        <Fade duration={1000}>
                            <Row>
                                <Col>
                                    <div className="Section2Text">
                                        <h1 className="Becker Section2Header1">CALIDAD BEER "CLASSIC"</h1>
                                        <p className="Goth Section2Header">Born out of California, Calidad is a crisp Mexican-style lager handcrafted with more high-quality ingredients (and more SoCal attitude!) than any leading Mexican beer on the market.</p>
                                        <div className="aboutUsButton grow">
                                            <Button variant="warning" class="aboutUsButton Becker" size="lg">&#9830; LEARN MORE &#9830;</Button>
                                        </div>
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
                                    <p className="Goth Section2Header">Born out of California, Calidad is a crisp Mexican-style lager handcrafted with more high-quality ingredients (and more SoCal attitude!) than any leading Mexican beer on the market.</p>
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
