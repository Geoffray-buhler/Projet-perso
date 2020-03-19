import React from 'react';
import {Link} from "react-router-dom";

const Accueil = () => {
  return (
    <div className="App">
        <div className="container">
            <div className="row">
              <div className="col-12 text-light">
                  <h1 className="mb-3">Présentation</h1>
                  <h3 className="mb-3">Bonjour sur ce site vous trouverais diverts travaux que j'ai fait durant ma formation ainsi que ce que je fait durant mes live Twitch !!!</h3>
                  <h3 className="mb-3">Dans l'espoir de vous voir commenter mes creations</h3>
                  <h3 className="mb-3">Hesitez pas a donner votre avis !</h3>
                  <h3 className="mb-3">Bisous poilus barbus</h3>
                  <Link className="btn btn-info mr-2 mt-3 mb-2" to="/APropos">A propos</Link>
                  <Link className="btn btn-success mt-3 mb-2" to="/Contact">Contact</Link>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Accueil;