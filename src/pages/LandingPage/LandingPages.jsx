import { useEffect, useState } from "react";
import {
    Testimonial,
    AreYouReady,
    Footer,
    Navbar,
    Hero,
    Solutions, Problem
} from "../../components/landingpage/index.jsx";



export default function LandingPages() {
    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <>
            <main className="bg-background font-outfit overflow-hidden relative z-20 pb-[50vh] md:pb-[25vh]">
                <Navbar bg={clientWindowHeight} />
                <div className="flex flex-col bg-background pt-[15vh] z-30">
                    <Hero/>
                    <Problem/>
                    <Solutions/>
                    <Testimonial/>
                    <AreYouReady/>
                    <Footer/>
                </div>
                <img
                    src="/ellipse_bg_2.png"
                    alt="Ellipse Background"
                    width={700}
                    height={700}
                    className="absolute -top-80 md:-top-96 md:-left-24 animate-pulse"
                />

                <img
                    src="/ellipse_bg_2.png"
                    alt="Ellipse Background"
                    width={450}
                    height={450}
                    className="absolute -right-48 top-80 animate-pulse"
                />
            </main>
        </>
    );
}
