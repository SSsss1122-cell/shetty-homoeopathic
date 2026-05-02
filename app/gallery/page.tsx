"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"videos" | "photos">("videos");
  const [lightbox, setLightbox] = useState({
    open: false,
    img: "",
    title: "",
    desc: "",
    index: 0,
  });
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // 🎥 Videos (unchanged)
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

  // 🔧 Extract YouTube ID (unchanged)
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
    return match ? match[1] : null;
  };

  // Navigation helpers for lightbox
  const goToPrevious = () => {
    const newIndex = (currentPhotoIndex - 1 + culturalPhotos.length) % culturalPhotos.length;
    setCurrentPhotoIndex(newIndex);
    const photo = culturalPhotos[newIndex];
    setLightbox({
      open: true,
      img: photo.url,
      title: photo.title,
      desc: photo.description,
      index: newIndex,
    });
  };

  const goToNext = () => {
    const newIndex = (currentPhotoIndex + 1) % culturalPhotos.length;
    setCurrentPhotoIndex(newIndex);
    const photo = culturalPhotos[newIndex];
    setLightbox({
      open: true,
      img: photo.url,
      title: photo.title,
      desc: photo.description,
      index: newIndex,
    });
  };

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    const photo = culturalPhotos[index];
    setLightbox({
      open: true,
      img: photo.url,
      title: photo.title,
      desc: photo.description,
      index: index,
    });
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen overflow-x-hidden">
      {/* Enhanced Header with decorative elements */}
      <div className="relative bg-gradient-to-r from-emerald-800 to-teal-800 text-white text-center py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-5 text-6xl animate-pulse">🎥</div>
          <div className="absolute bottom-5 right-5 text-6xl animate-pulse">📸</div>
          <div className="absolute top-1/2 left-1/4 text-5xl animate-bounce">🎭</div>
        </div>
        <div className="relative z-10">
          <div className="inline-block mb-3 animate-fade-in-up">
            <span className="text-xs md:text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/30">
              Shetty Homoeopathy
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            🎥 Sports & Cultural Gallery
          </h1>
          <div className="w-24 h-0.5 bg-emerald-400 mx-auto my-3 rounded-full"></div>
          <p className="text-base md:text-lg text-emerald-100 max-w-2xl mx-auto">
            Memorable moments from events, sports & cultural activities
          </p>
        </div>
      </div>

      {/* Enhanced Tabs */}
      <div className="max-w-6xl mx-auto px-4 -mt-6 relative z-10">
        <div className="flex gap-3 justify-center bg-white/60 backdrop-blur-sm rounded-2xl p-1.5 shadow-md w-fit mx-auto">
          <button
            onClick={() => setActiveTab("videos")}
            className={`flex items-center gap-2 px-5 md:px-8 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "videos"
                ? "bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md transform scale-105"
                : "text-gray-600 hover:bg-emerald-100 hover:text-emerald-700"
            }`}
          >
            <span className="text-lg">🎥</span>
            <span>Videos</span>
          </button>
          <button
            onClick={() => setActiveTab("photos")}
            className={`flex items-center gap-2 px-5 md:px-8 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "photos"
                ? "bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md transform scale-105"
                : "text-gray-600 hover:bg-emerald-100 hover:text-emerald-700"
            }`}
          >
            <span className="text-lg">🖼️</span>
            <span>Photos</span>
          </button>
        </div>
      </div>

      {/* VIDEOS SECTION - Enhanced layout */}
      {activeTab === "videos" && (
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-3xl">🏆</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Sports Videos</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-300 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsVideos.map((url, i) => {
              const id = getYouTubeId(url);
              return (
                <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${id}`}
                      allowFullScreen
                      title={`Sports video ${i + 1}`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 mt-12 mb-6">
            <div className="text-3xl">🎭</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Cultural Videos</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-300 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {culturalVideos.map((url, i) => {
              const id = getYouTubeId(url);
              return (
                <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${id}`}
                      allowFullScreen
                      title={`Cultural video ${i + 1}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* PHOTOS SECTION - Enhanced with masonry-like grid and better cards */}
      {activeTab === "photos" && (
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-3xl">🎭</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Cultural Moments</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-300 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {culturalPhotos.map((photo, i) => (
              <div
                key={i}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 transform hover:-translate-y-2"
                onClick={() => openLightbox(i)}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3">
                    <span className="text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded-full">
                      View 🔍
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-200">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <span>📸</span> {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Lightbox with navigation and close button */}
      {lightbox.open && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 backdrop-blur-sm transition-all duration-300"
          onClick={() => setLightbox({ ...lightbox, open: false })}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white hover:text-emerald-400 transition-all duration-200 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm"
            onClick={() => setLightbox({ ...lightbox, open: false })}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-emerald-400 transition-all duration-200 bg-black/50 rounded-full p-2 backdrop-blur-sm disabled:opacity-30"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-emerald-400 transition-all duration-200 bg-black/50 rounded-full p-2 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div
            className="text-center max-w-[90vw] max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={lightbox.img}
                className="max-w-[85vw] max-h-[70vh] object-contain rounded-lg shadow-2xl"
                alt={lightbox.title}
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs text-white">
                {lightbox.index + 1} / {culturalPhotos.length}
              </div>
            </div>
            <div className="mt-5 bg-black/40 backdrop-blur-md rounded-xl px-6 py-3 inline-block">
              <p className="text-white font-semibold text-lg">{lightbox.title}</p>
              <p className="text-gray-300 text-sm mt-1">{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}