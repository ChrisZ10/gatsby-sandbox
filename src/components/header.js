import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import * as headerStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }    
    `);

    return (
        <header className={headerStyles.header}>
            <h1>{data.site.siteMetadata.title}</h1>
            <nav>
                <ul className={headerStyles.navbar}>
                    <li>
                        <Link to="/" className={headerStyles.navbarItem} activeClassName={headerStyles.navbarItemActive}>Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={headerStyles.navbarItem} activeClassName={headerStyles.navbarItemActive}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/post" className={headerStyles.navbarItem} activeClassName={headerStyles.navbarItemActive}>Post</Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerStyles.navbarItem} activeClassName={headerStyles.navbarItemActive}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={headerStyles.navbarItem} activeClassName={headerStyles.navbarItemActive}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;