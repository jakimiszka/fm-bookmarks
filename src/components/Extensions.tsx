import { ExtensionCard } from "./ExtensionCard";
import logoChrome from "../assets/logo-chrome.svg";
import logoFirefox from "../assets/logo-firefox.svg";
import logoOpera from "../assets/logo-opera.svg";

export const Extensions = () => {

    const extensionCards = [
        {
            id: 1,
            imagePath: logoChrome,
            title: "Add to Chrome",
            description: "Minimum version 62"
        },
        {
            id: 2,
            imagePath: logoFirefox,
            title: "Add to Firefox",
            description: "Minimum version 55"
        },
        {
            id: 3,
            imagePath: logoOpera,
            title: "Add to Opera",
            description: "Minimum version 46"
        }
    ];

    return (
        <section className="extensions">
            <h2>Download the extension</h2>
            <p>
                We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you’d like us to prioritize.
            </p>
            <ExtensionCard {...extensionCards[0]} />
            <ExtensionCard {...extensionCards[1]} />
            <ExtensionCard {...extensionCards[2]} />
        </section>
    );
}   