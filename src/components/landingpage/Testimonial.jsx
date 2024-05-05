import Card from "./Card.jsx";
import "aos/dist/aos.css";


function Testimonial() {
  return (
      <>
        <div className="w-full mt-16 text-text font-outfit md:pt-[1vh] mb-12">
          <div
              className="xl:max-w-5xl mx-auto gap-16 flex md:flex-row md:justify-between items-center space-x-18 px-10 xl:px-0">
            {/* Penjelasan di Sebelah Kiri */}
            <div className="flex flex-col">
              <div className="mt-10  fle mb-10">
                <h1 className="font-bold text-buttonPrimary text-4xl">
                  Klora
                </h1>
                <p className="text-xl mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum justo nec lorem dignissim, eget
                  tristique sapien ultrices. Aliquam erat volutpat. Vivamus malesuada odio ac ipsum scelerisque, vel
                  bibendum justo vestibulum.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                      <path
                          fillRule="evenodd"
                          d="M3.293 8.293a1 1 0 011.414-1.414L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 01-0.001-1.414z"
                          clipRule="evenodd"
                      />
                    </svg>
                    Carbon Calculator
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                      <path
                          fillRule="evenodd"
                          d="M3.293 8.293a1 1 0 011.414-1.414L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 01-0.001-1.414z"
                          clipRule="evenodd"
                      />
                    </svg>
                    Swap Utility to Crypto Currency
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                      <path
                          fillRule="evenodd"
                          d="M3.293 8.293a1 1 0 011.414-1.414L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 01-0.001-1.414z"
                          clipRule="evenodd"
                      />
                    </svg>
                    NFT Bag
                  </li>
                </ul>
              </div>


            </div>
            <div
                className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div
                  className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div
                  className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div
                  className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div
                  className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                     className="dark:hidden w-[272px] h-[572px]" alt=""/>
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                     className="hidden dark:block w-[272px] h-[572px]" alt=""/>
              </div>
            </div>
          </div>
        </div>

      </>
  );
}

export default Testimonial;