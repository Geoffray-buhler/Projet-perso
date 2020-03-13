import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import './Footer.css';
import LogoLink from '../../assets/image/iconmonstr-linkedin-4.svg';
import LogoTwitch from '../../assets/image/iconmonstr-twitch-4.svg';
import LogoGitHub from '../../assets/image/iconmonstr-github-1.svg';

const Footer = () =>{

    return(
        <footer className="App-footer">
                <Container fluid>
                    <Navbar expand="lg" variant="dark" bg="dark" className="shadow-lg justify-content-between">
                        <Navbar.Brand><h6>Created by MOI</h6></Navbar.Brand>
                        <Navbar.Brand >                
                            <div>
                                <a href="https://www.linkedin.com/in/geoffray-buhler-93100099/"><svg className="svg">{LogoLink}</svg></a>
                                <a href="https://www.twitch.tv/griffont39/"><svg className="svg">{LogoTwitch}</svg></a>
                                <a href="https://github.com/Geoffray-buhler"><svg className="svg">{LogoGitHub}</svg></a>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Brand><h6>Created by MOI</h6></Navbar.Brand>
                    </Navbar>
                </Container>
        </footer>
    )
}

export default Footer;