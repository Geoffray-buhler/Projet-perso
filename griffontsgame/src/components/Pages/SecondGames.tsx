import React, { useState, useCallback, useEffect } from 'react';
import './AllPages.css';
import { useAppState} from '../../services/AppContext';
import { Adresse,Port } from '../../services/UrlNPortServices';

const SecondeGames = () => {
    const { gamename } = useAppState();
    const [ infoGame, setInfoGame ] = useState( [""] as any );
    debugger
    useEffect(() => {
        let body = JSON.stringify({
            gamename:gamename
        })
        fetch(`${Adresse}:${Port}/gamesecond/`,{method:'POST',
                                                body,
                                                headers: {
                                                    'Content-Type':'application/json'
                                                },
                                                cache:'default'})
            .then(res => res.json())
            .then(data => {setInfoGame(data)})
            .catch(err => console.log(err))
    },[gamename]);
    if (infoGame.length === 0){
    return(
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-12 custom-bg text-light">
                            <div className="spinner-border text-info" role="status">
                                <span className="sr-only">Chargement...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
    return(
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-12 custom-bg text-light">
                            <h1 className="mb-3">{infoGame[0].title}</h1>
                            <h3 className="mb-3">Jeu crée en 2 heures en stream sur le thème de {infoGame[0].theme}</h3>
                            <h3 className="mb-3">{infoGame[0].description}</h3>
                            <img className="mb-3 screenshot" alt="" src={infoGame[0].screenshot}></img><br></br>
                            <a className="btn btn-primary mr-2 mt-3 mb-2 btn-font" href={infoGame[0].link}>Telechargement</a>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default SecondeGames