import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Form, FormControl, Button } from 'react-bootstrap'
import shoreline from '../Shoreline.png'
import React, { useState, useEffect } from 'react'


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
            {/* <Navbar scrolling expand="md" fixed="top" bg="myGreen" variant="dark" className={navbar ? 'justify-content-center transition slighttransparent' : 'justify-content-center transistion transparent'} >
                <Navbar.Brand>
                    <h2 className="Becker navBarText">SHORELINE</h2>
                </Navbar.Brand>
                <Navbar.Toggle />
            </ Navbar> */}



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
                            <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
                                <h2 className="Becker sidebar grow">Merchandise</h2>
                                <h2 className="Becker sidebar grow">About us</h2>
                                <h2 className="Becker sidebar grow">Store Locator</h2>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>




    );
}

export default Navigation;
