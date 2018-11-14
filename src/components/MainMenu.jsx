import React from 'react';

import { Link } from 'react-router-dom';

const MainMenu = props => {
    return (
        <nav className='main-menu'>
            <p className='menu-logo'>
                <Link to='/'>CANF</Link>
            </p>

            <div className='menu-connexion'>
                <Link to='/cart'>Cart</Link>
                <Link to='/connexion'>Hello {props.name}</Link>
            </div>
        </nav>
    );
};

export default MainMenu;