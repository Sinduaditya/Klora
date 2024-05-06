import {
    Klora,
    AreYouReady,
    Footer,
    Hero,
    Solutions, Problem, FAQPage, Roadmap
} from "../../components/landingpage/index.jsx";



export default function LandingPages() {
    return (
        <>
            <main className="bg-background  overflow-hidden">

                <div className="flex flex-col bg-background pt-[15vh] z-30">
                    <Hero/>
                    <Problem/>
                    <Solutions/>
                    <Klora/>
                    <Roadmap/>
                    <FAQPage/>
                    <AreYouReady/>
                    <Footer/>
                </div>
            </main>
        </>
    );
}
