import logoBookmark from '../assets/logo-bookmark.svg';
import hamburgerIcon from "../assets/icon-hamburger.svg";

export const Navbar = () => {

    return (
        <nav className="navbar">
            <div className='navbar--logo'>
                <img src={logoBookmark} alt="Logo Bookmark" />
            </div>
            <div className='navbar--mobile'>
                <img src={hamburgerIcon} alt="Hamburger Menu" />
            </div>
            <div className='navbar--menu'>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                <button className='btn btn--contact'>Login</button>
            </div>
            
        </nav>
    );
}   