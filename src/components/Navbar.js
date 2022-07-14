import React from 'react';
import { Link } from 'react-router-dom';

import "./../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className='nav_items'>
                <Link to="/">
                    <h1 className='logo'>News Website</h1>
                </Link>

                <div>
                    <Link to="/">Articles</Link>
                    <Link to="/read-later">Read Later</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 