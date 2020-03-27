import React from 'react';
import {Link} from "react-router-dom";
import {DropdownButton} from 'react-bootstrap';
import AppContext from '../AppContext';


export default class Connection extends React.Component {
    state = {
        login:'',
        password:''
    };

    CheckUser = () => {

        let post = JSON.stringify({
            login: this.state.login,
            psw: this.state.password
        })

        if(this.state.login && this.state.password){
            fetch('http://localhost:3001/user/',{method:'POST',
                                                body:post,
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                cache:'default'})
                .then(res => {
                    console.log(res)

                    this.setState({
                        currentUser: res
                    })

                })
                .then(err => {
                    this.setState({
                        currentErr: err
                    })
                })
        }else{
            if(!this.state.login){
                return("Veuillez-mettre un nom de compte valide")
            }else{
                return("Veuillez-mettre un Mot de passe valide")
            }
        }
    }                                        

    onUpdateLoginState = (e:any) => {
        this.setState({login:e.target.value});
    }

    onUpdatePasswordState = (e:any) => {
        this.setState({password:e.target.value});
    }

    render(){
        return(
            <AppContext.Consumer>
                {
                    value => 
                        value && value.currentUser ?
                        (
                            <DropdownButton variant="info" id="dropdown-basic-button" title="Connection">
                                <div className="d-flex flex-column justify-content-center p-2">
                                    <h5>Hello { (value.currentUser as any).Pseudo } !</h5>
                                    <Link to="/profile">Profile</Link>
                                </div>
                            </DropdownButton>
                        )
                        : 
                        (
                        <DropdownButton variant="info" id="dropdown-basic-button" title="Connection">
                            <div className="d-flex flex-column justify-content-center p-2">
                                <h5 className="text-center">Login</h5>
                                <input type="text" id="Login" value={this.state.login} onChange={this.onUpdateLoginState}></input>
                                <h5 className="text-center">Mot de passe</h5>
                                <input type="password" id="Password" value={this.state.password} onChange={this.onUpdatePasswordState}></input>
                                <button className="btn btn-info mt-2" onClick={ () => this.CheckUser() }>Connection</button>
                                <p className="text-dark text-center">Si vous avez pas de compte <Link to="/cgu">cree en un !</Link></p>
                            </div>
                        </DropdownButton>
                    )
                }
            </AppContext.Consumer>
            
        )
    }
}
