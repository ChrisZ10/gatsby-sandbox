import React from 'react';
import { Link } from 'gatsby';

import * as headerStyles from './header.module.scss';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <nav>
                <ul className={headerStyles.navbar}>
                    <li className={headerStyles.navbarItem}><Link to="/">Home</Link></li>
                    <li className={headerStyles.navbarItem}><Link to="/about">About Me</Link></li>
                    <li className={headerStyles.navbarItem}><Link to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;