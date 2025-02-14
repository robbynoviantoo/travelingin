"use client";

import { useState } from "react";
import Link from "next/link";

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }


  export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
    return (
      <>
        {/* Tombol Hamburger */}
        <button
          className="xl:hidden flex flex-col justify-between w-8 h-6 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-8 h-1 bg-white rounded-md transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
          <span className={`block w-8 h-1 bg-white rounded-md transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-8 h-1 bg-white rounded-md transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
        </button>
  
        {/* Overlay Gelap */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
        )}
  
        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 right-0 w-1/2 h-full bg-black text-white py-6 px-6 flex flex-col space-y-6 transform 
          ${isOpen ? "translate-x-0" : "translate-x-full"} 
          transition-transform duration-300 ease-in-out z-50`}
        >
          {/* Tombol Close */}
          <button className="self-end text-white text-3xl" onClick={() => setIsOpen(false)}>
            &times;
          </button>
  
          {/* Menu Links */}
          <Link href="#" className="text-xl" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#travel" className="text-xl" onClick={() => setIsOpen(false)}>Travel</Link>
          <Link href="#service" className="text-xl" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#testimonial" className="text-xl" onClick={() => setIsOpen(false)}>Testimonial</Link>
        </div>
      </>
    );
  }