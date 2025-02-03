'use client'
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLink = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about-me" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md shadow-md px-8 py-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-purple-500">
          Muhammad Talha</Link>

        <ul className="hidden md:flex space-x-8">
          {navLink.map((e, i) => (
            <li key={i}>
              <Link href={e.path} className={`${pathname === e.path ? 'text-purple-500' : 'text-gray-300 hover:text-purple-500'} transition-colors`}>
                {e.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300" onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* Full-Screen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 h-screen">
          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white">
            <X size={35} />
          </button>

          {/* Centered Navigation Links */}
          <div className="flex flex-col space-y-8 text-center">
            {navLink.map((e, i) => (
              <Link 
                key={i} 
                href={e.path} 
                className="text-white text-3xl font-semibold hover:text-purple-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {e.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
