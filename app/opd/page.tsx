// app/opd/page.tsx
"use client";

import { ArrowLeft, FileText, ExternalLink, Clock, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function OPDPage() {
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

        {/* Hero Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <span className="text-xs md:text-sm font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
              Shetty Homoeopathy Hospital
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            🏥 OPD Information
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto my-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Outpatient Department – Comprehensive homoeopathic care under one roof.
          </p>
        </div>

        {/* OPD Quick Info Card - enhances UX without altering core logic */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-emerald-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500">OPD Hours</p>
              <p className="font-semibold text-gray-800">Mon–Sat: 9:00 AM – 5:00 PM</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-emerald-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Appointment</p>
              <a href="tel:+919663363444" className="font-semibold text-gray-800 hover:text-emerald-600 transition">+91 9663363444</a>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-emerald-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email Query</p>
              <a href="mailto:info@shettyhomoeopathy.edu.in" className="font-semibold text-gray-800 hover:text-emerald-600 transition">info@shettyhomoeopathy.edu.in</a>
            </div>
          </div>
        </div>

        {/* PDF Viewer Card - enhanced styling, responsive height */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-5 py-3 border-b border-emerald-100 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-emerald-700">
              <FileText size={18} />
              <span className="font-medium">OPD Schedule & Guidelines</span>
            </div>
            <a
              href="https://drive.google.com/file/d/1RUYZzpX-naOvZyIM9Ine-69xu23wmHs2/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm bg-white text-emerald-600 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all hover:text-emerald-700 border border-emerald-200"
            >
              <ExternalLink size={14} />
              Open in new tab
            </a>
          </div>
          <div className="p-1">
            <iframe
              src="https://drive.google.com/file/d/1RUYZzpX-naOvZyIM9Ine-69xu23wmHs2/preview"
              className="w-full h-[500px] md:h-[750px] rounded-lg"
              allow="autoplay"
              title="OPD Information PDF"
            />
          </div>
        </div>

        {/* Additional information - original button replaced with styled version and extra helpful text */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm mb-3">⚠️ If the PDF doesn't load, use the button below to view directly in your browser.</p>
          <a
            href="https://drive.google.com/file/d/1RUYZzpX-naOvZyIM9Ine-69xu23wmHs2/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 py-2.5 rounded-full font-medium hover:from-emerald-700 hover:to-teal-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <ExternalLink size={18} />
            Open PDF in New Tab
          </a>
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-200 pt-6">
          <p>© 2025 Shetty Homoeopathy Medical College & Hospital. All rights reserved.</p>
          <p className="mt-1">📍 Shetty Education Hub, Shahbad Road, Kalaburagi, Karnataka - 585105</p>
        </div>
      </div>
    </main>
  );
}