"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Become Seller", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group/logo">
              <div className="bg-primary p-1.5 rounded-lg group-hover/logo:scale-110 group-hover/logo:rotate-3 transition-all duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M9 21V9a3 3 0 0 0-3-3H4a1 1 0 0 0-1 1v14" />
                  <path d="M15 21V5a3 3 0 0 0-3-3h-2a1 1 0 0 0-1 1v16" />
                  <path d="M21 21v-8a3 3 0 0 0-3-3h-2a1 1 0 0 0-1 1v10" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">EstateHub</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm px-4 py-2 rounded-full transition-all duration-300 group flex flex-col items-center gap-0.5 ${
                    isActive
                      ? "text-primary font-bold bg-primary/5"
                      : "text-gray-600 font-semibold hover:text-primary hover:bg-primary/5 active:scale-95"
                  }`}
                >
                  <span>{link.name}</span>
                  <span 
                    className={`h-1 bg-primary rounded-full transition-all duration-300 ${
                      isActive ? "w-1" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-primary transition-colors px-4 py-2">
              Login
            </Link>
            <Link href="/register" className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-md shadow-primary/20">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
