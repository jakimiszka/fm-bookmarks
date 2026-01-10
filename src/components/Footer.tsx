import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import bookmarkLogoWhite from '../assets/logo-bookmark-white.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <img src={bookmarkLogoWhite} alt="Bookmark Logo" className="footer--logo" />
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            <div className="footer--socials">
                <img src={facebookIcon} alt="Facebook" />
                <img src={twitterIcon} alt="Twitter" />
            </div>
        </footer>
    );
}