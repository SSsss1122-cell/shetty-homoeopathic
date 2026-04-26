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
      hasDropdown: true,
      dropdownItems: [
        { label: "About Institute", href: "/" },
        { label: "Principal's Desk", href: "/principal" },
        { label: "Vision & Mission", href: "/" },
        { label: "Permission Letter", href: "/" }
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
      {/* Top Bar - Combined Trust and College Info */}
      <div className="bg-gradient-to-r from-green-900 to-green-800 text-white px-4 md:px-8 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-3 md:gap-6 flex-wrap justify-center">
            {/* SGI Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/SGi-Logo-4K_JPEG.jpg"
                alt="SGI Logo"
                width={50}
                height={50}
                className="object-contain rounded-md"
                priority
              />
              <div className="leading-tight">
                <h1 className="font-bold text-sm md:text-base">SHETTY SANGAPPA</h1>
                <p className="text-xs opacity-90">MEMORIAL TRUST</p>
              </div>
            </div>

            <div className="w-px h-8 bg-green-600 hidden md:block" />

            <div className="flex items-center gap-2">
              <Image
                src="/medical-logo.png"
                alt="Medical Logo"
                width={45}
                height={45}
                className="object-contain"
              />
              <div className="leading-tight">
                <h1 className="font-bold text-sm md:text-base">SHETTY HOMEO.</h1>
                <p className="text-xs opacity-90">MEDICAL COLLEGE & HOSPITAL</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
            <a href="tel:+919663363444" className="flex items-center gap-2 hover:text-yellow-300 transition">
              <span>📞</span> +91 9663363444
            </a>
            <a href="mailto:info@shettyhomoeopathy.edu.in" className="flex items-center gap-2 hover:text-yellow-300 transition">
              <span>✉️</span> info@shettyhomoeopathy.edu.in
            </a>
          </div>
        </div>
        
        {/* Approval Badge inside top bar */}
        <div className="text-center mt-2 pt-2 border-t border-green-700 text-yellow-200 text-xs md:text-sm font-semibold">
          ✅ Approved by NCH | MINISTRY OF AYUSH, GOVT. OF INDIA
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-gray-50 shadow-md py-3"
        } px-4 md:px-8`}
      >
        <div className="flex justify-between items-center">
          <div className="flex-1 md:flex-none">
            <p className="text-green-800 font-semibold text-xs md:text-sm">
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
                  <button className="flex items-center gap-1 hover:text-green-700 transition py-2">
                    {item.name} <span>▼</span>
                  </button>
                  {openMenu === item.name.toLowerCase() && (
                    <div className="absolute top-8 left-0 bg-white shadow-xl rounded-lg min-w-[220px] z-50 border border-gray-100 overflow-hidden">
                      <ul className="py-2">
                        {item.dropdownItems?.map((subItem, index) => (
                          <li
                            key={`${subItem.label}-${index}`}
                            className="px-4 py-2 hover:bg-green-50 hover:text-green-700 cursor-pointer text-sm transition"
                          >
                            <a href={subItem.href}>{subItem.label}</a>
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
            className="lg:hidden p-2 rounded-lg bg-green-700 text-white text-xl"
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
                  <button
                    onClick={() =>
                      setOpenMenu(
                        openMenu === item.name.toLowerCase()
                          ? null
                          : item.name.toLowerCase()
                      )
                    }
                    className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
                  >
                    {item.name} <span>▼</span>
                  </button>
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