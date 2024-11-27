"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black bg-opacity-80" : "bg-transparent"
      }`}
    >
      <nav className="uppercase flex items-center justify-between px-6 py-4 font-nav-bar text-dozer-white text-[16px] font-medium tracking-[0px] leading-normal">
        {/* Section 1: Logo */}
        <Link href="/">
          <Image
            src="/dozer-logo-public.png"
            alt="Logo"
            width={74}
            height={29}
          />
        </Link>

        {/* Section 2: Navigation Links */}
        <ul className="hidden lg:flex h-full gap-8 md:gap-6 sm:gap-4 space-x-6 md:space-x-4 sm:space-x-2">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`reg hover:text-dozer-yellow ${
                pathname === link.href ? "text-dozer-yellow" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Section 3: Hamburger Menu for Small Devices */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-dozer-yellow focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Section 4: Login and Request Demo */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://beta.app.dozer.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[16px] hover:text-dozer-yellow"
          >
            Login
          </a>
          <Link
            href="/demo"
            className="uppercase border border-white text-white px-4 py-2 hover:bg-dozer-yellow hover:text-black font-medium text-[16px] transition-colors duration-200"
          >
            Request Demo
          </Link>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black text-dozer-white flex flex-col items-center justify-center space-y-8 z-50">
          {/* Close Button */}
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 focus:outline-none"
            aria-label="Close menu"
          >
            <div className="w-10 h-10 rounded-full border-2 border-dozer-yellow flex items-center justify-center bg-black text-dozer-yellow hover:bg-dozer-yellow hover:text-black transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>

          {/* Links */}
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              onClick={() => setMenuOpen(false)}
              className={`uppercase text-xl reg hover:text-dozer-yellow ${
                pathname === link.href ? "text-dozer-yellow" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Login and Request Demo */}
          <a
            href="https://beta.app.dozer.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-xl font-medium hover:text-dozer-yellow"
          >
            Login
          </a>
          <Link
            href="/demo"
            onClick={() => setMenuOpen(false)}
            className="uppercase bg-dozer-yellow text-black px-6 py-3 text-center font-medium text-[16px] hover:bg-orange-600 transition-colors duration-200"
          >
            Request Demo
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
