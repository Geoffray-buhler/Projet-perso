import React,{useState, useEffect} from 'react';
import './AllPages.css';
import {Link} from "react-router-dom";
import fetchutil from "../../services/FetchUtils";
import { Adresse,Port } from '../../services/UrlNPortServices';
import NotHere from './NotHere';
import { IDataBaseUsers } from '../../model/I_database_inteface';
import Trashcan from '../../assets/image/trash-can.png';

const Admin = () => {
    //si l'utilisateur est un admin alors faire profile version admin sinon faire profil simple 

    const [valid, setValid] = useState('0')
    const [users,setUsers] = useState([]);

    useEffect(() => {

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
        return users.map((item:IDataBaseUsers) => {
            return <div className="col-12 mt-2 border d-flex justify-content-between">{item.id} | {item.pseudo} {item.email}<button className="btn btn-danger m-2"><img className="trash" alt=" de corbeille" src={Trashcan}></img></button></div>
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
                                    <div className="container">
                                        <div className="row">
                                            {generateUserList()}
                                        </div>
                                    </div>
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