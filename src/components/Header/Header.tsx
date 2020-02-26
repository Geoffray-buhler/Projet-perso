import React from 'react';
import NavBar from '../NavBar/NavBar';
import VideoBG from '../Video/Video';
import Jumbotron from '../Jumbotron/Jumbotron';

const Header = () =>{

    return(
    <>
        <Jumbotron></Jumbotron>
        <VideoBG></VideoBG>
        <NavBar></NavBar>
    </>
    )
}

export default Header;