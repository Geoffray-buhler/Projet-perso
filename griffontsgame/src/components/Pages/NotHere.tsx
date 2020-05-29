import React from 'react';
import './AllPages.css';
import { Link } from 'react-router-dom';

const NotHere = () => {
    return(
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-12 custom-bg text-light">
                        <h1 className="mt-5 mb-5">Vous avez pas acces à cette page</h1>
                        <Link className="mb-5 btn btn-primary" to="/">Retourner à l'accueil</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotHere