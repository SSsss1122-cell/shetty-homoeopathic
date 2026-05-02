// app/principal/page.tsx
"use client";

import { ArrowLeft, User, GraduationCap, Calendar, IdCard, MapPin, Briefcase, Phone, Mail, Award, Clock } from "lucide-react";

export default function PrincipalPage() {
  return (
    <main className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button - consistent with other pages */}
        <button
          onClick={() => window.history.back()}
          className="group flex items-center gap-2 bg-gradient-to-r from-emerald-700 to-teal-800 text-white px-5 py-2.5 rounded-full mb-6 hover:from-emerald-800 hover:to-teal-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-x-1"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span>Back</span>
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-800 px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <User className="text-emerald-200" size={20} />
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-white">Superintendent / Principal</h2>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-8">
            {/* Image Section - Enhanced placeholder with better visual */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="relative">
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl border-4 border-white shadow-xl flex flex-col items-center justify-center text-emerald-700 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-5 left-5 text-6xl">👨‍⚕️</div>
                    <div className="absolute bottom-5 right-5 text-6xl">🌿</div>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 shadow-inner">
                      <User size={48} className="text-emerald-600" />
                    </div>
                    <p className="font-semibold text-emerald-800 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm inline-block">
                      Dr. Priya Prakash Dhulange
                    </p>
                    <p className="text-xs text-emerald-600 mt-2 opacity-75">Principal's Photograph</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-full text-sm text-emerald-700">
                  <IdCard size={14} />
                  <span>Registration No: A-7117</span>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex-1">
              {/* Name and Title */}
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                  Dr. Priya Prakash Dhulange
                </h1>
                <div className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-1.5 rounded-full font-semibold text-sm md:text-base">
                  <Award size={16} />
                  <span>Principal & Medical Superintendent</span>
                </div>
              </div>

              {/* Info Grid - Mobile: 1 column, Desktop: 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                <InfoItem icon={GraduationCap} label="Qualification" value="BHMS (Jan 1999) | MD (Nov 2011)" />
                <InfoItem icon={Calendar} label="Date of Birth" value="10 June 1976" />
                <InfoItem icon={IdCard} label="Registration Number" value="A-7117" />
                <InfoItem icon={MapPin} label="Address" value="Dr. Dulange Priya, Tengli Brothers, 10-975 Mahalaxmi Nagar, Brahmpur, Gulbarga - 585103" />
              </div>

              {/* Experience Section */}
              <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-xl">
                <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
                  <Briefcase size={18} />
                  <span>Professional Experience</span>
                </h3>
                <div className="space-y-3">
                  <TimelineItem period="1 Jul 2004 – 23 Mar 2011" role="Lecturer" />
                  <TimelineItem period="24 Mar 2011 – 18 Oct 2020" role="Associate Professor" />
                  <TimelineItem period="2 Aug 2023 – 1 Feb 2026" role="Professor and HOD" />
                  <TimelineItem period="2 Feb 2026 – Present" role="Principal & Medical Superintendent" />
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-6 bg-white border border-emerald-100 p-4 rounded-xl shadow-sm">
                <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                  <Phone size={18} />
                  <span>Contact Information</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  <ContactChip icon={Phone} text="+91 94235 26688" />
                  <ContactChip icon={Phone} text="+91 98659 80275" />
                  <ContactChip icon={Mail} text="dulangepriya@gmail.com" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-6 py-4 flex flex-wrap items-center justify-between gap-3 bg-gray-50/50">
            <a
              href="/"
              className="inline-flex items-center gap-2 border border-emerald-600 text-emerald-600 px-5 py-2 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              ← Back to College Website
            </a>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Clock size={14} />
              Updated: February 2026
            </span>
          </div>
        </div>

        {/* Accreditation Note */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Shetty Homoeopathic Medical College & Hospital • Approved by NCH, Ministry of AYUSH
        </div>
      </div>
    </main>
  );
}

// Helper Components (enhanced styling)
function InfoItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex gap-3 items-start group">
      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
        <Icon size={16} className="text-emerald-700" />
      </div>
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
        <div className="font-medium text-gray-800 break-words">{value}</div>
      </div>
    </div>
  );
}

function TimelineItem({ period, role }: { period: string; role: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
      <div className="flex-1 pb-3">
        <div className="text-sm font-mono text-emerald-600">{period}</div>
        <div className="font-medium text-gray-800">{role}</div>
      </div>
    </div>
  );
}

function ContactChip({ icon: Icon, text }: { icon: any; text: string }) {
  const isEmail = text.includes('@');
  const href = isEmail ? `mailto:${text}` : `tel:${text.replace(/\s/g, '')}`;
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-emerald-200 hover:shadow-md hover:border-emerald-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 group"
    >
      <Icon size={14} className="text-emerald-600 group-hover:scale-110 transition-transform" />
      <span className="text-gray-800 font-medium text-sm">{text}</span>
    </a>
  );
}