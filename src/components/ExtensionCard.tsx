import bgDots from '../assets/bg-dots.svg';

interface ExtensionCardProps {
    id?: number;
    imagePath?: string;
    title?: string;
    description?: string;
}

export const ExtensionCard = (props: ExtensionCardProps) => {
    return (
        <div className="extension-card">
            <img className='extension-card--logo' src={props.imagePath} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img className="bg-dots" src={bgDots} alt="dots" />
            <button className="btn btn--primary">Add & Install Extension</button>
        </div>
    );
}   