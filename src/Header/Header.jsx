import React, {Component} from 'react'
import c from './Header.module.css';
const Header = () => {
    return (
        <div className={c.header}>
            <img className={c.logo} src="https://img.icons8.com/ios/2x/microsoft-to-do-app.png" alt="logo" />
            <p>Header</p>    
        </div>
    )
}

export default Header;