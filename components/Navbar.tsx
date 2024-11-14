"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import VideoPlayer from "@/components/VideoPlayer";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true); // User started scrolling
      } else {
        setScrolled(false); // User is stationary
      }

      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed w-full top-0 z-50 transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        } ${scrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'} transition-colors duration-300`}
      >
        <nav className="uppercase flex items-center justify-between px-6 py-4 font-nav-bar text-dozer-white text-[16px] font-medium tracking-[0px] leading-normal">
          {/* Section 1: Logo */}
          <Link href="/">
            <Image src="/dozer-logo-public.png" alt="Logo" width={74} height={29} />
          </Link>

          {/* Section 2: Navigation Links */}
          <ul className="hidden lg:flex h-full gap-8 md:gap-6 sm:gap-4 space-x-6 md:space-x-4 sm:space-x-2">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="reg hover:text-dozer-yellow">
                {link.label}
              </Link>
            ))}
          </ul>

          {/* Section 3: Login and Request Demo */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="font-medium text-[16px] hover:text-dozer-yellow">
              Login
            </Link>
            <Link
              href="/demo"
              className="uppercase border border-white text-white px-4 py-2 hover:border-dozer-yellow hover:text-dozer-yellow font-medium text-[16px]"
            >
              Request Demo
            </Link>
          </div>
        </nav>
      </div>

      {/* Image Section with Dark Overlay */}
      {/* <div className="relative w-full h-[500px]">
        <Image src="/IMG_1869.png" alt="Background Image" fill className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div> */}
    </div>
  );
};

export default Navbar;