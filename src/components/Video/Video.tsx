import React from 'react';
import './Video.css';
import * as header from './../../assets/video/header.webm';//src/assets/video/header.webm';

import * as imgHead from './../../assets/image/header.png';

const VideoBG = () =>{
    return(
        <video playsInline autoPlay muted loop id="bgvid" poster={imgHead.default}>{/*<!=poster="./../../../public/image/header.png" >*/}
            <source src={ header } type="video/webm"></source>
            {/* <source src='../../../public/video/header.mp4' type="video/mp4"></source> */}
        </video>
    )
}

export default VideoBG;