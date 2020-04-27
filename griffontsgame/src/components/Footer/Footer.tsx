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
                        <Navbar.Brand><p>Created by MOI</p></Navbar.Brand>
                        <Navbar.Brand>                
                            <div>
                                <a className="hovicon effect-8 mr-2 ml-2" href="https://www.linkedin.com/in/geoffray-buhler-93100099/"><img className="svg" alt="Logo Lien pour ma page linked in" src={LogoLink}></img></a>
                                <a className="hovicon effect-8 mr-2 ml-2" href="https://www.twitch.tv/griffont39/"><img className="svg" alt="Logo Lien pour ma page Twitch" src={LogoTwitch}></img></a>
                                <a className="hovicon effect-8 mr-2 ml-2" href="https://github.com/Geoffray-buhler"><img className="svg" alt="Logo Lien pour ma page GitHub" src={LogoGitHub}></img></a>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Brand><p>© Copyright - 2020</p></Navbar.Brand>
                    </Navbar>
                </Container>
        </footer>
    )
}

export default Footer;