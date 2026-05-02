"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText, Users, Building, GraduationCap, Award, BookOpen, Microscope, Calendar, Trophy, University, BarChart } from "lucide-react";

export default function MandatoryInfo() {
  // Data array to keep code DRY (links and texts unchanged)
  const mandatoryRows = [
    { id: 1, label: "Website ID", type: "link", href: "https://www.shettyhomoeopathy.edu.in", external: true, text: "Click Here 📄", icon: ExternalLink },
    { id: 2, label: "Details of Principal", type: "internal", href: "/principal", text: "👨‍🏫 Click Here", icon: Users },
    { id: 3, label: "Details of Teaching Staffs", type: "link", href: "https://drive.google.com/file/d/1CZxRUVFijVJVtBaAbwUcFb0tHQobqlqt/view?usp=sharing", external: true, text: "Click Here 👩‍🏫", icon: Users },
    { id: 4, label: "Non-Teaching Staff", type: "file", href: "/non-teaching-staff.pdf", text: "Click Here 🧑‍💼", icon: Users },
    { id: 5, label: "Hospital Staff", type: "file", href: "/hospital-staff.pdf", text: "Click Here 🏥", icon: Building },
    { id: 6, label: "Courses Conducted", type: "file", href: "/courses-offered.pdf", text: "Click Here 📚", icon: BookOpen },
    { id: 7, label: "Intake Capacity", type: "file", href: "/intake-capacity.pdf", text: "Click Here 🎓", icon: GraduationCap },
    { id: 8, label: "List of Students Admitted", type: "link", href: "https://drive.google.com/file/d/1jRDYkvHgy_dBOhYZoe22l7cFtB_uj_AX/view?usp=sharing", external: true, text: "Click Here 📝", icon: FileText },
    { id: 9, label: "Research & Publications", type: "multi", items: [
      { href: "/research-projects.pdf", text: "📖 Research", icon: Microscope },
      { href: "/publications.pdf", text: "📄 Publication", icon: FileText }
    ] },
    { id: 10, label: "CME & Conferences", type: "file", href: "/cme-conferences.pdf", text: "Click Here 🎤", icon: Calendar },
    { id: 11, label: "Awards & Achievements", type: "file", href: "/awards-achievements.pdf", text: "Click Here 🏆", icon: Trophy },
    { id: 12, label: "Affiliation University & VC", type: "multi", items: [
      { href: "https://www.rguhs.ac.in", text: "🏛️ University", external: true, icon: University },
      { href: "/vc-details.pdf", text: "👨‍🎓 VC Details", icon: Users }
    ] },
    { id: 13, label: "Result of Last One Year", type: "file", href: "/academic-results.pdf", text: "Click Here 📊", icon: BarChart },
  ];

  // Helper to render action buttons based on row type
  const renderActions = (row: typeof mandatoryRows[0]) => {
    if (row.type === "multi" && row.items) {
      return (
        <div className="flex flex-wrap gap-2 justify-start md:justify-end">
          {row.items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xs md:text-sm font-medium rounded-full hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              {item.text}
            </a>
          ))}
        </div>
      );
    }
    
    const isExternal = row.type === "link" || (row.type === "file" && row.href?.startsWith("http"));
    const Component = row.type === "internal" ? Link : "a";
    const props = Component === Link 
      ? { href: row.href || "#" }
      : { href: row.href || "#", target: isExternal ? "_blank" : undefined, rel: isExternal ? "noopener noreferrer" : undefined };
    
    return (
      <Component
        {...props}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xs md:text-sm font-medium rounded-full hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
      >
        {row.text}
      </Component>
    );
  };

  return (
    <main className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button - Enhanced */}
        <button
          onClick={() => window.history.back()}
          className="group flex items-center gap-2 bg-gradient-to-r from-emerald-700 to-teal-800 text-white px-5 py-2.5 rounded-full mb-8 hover:from-emerald-800 hover:to-teal-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-x-1"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </button>

        {/* Header - Enhanced with decorative elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl opacity-5 pointer-events-none">📋</div>
          <div className="inline-block mb-3">
            <span className="text-xs md:text-sm font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">NCH Mandatory Disclosure</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            📋 Mandatory Information
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto my-4 rounded-full"></div>
          <h2 className="text-lg md:text-xl text-gray-700 font-medium">
            Shetty Homoeopathic Medical College & Hospital, Kalaburagi
          </h2>
          <p className="text-emerald-600 mt-2 text-sm md:text-base">
            As per NCH & Ministry of AYUSH Guidelines
          </p>
        </div>

        {/* Desktop Table View (hidden on mobile, visible md+) */}
        <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white">
                  <th className="p-4 text-left font-semibold">S. No.</th>
                  <th className="p-4 text-left font-semibold">Details</th>
                  <th className="p-4 text-right font-semibold">Link / Document</th>
                </tr>
              </thead>
              <tbody>
                {mandatoryRows.map((row, idx) => (
                  <tr key={row.id} className={`border-b border-gray-100 hover:bg-emerald-50/50 transition-colors duration-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                    <td className="p-4 font-bold text-emerald-700 align-top">{row.id}</td>
                    <td className="p-4 text-gray-700 align-top">{row.label}</td>
                    <td className="p-4 text-right align-top">{renderActions(row)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View (visible only on mobile) */}
        <div className="md:hidden space-y-4">
          {mandatoryRows.map((row) => (
            <div key={row.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-center font-bold text-sm">
                    {row.id}
                  </span>
                  <h3 className="font-semibold text-gray-800 text-base">{row.label}</h3>
                </div>
                <div className="pl-2">
                  {renderActions(row)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note - Enhanced */}
        <div className="text-center mt-10 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-emerald-100">
          <div className="text-emerald-600 text-sm mb-2">📌 As per NCH Mandatory Disclosure Requirements</div>
          <div className="text-gray-700 text-sm font-medium">
            Administrative Office, Shetty Homoeopathic Medical College & Hospital, Kalaburagi - 585105
          </div>
          <div className="text-gray-600 text-sm mt-1">
            📞 <a href="tel:+919663363444" className="hover:text-emerald-600 transition">+91 9663363444</a>
          </div>
        </div>
      </div>
    </main>
  );
}