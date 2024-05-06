import  { useEffect } from "react";

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
      <div className="xl:max-w-5xl mx-auto flex md:flex-row md:justify-between items-center  space-x-10 px-10 xl:px-0 flex-col-reverse">
        <article className="flex flex-col space-y-8 text-center md:text-left">
          <h1 className="text-[3rem] md:text-[4rem] font-bold leading-[108%] tracking-tight">
            Tukar <i>botol</i> sekali pakai <br/> menjadi token utilitas.
          </h1>
          <p className="font-outfit font-normal text-lg md:text-xl leading-[20px]">
            Mengurangi emisi karbon dengan <br/> mengubah botol menjadi koin kripto
          </p>
            <div className="">
                <button
                    className="w-fit  py-2 px-5 text-white font-semibold bg-buttonPrimary rounded-full"
                >
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
