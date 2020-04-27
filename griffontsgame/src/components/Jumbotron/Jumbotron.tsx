import React, { useEffect } from 'react';
import {Jumbotron as BootJumbo, Container} from 'react-bootstrap';
import './Jumbotron.css';

declare global {
    interface Window { VANTA: any; }
}

const Jumbotron = () =>{

    // Effet qui permettent de faire fonctionner l'effets du jumbotron
    useEffect(() => {
        if(window.VANTA){
            window.VANTA.CELLS({
                el: "#bgAnim",
                mouseControls: false,
                touchControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 0.70,
                color1: 0xb3b3,
                color2: 0x359cf2,
                speed: 2.00
            }) 
        }
    }, [])
    
    return(
        <header id="bgAnim" className="App-header rounded-lg">
            <BootJumbo fluid className="bg-transparent w-100">
                <Container fluid className="text-light text-center mx-auto">
                    <p className="text-shadow h1">Griffont's Game</p>
                    <p className="text-shadow h3">
                    Port-folio de mes créations vidéo-ludique ainsi que Web / Web mobile.
                    </p>
                </Container>
            </BootJumbo>
        </header>
    )
}

export default Jumbotron;