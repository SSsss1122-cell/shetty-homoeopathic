// components/Header.tsx
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
      {/* TOP BAR: SGI logo LEFT, Homoeopathy logo RIGHT */}
      <div className="bg-white border-b border-emerald-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-3">
          <div className="flex justify-between items-center">
            {/* SGI Logo – Left */}
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/SGi-Logo-4K_JPEG.jpg"
                  alt="SGI Logo"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <div className="text-left">
                <p className="text-[10px] md:text-xs font-bold text-gray-600 leading-tight">SHETTY SANGAPPA</p>
                <p className="text-[8px] md:text-[10px] text-gray-400">MEMORIAL TRUST</p>
              </div>
            </div>

            {/* Homoeopathy Logo – Right */}
            <div className="flex items-center gap-2">
              <div className="relative w-9 h-9 md:w-11 md:h-11">
                <Image
                  src="/medical-logo.png"
                  alt="Homoeopathy College Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-right">
                <p className="text-[10px] md:text-xs font-bold text-emerald-700 leading-tight">SHETTY HOMOEOPATHY</p>
                <p className="text-[8px] md:text-[10px] text-gray-400">MEDICAL COLLEGE & HOSPITAL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-header: Approval badge + Contact info (unchanged) */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
            <div className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-emerald-200">
              <span className="text-green-600 text-sm">✅</span>
              <span className="text-gray-700 font-medium whitespace-nowrap">Approved by NCH | Ministry of AYUSH</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+919663363444" className="flex items-center gap-1 text-gray-600 hover:text-emerald-700 transition-colors">
                <span>📞</span> <span>+91 9663363444</span>
              </a>
              <span className="text-gray-300">|</span>
              <a href="mailto:info@shettyhomoeopathy.edu.in" className="flex items-center gap-1 text-gray-600 hover:text-emerald-700 transition-colors">
                <span>✉️</span> <span>info@shettyhomoeopathy.edu.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar (unchanged, only style kept compact) */}
      <div
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-1.5"
            : "bg-white/95 backdrop-blur-sm shadow-md py-2"
        } px-4 md:px-8`}
      >
        <div className="flex justify-between items-center">
          <div className="flex-1 md:flex-none">
            <p className="text-emerald-700 font-semibold text-[11px] md:text-xs">
              Affiliated to RGUHS, Bengaluru | Shetty Group of Institutions
            </p>
          </div>
          <nav className="hidden lg:flex gap-5 xl:gap-7 text-sm font-medium text-gray-700">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  onMouseEnter={() => handleEnter(item.name.toLowerCase())}
                  onMouseLeave={handleLeave}
                  className="relative group"
                >
                  <button className="flex items-center gap-1 hover:text-emerald-700 transition py-1.5">
                    {item.name} <span className="text-[10px]">▼</span>
                  </button>
                  {openMenu === item.name.toLowerCase() && (
                    <div className="absolute top-7 left-0 bg-white shadow-xl rounded-xl min-w-[220px] z-50 border border-gray-100 overflow-hidden animate-fadeIn">
                      <ul className="py-2">
                        {item.dropdownItems?.map((subItem, index) => (
                          <li
                            key={`${subItem.label}-${index}`}
                            className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer text-sm transition"
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
                  className="hover:text-emerald-700 transition py-1.5"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-emerald-700 text-white text-xl hover:bg-emerald-800 transition"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 space-y-2">
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
                    {item.name} <span className="text-xs">▼</span>
                  </button>
                  {openMenu === item.name.toLowerCase() && (
                    <div className="pl-4 space-y-2 border-l-2 border-emerald-200">
                      {item.dropdownItems?.map((subItem, index) => (
                        <Link
                          key={`mobile-${subItem.label}-${index}`}
                          href={subItem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-emerald-700"
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
                  className="block py-2 text-gray-700 font-medium hover:text-emerald-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}