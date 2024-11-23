"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="fixed w-full top-0 z-50 bg-black bg-opacity-80">
      <nav className="uppercase flex items-center justify-between px-6 py-4 font-nav-bar text-dozer-white text-[16px] font-medium tracking-[0px] leading-normal">
        {/* Section 1: Logo */}
        <Link href="/">
          <Image src="/dozer-logo-public.png" alt="Logo" width={74} height={29} />
        </Link>

        {/* Section 2: Navigation Links */}
        <ul className="hidden lg:flex h-full gap-8 md:gap-6 sm:gap-4 space-x-6 md:space-x-4 sm:space-x-2">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`reg hover:text-dozer-yellow ${
                pathname === link.href ? 'text-dozer-yellow' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Section 3: Login and Request Demo */}
        <div className="flex items-center space-x-4">
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
            className="uppercase border border-white text-white px-4 py-2 hover:border-dozer-yellow hover:text-dozer-yellow font-medium text-[16px]"
          >
            Request Demo
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;