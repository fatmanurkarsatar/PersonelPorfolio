"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {FaTimes, FaHome, FaEnvelope,} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoMdSnow } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Added state to check if it is client-side

  useEffect(() => {
    setIsClient(true); // Set to true on the client side
  }, []);

  const menuItems = [
    { href: "/", label: "AnaSayfa", icon: <FaHome /> },
    { href: "/contact-form", label: "İletişim", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="w-full bg-[#404040] ">
      <div className="h-20 flex justify-between items-center z-50 text-white lg:py-5 px-6 py-4">
        <Link href="/">
          <div className="flex items-center">
            <span className="text-3xl font-medium cursor-pointer ml-3 flex flex-row items-center gap-2">
              FATMA NUR KARSATAR <IoMdSnow/>
            </span>
          </div>
        </Link>

        {/* Büyük ekran menüsü */}
        <div className="hidden lg:flex items-center justify-end font-normal">
          <ul className="flex gap-8 mr-16 text-[18px]">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="hover:text-gray-400 transition hover:border-b-2 hover:border-green-600 cursor-pointer"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menü Butonu (Ekran küçüldüğünde) */}
        <button
          className="block lg:hidden transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isClient &&
            (isMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <CiMenuFries size={24} />
            ))}{" "}
        </button>
      </div>

      {/* Küçük ekran menüsü */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 right-0 w-64 bg-slate-600 z-50">
          <ul className="flex flex-col items-start mt-5 space-y-4 px-6 text-white">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="w-full hover:border-b hover:border-slate-800 hover:bg-slate-800 hover:rounded px-2 py-4"
              >
                <Link href={item.href} className="flex items-center">
                  {item.icon} <span className="ml-2">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
