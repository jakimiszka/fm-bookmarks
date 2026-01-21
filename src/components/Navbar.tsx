import logoBookmark from '../assets/logo-bookmark.svg';
import logoBookmarkWhite from '../assets/logo-bookmark-white.svg';
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeMenuIcon from "../assets/icon-close.svg";
import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import { useState, useEffect } from 'react';

export const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuActive(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onMobileMenuClick = () => {
        console.log('click: ', menuActive);
        setMenuActive(!menuActive);
    }

    return (
        <nav className="navbar" data-active={menuActive ? "true" : "false"}>
            <div className='navbar--logo'>
                <img src={menuActive ? logoBookmarkWhite : logoBookmark} alt="Logo Bookmark" />
            </div>
            <div className='navbar--mobile'>
                <img src={menuActive ? closeMenuIcon : hamburgerIcon} alt="Hamburger Menu" onClick={onMobileMenuClick} />
            </div>
            <div className='navbar--menu'>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                <button className='btn btn--contact'>Login</button>
            </div>
            <div className="navbar--socials">
                <img src={facebookIcon} alt="Facebook" />
                <img src={twitterIcon} alt="Twitter" />
            </div>
        </nav>
    );
}   