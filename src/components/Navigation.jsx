import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine, RiMenuLine, RiPhoneFill } from "react-icons/ri";

const NAV_LINKS = [
  { name: "Home", path: "/", end: true },
  { name: "About", path: "/about" },
  { name: "Cars", path: "/cars" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 50);
      const scrolled = window.scrollY > 50;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`px-[12%] text-white fixed top-0 start-0 w-full z-9999 transition-all duration-300 ${
          isScrolled ? "bg-[#111111] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="navbar mx-auto max-w-7xl py-4 flex items-center justify-between relative">
          <NavLink
            to="/"
            className="text-2xl md:text-4xl font-bold font-bricolage"
          >
            Car.<span className="text-primary">Rent</span>
          </NavLink>

          <div className="lg:hidden block">
            <button
              className="relative w-6 h-6 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* <i
                className={`ri-menu-line text-2xl ${
                  isOpen ? "hidden" : "block"
                }`}
              ></i>
              <i
                className={`ri-close-line text-2xl ${
                  isOpen ? "block" : "hidden"
                }`}
              ></i> */}
              {/* <i
                className={`text-2xl ${
                  isOpen ? "ri-close-line" : "ri-menu-line"
                }`}
              ></i> */}
              {/* {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />} */}
              <RiMenuLine
                size={24}
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? "opacity-0 rotate-90 scale-50"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <RiCloseLine
                size={24}
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-50"
                }`}
              />
            </button>
          </div>
          {/* <ul
            className={`
              menu flex flex-col lg:flex lg:flex-row absolute 
              lg:static top-full left-0 w-full lg:w-auto
              bg-black md:pl-5 md:py-4 lg:bg-transparent 
              z-50 gap-2 lg:gap-10 text-sm font-medium 
              transition-all duration-500 ease-in-out 
              space-y-5 lg:space-y-0 overflow-hidden
              ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
              lg:max-h-none lg:opacity-100`}
          ></ul> */}
          <ul
            className={`
            menu flex flex-col absolute top-full inset-x-0 z-50
            bg-black ps-5 py-4 gap-5 transition-all duration-500
            ease-in-out overflow-hidden
            ${isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
            lg:static lg:flex-row lg:w-auto lg:bg-transparent
            lg:py-1 lg:ps-0 lg:gap-10 lg:max-h-none lg:opacity-100
            text-sm font-medium`}
          >
            {/* <li>
              <NavLink
                to="/"
                end
                className="text-lg transition px-4 py-3 lg:px-0 lg:py-0 font-normal font-bricolage"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-base lg:text-lg transition px-4 py-2 lg:px-0 lg:py-0 font-normal font-bricolage"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cars"
                className="text-base lg:text-lg transition px-4 py-2 lg:px-0 lg:py-0 font-normal font-bricolage"
              >
                Cars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="text-base lg:text-lg transition px-4 py-2 lg:px-0 lg:py-0 font-normal font-bricolage"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-base lg:text-lg transition px-4 py-2 lg:px-0 lg:py-0 font-normal font-bricolage"
              >
                Contact
              </NavLink>
            </li> */}
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.end}
                  onClick={() => setIsOpen(false)}
                  className="text-base lg:text-lg transition px-4 py-2 lg:px-0 lg:py-0 font-normal font-bricolage"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-3">
            {/* <i className="bi bi-telephone flex items-center justify-center bg-primary rounded-full text-2xl w-11.25 h-11.25"></i> */}
            <a
              href="tel:+996000000"
              className="flex items-center justify-center bg-primary rounded-full text-white w-10 h-10 ansition-transform hover:rotate-12 hover:scale-110"
            >
              <RiPhoneFill size={24} />
            </a>
            <div>
              <p className="text-xs text-gray-400 font-normal leading-tight">
                Need help?
              </p>
              <a
                href="tel:+996000000"
                className="font-semibold text-sm xl:text-base hover:text-primary transition-colors duration-300"
              >
                +996 000 000
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
