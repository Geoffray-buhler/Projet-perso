import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

const NavBar = () =>{

    return(
        <nav className="App-navbar">
                <Container fluid>
                    <Navbar expand="lg" variant="dark" bg="dark">
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Navbar>
                </Container>
        </nav>
    )
}

export default NavBar;