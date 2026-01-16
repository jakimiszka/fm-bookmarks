import React from "react";
import { FeatureCard } from "./FeatureCard"
import featureTab1 from "../assets/illustration-features-tab-1.svg"
import featureTab2 from "../assets/illustration-features-tab-2.svg"
import featureTab3 from "../assets/illustration-features-tab-3.svg"


export const Features = () => {

    const [currentTab, setCurrentTab] = React.useState(1);

    const featureData = [
        {
            id: 1,
            imagePath: featureTab1,
            title: "Bookmark in one click",
            description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        },
        {
            id: 2,
            imagePath: featureTab2,
            title: "Intelligent search",
            description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        },
        {
            id: 3,
            imagePath: featureTab3,
            title: "Share your bookmarks",
            description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        }
    ];

    const onTabClick = (index: number) => {
        console.log("Tab clicked:", index);
        setCurrentTab(index);
    };

    return (
        <section className="features">
            <div className="features--main">
                <h2 >Features</h2>
                <p>
                    Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
                <ul>
                    {featureData.map((feature, index) => (
                        <li 
                            key={index + 1}
                            className={currentTab === index + 1 ? 'active' : ''} 
                            onClick={() => onTabClick(index + 1)}
                        >
                            {feature.title}
                        </li>
                    ))}
                </ul>
            </div>
            <FeatureCard {...featureData[currentTab - 1]}/>           
        </section>
    );
}       