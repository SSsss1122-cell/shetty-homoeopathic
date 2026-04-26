// app/principal/page.tsx
export default function PrincipalPage() {
  return (
    <main className="bg-[#f4f7f2] min-h-screen px-5 py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-xl border border-[#d0e0cc] overflow-hidden">
        {/* Header */}
        <div className="bg-[#1a4d2c] text-white px-6 py-5 flex items-center gap-3">
          <i className="fas fa-user-md text-[#e6b422] text-2xl"></i>
          <h2 className="text-xl font-semibold">Superintendent / Principal</h2>
        </div>

        {/* Main */}
        <div className="flex flex-wrap gap-8 px-6 py-6">
          {/* Image Section */}
          <div className="flex-[0_0_280px] text-center">
            <div className="w-full aspect-[1/1.2] bg-gradient-to-br from-[#e9f0e6] to-[#d4e2cf] rounded-2xl border-4 border-white shadow-md flex flex-col items-center justify-center text-[#2b5e3b] mb-4">
              <i className="fas fa-user-circle text-6xl opacity-50 mb-2"></i>
              <p className="font-medium bg-white/70 px-4 py-1 rounded-full text-sm">
                📸 Dr. Priya Prakash Dhulange
              </p>
              <span className="text-xs mt-2 opacity-70">
                (Principal Photograph)
              </span>
            </div>

            <div className="text-sm text-[#1a4d2c] font-semibold">
              <i className="fas fa-id-badge"></i> Registration No: A-7117
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 min-w-[300px]">
            {/* Name */}
            <div className="mb-5">
              <h1 className="text-3xl font-bold text-[#153d25]">
                Dr. Priya Prakash Dhulange
              </h1>
              <div className="mt-2 inline-block bg-[#eaf2e6] text-[#1a4d2c] px-5 py-1 rounded-full font-semibold">
                Principal & Medical Superintendent
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 mt-6 max-sm:grid-cols-1">
              <InfoItem icon="fa-graduation-cap" label="Qualification" value="BHMS (Jan 1999) | MD (Nov 2011)" />
              <InfoItem icon="fa-calendar-alt" label="Date of Birth" value="10 June 1976" />
              <InfoItem icon="fa-id-card" label="Registration Number" value="A-7117" />
              <InfoItem icon="fa-map-pin" label="Address" value="Dr. Dulange Priya, Tengli Brothers, 10-975 Mahalaxmi Nagar, Brahmpur, Gulbarga - 585103" />
            </div>

            {/* Experience */}
            <div className="mt-6 bg-[#f6faf4] p-5 rounded-xl">
              <h3 className="font-bold text-[#1a4d2c] mb-4 flex items-center gap-2">
                <i className="fas fa-briefcase"></i> Professional Experience
              </h3>
              <TimelineItem period="1 Jul 2004 – 23 Mar 2011" role="Lecturer" />
              <TimelineItem period="24 Mar 2011 – 18 Oct 2020" role="Associate Professor" />
              <TimelineItem period="2 Aug 2023 – 1 Feb 2026" role="Professor and HOD" />
              <TimelineItem period="2 Feb 2026 – Present" role="Principal & Medical Superintendent" />
            </div>

            {/* Contact Section - Fixed visibility */}
            <div className="mt-6 bg-[#eaf2e6] p-4 rounded-xl">
              <h3 className="font-bold text-[#1a4d2c] mb-3 flex items-center gap-2">
                <i className="fas fa-address-card"></i> Contact Information
              </h3>
              <div className="flex flex-wrap gap-4">
                <ContactChip icon="fa-phone-alt" text="+91 94235 26688" />
                <ContactChip icon="fa-phone-alt" text="+91 98659 80275" />
                <ContactChip icon="fa-envelope" text="dulangepriya@gmail.com" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t px-6 py-6 flex flex-wrap items-center gap-4">
          <a
            href="/"
            className="border border-[#1a4d2c] text-[#1a4d2c] px-6 py-2 rounded-full font-semibold hover:bg-[#1a4d2c] hover:text-white transition"
          >
            ← Back to College Website
          </a>
          <span className="text-sm text-[#4b6b4b]">Updated: February 2026</span>
        </div>
      </div>

      {/* Bottom accreditation note */}
      <div className="mt-6 text-center text-sm text-[#4b6b4b]">
        Shetty Homoeopathic Medical College & Hospital • Approved by NCH, Ministry of AYUSH
      </div>
    </main>
  );
}

// Helper Components
function InfoItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex gap-3 items-start">
      <i className={`fas ${icon} text-[#1a4d2c] text-lg mt-0.5`}></i>
      <div>
        <div className="text-xs text-[#5a7a5a] uppercase tracking-wide">{label}</div>
        <div className="font-medium text-gray-800 break-words">{value}</div>
      </div>
    </div>
  );
}

function TimelineItem({ period, role }: { period: string; role: string }) {
  return (
    <div className="mb-3 pb-3 border-b border-[#d4e2cf] last:border-0 last:pb-0">
      <div className="text-sm font-mono text-[#2b5e3b]">{period}</div>
      <div className="font-medium text-gray-800">{role}</div>
    </div>
  );
}

function ContactChip({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[#c8dbc2]">
      <i className={`fas ${icon} text-[#1a4d2c] text-sm`}></i>
      <span className="text-gray-800 font-medium">{text}</span>
    </div>
  );
}