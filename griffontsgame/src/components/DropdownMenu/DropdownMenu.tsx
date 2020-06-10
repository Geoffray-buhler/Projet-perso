import React from 'react';
import {AppContext} from '../../services/AppContext';
import {useAppDispatch} from '../../services/DispatcherContext';
import {Link} from 'react-router-dom';
import 'jquery/bower.json';
import 'bootstrap';
import './DropdownMenu.css';

const BtnDropdown = ({gamename}) => {
    const dispatch = useAppDispatch();
    return <Link className="btn btn-customcolor ml-2 mb-2" to="/Seconde games" onClick={() => { dispatch({type:"change-game",newGame:gamename});}}><div className="btn-font">{gamename}</div></Link>
}

export default class DropdownMenu extends React.Component {

    //Fonction qui permet de crée les boutons de dropdown en fonction des jeux secondaire enregistrés dans la BDD

    protected generateTitlesSecLinks():any {
        if(this.context.btnTitleSec.length === 0){
            return <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Chargement...</span>
                   </div>
        }else{
            return this.context.btnTitleSec.map((item) => {
                return <BtnDropdown gamename={item.title}/>
            });
        }
    }

    public render(){
        return(
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Jeux 2 heure challenge
                </button>
                <div className="dropdown-menu border p-3" aria-labelledby="dropdownMenuButton">
                    {this.generateTitlesSecLinks()}
                </div>
            </div>
        )
    }
}

DropdownMenu.contextType = AppContext;