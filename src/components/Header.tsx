import hero from '../assets/illustration-hero.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="header--graphic">
                <img src={hero} alt="Hero Illustration" />
                <div className='bg-shape setWidthShape'>
                    <div className='bg-shape--circle'></div>
                </div>
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