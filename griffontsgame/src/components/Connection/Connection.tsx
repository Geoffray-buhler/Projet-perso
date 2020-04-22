import React from 'react';
import {Link} from "react-router-dom";
import {AppContext} from '../../services/AppContext';
import { Adresse,Port } from '../../services/UrlNPortServices';


export default class Connection extends React.Component {
    context!: React.ContextType<typeof AppContext>;
    
    state = {
        login:'',
        password:'',
        currentUser:''
    };

    CheckUser = () => {
        let body = JSON.stringify({
            login: this.state.login,
            psw: this.state.password
        })

        if(this.state.login && this.state.password){
            fetch(`${Adresse}:${Port}/user/`,{method:'POST',
                                                body,
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                cache:'default'})
                .then(res => res.json())
                .then(data => {
                    debugger
                    this.setState({
                        currentUser:data
                    })
                    console.log(this.state.currentUser)
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

    render = () =>{
        if(this.state.currentUser !== ''){
            return( 
                <div className="dropdown">
                    <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Profils
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="d-flex flex-column justify-content-center p-2">
                            <h5>Bienvenu {(this.state.currentUser as any).pseudo} !</h5>
                            <Link to="/profil">Profil</Link>
                        </div>
                    </div>
                </div>
            )
        }
            return(
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Connection
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="d-flex flex-column justify-content-center p-2">
                            <h5 className="text-center">Login</h5>
                            <input type="text" id="Login" value={this.state.login} onChange={this.onUpdateLoginState}></input>
                            <h5 className="text-center">Mot de passe</h5>
                            <input type="password" id="Password" value={this.state.password} onChange={this.onUpdatePasswordState}></input>
                            <button className="btn btn-info mt-2" onClick={ () => this.CheckUser() }>Connection</button>
                            <p className="text-dark text-center">Si vous avez pas de compte <Link to="/cgu">cree en un !</Link></p>
                        </div>
                    </div>
                </div>
            )
    }
}
