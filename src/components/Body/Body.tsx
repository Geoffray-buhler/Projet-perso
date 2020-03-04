import React from 'react';
import './Body.css';
import Logo from '../../assets/image/logo_moi.png';

const Body = () => {
    return(
        <main className="App-main">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-light">
                        <img className="position-absolute logo" src={Logo} alt="Icone du site internet de Griffont"></img> 
                        <h1 className="mb-3">Présentation</h1>
                        <h3 className="mb-3">Bonjour sur ce site vous trouverais differant travaux que j'ai fait durant ma formation ainsi que avant en auto-didacte !!!</h3>
                        <h3 className="mb-3">Dans l'espoir de vous voir connecté et commentais mes creations</h3>
                        <h3 className="mb-3">Bisous poilus barbues</h3>
                        <a className="btn btn-info mr-2 mt-3 mb-2">A propos</a>
                        <a className="btn btn-success mt-3 mb-2">Contact</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Body;