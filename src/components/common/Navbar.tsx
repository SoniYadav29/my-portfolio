"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

// const navItems = ["About", "Skills", "Experience", "Projects"];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* ================= DESKTOP FLOATING BACKGROUND ================= */}
      <div
        className={`
          hidden lg:block
          absolute left-1/2 top-7
          -translate-x-1/2
          transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
          ${
            scrolled
              ? "h-13.75 w-240 max-w-[calc(100%-48px)] rounded-full bg-[#ffffff33] backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] supports-backdrop-filter:bg-white/10"
              : "h-13.75 w-full bg-transparent"
          }
        `}
      />

      <div className="relative h-27.5">
        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block">
          {/* Logo */}
          <div
            className={`
              absolute top-1/2 -translate-y-1/2
              transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
              ${scrolled ? "left-[calc(50%-470px)]" : "left-12 xl:left-20"}
            `}
          >
            <Link href="#" className="flex items-center ">
              <Image
                src="/logo/logo.png"
                alt="Logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />

              <span className="text-[20px] font-bold tracking-[-0.02em] text-black">
                Webworks
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
        inline-flex h-10
        items-center
        rounded-full
        cursor-pointer
        bg-white
        backdrop-blur-xl
        px-7
        text-[15px]
        font-medium
        text-black
        transition-all
        hover:bg-black
        hover:text-white
      "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div
            className={`
              absolute top-1/2 -translate-y-1/2
              transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
              ${scrolled ? "right-[calc(50%-470px)]" : "right-12 xl:right-20"}
            `}
          >
            <Link
              className="
                flex h-10 items-center
                rounded-full
                bg-[#ff5a0a]
                cursor-pointer
                pl-6 pr-2
                text-[15px]
                font-medium
                text-white
                transition-all
                hover:bg-[#f54f00]
              "
              href="#contact"
            >
              Contact
              <span className=" flex h-8 w-8 items-center justify-center rounded-full bg-white/30">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">
          <div
            className={`
              absolute left-1/2 top-4
              -translate-x-1/2
              transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
              ${
                scrolled
                  ? "w-[calc(100%-24px)] rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] supports-backdrop-filter:bg-white/10"
                  : "w-full bg-transparent"
              }
            `}
          >
            <div className="flex h-16 items-center justify-between px-4">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo/logo.png"
                  alt="Logo"
                  width={34}
                  height={34}
                  priority
                />
                <span className="text-lg font-bold text-black">Webworks</span>
              </Link>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Link
                  href="#contact"
                  className="flex h-10 items-center cursor-pointer rounded-full bg-[#ff5a0a] px-4 text-sm font-medium text-white"
                >
                  Contact
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-full text-white  bg-black backdrop-blur-xl"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Dropdown */}
            <div
              className={`
                overflow-hidden transition-all duration-300
                ${
                  mobileMenuOpen
                    ? "max-h-100px opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="border-t border-white/10 bg-white/10 backdrop-blur-xl px-3 pb-3 pt-2 rounded-b-[28px]">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full rounded-2xl px-4 py-3 text-left text-[15px] font-medium text-black hover:bg-white/20"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
