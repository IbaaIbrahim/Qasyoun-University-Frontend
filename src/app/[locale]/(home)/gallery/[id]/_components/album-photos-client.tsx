"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Link, useRouter } from "@/i18n/navigation";
import Album from "@/lib/classes/album";
import Photo from "@/lib/classes/photo";

type Props = {
  albums: Album[];
  currentAlbumId: number;
  photos: Photo[];
  locale: string;
  translations: {
    all: string;
    empty: string;
    title: string;
    subtitle: string;
  };
};

export default function AlbumPhotosClient({
  albums,
  currentAlbumId,
  photos,
  locale,
  translations,
}: Props) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const router = useRouter();
  const isRtl = locale === "ar";

  const handlePrev = useCallback(() => {
    setActivePhotoIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? photos.length - 1 : prev - 1;
    });
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setActivePhotoIndex((prev) => {
      if (prev === null) return null;
      return prev === photos.length - 1 ? 0 : prev + 1;
    });
  }, [photos.length]);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        if (isRtl) {
          handlePrev();
        } else {
          handleNext();
        }
      } else if (e.key === "ArrowLeft") {
        if (isRtl) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, isRtl, handlePrev, handleNext]);

  return (
    <div className="album-photos-client-wrapper">
      {/* Category Tabs */}
      <div className="row justify-content-center mb-50">
        <div className="col-12">
          <div className="tp-gallery-tabs d-flex flex-wrap justify-content-center align-items-center gap-3">
            {/* "All" button */}
            <Link
              href="/gallery"
              className="tp-gallery-tab-btn"
              style={{
                padding: "8px 24px",
                borderRadius: "5px",
                fontSize: "15px",
                fontWeight: "600",
                background: "#f1f3f5",
                color: "#333",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer"
              }}
            >
              {translations.all}
            </Link>

            {/* Individual Album tabs */}
            {albums.map((album) => {
              const isActive = Number(album.id) === Number(currentAlbumId);
              return (
                <button
                  key={album.id}
                  onClick={() => router.push(`/gallery/${album.id}`)}
                  className={`tp-gallery-tab-btn ${isActive ? "active" : ""}`}
                  style={{
                    padding: "8px 24px",
                    borderRadius: "5px",
                    fontSize: "15px",
                    fontWeight: "600",
                    background: isActive ? "#42023e" : "#f1f3f5",
                    color: isActive ? "#fff" : "#333",
                    transition: "all 0.3s ease",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  {album.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid of Photos */}
      <div className="container p-0">
        {photos.length > 0 ? (
          <div className="tp-gallery-photo-grid">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="tp-gallery-photo-item overflow-hidden p-relative cursor-pointer"
                onClick={() => setActivePhotoIndex(index)}
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
                  background: "#e9ecef",
                  aspectRatio: "4/3",
                  position: "relative"
                }}
              >
                <Image
                  src={photo.imageUrl}
                  alt={`Photo ${index + 1}`}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
                  }}
                  className="gallery-photo-img"
                  unoptimized
                />
                <div
                  className="gallery-photo-overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(66, 2, 62, 0.4)",
                    opacity: 0,
                    transition: "all 0.4s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <div
                    className="zoom-icon-box"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#fff",
                      color: "#42023e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      transform: "scale(0.8)",
                      transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                    }}
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <div
              className="d-inline-flex align-items-center justify-content-center mb-20"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "rgba(66, 2, 62, 0.08)",
                color: "#42023e"
              }}
            >
              <i className="fa-regular fa-image" style={{ fontSize: "32px" }}></i>
            </div>
            <p style={{ color: "#6c757d", fontSize: "16px" }}>{translations.empty}</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="tp-lightbox-overlay"
          onClick={() => setActivePhotoIndex(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10, 5, 10, 0.92)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.3s ease forwards"
          }}
        >
          {/* Lightbox Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex(null);
            }}
            className="lightbox-close-btn"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "none",
              color: "#fff",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              transition: "background 0.3s ease"
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="lightbox-nav-btn prev"
            style={{
              position: "absolute",
              left: "24px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "none",
              color: "#fff",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              transition: "background 0.3s ease"
            }}
          >
            <i className={`fa-solid ${isRtl ? "fa-chevron-right" : "fa-chevron-left"}`}></i>
          </button>

          {/* Main Image View */}
          <div
            className="lightbox-img-container"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "80vh",
              aspectRatio: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "scaleIn 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) forwards"
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[activePhotoIndex].imageUrl}
              alt="Expanded"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)"
              }}
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="lightbox-nav-btn next"
            style={{
              position: "absolute",
              right: "24px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "none",
              color: "#fff",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              transition: "background 0.3s ease"
            }}
          >
            <i className={`fa-solid ${isRtl ? "fa-chevron-left" : "fa-chevron-right"}`}></i>
          </button>
        </div>
      )}

      {/* Styled styles injection */}
      <style>{`
        .tp-gallery-photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 991px) {
          .tp-gallery-photo-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }

        @media (max-width: 575px) {
          .tp-gallery-photo-grid {
            grid-template-columns: repeat(1, 1fr);
            gap: 15px;
          }
        }

        .tp-gallery-photo-item:hover .gallery-photo-img {
          transform: scale(1.06);
        }

        .tp-gallery-photo-item:hover .gallery-photo-overlay {
          opacity: 1;
        }

        .tp-gallery-photo-item:hover .zoom-icon-box {
          transform: scale(1);
        }

        .tp-gallery-tab-btn:hover {
          background: #42023e !important;
          color: #fff !important;
        }

        .lightbox-close-btn:hover,
        .lightbox-nav-btn:hover {
          background: rgba(255, 255, 255, 0.2) !important;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
