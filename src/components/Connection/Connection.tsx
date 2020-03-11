import React from 'react';
import {Link} from "react-router-dom";
import {DropdownButton} from 'react-bootstrap';


export default class Connection extends React.Component {
    state = {
        login:'',
    };

    CheckAll = () => {
        this.CheckLogin();
        this.CheckPassword();
    }

    CheckLogin = () => {
        fetch('http://localhost/');
    }

    CheckPassword = () => {
        fetch('http://localhost/');
    }

    render(){
        return(
            <DropdownButton variant="info" id="dropdown-basic-button" title="Connection">
                <div className="d-flex flex-column justify-content-center p-2">
                    <h5 className="text-center">Login</h5>
                    <input type="text" id="Login"></input>
                    <h5 className="text-center">Mot de passe</h5>
                    <input type="password" id="Password"></input>
                    <button className="btn btn-info mt-2" onClick={this.CheckAll}>Connection</button>
                    <p className="text-dark text-center">Si vous avez pas de compte <Link to="/cgu">cree en un !</Link></p>
                </div>
            </DropdownButton>
        )
    }
}
