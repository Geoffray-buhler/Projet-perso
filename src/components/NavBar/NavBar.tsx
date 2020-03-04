import React from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './NavBar.css';
import Connection from '../Connection/Connection';


const NavBar = () =>{

    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between shadow-lg">
            <Connection></Connection>
            <a className="btn btn-danger">Norage Kart</a>
            <a className="btn btn-danger">Boss Ruch</a>
            <DropdownMenu></DropdownMenu>
        </div>
    )
}

export default NavBar;