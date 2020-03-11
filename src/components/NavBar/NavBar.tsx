import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Connection from '../Connection/Connection';
import {Link} from "react-router-dom";
import Logo from '../Logo/Logo';
import { Nav } from 'react-bootstrap';


const NavBar = () =>{

    return(
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between shadow-lg" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
            <Logo></Logo>
             Griffont's Game 
            </Navbar.Brand>
            <Connection></Connection>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse className=" justify-content-between" id="navbar-nav">
                <Nav.Link>
                    <Link className="btn btn-danger" to="/">Accueil</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="btn btn-danger" to="/Norage_Kart">Norage Kart</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="btn btn-danger" to="/Boss_Rush">Boss Rush</Link>
                </Nav.Link>
                <DropdownMenu></DropdownMenu>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;