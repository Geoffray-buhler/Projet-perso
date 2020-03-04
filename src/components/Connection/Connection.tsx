import React from 'react';
import {DropdownButton} from 'react-bootstrap';

export default class Connection extends React.Component {
    state = {
        name:' ',
    };

    OnConnection = () => {
        let $login = document.querySelector('#Login');
        let $password = document.querySelector('#Password');
        fetch('https://localhost:3000')
    }

    render(){
        return(
            <DropdownButton id="dropdown-basic-button" title="Connection">
                <input type="text" id="Login"></input>
                <input type="password" id="Password"></input>
                <button className="btn btn-primary" onClick={this.OnConnection}>Connection</button>
            </DropdownButton>
        )
    }
}
