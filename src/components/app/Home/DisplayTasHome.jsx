// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip } from "swiper/modules";

function DisplayTasHome() {
    return (
        <>
            <div>
                <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    // pagination={true}
                    // navigation={true}
                    modules={[EffectFlip]}
                    className="mySwiper max-w-xs"
                >
                    <SwiperSlide>
                        <img
                            src="https://swiperjs.com/demos/images/nature-1.jpg"
                            className="rounded-3xl"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://swiperjs.com/demos/images/nature-2.jpg"
                            className="rounded-3xl"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://swiperjs.com/demos/images/nature-3.jpg"
                            className="rounded-3xl"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://swiperjs.com/demos/images/nature-4.jpg"
                            className="rounded-3xl"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://swiperjs.com/demos/images/nature-5.jpg"
                            className="rounded-3xl"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://swiperjs.com/demos/images/nature-6.jpg"
                            className="rounded-3xl"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default DisplayTasHome;
