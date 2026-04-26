"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"videos" | "photos">("videos");
  const [lightbox, setLightbox] = useState({
    open: false,
    img: "",
    title: "",
    desc: "",
  });

  // 🎥 Videos
  const sportsVideos = [
    "https://youtu.be/V9WGjdjrmL4",
    "https://youtu.be/qHfD2-pvw2s",
    "https://youtu.be/nVAkIH8rkgE",
  ];

  const culturalVideos = [
    "https://youtu.be/elwnuuOVQSA",
    "https://youtu.be/EX5NtDExtp4",
  ];

  // 📸 Photos (your renamed images)
  const culturalPhotos = [
    { url: "/img1.jpeg", title: "Event Photo 1", description: "College Event" },
    { url: "/img2.jpeg", title: "Event Photo 2", description: "Student Activity" },
    { url: "/img3.jpeg", title: "Event Photo 3", description: "Campus Moments" },
    { url: "/img4.jpeg", title: "Event Photo 4", description: "Group Activity" },
    { url: "/img5.jpeg", title: "Event Photo 5", description: "Celebration" },
    { url: "/img6.jpeg", title: "Event Photo 6", description: "Performance" },
    { url: "/img7.jpeg", title: "Event Photo 7", description: "Event Highlights" },
    { url: "/img8.jpeg", title: "Event Photo 8", description: "Memories" },
  ];

  // 🔧 Extract YouTube ID
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen">

      {/* HEADER */}
      <div className="bg-green-900 text-white text-center py-14 px-4">
        <h1 className="text-3xl font-bold mb-2">
          🎥 Sports & Cultural Gallery
        </h1>
        <p>Memories from events, sports & cultural activities</p>
      </div>

      {/* TABS */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="flex gap-4 border-b pb-2 justify-center">
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-2 rounded font-semibold ${
              activeTab === "videos"
                ? "bg-yellow-200 text-green-900"
                : "text-gray-600"
            }`}
          >
            🎥 Videos
          </button>

          <button
            onClick={() => setActiveTab("photos")}
            className={`px-6 py-2 rounded font-semibold ${
              activeTab === "photos"
                ? "bg-yellow-200 text-green-900"
                : "text-gray-600"
            }`}
          >
            🖼 Photos
          </button>
        </div>
      </div>

      {/* VIDEOS */}
      {activeTab === "videos" && (
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6 text-green-900">
            🏆 Sports Videos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {sportsVideos.map((url, i) => {
              const id = getYouTubeId(url);
              return (
                <iframe
                  key={i}
                  className="w-full h-64 rounded-xl shadow"
                  src={`https://www.youtube.com/embed/${id}`}
                  allowFullScreen
                />
              );
            })}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-green-900">
            🎭 Cultural Videos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {culturalVideos.map((url, i) => {
              const id = getYouTubeId(url);
              return (
                <iframe
                  key={i}
                  className="w-full h-64 rounded-xl shadow"
                  src={`https://www.youtube.com/embed/${id}`}
                  allowFullScreen
                />
              );
            })}
          </div>
        </div>
      )}

      {/* PHOTOS */}
      {activeTab === "photos" && (
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6 text-green-900">
            🎭 Cultural Photos
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {culturalPhotos.map((photo, i) => (
              <div
                key={i}
                className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition"
                onClick={() =>
                  setLightbox({
                    open: true,
                    img: photo.url,
                    title: photo.title,
                    desc: photo.description,
                  })
                }
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="rounded-t-xl w-full h-56 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-green-900">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setLightbox({ ...lightbox, open: false })}
        >
          <div className="text-center">
            <img
              src={lightbox.img}
              className="max-w-[90%] max-h-[80%] rounded-lg mx-auto"
              alt=""
            />
            <p className="text-white mt-4 font-semibold">
              {lightbox.title}
            </p>
            <p className="text-gray-300 text-sm">
              {lightbox.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}