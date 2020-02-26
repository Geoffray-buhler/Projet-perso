import React from 'react';
import {Jumbotron as BootJumbo, Container} from 'react-bootstrap';
import './JumbotronCSS.css';

const Jumbotron = () =>{
    return(
    <header className="App-header">
        <BootJumbo fluid className="bg-transparent">
            <Container fluid>
                <h1>Griffont's Game</h1>
                <p>
                Port-folio de mes créations vidéo-ludique ainsi que Web / Web mobile.
                </p>
            </Container>
        </BootJumbo>
    </header>
    )
}

export default Jumbotron;