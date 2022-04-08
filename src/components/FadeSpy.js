import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import React, { useState, useRef, useEffect } from 'react'
import Fade from 'react-reveal/Fade';


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


    const [section2, setSection2] = useState(false)


    return (
        <div ref={myRef}>
            {myElementIsVisible ?
                <Fade duration={5000}>
                    <h1 className="Becker Section2Header1">CALIDAD BEER "CLASSIC"</h1>
                    <p className="Goth Header2">Born out of California, Calidad is a crisp Mexican-style lager handcrafted with more high-quality ingredients (and more SoCal attitude!) than any leading Mexican beer on the market.</p>
                </Fade> :
                <div>
                    <h1 className="Becker Section2Header1">CALIDAD BEER "CLASSIC"</h1>
                    <p className="Goth Header2 opacity">Born out of California, Calidad is a crisp Mexican-style lager handcrafted with more high-quality ingredients (and more SoCal attitude!) than any leading Mexican beer on the market.</p>
                </div>
            }
        </div>




    );
}

export default FadeSpy;
