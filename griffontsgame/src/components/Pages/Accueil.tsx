import React from 'react';
import {Link} from "react-router-dom";
import './AllPages.css';

const Accueil = () => {
  return (
    <div className="App">
        <div className="container">
            <div className="row">
              <div className="col-12 text-light custom-bg p-4">
                  <h1 className="mb-3">PRESENTATION</h1>
                  <p className="mb-3">Bonjour sur ce site vous trouverez divers travaux que j'ai fait durant ma formation ainsi que ce que je fais durant mes lives Twitch !!!</p>
                  <p>Dans l'espoir de vous voir commenter mes creations</p>
                  <p>N'hésitez pas à donner votre avis !</p>
                  <p>Bisous poilus barbus</p>
                  <Link className="btn btn-info mr-2 mt-3 mb-2" to="/APropos">A propos</Link>
                  <Link className="btn btn-success mt-3 mb-2" to="/Contact">Contact</Link>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Accueil;