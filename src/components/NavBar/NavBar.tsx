import React from 'react';
import {Navbar, Container, NavDropdown} from 'react-bootstrap';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const NavBar = () =>{

    return(
        <nav className="App-navbar">
                <Container fluid>
                    <Navbar expand="lg" variant="dark" bg="dark">
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <NavDropdown.Item href="#action/3.1">Norage Kart</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Boss Rush</NavDropdown.Item>
                    <DropdownMenu></DropdownMenu>
                </Navbar>
                </Container>
        </nav>
    )
}

export default NavBar;