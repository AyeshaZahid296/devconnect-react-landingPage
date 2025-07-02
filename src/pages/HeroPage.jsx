import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Support from "./Support";
import GetStarted from "./GetStarted";

export default function HeroPage() {
    return (
        <>
            <Navbar />
            <Main />
            <GetStarted />
            <Support />
            <Footer />
        </>
    );
}
