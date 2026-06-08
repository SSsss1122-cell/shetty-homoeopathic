"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import DomeGallery from '../components/DomeGallery';
import AnimatedList from '../components/AnimatedList';
import LogoLoop from '../components/LogoLoop';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Stats items for LogoLoop
  const statsItems = [
    <div key="stat1" className="bg-black/30 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-emerald-400/20 hover:border-emerald-400/50 transition text-center min-w-[120px] sm:min-w-[140px] mx-1 sm:mx-2">
      <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
        17+
      </div>
      <div className="text-xs sm:text-sm font-bold text-white">Acres</div>
      <p className="text-[8px] sm:text-xs text-gray-300">🌿 Green Campus</p>
    </div>,
    
    <div key="stat2" className="bg-black/30 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-emerald-400/20 hover:border-emerald-400/50 transition text-center min-w-[120px] sm:min-w-[140px] mx-1 sm:mx-2">
      <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
        6+
      </div>
      <div className="text-xs sm:text-sm font-bold text-white">Disciplines</div>
      <p className="text-[8px] sm:text-xs text-gray-300">⚕️ Allied Sciences</p>
    </div>,
    
    <div key="stat3" className="bg-black/30 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-emerald-400/20 hover:border-emerald-400/50 transition text-center min-w-[120px] sm:min-w-[140px] mx-1 sm:mx-2">
      <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
        1000+
      </div>
      <div className="text-xs sm:text-sm font-bold text-white">Students</div>
      <p className="text-[8px] sm:text-xs text-gray-300">👨‍⚕️ Future Healers</p>
    </div>,
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-900 -z-10"></div>
        
        {/* Single fixed background image */}
        <div className="absolute inset-0">
          <Image
            src="/state%20of%20art.jpg"
            alt="Modern Medical Infrastructure"
            fill
            className="object-cover"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <div className="inline-block mb-3 animate-fade-in-up">
              <p className="text-[11px] sm:text-xs md:text-sm text-emerald-200 font-bold inline-flex items-center gap-2 px-3 py-1.5 bg-black/30 backdrop-blur-md rounded-full border border-emerald-400/30">
                ⚕️ SHETTY SANGAPPA MEMORIAL TRUST ⚕️
              </p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white drop-shadow-2xl">
              SHETTY HOMOEOPATHY
              <span className="block text-emerald-300">COLLEGE & HOSPITAL</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-5 text-[11px] sm:text-xs md:text-sm text-gray-200 mb-3">
              <a href="tel:+919663363444" className="flex items-center gap-1 hover:text-emerald-300 transition hover:scale-105">
                📞 +91 9663363444
              </a>
              <span className="hidden sm:inline text-emerald-400/50">|</span>
              <a href="mailto:info@shettyhomoeopathy.edu.in" className="flex items-center gap-1 hover:text-emerald-300 transition hover:scale-105">
                ✉️ info@shettyhomoeopathy.edu.in
              </a>
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-lg">
              <span>✅</span>
              <span>Approved by NCH | MINISTRY OF AYUSH</span>
            </div>
          </div>
          
          <div className="text-center mb-5">
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold mb-1 text-white drop-shadow-lg">
              SHETTY HOMOEOMEDICAL COLLEGE
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto my-2 rounded-full"></div>
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-200 font-medium">
              ⚕️ Affiliated to RGUHS, Bengaluru | Shetty Group of Institutions
            </p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 md:p-4 my-4 border border-emerald-400/30 shadow-md">
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-white text-center">
              &ldquo;Empowering Minds: Excellence across Homoeopathy, Engineering, Ayurveda & more&rdquo;
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 my-5">
            <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 sm:px-5 md:px-6 py-1.5 md:py-2 rounded-full font-bold text-xs sm:text-sm hover:from-emerald-600 hover:to-teal-700 transition shadow-md flex items-center gap-1">
              <span>⚕️ Apply Now</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button className="group border border-white text-white px-4 sm:px-5 md:px-6 py-1.5 md:py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-white/10 transition backdrop-blur-sm">
              🌿 Virtual Tour
            </button>
          </div>
          
          {/* LogoLoop Stats - Animated Marquee */}
          {isMounted && (
            <div className="mt-6 pt-4 border-t border-emerald-400/30">
              <LogoLoop 
                speed={0.8}
                direction="left"
                items={statsItems}
              />
            </div>
          )}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-b from-emerald-900/10 to-transparent"></div>

      {/* Dome Gallery Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-900/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-3 animate-fade-in-up">
              <p className="text-[11px] sm:text-xs md:text-sm text-emerald-400 font-bold inline-flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-emerald-500/30">
                ⚕️ 360° CAMPUS EXPERIENCE ⚕️
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Virtual Dome Gallery</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Immerse yourself in our state-of-the-art facilities through an interactive 360° experience
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div 
            className="w-full flex justify-center items-center rounded-2xl overflow-hidden shadow-2xl" 
            style={{ 
              width: '100%', 
              height: '70vh', 
              minHeight: '550px', 
              maxHeight: '700px',
            }}
          >
            <DomeGallery
              fit={0.5}
              minRadius={500}
              maxVerticalRotationDeg={20}
              segments={34}
              dragDampening={5}
              grayscale={false}
            />
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-2">
              <span>🖱️</span> Drag to rotate the sphere 
              <span className="mx-2">•</span> 
              <span>✨</span> Click on any image to enlarge
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 sm:py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute top-20 left-10 text-4xl opacity-10 animate-float">⚕️</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-float-delayed">🌿</div>
        <div className="absolute top-1/3 right-1/4 text-3xl opacity-5 animate-spin-slow">🍃</div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200 mb-4 animate-fade-in-up">
              <span className="text-emerald-600 text-sm">⚕️</span>
              <span className="text-emerald-700 text-xs font-semibold tracking-wider">EST. 2011</span>
              <span className="text-emerald-600 text-sm">🌿</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">
                About the Trust
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full mb-4"></div>
            
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Empowering young minds through quality education and holistic development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Shetty Sangappa Memorial Trust</h3>
                    <p className="text-emerald-600 text-sm font-medium">Empowering since 2011</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Shetty Group of Institutions is a part of Shetty Sangappa Memorial Trust established in 2011 to empower young budding brains with technical and entrepreneurial knowledge and skills, assisting them in holistic growth.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-emerald-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Prime Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Located just on the other side of the Highway (NH 150) on Shahbad road, Kalaburagi, the college nestles amidst sprawling 17 acres of greenery with a hilly backdrop.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-emerald-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-emerald-700 font-semibold">Recognized Excellence</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Approved by NCH, Ministry of Ayush, Govt. of India | Affiliated to RGUHS, Bengaluru
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Green Campus</h3>
                    <p className="text-emerald-600 text-sm font-medium">Eco-friendly Environment</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The campus breathes fresh air of nature with vast greenery, free from pollution. The ambience is ideal for learning, research, living and exploration.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-emerald-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Our Mission</h3>
                    <p className="text-emerald-600 text-sm font-medium">Excellence in Education</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  "This education major has set a hallmark standard in professional education - redefining its own standards consistently."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-5 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-800 mb-3">📸 Photo Gallery ⚕️</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">Explore our state-of-the-art medical campus and facilities</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {[
              { src: "/state%20of%20art.jpg", title: "State-of-art Infrastructure", subtitle: "✨ World-class medical facilities", badge: "⚕️ Modern Medical Infrastructure" },
              { src: "/shettyhomoeopathic%20hospital.jpeg", title: "Shetty Homoeopathic Hospital", subtitle: "🏥 Advanced homoeopathic care", badge: "⚕️ Homoeopathic Healing Center" },
              { src: "/img1.jpeg", title: "Green Healing Campus", subtitle: "🌿 Nature-based therapy", badge: "🌿 Therapeutic Environment" }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="h-48 sm:h-56 md:h-64 relative overflow-hidden">
                    <Image 
                      src={item.src} 
                      alt={item.title} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      onError={(e) => ((e.target).style.display = 'none')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-5">
                      <p className="text-white font-bold text-xs sm:text-sm md:text-base px-2 text-center">{item.badge}</p>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-5 text-center bg-gradient-to-r from-emerald-50 to-white">
                    <p className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 text-sm sm:text-base md:text-lg">
                      {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <button className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm sm:text-base md:text-lg group transition-all duration-300 border-b-2 border-emerald-600 pb-1 hover:gap-3">
              View Full Gallery ⚕️
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-5 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-800 mb-3">⚕️ Student Testimonials 🌿</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">Real experiences from our BHMS students</p>
            <p className="text-emerald-600 text-xs mt-2">✨ Scroll through testimonials | Full text visible | Use arrow keys to navigate ✨</p>
          </div>
          
          <div className="flex justify-center">
            <AnimatedList
              showGradients={true}
              enableArrowNavigation={true}
              displayScrollbar={true}
              className="w-full max-w-3xl"
              itemClassName="hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-900 py-8 sm:py-10 md:py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-3 left-5 text-6xl sm:text-7xl animate-pulse">⚕️</div>
          <div className="absolute bottom-3 right-5 text-6xl sm:text-7xl animate-pulse">🌿</div>
          <div className="absolute top-1/2 left-1/4 text-5xl sm:text-6xl animate-bounce">🍃</div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { value: "15+", label: "⚕️ Years of Excellence" },
              { value: "100%", label: "🌿 Placement Support" },
              { value: "50+", label: "🍃 Expert Faculty" },
              { value: "24/7", label: "⚕️ Hospital Services" }
            ].map((stat, idx) => (
              <div key={idx} className="transform hover:scale-110 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-400">{stat.value}</div>
                <p className="text-[10px] sm:text-xs md:text-sm text-emerald-200 mt-1 sm:mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-8 sm:py-10 md:py-12 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-800 mb-3">⚕️ Start Your Healing Journey Today! 🌿</h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 text-emerald-600 font-semibold">Admissions Open 2025-26 | Limited seats for BHMS & Allied Health Sciences</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <a href="tel:+919663363444" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base hover:from-emerald-700 hover:to-teal-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              📞 Call Now: +91 9663363444
            </a>
            <a href="tel:+919739912926" className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base hover:bg-emerald-50 transition transform hover:-translate-y-1">
              📱 +91 9739912926
            </a>
          </div>
          <address className="not-italic text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
            📍 Shetty Education Hub, Shahbad Road, Kalaburagi, Karnataka - 585105
          </address>
          <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 border-t border-gray-100 text-[10px] sm:text-xs md:text-sm text-gray-500 space-y-1">
            <p>✅ Approved by NCH, Ministry of Ayush, Govt. of India | Affiliated to RGUHS, Bengaluru</p>
            <p>✅ Unit of Shetty Group of Institutions — Homoeopathy, Ayurveda, Pharmacy, Nursing, Engineering, Paramedical</p>
            <p className="text-emerald-600 font-semibold mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">⚕️ Healing with Nature, Excellence in Education ⚕️</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-spin-slow { animation: spin-slow 40s linear infinite; }
        .animate-spin-slower { animation: spin-slower 60s linear infinite; }
        .animate-pulse { animation: pulse 3s ease-in-out infinite; }
        .animate-bounce { animation: bounce 4s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </main>
  );
}