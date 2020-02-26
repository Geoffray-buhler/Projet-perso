import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

const Footer = () =>{

    return(
        <footer className="App-footer">
                <Container fluid>
                    <Navbar expand="lg" variant="dark" bg="dark">
                        <Navbar.Brand><h6>Created by MOI</h6></Navbar.Brand>
                    </Navbar>
                </Container>
        </footer>
    )
}

export default Footer;