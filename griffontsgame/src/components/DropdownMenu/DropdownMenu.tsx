import React, { useContext } from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import './DropdownMenu.css';
import AppContext from '../AppContext';

export default class DropdownMenu extends React.Component {
    
    constructor(props) {
        super(props);
    }

    protected generateTitlesSecLinks():any {
        if(this.context.btnTitleSec.length === 0){
            return <div>Chargement...</div>
        }else{
            return this.context.btnTitleSec.map((item) => {
                return <Dropdown.Item className="btn btn-grey" href="/Seconde games" onClick={()=>{this.context.ChangeNameGame(item.title)}}>{item.title}</Dropdown.Item>
            });
        }
    }

    public render(){
        return(
            <DropdownButton variant="success" id="dropdown-basic-button" title="Jeux challenge 2 Heures">
                {this.generateTitlesSecLinks()}
            </DropdownButton>
        )
    }
}

DropdownMenu.contextType = AppContext;