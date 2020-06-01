import React,{useState, useEffect} from 'react';
import './AllPages.css';
import {Link} from "react-router-dom";
import fetchutil from "../../services/FetchUtils";
import { Adresse,Port } from '../../services/UrlNPortServices';
import NotHere from './NotHere';
import { IDataBaseUsers } from '../../model/I_database_inteface';

const Admin = () => {
    //si l'utilisateur est un admin alors faire profile version admin sinon faire profil simple 

    const [valid, setValid] = useState('0')
    const [users,setUsers] = useState([]);

    useEffect(() => {

        let usertable = []

        fetchutil(`${Adresse}:${Port}/admin`,{method:'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        cache:'default'})
            .then(res => res.text())
            .then(data => {
                console.log(data)
                setValid(data);
            });

        fetchutil(`${Adresse}:${Port}/users`,{method:'POST',
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                cache:'default'})
            .then(res =>res.json())
            .then(users => setUsers(users))
    },[]);

    const generateUserList = () => {
        users.map((item:IDataBaseUsers) => {
            return (
                <div>
                    <span>{item.id}</span><span>{item.pseudo}</span><span>{item.email}</span><span>{item.pseudo}</span>
                </div>
            )
        });
    }
        switch (valid) {
            case "1":
                return ( 
                    <div className="App">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 custom-bg text-light">
                                    <h1>Pannel d'admin</h1>
                                </div>
                                <div className="col-6 custom-bg text-light">
                                    <h3>Menu des jeux</h3>
                                    <Link to="/NewGame">Crée un nouveau jeu</Link>
                                </div>
                                <div className="col-6 custom-bg text-light">
                                    <h3>Menu des utilisateurs</h3>
                                    {generateUserList()}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            default:
                return <NotHere></NotHere>
        }
}

export default Admin;