"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center space-x-2 text-lg font-bold tracking-tight text-white"
        >
          <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
          <span>My First App</span>
        </Link>

        <div className="hidden items-center space-x-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          <Link
            href="/services"
            className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} border-t border-white/10 bg-black/40 backdrop-blur-xl`}
      >
        <div className="space-y-1 px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;