"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const slides = [
    { url: "/state%20of%20art.jpg", title: "Modern Medical Infrastructure", subtitle: "State-of-the-art Campus" },
    { url: "/shettyhomoeopathic%20hospital.jpeg", title: "Homoeopathic Treatment Center", subtitle: "Advanced Healing Facilities" },
    { url: "/shetty%20homoeopathic%20hospital.jpeg", title: "Green Healing Campus", subtitle: "Therapeutic Natural Environment" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // ✅ UPDATED: All student photos use .png extension
  const testimonials = [
    {
      name: "Mahesh Kumar",
      emoji: "⚕️",
      image: "/mahesh-kumar.png",
      year: "3rd year BHMS",
      rating: 5,
      text: "I have started to explore myself after joining here in many ways as I have newly found that I have leadership qualities to manage any task given to me. I have gained more confidence to express myself without hesitation than before."
    },
    {
      name: "Gurusiddamma",
      emoji: "🌿",
      image: "/gurusiddamma.png",
      year: "3rd year BHMS",
      rating: 5,
      text: "I'm glad that I chose Shetty Homoeopathic Medical College as my college of choice as I stay at the girls hostel on the campus it's very good with all the facilities and secure."
    },
    {
      name: "Nagesh",
      emoji: "🍃",
      image: "/nagesh.png",
      year: "1st year BHMS",
      rating: 5,
      text: "Good environment to learn with excellent teaching faculty as their care and attention to each and every student is same. Regular tests and exams are conducted as it helps me finding better me everyday."
    },
    {
      name: "Dhanashreya",
      emoji: "🌱",
      image: "/dhanashreya.png",
      year: "1st year BHMS",
      rating: 5,
      text: "Extracurricular activities and Sports are also given equal importance as Curriculum. Both indoor and outdoor sports are given importance and the support from our management for sports is incredible."
    }
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-900 -z-10"></div>
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
              sizes="100vw"
              onError={(e) => ((e.target as HTMLElement).style.display = 'none')}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2.5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className={`block transition-all duration-300 rounded-full ${
                index === currentSlide ? "bg-emerald-400 w-8 h-2.5" : "bg-white/40 hover:bg-white/70 w-2.5 h-2.5"
              }`} />
            </button>
          ))}
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
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6 pt-4 border-t border-emerald-400/30 text-center">
            {[
              { value: "17+", label: "Acres", desc: "🌿 Green Campus" },
              { value: "6+", label: "Disciplines", desc: "⚕️ Allied Sciences" },
              { value: "1000+", label: "Students", desc: "👨‍⚕️ Future Healers" }
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="bg-black/30 backdrop-blur-sm p-1.5 sm:p-2 md:p-3 rounded-lg border border-emerald-400/20 group-hover:border-emerald-400/50 transition">
                  <div className="text-base sm:text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-white">{stat.label}</div>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-300">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-5 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-800 mb-3">⚕️ About the Trust ⚕️</h2>
            <p className="text-emerald-600 text-sm sm:text-base md:text-lg font-medium">Empowering young minds since 2011</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            <div className="space-y-5">
              {[
                { icon: "🏛️ ⚕️", text: "Shetty Group of Institutions is a part of Shetty Sangappa Memorial Trust established in 2011 to empower young budding brains with technical and entrepreneurial knowledge and skills, assisting them in holistic growth." },
                { icon: "📍 🌿", text: "Located just on the other side of the Highway (NH 150) on Shahbad road, Kalaburagi, the college nestles amidst sprawling 17 acres of greenery with a hilly backdrop." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-emerald-100 group">
                  <div className="text-2xl md:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              {[
                { icon: "🌿 🍃", text: "The campus breathes fresh air of nature with vast greenery, free from pollution. The ambience is ideal for learning, research, living and exploration." },
                { icon: "✨ ⚕️", text: "This education major has set a hallmark standard in professional education - redefining its own standards consistently.", highlight: true }
              ].map((item, idx) => (
                <div key={idx} className={`p-4 md:p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 ${item.highlight ? "bg-gradient-to-r from-emerald-50 to-white border-l-4 border-emerald-500 hover:shadow-lg" : "bg-white/80 backdrop-blur-sm border border-emerald-100 hover:shadow-lg"}`}>
                  <div className="text-2xl md:text-3xl mb-3 inline-block">{item.icon}</div>
                  <p className={`leading-relaxed text-sm md:text-base ${item.highlight ? "font-semibold text-emerald-800" : "text-gray-700"}`}>{item.text}</p>
                </div>
              ))}
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
                      onError={(e) => ((e.target as HTMLElement).style.display = 'none')}
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

      {/* Testimonials – circular with actual student photos (.png) */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-5 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-800 mb-3">⚕️ Student Testimonials 🌿</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">Real experiences from our BHMS students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="group bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-3 sm:ring-4 ring-white shadow-lg flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const parent = (e.target as HTMLElement).parentElement;
                        if (parent) {
                          parent.innerHTML = testimonial.emoji;
                          parent.classList.add('flex', 'items-center', 'justify-center', 'text-xl', 'sm:text-2xl', 'bg-gradient-to-br', 'from-emerald-500', 'to-teal-600', 'text-white');
                        }
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">{testimonial.name}</p>
                    <div className="flex gap-0.5 sm:gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-emerald-500 text-xs sm:text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base italic mb-3 sm:mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-emerald-100">
                  <span className="text-[10px] sm:text-xs text-gray-500">{testimonial.year}</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
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
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-spin-slow { animation: spin-slow 40s linear infinite; }
        .animate-spin-slower { animation: spin-slower 60s linear infinite; }
        @keyframes pulse { 0%,100% { opacity:0.1; } 50% { opacity:0.2; } }
        .animate-pulse { animation: pulse 3s ease-in-out infinite; }
        @keyframes bounce { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }
        .animate-bounce { animation: bounce 4s ease-in-out infinite; }
      `}</style>
    </main>
  );
}