import React from 'react';

import './Logo.css';
import Logo_moi from '../../assets/image/logo_moi.png';

const Logo = () => {

    return(
        <img 
            className="logo mr-2"
            src={Logo_moi} 
            alt="Icone du site internet de Griffont">
        </img> 
    )
}
export default Logo;