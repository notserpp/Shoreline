import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { Slide } from 'react-reveal';
import Logo from '../Logo.png'
import LogoBlack from '../logo-black.png'


function Navigation() {
    const [navbar, setNavbar] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    const changeNavBar = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavBar)


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div>
            <Navbar expand={false} scrolling fixed="top" className={navbar ? 'justify-content-center transition slighttransparent' : 'justify-content-center transistion transparent'} >
                <Container fluid>
                    <Navbar.Brand>
                        <img onClick={scrollToTop} src={Logo} alt="logo" className={navbar ? 'logo grow' : "logo grow"} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Body className="">

                            <Nav className="flex-grow-1 pe-3 text-center transistion">
                                <Slide right cascade>
                                    <div>
                                        <div className="white ">
                                            <h2 className="Goth grow nav-text spaced">Merchandise</h2>
                                            <h2 className="Goth grow nav-text spaced">About us</h2>
                                            <h2 className="Goth grow nav-text spaced">Store Locator</h2>
                                            <img src={LogoBlack} alt="logo" className="logo grow spaced" />
                                        </div>
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
