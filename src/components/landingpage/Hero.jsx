import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
    useEffect(() => {
        AOS.init({
            delay: 300,
            duration: 800,
        });
    });

    return (
        <div className="w-full text-text font-outfit md:pt-[1vh] mb-12">
            <div className="xl:max-w-5xl mx-auto grid lg:flex lg:flex-row lg:justify-between items-center  space-x-10 px-10 xl:px-0 flex-col-reverse w-fit">
                <article className="flex flex-col space-y-8 text-center lg:text-left mx-auto">
                    <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 leading-[110%] tracking-tigh">
                        Tukar <i>botol</i> sekali pakai <br /> menjadi{" "}
                        <span className="bg-primary-200 underline italic">
                            token utilitas.{" "}
                        </span>
                    </h1>
                    <p className="font-outfit font-normal text-neutral-600 text-3xl leading-[110%]">
                        Mengurangi emisi karbon dengan <br /> mengubah botol
                        menjadi koin kripto
                    </p>
                    <div className="">
                        <button className="w-fit py-3 px-5 text-white font-semibold bg-primary-700 hover:bg-primary-800 rounded-full">
                            Bergabung dengan Klora
                        </button>
                    </div>
                </article>
                <img
                    src="/hero_image.png"
                    alt="Hero Image"
                    width={495}
                    height={467}
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    className="-mr-10 w-[250.5px] h-[230px] md:w-[495px] md:h-[467px]"
                />
            </div>
        </div>
    );
}

export default Hero;
