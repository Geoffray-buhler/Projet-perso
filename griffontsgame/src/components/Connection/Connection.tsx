import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from '../../services/AppContext';
import { Adresse,Port } from '../../services/UrlNPortServices';
import {useAppDispatch} from '../../services/DispatcherContext';

const Connection = () => {
   
    const [state, setstate] = useState({
        login:'',
        password:'',
        currentUser:''
    });

    const [err,seterr] = useState('');

    const CheckUser = () => {

        const dispatch = useAppDispatch();
        let body = JSON.stringify({
            login: state.login,
            psw: state.password
        })

        if(state.login && state.password){
            fetch(`${Adresse}:${Port}/user/`,{method:'POST',
                                              body,
                                              headers: {
                                                  'Content-Type': 'application/json'
                                              },
                                              cache:'default'})
                .then(res => res.json())
                .then(data => {
                    dispatch({type:"change-user",currentUser:data});
                })
                .then(err => {
                    console.log(err)
                })
        }else{
            if(!state.login){
                return("Veuillez-mettre un nom de compte valide")
            }else{
                return("Veuillez-mettre un Mot de passe valide")
            }
        }
    }
    
    const resetState = () => {
        const dispatch = useAppDispatch();
        dispatch({type:"change-user",currentUser:[]});
        setstate({        
            login:'',
            password:'',
            currentUser:''
        })
    }

    const onUpdateLoginState = (e:string) => {
        setstate({ login:e.target.value });
    }

    const onUpdatePasswordState = (e:string) => {
        setstate({ password:e.target.value });
    }
    
    const createAdminBtn = () => {
        if ((state.currentUser as any).roles === 'admin'){
            return (<Link className="btn btn-info mt-3" to="/admin">Administration</Link>)
        }   return (null)
    }

if(state.currentUser !== ''){
    return( 
        <div className="dropdown">
            <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profils
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div className="d-flex flex-column justify-content-center ml-1 p-2">
                    <h5>Bienvenu</h5>
                    <p>{(state.currentUser as any).pseudo},{(state.currentUser as any).roles}!</p>
                    <Link className="btn btn-primary" to="/profil">Profil</Link>
                    {createAdminBtn()}
                    <Link className="btn btn-danger mt-3" onClick={resetState} to="/">Déconnexion</Link>
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
                    <input type="text" id="Login" value={state.login} onChange={() => onUpdateLoginState}></input>
                    <h5 className="text-center">Mot de passe</h5>
                    <input type="password" id="Password" value={state.password} onChange={() => onUpdatePasswordState}></input>
                    <button className="btn btn-info mt-2" onClick={() => CheckUser()}>Connection</button>
                    <p className="text-dark text-center">Si vous avez pas de compte <Link to="/cgu">cree en un !</Link></p>
                </div>
            </div>
        </div>
    )
}


Connection.contextType = AppContext;

export default Connection