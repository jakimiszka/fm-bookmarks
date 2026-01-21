import hero from '../assets/illustration-hero.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="headerShape">
                <div className="headerShape--circle"></div>
            </div>
            <div className="header--graphic">
                <img src={hero} alt="Hero Illustration" />
            </div>
            <div className="header--content">
                <h1>A Simple Bookmark Manager</h1>
                <p>
                    A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="header--buttons">
                    <button className="btn btn--primary">Get it on Chrome</button>
                    <button className="btn btn--secondary">Get it on Firefox</button>
                </div>
            </div>
        </header>
    );
}