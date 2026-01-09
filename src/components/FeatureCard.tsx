interface FeatureCardProps {
    id?: number;
    imagePath?: string;
    title?: string;
    description?: string;
}

export const FeatureCard = (props: FeatureCardProps) => {
    const { id, imagePath, title, description } = props;
    return (
            <div className="feature-card">
                <img src={imagePath} alt={title} />
                <div className="feature-card--content">
                    <h3>{title}</h3>
                    <p>
                        {description}
                    </p>
                    <button className="btn btn--primary">More Info</button>
                </div>
                
            </div>
    );
}   