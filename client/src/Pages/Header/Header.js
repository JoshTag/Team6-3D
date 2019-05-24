import React from 'react';
//import logo from '../../assets/Logo/Logo-instock.svg'
import './header.scss'
//import '../../App.scss'

function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <h1>KickStarterProjects</h1>
                <ul className="nav-bar__tabs">
                    <li className="nav-bar__tabs--inventory">Inventory</li>
                    <li className="nav-bar__tabs--locations">Locations</li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;