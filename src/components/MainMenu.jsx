import React from 'react';

const MainMenu = props => {
    return (
        <nav className='main-menu'>
            <p className='menu-logo'>
                <a href='#'>CANF</a>
            </p>

            <div className='menu-connexion'>
                <a href='#'>Cart</a>
                <p>| Hello {props.name}</p>
            </div>
        </nav>
    );
};

export default MainMenu;