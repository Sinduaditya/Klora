import {Section} from "./index.jsx";

export default function Solutions() {
    const sections = [
        {
            id: 1,
            subHeading: "Fitur",
            heading: "1.3 Juta Ton Sampah",
            desc: "Setiap tahun, masyarakat menghasilkan lebih dari 1.3 juta ton sampah plastik, menyebabkan pencemaran lingkungan yang serius dan merugikan keberlangsungan ekosistem.",
            img: "image_1.png",
        },
        {
            id: 2,
            subHeading: "Dampak Negatif Terhadap Lingkungan",
            heading: "Dampak Negatif Terhadap Lingkungan",
            desc: "Sampah plastik yang tidak terkelola dengan baik berdampak negatif pada lingkungan, mengancam kehidupan laut, mengurangi kualitas udara, dan meningkatkan risiko perubahan iklim global.",
            img: "image_1.png",
        },
        {
            id: 3,
            subHeading: "Keterbatasan Pengelolaan Sampah",
            heading: "Keterbatasan Pengelolaan Sampah",
            desc: "Sistem pengelolaan sampah yang kurang efektif dan minimnya kesadaran akan pentingnya daur ulang menyebabkan akumulasi sampah plastik yang sulit diatasi, memperburuk masalah lingkungan dan kesehatan manusia.",
            img: "image_2.png",
        },
    ];




    return (
        <>
            <div className="mt-24 md:pt-5 w-full text-text">
                <h1 className="text-xl font-semibold text-black text-center md:text-[20px]">
                    Solusi
                </h1>
                <h1 className="text-[2rem] tracking-tight text-center md:text-[3rem] font-bold leading-[110%] mt-5">
                    Klora Solutions !
                </h1>
                <div className="xl:max-w-5xl mx-auto space-y-14 px-10 xl:px-0">
                    {sections.map((section) => (
                        <Section key={section.id} data={section}/>
                    ))}
                </div>
            </div>
        </>
    )
}
