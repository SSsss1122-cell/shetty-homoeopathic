// app/page.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // Slideshow images array
  const slides = [
    {
      url: "/state of art.jpg",
      title: "Modern Medical Infrastructure",
      subtitle: "State-of-the-art Campus"
    },
    {
      url: "/shettyhomoeopathic hospital.jpeg",
      title: "Homoeopathic Treatment Center",
      subtitle: "Advanced Healing Facilities"
    },
    {
      url: "/shetty homoeopathic hospitall.jpeg",
      title: "Green Healing Campus",
      subtitle: "Therapeutic Natural Environment"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="bg-white">
      {/* Hero Section with Background Slideshow */}
      <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Background Slideshow Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.url}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-emerald-400 w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <p className="text-xs md:text-sm text-emerald-200 font-bold inline-block px-5 py-2 bg-black/30 backdrop-blur-sm rounded-full shadow-sm border border-emerald-400/30">
                ⚕️ SHETTY SANGAPPA MEMORIAL TRUST ⚕️
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              SHETTY HOMOEOPATHY
              <span className="block text-emerald-300">COLLEGE & HOSPITAL</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-4 text-gray-200">
              <span className="flex items-center gap-2 hover:text-emerald-300 transition-all duration-300 cursor-pointer transform hover:scale-105">
                📞 +91 9663363444
              </span>
              <span className="flex items-center gap-2 hover:text-emerald-300 transition-all duration-300 cursor-pointer transform hover:scale-105">
                ✉️ info@shettyhomoeopathy.edu.in
              </span>
            </div>
            <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-5 py-2 rounded-full text-xs font-bold shadow-md">
              ⚕️ Approved by NCH | MINISTRY OF AYUSH, GOVT. OF INDIA ⚕️
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">SHETTY HOMOEOMEDICAL COLLEGE</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto my-4 rounded-full"></div>
            <p className="text-lg md:text-xl mb-2 text-gray-200">⚕️ Affiliated to RGUHS, Bengaluru | Shetty Group of Institutions ⚕️</p>
            <p className="text-md italic text-emerald-300 font-medium">Shetty Group of Institutions, Where Knowledge Meets Innovation</p>
          </div>

          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 my-8 border border-emerald-400/30 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-5 -left-5 text-6xl opacity-20">⚕️</div>
            <div className="absolute -bottom-5 -right-5 text-6xl opacity-20">🌿</div>
            <h3 className="text-2xl font-bold mb-3 text-white text-center">"Empowering Minds: Excellence across Homoeopathy, Engineering, Ayurveda & more"</h3>
            <p className="text-gray-200 text-center leading-relaxed">Experience the hallmark standard of education across Homoeopathy, Engineering, Ayurvedic, Pharmacy, Nursing, and Paramedical disciplines — consistently redefining excellence.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 my-10">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 flex items-center gap-2">
              ⚕️ Apply Now <span className="text-xl">→</span>
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg flex items-center gap-2">
              🌿 Virtual Campus Tour
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t-2 border-emerald-400/30 text-center">
            <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-3">
              <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-emerald-400/20">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">17+</div>
                <div className="text-2xl font-bold text-white mt-2">Acres</div>
                <p className="text-sm text-gray-300 mt-2">🌿 Sprawling Green Campus</p>
              </div>
            </div>
            <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-3">
              <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-emerald-400/20">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">6+</div>
                <div className="text-2xl font-bold text-white mt-2">Disciplines</div>
                <p className="text-sm text-gray-300 mt-2">⚕️ Medical & Allied Sciences</p>
              </div>
            </div>
            <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-3">
              <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-emerald-400/20">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">1000+</div>
                <div className="text-2xl font-bold text-white mt-2">Students</div>
                <p className="text-sm text-gray-300 mt-2">👨‍⚕️ Future Healers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Medical & Herbal Theme */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="absolute top-20 right-10 text-7xl opacity-10 animate-pulse">⚕️</div>
        <div className="absolute bottom-20 left-10 text-7xl opacity-10 animate-bounce">🌿</div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">⚕️ About the Trust ⚕️</h2>
            <p className="text-emerald-600 text-lg font-medium">Empowering young minds since 2011</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100">
                <div className="text-3xl mb-3">🏛️ ⚕️</div>
                <p className="text-gray-700 leading-relaxed">Shetty Group of Institutions is a part of Shetty Sangappa Memorial Trust established in 2011 to empower young budding brains with technical and entrepreneurial knowledge and skills, assisting them in holistic growth.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100">
                <div className="text-3xl mb-3">📍 🌿</div>
                <p className="text-gray-700 leading-relaxed">Located just on the other side of the Highway (NH 150) on Shahbad road, Kalaburagi, the college nestles amidst sprawling 17 acres of greenery with a hilly backdrop.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100">
                <div className="text-3xl mb-3">🌿 🍃</div>
                <p className="text-gray-700 leading-relaxed">The campus breathes fresh air of nature with vast greenery, free from pollution. The ambience is ideal for learning, research, living and exploration.</p>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-white p-6 rounded-2xl shadow-lg border-l-4 border-emerald-500">
                <div className="text-3xl mb-3">✨ ⚕️</div>
                <p className="font-semibold text-emerald-800 leading-relaxed">This education major has set a hallmark standard in professional education - redefining its own standards consistently.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">📸 Photo Gallery ⚕️</h2>
            <p className="text-gray-600 text-lg">Explore our state-of-the-art medical campus and facilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src="/state of art.jpg" 
                    alt="State-of-art Infrastructure" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <p className="text-white font-bold text-lg">⚕️ Modern Medical Infrastructure</p>
                  </div>
                </div>
                <div className="p-5 text-center bg-gradient-to-r from-emerald-50 to-white">
                  <p className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 text-lg">State-of-art Infrastructure</p>
                  <p className="text-sm text-gray-500 mt-1">✨ World-class medical facilities</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src="/shettyhomoeopathic hospital.jpeg" 
                    alt="Shetty Homoeopathic Hospital" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <p className="text-white font-bold text-lg">⚕️ Homoeopathic Healing Center</p>
                  </div>
                </div>
                <div className="p-5 text-center bg-gradient-to-r from-emerald-50 to-white">
                  <p className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 text-lg">Shetty Homoeopathic Hospital</p>
                  <p className="text-sm text-gray-500 mt-1">🏥 Advanced homoeopathic care</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src="/shetty homoeopathic hoapitall.jpeg" 
                    alt="Green Campus" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <p className="text-white font-bold text-lg">🌿 Therapeutic Environment</p>
                  </div>
                </div>
                <div className="p-5 text-center bg-gradient-to-r from-emerald-50 to-white">
                  <p className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 text-lg">Green Healing Campus</p>
                  <p className="text-sm text-gray-500 mt-1">🌿 Nature-based therapy</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold text-lg group transition-all duration-300 border-b-2 border-emerald-600 pb-1 hover:gap-3">
              View Full Gallery ⚕️
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">⚕️ Student Testimonials 🌿</h2>
            <p className="text-gray-600 text-lg">Real experiences from our BHMS students</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-l-4 border-emerald-500">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-emerald-500">★</span>
                ))}
              </div>
              <p className="text-6xl text-emerald-200 mb-4 group-hover:text-emerald-300 transition-colors">"</p>
              <p className="text-gray-700 mb-6 leading-relaxed italic">I have started to explore myself after joining here in many ways as I have newly found that I have leadership qualities to manage any task given to me. I have gained more confidence to express myself without hesitation than before.</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-emerald-800">⚕️ Mahesh Kumar</p>
                <p className="text-sm text-gray-500">3rd year BHMS</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-l-4 border-emerald-500">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-emerald-500">★</span>
                ))}
              </div>
              <p className="text-6xl text-emerald-200 mb-4 group-hover:text-emerald-300 transition-colors">"</p>
              <p className="text-gray-700 mb-6 leading-relaxed italic">I'm glad that I chose Shetty Homoeopathic Medical College as my college of choice as I stay at the girls hostel on the campus it's very good with all the facilities and secure.</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-emerald-800">🌿 Gurusiddamma</p>
                <p className="text-sm text-gray-500">3rd year BHMS</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-l-4 border-emerald-500">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-emerald-500">★</span>
                ))}
              </div>
              <p className="text-6xl text-emerald-200 mb-4 group-hover:text-emerald-300 transition-colors">"</p>
              <p className="text-gray-700 mb-6 leading-relaxed italic">Good environment to learn with excellent teaching faculty as their care and attention to each and every student is same. Regular tests and exams are conducted as it helps me finding better me everyday.</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-emerald-800">🍃 Nagesh</p>
                <p className="text-sm text-gray-500">1st year BHMS</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-l-4 border-emerald-500">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-emerald-500">★</span>
                ))}
              </div>
              <p className="text-6xl text-emerald-200 mb-4 group-hover:text-emerald-300 transition-colors">"</p>
              <p className="text-gray-700 mb-6 leading-relaxed italic">Extracurricular activities and Sports are also given equal importance as Curriculum. Both indoor and outdoor sports are given importance and the support from our management for sports is incredible.</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-emerald-800">🌱 Dhanashreya</p>
                <p className="text-sm text-gray-500">1st year BHMS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner - Medical Theme */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-5 text-7xl">⚕️</div>
          <div className="absolute bottom-5 right-5 text-7xl">🌿</div>
          <div className="absolute top-1/2 left-1/3 text-6xl">🍃</div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-amber-400">15+</div>
              <p className="text-sm text-emerald-200 mt-2">⚕️ Years of Excellence</p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-amber-400">100%</div>
              <p className="text-sm text-emerald-200 mt-2">🌿 Placement Support</p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-amber-400">50+</div>
              <p className="text-sm text-emerald-200 mt-2">🍃 Expert Faculty</p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-amber-400">24/7</div>
              <p className="text-sm text-emerald-200 mt-2">⚕️ Hospital Services</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Professional Homoeopathic */}
      <div className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-3">⚕️ Start Your Healing Journey Today! 🌿</h2>
          <p className="text-lg mb-5 text-emerald-600 font-semibold">Admissions Open 2025-26 | Limited seats for BHMS & Allied Health Sciences</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-3 rounded-full font-bold hover:from-emerald-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
              📞 Call Now: +91 9663363444
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
              📱 +91 9739912926
            </button>
          </div>
          
          <p className="text-gray-600 mb-3">📍 Shetty Education Hub, Shahbad Road, Kalaburagi, Karnataka - 585105</p>
          
          <div className="mt-5 pt-5 border-t border-gray-100 text-xs text-gray-500 space-y-1">
            <p>✅ Approved by NCH, Ministry of Ayush, Govt. of India | Affiliated to RGUHS, Bengaluru</p>
            <p>✅ Unit of Shetty Group of Institutions — Homoeopathy, Ayurveda, Pharmacy, Nursing, Engineering, Paramedical</p>
            <p className="text-emerald-600 font-semibold mt-2">⚕️ Healing with Nature, Excellence in Education ⚕️</p>
          </div>
        </div>
      </div>
    </main>
  );
}