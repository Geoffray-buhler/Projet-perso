import React from 'react';
import './AllPages.css';

const Apropos = () => {
    return(
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-12 custom-bg text-light">
                        <h1>A Propos de Moi</h1>
                        <p>Developeur Web depuis peu, j'ai toujours aimé la programmation.</p>
                        <p>Actuellement en formation Developeur web / web mobile.</p>
                        vous pouvez trouver mon cv <a href="https://geoffray-buhler.github.io/CV/">ici</a>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apropos;