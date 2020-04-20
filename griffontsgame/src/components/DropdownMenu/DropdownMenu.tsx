import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import './DropdownMenu.css';
import {AppContext} from '../../services/AppContext';
import {useAppDispatch} from '../../services/DispatcherContext';

const BtnDropdown = ({item}) => {
    const dispatch = useAppDispatch();
    return <Dropdown.Item className="btn btn-grey" href="/Seconde games" onClick={() => dispatch({type:"change-game",newGame:item.title})}>{item.title}</Dropdown.Item>
}

export default class DropdownMenu extends React.Component {
    protected generateTitlesSecLinks():any {
        if(this.context.btnTitleSec.length === 0){
            return <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Chargement...</span>
                   </div>
        }else{
            return this.context.btnTitleSec.map((item) => {
                return <BtnDropdown item={item}/>
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