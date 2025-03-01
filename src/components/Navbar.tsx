import React, { useEffect, useRef, useState } from "react";
import { BiX } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/aboutus",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Menu",
      link: "/menu",
    },
  ];
  const [navOpen, setNavOpen] = useState<Boolean>(false);

  const navRef = useRef<HTMLDivElement | null>(null); // Reference to navbar container

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when navbar is open
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navOpen]);

  const handleOutsideClick = (e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    if (navOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navOpen]);
  return (
    <nav className="px-[5%] lg:px-[10%] py-5 text-white absolute top-0 left-0 w-full">
      {navOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md transition-all duration-300"></div>
      )}
      <div className="2xl:container mx-auto flex justify-between items-center">
        <div className="">
          <Link to="/" className="text-3xl lg:text-4xl">
            Marley$Blue{" "}
          </Link>
        </div>

        <div
          ref={navRef}
          className={`${
            navOpen ? "left-0" : "right-[100%] lg:right-0"
          } absolute lg:relative gap-16 flex pt-[35%] lg:justify-end lg:pt-0 top-0 bg-[#E19517] h-screen lg:h-fit w-2/3 lg:bg-transparent flex-col lg:flex-row lg:gap-3 transition-all duration-300 z-50`}
        >
          {links.map((lnk, index) => (
            <Link
              key={index}
              to={lnk.link}
              className="text-center px-2 py-3 lg:py-1"
            >
              {lnk.name}
            </Link>
          ))}
        </div>

        <button
          className="cursor-pointer block lg:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <BiX size={40} /> : <FaBars size={30} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
