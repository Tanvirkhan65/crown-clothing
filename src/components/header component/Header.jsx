import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <FaCrown className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                shop
            </Link>
            <Link className="option" to="/shop">
                contact
            </Link>
        </div>
    </div>
);

export default Header;
