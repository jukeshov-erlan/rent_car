import about from "../assets/images/about.jpg";
import {
  RiCheckDoubleLine,
  RiPlayLine,
  RiArrowRightLine,
} from "react-icons/ri";

const CHECKS = [
  { id: 1, title: "Luxury Cars", desc: "Top-tier premium fleet" },
  { id: 2, title: "Sport Cars", desc: "High performance engines" },
  { id: 3, title: "Economy Cars", desc: "Quality at a fair price" },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        about
        text-white
        bg-black
        px-[6%] lg:px-[8%]
        min-h-screen
        flex items-center
        py-10 lg:py-16
        relative
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-8
          xl:gap-14
          items-center
          w-full
        "
      >
        {/* left column */}
        <div className="relative w-full flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />

          <div className="relative w-full max-w-[520px]">
            <img
              src={about}
              alt="About Car Rent"
              className="
                rounded-[40px]
                w-full
                h-auto
                max-h-[50vh]
                xl:max-h-[55vh]
                object-cover
                shadow-2xl
                border border-white/10
              "
            />

            {/* Floating card */}
            <div className="absolute -right-5 top-10 bg-white/10 backdrop-blur-xl border border-white/20 p-5 xl:p-6 rounded-3xl hidden md:block animate-bounce-slow shadow-2xl z-20">
              <h4 className="text-3xl xl:text-4xl font-bold text-primary font-bricolage">
                15+
              </h4>
              <p className="text-xs text-gray-300 font-medium">
                Years of Excellence
              </p>
            </div>

            {/* Play Button */}
            <div className="absolute bottom-0 left-0 p-4 bg-black rounded-tr-[40px]">
              <div className="relative group/play cursor-pointer">
                <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping-slow"></div>
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-slow"></div>

                <div className="relative z-10 flex items-center justify-center w-16 h-16 xl:w-18 xl:h-18 rounded-full bg-primary text-white shadow-[0_0_40px_rgba(232,2,31,0.6)] transition-all duration-500 group-hover/play:scale-110 group-hover/play:rotate-[360deg]">
                  <RiPlayLine size={34} className="ml-1" />
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 opacity-0 group-hover/play:opacity-100 animate-spin-slow transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-4 w-fit">
            - Explore Our Story
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold mb-4 font-bricolage leading-[1.1]">
            We Are More Than <br />
            <span className="text-primary italic">A Rental Agency</span>
          </h2>

          <p className="text-gray-400 text-sm xl:text-lg leading-relaxed mb-6 border-l-2 border-primary/30 pl-5 max-w-xl">
            We don’t just rent cars. We provide the key to your next
            unforgettable adventure with a focus on{" "}
            <span className="text-white font-medium">unmatched quality</span>.
          </p>

          <div className="space-y-4 mb-8">
            {CHECKS.map((check) => (
              <div
                key={check.id}
                className="group flex items-start gap-4 p-2 rounded-2xl hover:bg-white/5 transition-all"
              >
                <div className="mt-1 w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <RiCheckDoubleLine size={22} />
                </div>
                <div>
                  <h4 className="text-base xl:text-xl font-bold font-bricolage">
                    {check.title}
                  </h4>
                  <p className="text-xs text-gray-500">{check.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="group relative overflow-hidden bg-primary w-fit px-8 py-3.5 xl:px-10 xl:py-4 rounded-full font-bold flex items-center gap-3 transition-all hover:-translate-y-1 shadow-lg shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
            <span className="relative z-10 text-sm xl:text-lg uppercase tracking-wider">
              Start Journey
            </span>
            <RiArrowRightLine
              size={20}
              className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
