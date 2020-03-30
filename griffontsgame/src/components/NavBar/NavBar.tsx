import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Connection from '../Connection/Connection';
import {Link} from "react-router-dom";
import Logo from '../Logo/Logo';
import { Nav } from 'react-bootstrap';
import'./NavBar.css';
import'../AppContext';


export default class NavBar extends React.Component {

    state = {
        username: "Griffont's Game"
    }

    componentDidMount(){
        this.getAllGame();
    }

    getAllGame(){
        fetch('http://localhost:3001/allgames/',{method:'POST',
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                cache:'default'})
            .then(res => res.json())
            .then(data =>{
                console.log(data)
            })
            .catch(err => console.log(err))
        }

    render(){
        return(
            <Navbar className="navbar navbar-expand-lg justify-content-between color-nav shadow-lg" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                <Logo></Logo>
                {this.state.username}
                </Navbar.Brand>
                <Connection></Connection>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse className=" justify-content-between" id="navbar-nav">
                    <Nav.Link>
                        <Link className="btn btn-bg-custom custom-skew" to="/">Accueil</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="btn btn-bg-custom custom-skew" to="/Norage_Kart">Norage Kart</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="btn btn-bg-custom custom-skew" to="/Boss_Rush">Boss Rush</Link>
                    </Nav.Link>
                    <DropdownMenu></DropdownMenu>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}