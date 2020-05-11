import React from 'react';
import {Link} from "react-router-dom";
import {AppContext} from '../../services/AppContext';
import { Adresse,Port } from '../../services/UrlNPortServices';
import {useAppDispatch} from '../../services/DispatcherContext';

export default class Connection extends React.Component {

    context!: React.ContextType<typeof AppContext>;
    
    state = {
        login:'',
        password:'',
        currentUser:''
    };

    CheckUser = () => {
        const dispatch = useAppDispatch();
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
                    dispatch({type:"change-user",currentUser:data});
                    console.log(this.context.currentUser)
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
    
    resetState = () => {
        const dispatch = useAppDispatch();
        dispatch({type:"change-user",currentUser:[]});
        this.setState({        
            login:'',
            password:'',
            currentUser:''
        })

    }

    onUpdateLoginState = (e:any) => {
        this.setState({login:e.target.value});
    }

    onUpdatePasswordState = (e:any) => {
        this.setState({password:e.target.value});
    }
    
    createAdminBtn = () => {
        if ((this.state.currentUser as any).roles === 'admin'){
            return (<Link className="btn btn-info mt-3" to="/admin">Administration</Link>)
        }   return (null)
    }

    render = () =>{
        if(this.state.currentUser !== ''){
            return( 
                <div className="dropdown">
                    <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Profils
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="d-flex flex-column justify-content-center ml-1 p-2">
                            <h5>Bienvenu</h5>
                            <p>{(this.state.currentUser as any).pseudo},{(this.state.currentUser as any).roles} !</p>
                            <Link className="btn btn-primary" to="/profil">Profil</Link>
                            {this.createAdminBtn()}
                            <Link className="btn btn-danger mt-3" onClick={this.resetState} to="/">Déconnexion</Link>
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
                        <div className="d-flex flex-column justify-content-center ml-1 p-2">
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
