import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiSearch, FiClock, FiUser } from 'react-icons/fi';
import '../../../.././src/./index.css';

export const Headers = () => {
    const [sidebar, setSidebar] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                    {!isMobile && (
                        <div className="hamburger" onClick={toggleSidebar}>
                            <FiMenu size={30} />
                        </div>
                    )}
                    {(isTablet || !isMobile) && (
                        <nav className={sidebar ? "active sidebar" : "sidebar"}>
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
                    )}
                </div>
            </div>

            {isMobile && (
                <nav className="bottom-nav">
                    <ul>
                        <li><NavLink to='/'><FiHome size={24} /><span>Home</span></NavLink></li>
                        <li><NavLink to='/search'><FiSearch size={24} /><span>Search</span></NavLink></li>
                        <li><NavLink to='/history'><FiClock size={24} /><span>History</span></NavLink></li>
                        <li><NavLink to='/profile'><FiUser size={24} /><span>Profile</span></NavLink></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};
