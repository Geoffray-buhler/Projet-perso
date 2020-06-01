import React,{useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from '../../services/AppContext';
import { Adresse,Port } from '../../services/UrlNPortServices';
import {useAppDispatch} from '../../services/DispatcherContext';
import fetchutil from '../../services/FetchUtils';
import { cleanup } from '@testing-library/react';

const useLocalStorage = (LocalToken: string): [string,React.Dispatch<React.SetStateAction<string>>] => {

    const [tokenVal,setTokenVal] = React.useState(
        localStorage.getItem(LocalToken) || ''
    );

    React.useEffect(() => {
        localStorage.setItem(LocalToken, tokenVal);
    }, [tokenVal]);

    return [tokenVal, setTokenVal];
}

const Connection = () => {

    const dispatch = useAppDispatch();
   
    const [token, setToken] = useLocalStorage('tokenVal');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState('');

    const CheckUser = () => {

        let body = JSON.stringify({
            login: login,
            psw: password
        })

        if(login && password){
            fetch(`${Adresse}:${Port}/user/`,{method:'POST',
                                              body,
                                              headers: {
                                                  'Content-Type': 'application/json'
                                              },
                                              cache:'default'})
                .then(res => res.json())
                .then(data => {
                    dispatch({type:"change-user",currentUser:data});
                    setToken(data.token);
                    setCurrentUser(data);
                })
        }else{
            if(!login){
                return("Veuillez-mettre un nom de compte valide")
            }else{
                return("Veuillez-mettre un Mot de passe valide")
            }
        }
    }

    const checkLocalStorage = () => {
        if(token !== ""){
            fetchutil(`${Adresse}:${Port}/user`,{method:'POST',
                                                  headers: {
                                                    'Content-Type': 'application/json'
                                                  },
                                                  cache:'default'})
                .then(res => res.json())
                .then(data => {
                    dispatch({type:"change-user",currentUser:data.data});
                    setCurrentUser(data);
                })
        }
    }
    
    const resetState = () => {
        dispatch({type:"change-user",currentUser:null});
        setLogin('');
        setPassword('');
        setCurrentUser('');
        localStorage.removeItem('tokenVal');
    }

    const onUpdateLoginState = (e:any) => {
        setLogin( e.target.value );
    }

    const onUpdatePasswordState = (e:any) => {
        setPassword( e.target.value );
    }
    
    const createAdminBtn = () => {
        if ((currentUser as any).roles === 'admin'){
            return (<Link className="btn btn-info mt-3" to="/admin">Administration</Link>)
        }   return (null)
    }

    useEffect(() => {
        if (currentUser === ""){
            checkLocalStorage();
            console.log(currentUser)
        }
    }, [])

    console.log(currentUser)
if(currentUser === ""){
    return(<div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Connection
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div className="d-flex flex-column justify-content-center ml-1 p-2">
                    <h5 className="text-center">Login</h5>
                    <input type="text" id="Login" value={login} onChange={onUpdateLoginState}></input>
                    <h5 className="text-center">Mot de passe</h5>
                    <input type="password" id="Password" value={password} onChange={onUpdatePasswordState}></input>
                    <button className="btn btn-info mt-2" onClick={() => CheckUser()}>Connection</button>
                    <p className="text-dark text-center">Si vous avez pas de compte <Link to="/cgu">cree en un !</Link></p>
                </div>
            </div>
        </div>)
}else{
    return( 
        <div className="dropdown">
            <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profils
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div className="d-flex flex-column justify-content-center ml-1 p-2">
                    <h5>Bienvenu</h5>
                    <p>{(currentUser as any)[0].pseudo}</p>
                    <Link className="btn btn-primary" to="/profil">Profil</Link>
                    {createAdminBtn()}
                    <Link className="btn btn-danger mt-3" onClick={resetState} to="/">Déconnexion</Link>
                </div>
            </div>
        </div>
    )
        
    }
}

Connection.contextType = AppContext;

export default Connection