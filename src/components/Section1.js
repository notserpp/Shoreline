import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Slide } from 'react-reveal';


function Section1() {
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

        <header className="Section1">
            <div className="Section1Text">
                <div ref={myRef}>
                    {myElementIsVisible ?
                        <Slide bottom>
                            <div>
                                <h1 className="Becker Header1">Shoreline</h1>
                                <p className="Goth Header2">DARING CIDERS</p>
                                <div className="aboutUsButton grow">
                                    <Button variant="warning" class="aboutUsButton Becker" size="lg">&#9830; STORE LOCATOR &#9830;</Button>
                                </div>
                            </div>
                        </Slide>
                        :
                        <div>
                            <h1 className="Becker Header1 opacity">Shoreline</h1>
                            <p className="Goth Header2 opacity">DARING CIDERS</p>
                            <Button variant="warning" class="aboutUsButton Becker opacity" size="lg">&#9830; STORE LOCATOR &#9830;</Button>
                        </div>
                    }


                </div>
            </div>
        </header>



    );
}

export default Section1;
