import React, {Component} from 'react'
import c from './NavBar.module.css'
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <img src="https://img.icons8.com/material-rounded/344/ffffff/home.png" />
                <NavLink to='/'>Home</NavLink>
            </div>
            <div className={c.item}>
                <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/344/ffffff/external-Explore-social-media-bearicons-glyph-bearicons.png" alt=""/>
                <NavLink to='/explore'>Explore</NavLink></div>
            <div className={`${c.item} ${c.active}`}>
                <img src="https://img.icons8.com/material-rounded/2x/ffffff/appointment-reminders.png" alt=""/>
                <NavLink to='/notifications'>Notifications</NavLink></div>
            <div className={c.item}>
                <img src="https://img.icons8.com/ios-filled/2x/ffffff/imessage.png" alt=""/>
                <NavLink to='/messages'>Messages</NavLink></div>
            <div className={c.item}>
                <img src="https://img.icons8.com/external-phatplus-solid-phatplus/ffffff/2x/external-bookmarks-essential-phatplus-solid-phatplus.png" alt=""/>
                <NavLink to='/bookmarks'>Bookmarks</NavLink></div>
            <div className={c.item}>
                <img src="https://img.icons8.com/ios/2x/ffffff/table-top-view.png" alt=""/>
                <NavLink to='/meetings'>Meetings</NavLink></div>
            <div className={c.item}>
                <img src="https://img.icons8.com/ios-glyphs/2x/ffffff/user-male-circle.png" alt=""/>
                <NavLink to='/profile'>Profile</NavLink></div>

            <div className={`${c.logout} ${c.item}`}>
                <img src="https://img.icons8.com/ios-glyphs/2x/ffffff/exit.png" alt=""/>
                <NavLink to='#'>Logout</NavLink></div>
      </nav>
    )
}

export default NavBar;