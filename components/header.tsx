"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  name: string;
  href?: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnter = (menu: string) => setOpenMenu(menu);
  const handleLeave = () => setOpenMenu(null);

  const navItems: NavItem[] = [
    { name: "Home", href: "/", hasDropdown: false },
    { 
      name: "About", 
      href: "/about",  // Added href for About
      hasDropdown: true,  // Keep dropdown for sub-items
      dropdownItems: [
        { label: "About Institute", href: "/about" },
        { label: "Chairman's Profile", href: "/about#chairman" },
        { label: "Principal's Desk", href: "/principal" },
        { label: "Vision & Mission", href: "/about#vision-mission" },
        { label: "Permission Letter", href: "/permission-letter" }
      ]
    },
    { name: "Mandatory Info", href: "/mandatory-info", hasDropdown: false },
    {
      name: "College",
      hasDropdown: true,
      dropdownItems: [
        { label: "Affiliation", href: "/affiliation" },
        { label: "Departments", href: "/departments" },
        { label: "Central Library", href: "/central-library" },
        { label: "Infrastructure", href: "/infrastructure" },
        { label: "Extracurricular Activities", href: "/extracurricular" },
      ],
    },
    {
      name: "Hospital",
      hasDropdown: true,
      dropdownItems: [
        { label: "OPD", href: "/opd" },
        { label: "IPD", href: "/ipd" },
        { label: "Laboratory", href: "/laboratory" },
        { label: "Radiology", href: "/radiology" },
        { label: "Physiotherapy & Rehabilitation", href: "/physiotherapy" },
        { label: "Dispensary", href: "/dispensary" },
      ],
    },
    { name: "Student's Zone", href: "/students-zone", hasDropdown: false },
    { name: "Gallery", href: "/gallery", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <header className="w-full relative z-50">
      {/* Top Bar - Homoeopathy College Trust Header */}
      <div className="bg-white shadow-md px-4 md:px-8 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Left: Trust and College Name with Logos */}
          <div className="flex items-center gap-3 md:gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-3">
              <Image
                src="/SGi-Logo-4K_JPEG.jpg"
                alt="SGI Logo"
                width={55}
                height={55}
                className="object-contain rounded-md"
                priority
              />
              <div className="leading-tight border-l-2 border-green-200 pl-3">
                <h1 className="font-bold text-sm md:text-base text-gray-800 tracking-wide">
                  SHETTY SANGAPPA
                </h1>
                <p className="text-xs text-gray-500">MEMORIAL TRUST</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-gray-200" />

            <div className="flex items-center gap-3">
              <Image
                src="/medical-logo.png"
                alt="Homoeopathy College Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="leading-tight">
                <h1 className="font-bold text-base md:text-lg text-green-800 tracking-wide">
                  SHETTY HOMOEOPATHY
                </h1>
                <p className="text-xs text-gray-500">MEDICAL COLLEGE & HOSPITAL</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Info and Approval Badge in a Card Layout */}
          <div className="flex flex-col items-end gap-2">
            {/* Contact Row - Phone and Email side by side */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919663363444"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 hover:bg-green-100 transition border border-green-100"
              >
                <span className="text-green-700 text-sm">📞</span>
                <div>
                  <p className="text-[9px] text-green-600 uppercase tracking-wider font-semibold">Call</p>
                  <p className="text-sm font-bold text-gray-800">+91 9663363444</p>
                </div>
              </a>
              <a
                href="mailto:info@shettyhomoeopathy.edu.in"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 hover:bg-green-100 transition border border-green-100"
              >
                <span className="text-green-700 text-sm">✉️</span>
                <div>
                  <p className="text-[9px] text-green-600 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-sm font-bold text-gray-800">info@shettyhomoeopathy.edu.in</p>
                </div>
              </a>
            </div>
            {/* Approval Badge as a professional pill below contacts */}
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-200 shadow-sm">
              <span className="text-green-600 text-sm">✅</span>
              <span>Approved by NCH | MINISTRY OF AYUSH, GOVT. OF INDIA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-white/95 backdrop-blur-sm shadow-md py-3"
        } px-4 md:px-8`}
      >
        <div className="flex justify-between items-center">
          <div className="flex-1 md:flex-none">
            <p className="text-green-700 font-semibold text-xs md:text-sm">
              Affiliated to RGUHS, Bengaluru | Shetty Group of Institutions
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-4 xl:gap-6 text-sm font-medium text-gray-700">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  onMouseEnter={() => handleEnter(item.name.toLowerCase())}
                  onMouseLeave={handleLeave}
                  className="relative group"
                >
                  <Link
                    href={item.href || "#"}
                    className="flex items-center gap-1 hover:text-green-700 transition py-2"
                  >
                    {item.name} <span className="text-xs">▼</span>
                  </Link>
                  {openMenu === item.name.toLowerCase() && (
                    <div className="absolute top-8 left-0 bg-white shadow-xl rounded-lg min-w-[220px] z-50 border border-gray-100 overflow-hidden">
                      <ul className="py-2">
                        {item.dropdownItems?.map((subItem, index) => (
                          <li
                            key={`${subItem.label}-${index}`}
                            className="px-4 py-2 hover:bg-green-50 hover:text-green-700 cursor-pointer text-sm transition"
                          >
                            <Link href={subItem.href}>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href || "#"}
                  className="hover:text-green-700 transition py-2"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-green-700 text-white text-xl hover:bg-green-800 transition"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href || "#"}
                    className="flex items-center justify-between w-full py-2 text-gray-700 font-medium hover:text-green-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name} <span className="text-xs">▼</span>
                  </Link>
                  {openMenu === item.name.toLowerCase() && (
                    <div className="pl-4 space-y-2 border-l-2 border-green-200">
                      {item.dropdownItems?.map((subItem, index) => (
                        <Link
                          key={`mobile-${subItem.label}-${index}`}
                          href={subItem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-green-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href || "#"}
                  className="block py-2 text-gray-700 font-medium hover:text-green-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}