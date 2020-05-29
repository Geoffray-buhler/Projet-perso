import React,{useState} from 'react';
import {Link} from "react-router-dom";

const NewGame = () => {

    const [state, setstate] = useState({
        gameName:'',
        descGame:'',
        linkDl:'',
        linkImg:''
    })

    const handleChange = () => {

    }

    return(        
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-light custom-bg p-4">
                        <h1>Crée un nouveau jeu</h1>
                        <label>Nom Du jeu</label><br/>
                        <input type="text" id="GameName" value={state.gameName} onChange={handleChange} className="mb-3 rounded" placeholder="Nom Du Jeu"></input><br/>
                        <label>Déscription</label><br/>
                        <input type="text" id="DescGame" value={state.descGame} onChange={handleChange} className="mb-3 rounded" placeholder="Petite déscription"></input><br/>
                        <label>Lien de Téléchargement</label><br/>
                        <input type="text" id="linkDl" value={state.linkDl} onChange={handleChange} className="mb-3 rounded" placeholder="URL de Téléchargement"></input><br/>
                        <label>Lien de l'image</label><br/>
                        <input type="text" id="linkImg" value={state.linkDl} onChange={handleChange} className="mb-3 rounded" placeholder="Pas Obligatoire"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewGame;