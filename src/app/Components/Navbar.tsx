"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
     
  return (
    <nav className="w-full bg-white pt-[14px] pb-[14px]">
      <div className="flex items-center justify-center w-screen max-w-screen-xl px-4 lg:px-0 mx-auto">
        {/* Desktop Menu (Visible above 768px, hidden on mobile) */}
        <div className="hidden md:flex gap-8 ml-3">
          <Link href="/" className="text-[#007580] text-[14px] font-medium">
            Home
          </Link>
          <Link href={"#"} className="text-[14px] font-medium hover:text-[#007580] ">
            Shop
          </Link>
          <Link href="/product" className="text-[14px] font-medium hover:text-[#007580]">
            Product
          </Link>
          <Link href={`/product/1`} className="text-[14px] font-medium hover:text-[#007580]">
            Pages
          </Link>
          <Link href="/about" className="text-[14px] font-medium hover:text-[#007580]">
            About
          </Link>
        </div>

        {/* Contact Information (Visible above 768px) */}
        <div className="hidden md:flex items-center gap-4 ml-auto mr-4">
          <span className="font-normal text-[#636270] text-[14px]">
            <Link href="/contact">Contact:</Link>
          </span>
          <span className="font-medium text-[#272343] text-[14px] ml-1">
            (808) 555-0111
          </span>
        </div>

        {/* Mobile Menu Button (Visible below 768px) */}
        <button
          className="lg:hidden flex items-center justify-center p-2"
          onClick={toggleMenu}
        >
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
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items (Visible below 768px) */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 px-4">
          <Link href="/" className="text-[#007580] text-[14px] text-center font-medium">
            Home
          </Link>
          <Link href={"#"} className="text-[14px] font-medium  text-center hover:text-[#007580] ">
            Shop
          </Link>
          <Link href="/product" className="text-[14px] font-medium  text-center hover:text-[#007580]">
            Product
          </Link>
          <Link href="/product/2" className="text-[14px] font-medium  text-center hover:text-[#007580]">
            Pages
          </Link>
          <Link href="/about" className="text-[14px] font-medium  text-center hover:text-[#007580]">
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;