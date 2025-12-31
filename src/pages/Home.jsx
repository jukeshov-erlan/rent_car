import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Autoplay, EffectFade } from "swiper/modules";
import { RiArrowRightUpLine } from "react-icons/ri";
import About from "./About";


import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const SLIDES = [
  {
    id: "slide1",
    badge: "Premium",
    title: "Feel the Speed, Life the Luxury",
    text: "CarRent makes car rental simple, fast, and affordable. Choose from a wide range of vehicles to suit your journey.",
  },
  {
    id: "slide2",
    badge: "Exclusive",
    title: "Drive Your Way, Anytime, Anywhere",
    text: "Experience premium car rentals with comfort, style, and affordability—perfect for road trips or business.",
  },
  {
    id: "slide3",
    badge: "Luxury",
    title: "Elegance on Wheels, Wherever You Go",
    text: "Elevate your journey with our exclusive fleet. From sleek sedans to powerful SUVs.",
  },
];

const Home = () => {
  return (
    <>

      {/* Hero */}
      <section className="hero h-screen w-full overflow-hidden bg-black">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }} // next image after 5 sec
          speed={1000} //animation duration of image changing
          className="hero-swiper w-full h-full"
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className={`hero-slide hero-slide${
                  index + 1
                } flex h-full w-full items-center px-[12%]`}
              >
                <div className="hero-content relative z-10 w-full text-white lg:w-[60%]">
                  <span className="font-bricolage text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-primary px-2 py-1 rounded-sm mb-4 inline-block">
                    - {slide.badge}
                  </span>
                  <h1 className="sr-only">Hero section</h1>
                  <h2 className="font-bricolage text-3xl sm:text-5xl font-medium hero-title my-3">
                    {slide.title}
                  </h2>
                  <p className="my-2 text-lg lg:text-2xl font-bricolage hero-subtitle text-gray-300">
                    You can Rent any of our Cars.
                  </p>
                  <p className="my-5 xl:my-7 lg:w-[60%] hero-pere text-gray-300">
                    {slide.text}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 rounded-full bg-primary px-3 py-3 font-bricolage transition-all hover:-translate-y-1 hover:bg-white hover:text-black">
                      View More <RiArrowRightUpLine size={20} />
                    </button>
                    <button className="flex items-center gap-2 rounded-full border border-white/30 px-3 py-3 font-bricolage transition-all hover:-translate-y-1 hover:bg-primary hover:border-transparent">
                      Rent Now <RiArrowRightUpLine size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <div className="hero-slide hero-slide1 w-full h-full flex items-center px-[12%]">
              <div className="hero-content text-white lg:w-[60%]">
                <span className="font-bricolage text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-primary px-2 py-1 rounded-sm
                                 mb-4 inline-block rounded-sm bg-primary px-3 py-1 font-bricolage  md:text-[10px] uppercase tracking-widest sm:text-sm">
                  - Premium
                </span>
                <h1 className="font-bricolage text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-medium hero-title my-3">
                  Feel the Speed, Life the Luxury
                </h1>
                <p className="my-2 text-lg lg:text-2xl font-bricolage hero-subtitle text-gray-300">
                  You can Rent any of our Cars.
                </p>
                <p className="my-5 xl:my-7 lg:w-[60%] hero-pere text-gray-300">
                  carrent makes car rental simple, fast, and affordable. Choose
                  from a wide range of vehicles to suit your jorney
                </p>
                <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                  <button className="default-btn bg-primary transition hover:text-black py-3 px-5 lg:px-7 lg:py-5 font-bricolage rounded-full transform hover:-translate-y-1 hover:bg-white">
                    View More &nbsp; <i className="bi bi-arrow-up-right"></i>
                  </button>
                  <button className="default-btn border py-3 px-5 lg:px-7 lg:py-5 font-bricolage rounded-full transition hover:bg-primary hover:border-transparent transform hover:-translate-y-1">
                    Rent Now &nbsp; <RiArrowRightUpLine />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-slide hero-slide2 w-full h-full flex items-center px-[12%]">
              <div className="hero-content text-white lg:w-[60%]">
                <span className="font-bricolage text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-primary px-2 py-1 rounded-sm">
                  - Premium
                </span>
                <h1 className="font-bricolage text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-medium hero-title my-3">
                  Drive Your Way, Anytime, Anywhere
                </h1>
                <p className="my-2 text-lg lg:text-2xl font-bricolage hero-subtitle text-gray-300">
                  You can Rent any of our Cars.
                </p>
                <p className="my-5 xl:my-7 lg:w-[60%] hero-pere text-gray-300">
                  Experience premium car rentals with comfort, style, and
                  affordability-perfect for road trips, business travel, or
                  luxury weakends getaways.
                </p>
                <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                  <button className="default-btn bg-primary transition hover:text-black py-3 px-5 lg:px-7 lg:py-5 font-bricolage rounded-full transform hover:-translate-y-1 hover:bg-white">
                    View More &nbsp; <i className="bi bi-arrow-up-right"></i>
                  </button>
                  <button className="default-btn border py-3 px-5 lg:px-7 lg:py-5 font-bricolage rounded-full transition hover:bg-primary hover:border-transparent transform hover:-translate-y-1">
                    Rent Now &nbsp; <RiArrowRightUpLine />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-slide hero-slide3 w-full h-full flex items-center px-[12%]">
              <div className="hero-content text-white lg:w-[60%]">
                <span className="font-bricolage text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-primary px-2 py-1 rounded-sm">
                  - Premium
                </span>
                <h1 className="font-bricolage text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-medium hero-title my-3">
                  Elegance on Wheels, Wherever You Go
                </h1>
                <p className="my-2 text-lg lg:text-2xl font-bricolage hero-subtitle text-gray-300">
                  You can Rent any of our Cars.
                </p>
                <p className="my-5 xl:my-7 lg:w-[60%] hero-pere text-gray-300">
                  Elevate your journey with our exclusive fleet. From sleek
                  sedans to powerful SUVs, we provide the perfect ride to turn
                  every mile into an unforgettable adventure.
                </p>
                <div className="hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8">
                  <button className="default-btn bg-primary transition hover:text-black py-3 px-5 lg:px-7 lg:py-5 font-bricolage rounded-full transform hover:-translate-y-1 hover:bg-white">
                    View More &nbsp; <i className="bi bi-arrow-up-right"></i>
                  </button>
                  <button className="default-btn border py-3 px-5 lg:px-7 lg:py-5 font-bricolage rounded-full transition hover:bg-primary hover:border-transparent transform hover:-translate-y-1">
                    Rent Now &nbsp; <RiArrowRightUpLine />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </section>
      <About />
    </>
  );
};

export default Home;
