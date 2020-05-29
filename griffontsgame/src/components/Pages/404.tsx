import React from 'react';
import NF404 from '../../assets/image/404perso.png';
import './AllPages.css';

const L404 = () => {
    return (
      <div className="App">
          <div className="container">
              <div className="row">
                <div className="col-12 text-light custom-bg p-4">
                    <img alt="image de erreur 404" className="img404" src={NF404}></img><br/>
                    <div className="lds-ellipsis"></div>
                </div>
            </div>
          </div>
      </div>
    );
  }

  export default L404