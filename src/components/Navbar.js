import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import React, { useState } from 'react'
import { Zoom, Slide, Fade } from 'react-reveal';


function Navigation() {
    const [navbar, setNavbar] = useState(false)

    const changeNavBar = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavBar)

    return (
        <div>
            <Navbar expand={false} scrolling fixed="top" bg="myGreen" variant="dark" className={navbar ? 'justify-content-center transition slighttransparent' : 'justify-content-center transistion transparent'} >
                <Container fluid>
                    <Navbar.Brand>
                        <h2 className="Becker navBarText grow">SHORELINE</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Body className="green">

                            <Nav className="flex-grow-1 pe-3 text-center transistion">
                                <Slide right cascade>
                                    <div>
                                        <h2 className="Becker sidebar grow">Merchandise</h2>
                                        <h2 className="Becker sidebar grow">About us</h2>
                                        <h2 className="Becker sidebar grow">Store Locator</h2>
                                    </div>
                                </Slide>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>




    );
}

export default Navigation;
