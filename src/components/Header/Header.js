import React from 'react';

import './Header.css';
import facebook from  '../../assets/facebook.svg';

function Header(){
    return (
        <header>
            <img  src={facebook}/>
            <a href='#'>Meu Perfil</a>
        </header>
    );
}

export default Header;