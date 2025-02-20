import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../../../.././src/./index.css';

export const Headers = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <header>
            <div className="container">
                <div className="navbar-grid">
                    <div className="logo">
                        <NavLink to='/'>
                            <h1>Roamora</h1>
                        </NavLink>
                    </div>
                    <div className="hamburger" onClick={toggleSidebar}>
                        <FiMenu size={30} />
                    </div>
                    <nav className={sidebar ? "active" : ""}>
                        <div className="close-icon" onClick={toggleSidebar}>
                            <FiX size={30} />
                        </div>
                        <ul>
                            <li><NavLink to='/' onClick={toggleSidebar}>Home</NavLink></li>
                            <li><NavLink to='/about' onClick={toggleSidebar}>About</NavLink></li>
                            <li><NavLink to='/country' onClick={toggleSidebar}>Country</NavLink></li>
                            <li><NavLink to='/contact' onClick={toggleSidebar}>Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
