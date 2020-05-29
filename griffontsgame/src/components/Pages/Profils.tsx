import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalTitle } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Button from 'react-bootstrap/Button';
import { Adresse,Port } from '../../services/UrlNPortServices';
import {AppContext, useAppState} from '../../services/AppContext';
import fetchutil from '../../services/FetchUtils';

const Profils = () => {
    const [show, setShow] = useState(false);
    const [state, setState] = useState();
    const appcontext = useAppState();
    let id = appcontext.currentUser?.id;
    let login = appcontext.currentUser?.login;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const DeleteUser = (id,login) => {
        let body = JSON.stringify({
            id: id,
            login: login
        })

        fetchutil(`${Adresse}:${Port}/delete/`,{method:'POST',
                                          body,
                                          headers: {
                                              'Content-Type': 'application/json'
                                          },
                                          cache:'default'})
    };

    const allfunct = (id,login) =>{
        DeleteUser(id,login);
        handleClose();
    }

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-12 custom-bg text-light">
                        <h1>Profils</h1>
                        <p>Votre nom: {appcontext.currentUser?.pseudo}</p>
                        <p>Votre nom de connexion: {appcontext.currentUser?.login}</p>
                        <p>Votre Role: {appcontext.currentUser?.roles}</p>
                        <Link className="btn btn-info mb-3" to="/modify">Modifier</Link>
                        <button className="btn btn-danger ml-3 mb-3" onClick={() => {allfunct(id,login)}}>Supprimé votre compte</button>
                        <Modal show={show} onHide={handleClose}>
                            <ModalHeader closeButton>
                                <ModalTitle>Attention</ModalTitle>
                            </ModalHeader>
                            <Modal.Body>Etes-vous sur de vouloir supprimer votre compte ?</Modal.Body>
                            <Modal.Footer>
                                <Link className="btn btn-danger" to="/" onClick={handleClose}>Oui</Link>
                                <Button variant="primary" onClick={handleClose}>Non</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profils