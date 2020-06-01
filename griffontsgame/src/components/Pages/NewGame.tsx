import React,{useState} from 'react';
import {Link} from "react-router-dom";
import fetchutil from '../../services/FetchUtils';
import { Adresse, Port } from '../../services/UrlNPortServices';

const NewGame = () => {

    const [state, setstate] = useState({
        gameName:'',
        descGame:'',
        linkDl:'',
        linkImg:'',
        princ:'',
        theme:'',
        msg:''
    })

    const handleChange = (event) => {
        const $inputEl: HTMLInputElement = event.target;
        const inputName: string = $inputEl.id;
        const  inputValue: string = $inputEl.value;
        switch(inputName){
            case 'GameName':
                setstate({...state,gameName: inputValue })
            break
            case 'DescGame':
                setstate({...state,descGame: inputValue })
            break
            case 'linkDl':
                setstate({...state,linkDl: inputValue })
            break
            case 'linkImg':
                setstate({...state,linkImg: inputValue })
            break
            case 'theme':
                setstate({...state ,theme: inputValue })
            break
            case 'princ':
                setstate({...state,princ: inputValue })
            break
        }

    }

    const fetchinfo = () => {

        let body = JSON.stringify({
            gamename:state.gameName,
            gamebody:state.descGame,
            gametheme:state.theme,
            gamelink:state.linkDl,
            gamescreen:state.linkImg,
            isprincipal:state.princ
        })

        fetchutil(`${Adresse}:${Port}/newgame`,{method:'POST',
                                                body,
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                cache:'default'})
            .then(res => res.json())
            .then(data => setstate({...state,msg:data}))
    }

    return(        
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3 text-light custom-bg p-4">
                        <h1>Crée un nouveau jeu</h1>
                        <label>Nom Du jeu</label><br/>
                        <input type="text" id="GameName" value={state.gameName} onChange={handleChange} className="mb-3 rounded" placeholder="Nom Du Jeu"></input><br/>
                        <label>Déscription</label><br/>
                        <input type="text" id="DescGame" value={state.descGame} onChange={handleChange} className="mb-3 rounded" placeholder="Petite déscription"></input><br/>
                        <label>Lien de Téléchargement</label><br/>
                        <input type="text" id="linkDl" value={state.linkDl} onChange={handleChange} className="mb-3 rounded" placeholder="URL de Téléchargement"></input><br/>
                        <label>Lien de l'image</label><br/>
                        <input type="text" id="linkImg" value={state.linkImg} onChange={handleChange} className="mb-3 rounded" placeholder="Pas Obligatoire"></input><br/>
                        <label>Theme du jeu</label>
                        <input type="text" id="theme" value={state.theme} onChange={handleChange} className="mb-3 rounded" placeholder="theme du jeu"></input><br/>
                        <select id="princ" onChange={handleChange} className="form-control">
                            <option value="1">Principal</option>
                            <option value="0">Secondaire</option>
                        </select>
                        <Link className="btn btn-danger" onClick={fetchinfo} to="/admin">Ok</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewGame;