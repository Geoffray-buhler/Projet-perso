import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Connection from '../Connection/Connection';
import {Link} from "react-router-dom";
import Logo from '../Logo/Logo';
import { Nav } from 'react-bootstrap';
import'./NavBar.css';
import'../AppContext';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import AppContext from '../AppContext';


export default class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        username: "Griffont's Game",
        }

    protected generateTitlesLinks():any {
        if(this.context.btnTitlePrim.length === 0){
            return <div>C'est de la merde !!!</div>
        }else{
            return this.context.btnTitlePrim.map((item) => {
                return <Nav.Link><Link className="btn btn-bg-custom custom-skew" to={item.Title}>{item.Title}</Link></Nav.Link>
            });
        }
    }

    public render(){
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
                    { this.generateTitlesLinks() }
                    <DropdownMenu></DropdownMenu>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

NavBar.contextType = AppContext;