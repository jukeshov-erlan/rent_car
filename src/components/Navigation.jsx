import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenuLine, RiPhoneFill } from "react-icons/ri";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`px-[12%] text-white fixed top-0 start-0 w-full z-9999 transition-all duration-300 ${
          isScrolled ? "bg-[#111111] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="navbar max-w-7xl py-4 flex items-center justify-between relative">
          <Link
            to="/"
            className="text-2xl md:text-4xl font-bold font-bricolage"
          >
            Car.<span className="text-prim">Rent</span>
          </Link>

          <div className="lg:hidden block">
            <button onClick={() => setIsOpen(!isOpen)}>
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
              {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
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
            lg:py-0 lg:ps-0 lg:gap-10 lg:max-h-none lg:opacity-100
            text-sm font-medium`}
          >
            <li>
              <Link
                to="/"
                className="text-lg transition px-4 py-3 lg:px-0 lg:py-0 font-normal font-bricolage"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-base lg:text-lg transition px-4 py-3 lg:px-0 lg:py-0 font-normal font-bricolage"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/cars"
                className="text-base lg:text-lg transition px-4 py-3 lg:px-0 lg:py-0 font-normal font-bricolage"
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-base lg:text-lg transition px-4 py-3 lg:px-0 lg:py-0 font-normal font-bricolage"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-base lg:text-lg transition px-4 py-3 lg:px-0 lg:py-0 font-normal font-bricolage"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="hidden lg:flex items-center gap-4">
            {/* <i className="bi bi-telephone flex items-center justify-center bg-prim rounded-full text-2xl w-11.25 h-11.25"></i> */}
            <div className="flex items-center justify-center bg-prim rounded-full text-white w-11 h-11 transition-transform hover:scale-110">
              <RiPhoneFill size={24} />
            </div>
            <div>
              <p className="text-xs text-white font-normal">Need help?</p>
              <p className="font-semibold">+996 000 000</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
