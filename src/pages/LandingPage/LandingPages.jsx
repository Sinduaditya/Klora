import { useEffect, useState } from "react";
import {
    Testimonial,
    AreYouReady,
    Footer,
    Navbar,
    Section,
    Hero,
    Solutions
} from "../../components/landingpage/index.jsx";

const sections = [
    {
        id: 1,
        subHeading: "Tingginya Jumlah Sampah Plastik",
        heading: "1.3 Juta Ton Sampah",
        desc: "Setiap tahun, masyarakat menghasilkan lebih dari 1.3 juta ton sampah plastik, menyebabkan pencemaran lingkungan yang serius dan merugikan keberlangsungan ekosistem.",
        button: "View Our Pricing",
        img: "image_1.png",
    },
    {
        id: 2,
        subHeading: "Dampak Negatif Terhadap Lingkungan",
        heading: "Dampak Negatif Terhadap Lingkungan",
        desc: "Sampah plastik yang tidak terkelola dengan baik berdampak negatif pada lingkungan, mengancam kehidupan laut, mengurangi kualitas udara, dan meningkatkan risiko perubahan iklim global.",
        button: "Download on IOS",
        img: "image_1.png",
    },
    {
        id: 3,
        subHeading: "Keterbatasan Pengelolaan Sampah",
        heading: "Keterbatasan Pengelolaan Sampah",
        desc: "Sistem pengelolaan sampah yang kurang efektif dan minimnya kesadaran akan pentingnya daur ulang menyebabkan akumulasi sampah plastik yang sulit diatasi, memperburuk masalah lingkungan dan kesehatan manusia.",
        button: "Get Started",
        img: "image_2.png",
    },
];


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

                    <div className="mt-24 md:pt-5 w-full text-text">
                        <h1 className="text-center font-bold uppercase text-[1rem] xl:text-[2rem] text-text">Permasalahan </h1>
                        <div className="xl:max-w-5xl mx-auto space-y-14 px-10 xl:px-0">
                            {sections.map((section) => (
                                <Section key={section.id} data={section}/>
                            ))}
                        </div>
                    </div>
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
