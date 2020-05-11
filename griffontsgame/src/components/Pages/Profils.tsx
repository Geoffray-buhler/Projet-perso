import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalTitle } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Button from 'react-bootstrap/Button';
import {AppContext} from '../../services/AppContext';

const Profils = () => {
    const [show, setShow] = useState(false);
    const [state, setState] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-12 custom-bg text-light">
                            <h1>Profils</h1>
                            <p>Votre nom: {}</p>
                            <p>Votre nom de connexion:</p>
                            <p>Votre Role:</p>
                            <button className="btn btn-info">Modifier</button>
                            <button className="btn btn-danger ml-2" onClick={handleShow}>Supprimé votre compte</button>
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