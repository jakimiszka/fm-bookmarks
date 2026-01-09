interface ExtensionCardProps {
    id?: number;
    imagePath?: string;
    title?: string;
    description?: string;
}

export const ExtensionCard = (props: ExtensionCardProps) => {
    return (
        <div className="extension-card">
            <img src={props.imagePath} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <span></span>
            <button className="btn btn--primary">Add & Install Extension</button>
        </div>
    );
}   