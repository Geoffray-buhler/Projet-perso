import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './AllPages.css';

const Apropos = () => {
    return(
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-light">
                        <h1>Contactez mwé</h1>
                        <Form>
                            <Form.Row>
                                <Form.Group sm={{ span: 4, offset: 4 }} as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group sm={{ span: 4, offset: 4 }} as={Col} controlId="formGridobjet">
                                <Form.Label>Objet</Form.Label>
                                <Form.Control as="select" value="Choisissez la type de demande">
                                    <option>Bug sur un jeu</option>
                                    <option>Demande de jeu</option>
                                    <option>Ajout d'un theme pour les streams</option>
                                    <option>Autres</option>
                                </Form.Control>
                            
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" ></Form.Control>
                            </Form.Group>

                            <Button className="mb-3" variant="primary" type="submit">
                                Envoye
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apropos;