import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Features } from "./Features";
import { Extensions } from "./Extensions";
import { FaqSection } from "./FaqSection";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Container = () => {

    return (
        <div className="container">
            <Navbar />
            <Header />
            <Features />
            <Extensions />
            <FaqSection />
            <Contact />
            <Footer />
        </div>
    );
}