import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiPhoneCall,FiSearch } from 'react-icons/fi';
import '../../../.././src/./index.css';

export const Headers = () => {
    const [sidebar, setSidebar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [typingAnimation, setTypingAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    useEffect(() => {
        if (searchText.length > 0) {
            setTypingAnimation(false);
        }
    }, [searchText]);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <>
            {/* Sticky Top Bar */}
            <div className="top-bar">
                <FiPhoneCall size={18} className="phone-icon" />
                <span>CALL US AT: <strong>+91 98765 43210</strong></span>
            </div>
            {/* Sticky Navbar */}
            <header className="sticky-header">
                <div className="container">
                    {loading ? (
                        <div className="navbar-skeleton">
                            <div className="logo-skeleton"></div>
                            <div className="nav-items-skeleton"></div>
                        </div>
                    ) : (
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
                    )}
                </div>
                <div className="search-bar">
                    <img src='/img/roamora1.png' alt='Roamora Logo' className="search-logo" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder={typingAnimation ? "Book a destination..." : ""}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <FiSearch size={20} className="search-icon" />
                </div>
            </header>
        </>
    );
};