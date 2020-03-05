import React from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './NavBar.css';
import Connection from '../Connection/Connection';
import {Link} from "react-router-dom";


const NavBar = () =>{

    return(
        
            <div className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between shadow-lg">
                <Connection></Connection>
                <Link className="btn btn-danger" to="/">Accueil</Link>
                <Link className="btn btn-danger" to="/Norage_Kart">Norage Kart</Link>
                <Link className="btn btn-danger" to="/Boss_Ruch">Boss Ruch</Link>
                <DropdownMenu></DropdownMenu>
            </div>
    )
}

export default NavBar;