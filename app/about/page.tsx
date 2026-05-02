// app/about/page.tsx
'use client';
import Image from "next/image";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    // Handle hash navigation for chairman section
    if (window.location.hash === "#chairman") {
      const element = document.getElementById("chairman");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      {/* Hero Section - Enhanced with subtle pattern and animation */}
      <div className="relative bg-gradient-to-r from-emerald-700 to-teal-800 text-white py-20 md:py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-7xl animate-pulse">⚕️</div>
          <div className="absolute bottom-10 right-10 text-7xl animate-pulse">🌿</div>
          <div className="absolute top-1/2 left-1/4 text-6xl animate-bounce">🍃</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4 animate-fade-in-up">
            <p className="text-xs md:text-sm text-emerald-200 font-bold inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-emerald-400/30">
              ⚕️ SHE TTY SANGAPPA MEMORIAL TRUST ⚕️
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg tracking-tight">
            About Us
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto my-4 rounded-full"></div>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto font-medium">
            Committed to Excellence in Homoeopathic Education & Healthcare
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Chairman Section - Enhanced with better visual hierarchy */}
        <div id="chairman" className="max-w-5xl mx-auto mb-16 md:mb-20 scroll-mt-24">
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="md:flex">
              {/* Chairman Photo - Enhanced styling */}
              <div className="md:w-2/5 bg-gradient-to-br from-emerald-100 to-teal-50 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-5 left-5 text-6xl">⚕️</div>
                  <div className="absolute bottom-5 right-5 text-6xl">🌿</div>
                </div>
                <div className="relative transform transition-transform duration-500 group-hover:scale-105">
                  <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-emerald-500/30">
                    <Image
                      src="/chairman.png"
                      alt="Chairman Shri. Shetty Sangappa"
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap shadow-lg">
                    Founder Chairman
                  </div>
                </div>
              </div>
              
              {/* Chairman Info - Enhanced typography and spacing */}
              <div className="md:w-3/5 p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                  Shri. Shetty Sangappa
                </h2>
                <p className="text-emerald-600 font-semibold text-sm md:text-base mb-3">
                  Founder Chairman
                </p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mb-5 rounded-full"></div>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    With an unwavering commitment to promoting homoeopathy as a holistic healing science, 
                    Shri. Shetty Sangappa established the Shetty Homoeopathy Medical College & Hospital 
                    with a vision to provide quality education and affordable healthcare to the community.
                  </p>
                  <p>
                    Under his visionary leadership, the institution has grown into a center of excellence, 
                    producing skilled homoeopathic practitioners who serve society with dedication and compassion.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-xl mt-6 border-l-4 border-emerald-500">
                  <p className="text-gray-700 italic text-sm md:text-base">
                    &ldquo;To heal with nature&apos;s wisdom and educate with purpose - that is our sacred duty to society.&rdquo;
                  </p>
                  <p className="text-emerald-600 font-semibold mt-2 text-sm">- Shri. Shetty Sangappa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section - Enhanced cards with animations */}
        <div id="vision-mission" className="max-w-5xl mx-auto mb-16 md:mb-20 scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Vision */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mb-5 rounded-full"></div>
              <p className="text-gray-600 leading-relaxed">
                To be a premier institution in homoeopathic education and healthcare, 
                fostering excellence in learning, research, and patient care while 
                preserving the fundamental principles of homoeopathy.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">📚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mb-5 rounded-full"></div>
              <ul className="text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
                <li>Provide quality homoeopathic education with modern teaching methods</li>
                <li>Offer affordable and effective homoeopathic healthcare services</li>
                <li>Promote research and innovation in homoeopathy</li>
                <li>Develop compassionate healthcare professionals for society</li>
              </ul>
            </div>
          </div>
        </div>

        {/* About Institute Section - Enhanced with decorative elements */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 text-8xl opacity-5 pointer-events-none">⚕️</div>
            <div className="absolute bottom-0 left-0 text-8xl opacity-5 pointer-events-none">🌿</div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              About Shetty Homoeopathy Medical College
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Shetty Homoeopathy Medical College & Hospital, established under the Shetty Sangappa 
                Memorial Trust, is a distinguished institution approved by the National Commission 
                for Homoeopathy (NCH) and the Ministry of AYUSH, Government of India.
              </p>
              <p>
                Affiliated to the prestigious Rajiv Gandhi University of Health Sciences (RGUHS), 
                Bengaluru, our college is committed to providing excellence in homoeopathic medical 
                education and patient care.
              </p>
              <p>
                Our state-of-the-art campus features modern classrooms, well-equipped laboratories, 
                a vast central library, and a full-fledged hospital that serves the community with 
                quality homoeopathic treatments.
              </p>
              <p>
                We take pride in our dedicated faculty, who blend traditional homoeopathic wisdom 
                with contemporary medical knowledge to create competent and compassionate 
                homoeopathic practitioners.
              </p>
            </div>

            {/* Key Highlights - Enhanced stats with better responsiveness */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
              {[
                { value: "20+", label: "Years of Excellence", icon: "⚕️" },
                { value: "500+", label: "Students", icon: "👨‍⚕️" },
                { value: "50+", label: "Faculty Members", icon: "📚" },
                { value: "100+", label: "Beds in Hospital", icon: "🏥" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 mt-1 flex items-center justify-center gap-1">
                    <span>{stat.icon}</span>
                    <span>{stat.label}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}