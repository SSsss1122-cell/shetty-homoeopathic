"use client";

import Link from "next/link";

export default function MandatoryInfo() {
  return (
    <main className="bg-gradient-to-br from-[#f0f7ec] to-[#e2ecd9] min-h-screen py-10 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 bg-[#1a4d2c] text-white px-6 py-2 rounded-full mb-6 hover:bg-[#0e3a21] transition"
        >
          ← Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#1a4d2c] mb-2">
            📋 Mandatory Information
          </h1>
          <h2 className="text-lg text-[#2d6a4f]">
            Shetty Homoeopathic Medical College & Hospital, Kalaburagi
          </h2>
          <p className="text-[#4a6741] mt-2">
            As per NCH & Ministry of AYUSH Guidelines
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1a4d2c] text-white text-left">
                <th className="p-4">S. No.</th>
                <th className="p-4">Details</th>
                <th className="p-4 text-right">Link / Document</th>
              </tr>
            </thead>

            <tbody className="text-[#2c3e2f]">
              
              {/* Row 1 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">1</td>
                <td className="p-4">Website ID</td>
                <td className="p-4 text-right">
                  <a href="https://www.shettyhomoeopathy.edu.in" target="_blank" className="btn">
                    Click Here 📄
                  </a>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">2</td>
                <td className="p-4">Details of Principal</td>
                <td className="p-4 text-right">
                  <Link href="/principal" className="btn">
                    👨‍🏫 Click Here
                  </Link>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">3</td>
                <td className="p-4">Details of Teaching Staffs</td>
                <td className="p-4 text-right">
                  <a href="https://drive.google.com/file/d/1CZxRUVFijVJVtBaAbwUcFb0tHQobqlqt/view?usp=sharing" target="_blank" className="btn">
                    Click Here 👩‍🏫
                  </a>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">4</td>
                <td className="p-4">Non-Teaching Staff</td>
                <td className="p-4 text-right">
                  <a href="/non-teaching-staff.pdf" target="_blank" className="btn">
                    Click Here 🧑‍💼
                  </a>
                </td>
              </tr>

              {/* Row 5 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">5</td>
                <td className="p-4">Hospital Staff</td>
                <td className="p-4 text-right">
                  <a href="/hospital-staff.pdf" target="_blank" className="btn">
                    Click Here 🏥
                  </a>
                </td>
              </tr>

              {/* Row 6 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">6</td>
                <td className="p-4">Courses Conducted</td>
                <td className="p-4 text-right">
                  <a href="/courses-offered.pdf" target="_blank" className="btn">
                    Click Here 📚
                  </a>
                </td>
              </tr>

              {/* Row 7 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">7</td>
                <td className="p-4">Intake Capacity</td>
                <td className="p-4 text-right">
                  <a href="/intake-capacity.pdf" target="_blank" className="btn">
                    Click Here 🎓
                  </a>
                </td>
              </tr>

              {/* Row 8 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">8</td>
                <td className="p-4">List of Students Admitted</td>
                <td className="p-4 text-right">
                  <a href="https://drive.google.com/file/d/1jRDYkvHgy_dBOhYZoe22l7cFtB_uj_AX/view?usp=sharing" target="_blank" className="btn">
                    Click Here 📝
                  </a>
                </td>
              </tr>

              {/* Row 9 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">9</td>
                <td className="p-4">Research & Publications</td>
                <td className="p-4 flex gap-3 justify-end">
                  <a href="/research-projects.pdf" className="btn">📖 Research</a>
                  <a href="/publications.pdf" className="btn">📄 Publication</a>
                </td>
              </tr>

              {/* Row 10 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">10</td>
                <td className="p-4">CME & Conferences</td>
                <td className="p-4 text-right">
                  <a href="/cme-conferences.pdf" className="btn">
                    Click Here 🎤
                  </a>
                </td>
              </tr>

              {/* Row 11 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">11</td>
                <td className="p-4">Awards & Achievements</td>
                <td className="p-4 text-right">
                  <a href="/awards-achievements.pdf" className="btn">
                    Click Here 🏆
                  </a>
                </td>
              </tr>

              {/* Row 12 */}
              <tr className="border-b hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">12</td>
                <td className="p-4">Affiliation University & VC</td>
                <td className="p-4 flex gap-3 justify-end">
                  <a href="https://www.rguhs.ac.in" target="_blank" className="btn">
                    🏛️ University
                  </a>
                  <a href="/vc-details.pdf" className="btn">
                    👨‍🎓 VC Details
                  </a>
                </td>
              </tr>

              {/* Row 13 */}
              <tr className="hover:bg-[#f9fdf7]">
                <td className="p-4 font-bold text-[#1a4d2c]">13</td>
                <td className="p-4">Result of Last One Year</td>
                <td className="p-4 text-right">
                  <a href="/academic-results.pdf" className="btn">
                    Click Here 📊
                  </a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 bg-white p-6 rounded-xl shadow text-sm text-[#4a6741]">
          📌 As per NCH Mandatory Disclosure Requirements <br /><br />
          <strong>
            Administrative Office, Shetty Homoeopathic Medical College & Hospital,
            Kalaburagi - 585105 | Ph: +91 9663363444
          </strong>
        </div>

      </div>

      {/* Button Styling */}
      <style jsx>{`
        .btn {
          background: #1a4d2c;
          color: white;
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 0.85rem;
          transition: 0.2s;
        }
        .btn:hover {
          background: #0e3a21;
        }
      `}</style>
    </main>
  );
}