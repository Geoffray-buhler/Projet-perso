import React, { useEffect } from 'react';
import {Jumbotron as BootJumbo, Container} from 'react-bootstrap';
import './Jumbotron.css';

declare global {
    interface Window { VANTA: any; }
}

const Jumbotron = () =>{

    /**
     * CAUTION
     * These scripts MUST be included for this component to work
     * <script src="./JS/three.r95.min.js"></script>
     * <script src="./JS/vanta.cells.min.js"></script>
     */
    useEffect(() => {
        if(window.VANTA){
            window.VANTA.CELLS({
                el: "#bgAnim",
                mouseControls: false,
                touchControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 0.50,
                color1: 0xffff,
                color2: 0xc2ff,
                speed: 1.00
            }) 
        }
    }, [])
    
    return(
        <header id="bgAnim" className="App-header rounded-lg">
            <BootJumbo fluid className="bg-transparent w-100">
                <Container fluid className="text-light text-center mx-auto">
                    <p className="text-shadow h1">Griffont's Game</p>
                    <p className="text-shadow">
                    Port-folio de mes créations vidéo-ludique ainsi que Web / Web mobile.
                    </p>
                </Container>
            </BootJumbo>
        </header>
    )
}

export default Jumbotron;