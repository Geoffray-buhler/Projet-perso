import React from 'react';
import './AllPages.css';
import {Link} from "react-router-dom";

const Admin = () => {
    //si l'utilisateur est un admin alors faire profile version admin sinon faire profil simple 
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-12 custom-bg text-light">
                        <h1>Pannel d'admin</h1>
                        <Link to="/NewGame">Crée un nouveau jeu</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;