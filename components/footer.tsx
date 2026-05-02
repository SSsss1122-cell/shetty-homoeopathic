// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 border-t border-gray-800 relative">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
      
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Quick Links with icons */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
              <h3 className="text-lg font-semibold text-white tracking-wide">
                Quick Links
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {[
                "Home",
                "About Institute",
                "Photo Gallery",
                "Student's Zone",
                "Mandatory Disclosures",
                "Contact Us",
              ].map((item, index) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1"
                  >
                    <span className="w-1 h-1 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-200"></span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Enhanced Address with modern card design */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
              <h3 className="text-lg font-semibold text-white tracking-wide">
                Get in Touch
              </h3>
            </div>

            <address className="not-italic space-y-3 text-sm text-gray-400 bg-white/5 rounded-2xl p-5 border border-gray-800/50 backdrop-blur-sm">
              <div className="flex items-start gap-3 group">
                <span className="text-green-500 text-lg group-hover:scale-110 transition-transform duration-200">📍</span>
                <p className="leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                  Shetty Education Hub, Shahbad Road,
                  <br />
                  Kalaburagi, Karnataka - 585105
                </p>
              </div>

              <div className="flex items-start gap-3 group">
                <span className="text-green-500 text-lg group-hover:scale-110 transition-transform duration-200">📞</span>
                <div className="space-y-1">
                  <p>
                    <a
                      href="tel:+919663363444"
                      className="hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      +91 9663363444
                    </a>
                    <span className="mx-2 text-gray-600">•</span>
                    <a
                      href="tel:+919739912926"
                      className="hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      +91 9739912926
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <span className="text-green-500 text-lg group-hover:scale-110 transition-transform duration-200">✉️</span>
                <p>
                  <a
                    href="mailto:shetty.homoeopathic@gmail.com"
                    className="text-green-400 hover:text-green-300 transition-all duration-200 hover:translate-x-1 inline-block font-medium"
                  >
                    shetty.homoeopathic@gmail.com
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Enhanced with better structure */}
      <div className="border-t border-gray-800/50 bg-gradient-to-r from-gray-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            
            <p className="text-gray-400 text-center md:text-left leading-relaxed">
              © 2025 SHETTY SANGAPPA MEMORIAL TRUST. All rights reserved.
              <span className="hidden md:inline mx-2 text-gray-600">|</span>
              <br className="md:hidden" />
              <span className="italic text-gray-500 block md:inline mt-1 md:mt-0">
                Empowering minds, shaping futures.
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-900/20 border border-green-800/30 text-green-300">
                <span className="text-xs">✅</span>
                <span>Approved by NCH</span>
              </span>
              <span className="text-gray-700 hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-900/20 border border-emerald-800/30 text-emerald-300">
                <span className="text-xs">🌿</span>
                <span>Ministry of AYUSH</span>
              </span>
              <span className="text-gray-700 hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-teal-900/20 border border-teal-800/30 text-teal-300">
                <span className="text-xs">🎓</span>
                <span>Affiliated to RGUHS, Bengaluru</span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;