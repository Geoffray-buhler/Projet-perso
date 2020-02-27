import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';

const DropdownMenu = () =>{

    return(
        <DropdownButton id="dropdown-basic-button" title="Jeux challenge 2 Heure">
            <Dropdown.Item href="#/action-1">1er jeu</Dropdown.Item>
            <Dropdown.Item href="#/action-2">2eme jeu</Dropdown.Item>
            <Dropdown.Item href="#/action-3">3eme jeu</Dropdown.Item>
        </DropdownButton>
    )
}

export default DropdownMenu;