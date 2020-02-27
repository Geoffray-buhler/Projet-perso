import React from 'react';
import './Video.css';
import * as header from './../../assets/video/header.mp4';

import * as imgHead from './../../assets/image/header.png';

const VideoBG = () =>{
    return(
        <video playsInline autoPlay muted loop id="bgvid" poster={imgHead.default}>
            <source src={ header } type="video/webm"></source>
        </video>
    )
}

export default VideoBG;