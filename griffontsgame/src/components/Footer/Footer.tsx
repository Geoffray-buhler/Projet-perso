import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import './Footer.css';
import LogoLink from '../../assets/image/iconmonstr-linkedin-1.svg';
import LogoTwitch from '../../assets/image/iconmonstr-twitch-1.svg';
import LogoGitHub from '../../assets/image/iconmonstr-github-1.svg';

const Footer = () =>{

    return(
        <footer className="App-footer">
                <Container fluid>
                    <Navbar expand="lg" variant="dark" className="shadow-lg color-footer justify-content-between">
                        <Navbar.Brand><h6>Created by MOI</h6></Navbar.Brand>
                        <Navbar.Brand >                
                            <div>
                                <a className="hovicon effect-8 mr-2 ml-2" href="https://www.linkedin.com/in/geoffray-buhler-93100099/"><img className="svg" src={LogoLink}></img></a>
                                <a className="hovicon effect-8 mr-2 ml-2" href="https://www.twitch.tv/griffont39/"><img className="svg" src={LogoTwitch}></img></a>
                                <a className="hovicon effect-8 mr-2 ml-2" href="https://github.com/Geoffray-buhler"><img className="svg" src={LogoGitHub}></img></a>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Brand><h6>© Copyright - 2022</h6></Navbar.Brand>
                    </Navbar>
                </Container>
        </footer>
    )
}

export default Footer;