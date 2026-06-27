"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <header
      className={`
        fixed z-50 w-full
        transition-all duration-500
        ${scrolled ? "top-4" : "top-8"}
      `}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-3xl">{"<SoniYadav />"}</div>

          {/* Center Capsule */}
          <div
            className={`
              hidden lg:flex
              items-center
              gap-2
              rounded-full
              border
              border-gray-200
              bg-white/90
              backdrop-blur-xl
              shadow-lg

              transition-all duration-500

              ${scrolled ? "px-4 py-2" : "px-5 py-3"}
            `}
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  rounded-full
                  px-5
                  py-3
                  text-sm
                  font-medium
                  transition
                  hover:bg-gray-100
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <button
            className="
              rounded-full
              bg-orange-500
              px-7
              py-4
              text-white
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Contact →
          </button>
        </div>
      </div>
    </header>
  );
}
