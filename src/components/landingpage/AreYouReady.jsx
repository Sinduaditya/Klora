import {Link} from "react-router-dom";

function AreYouReady() {
  return (
    <div className="w-full text-text font-outfit pt-[10vh] md:pt-[2.5vh] mt-5 md:mt-10">
      <div className="xl:max-w-5xl mx-auto flex items-center space-x-18 px-10 xl:px-0 flex-col space-y-10">
        <article>
          <h1 className="text-xl font-semibold text-black text-center md:text-[20px]">
            Are You Ready ?
          </h1>
          <h1 className="text-[3rem] max-w-xl text-center md:text-[4rem] font-bold leading-[110%] mt-5">
            be a part of the   <span className="text-buttonPrimary">next big thing</span>
          </h1>
        </article>

        <button
            className="w-fit  py-2 px-5 text-white font-semibold bg-primary-700 rounded-full"
        >
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}

export default AreYouReady;
