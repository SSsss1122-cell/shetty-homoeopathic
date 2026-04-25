// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      
      {/* Main Footer Section - Reduced padding */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column - Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-white mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm">
              {[
                "Home",
                "About Institute",
                "Photo Gallery",
                "Student's Zone",
                "Mandatory Disclosures",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Address */}
          <div>
            <h3 className="text-md font-semibold text-white mb-2">
              Address
            </h3>

            <address className="not-italic space-y-1 text-sm text-gray-400">
              <p>
                Shetty Education Hub, Shahbad Road,
                <br />
                Kalaburagi, Karnataka - 585105
              </p>

              <p>
                <a
                  href="tel:+919663363444"
                  className="hover:text-white transition duration-200"
                >
                  +91 9663363444
                </a>
                {" , "}
                <a
                  href="tel:+919739912926"
                  className="hover:text-white transition duration-200"
                >
                  +91 9739912926
                </a>
              </p>

              <p>
                <a
                  href="mailto:shetty.homoeopathic@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition duration-200"
                >
                  shetty.homoeopathic@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Reduced padding */}
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
            
            <p className="text-gray-400 text-center md:text-left">
              © 2025 SHETTY SANGAPPA MEMORIAL TRUST. All rights reserved. |{" "}
              <span className="italic">
                Empowering minds, shaping futures.
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
              <span className="text-gray-400">✅ Approved by NCH</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">🌿 Ministry of AYUSH</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">🎓 Affiliated to RGUHS, Bengaluru</span>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;