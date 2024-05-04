import  { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom";

function Hero() {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 800,
    });
  });

  return (
    <div className="w-full text-text font-outfit pt-[10vh] md:pt-[2.5vh]">
      <div className="xl:max-w-5xl mx-auto flex md:flex-row md:justify-between items-center space-x-18 px-10 xl:px-0 flex-col-reverse">
        <article className="flex flex-col space-y-10 text-center md:text-left">
          <h1 className="text-[3rem] md:text-[4rem] font-bold leading-[110%]">
            Tukar <span className="font-extrabold">botol</span> bekas <br/> menjadi token utilitas
          </h1>
          <p className="font-outfit font-medium text-[18px] md:text-xl font-[400] leading-[27.5px]">
            Mengurangi emisi karbon dengan <br/> mengubah botol menjadi koin kripto
          </p>
          <span
              className="flex xl:flex-row font-outfit items-center justify-center md:justify-start space-x-7 font-[600] text-[16px] xl:text-[20px] leading-[27.5%] uppercase">
            <Link
                href="#"
                className="w-fit py-5 px-5 text-white xl:px-10 bg-primary-700 rounded-full"
            >
              Bergabung dengan Klora
            </Link>
          </span>
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
