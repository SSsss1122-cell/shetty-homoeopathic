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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-green-100">
            Committed to Excellence in Homoeopathic Education & Healthcare
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Chairman Section */}
        <div id="chairman" className="max-w-5xl mx-auto mb-16 scroll-mt-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Chairman Photo */}
              <div className="md:w-2/5 bg-gradient-to-br from-green-100 to-emerald-50 p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-green-600 shadow-xl">
                    <Image
                      src="/chairman.png"
                      alt="Chairman Shri. Shetty Sangappa"
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">
                    Founder Chairman
                  </div>
                </div>
              </div>
              
              {/* Chairman Info */}
              <div className="md:w-3/5 p-8 md:p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Shri. Shetty Sangappa
                </h2>
                <p className="text-green-600 font-semibold mb-4">
                  Founder Chairman
                </p>
                <div className="w-20 h-1 bg-green-600 mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With an unwavering commitment to promoting homoeopathy as a holistic healing science, 
                  Shri. Shetty Sangappa established the Shetty Homoeopathy Medical College & Hospital 
                  with a vision to provide quality education and affordable healthcare to the community.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Under his visionary leadership, the institution has grown into a center of excellence, 
                  producing skilled homoeopathic practitioners who serve society with dedication and compassion.
                </p>
                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700 italic">
                    "To heal with nature's wisdom and educate with purpose - that is our sacred duty to society."
                  </p>
                  <p className="text-green-600 font-semibold mt-2">- Shri. Shetty Sangappa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div id="vision-mission" className="max-w-5xl mx-auto mb-16 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <div className="w-16 h-1 bg-green-600 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                To be a premier institution in homoeopathic education and healthcare, 
                fostering excellence in learning, research, and patient care while 
                preserving the fundamental principles of homoeopathy.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <div className="w-16 h-1 bg-green-600 mb-4"></div>
              <ul className="text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
                <li>Provide quality homoeopathic education with modern teaching methods</li>
                <li>Offer affordable and effective homoeopathic healthcare services</li>
                <li>Promote research and innovation in homoeopathy</li>
                <li>Develop compassionate healthcare professionals for society</li>
              </ul>
            </div>
          </div>
        </div>

        {/* About Institute Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              About Shetty Homoeopathy Medical College
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
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

            {/* Key Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">20+</div>
                <p className="text-sm text-gray-500">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <p className="text-sm text-gray-500">Students</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <p className="text-sm text-gray-500">Faculty Members</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100+</div>
                <p className="text-sm text-gray-500">Beds in Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}