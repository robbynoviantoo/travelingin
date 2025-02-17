"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // 🔹 Tambahkan state

  return (
    <nav className="fixed z-50 top-0 left-0 w-full text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="logo" className="w-10 h-auto" />
          <h1 className="text-xl font-bold">
            <a href="#">Travelingin</a>
          </h1>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden xl:flex gap-14">
          <li><Link href="#" className="hover-underline">Home</Link></li>
          <li><Link href="#travel" className="hover-underline">Travel</Link></li>
          <li><Link href="#service" className="hover-underline">Services</Link></li>
          <li><Link href="#testimonial" className="hover-underline">Testimonial</Link></li>
        </ul>

        {/* Tombol Login */}
        <div className="hidden xl:flex">
          <button className="px-4 py-2 bg-transparent rounded-md">Log in</button>
          <button className="px-10 py-2 bg-[#1EC28B] hover:bg-[#1BB480] rounded-2xl ml-2">
            Sign in
          </button>
        </div>

        {/* Mobile Menu (Hamburger + Sidebar) */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}
