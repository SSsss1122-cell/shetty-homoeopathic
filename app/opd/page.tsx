export default function OPDPage() {
  return (
    <main className="bg-white min-h-screen px-4 md:px-10 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        OPD Information
      </h1>

      {/* PDF Viewer */}
      <div className="w-full max-w-6xl mx-auto">
        <iframe
          src="https://drive.google.com/file/d/1RUYZzpX-naOvZyIM9Ine-69xu23wmHs2/preview"
          className="w-full h-[750px] rounded-xl shadow-lg border"
          allow="autoplay"
        />
      </div>

      {/* Optional Button */}
      <div className="text-center mt-6">
        <a
          href="https://drive.google.com/file/d/1RUYZzpX-naOvZyIM9Ine-69xu23wmHs2/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Open PDF in New Tab
        </a>
      </div>
    </main>
  );
}