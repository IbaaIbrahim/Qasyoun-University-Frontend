"use client";
import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface VideoContextType {
  isVideoOpen: boolean;
  videoUrl: string;
  isNative: boolean;
  playVideo: (videoIdOrUrl: string, platform?: "youtube" | "vimeo" | "native") => void;
  closeVideo: () => void;
}

const VideoContext = createContext<VideoContextType>({
  isVideoOpen: false,
  videoUrl: "",
  isNative: false,
  playVideo: () => {},
  closeVideo: () => {}
});

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isNative, setIsNative] = useState(false);

  const playVideo = useCallback((videoIdOrUrl: string, platform?: "youtube" | "vimeo" | "native") => {
    let resolvedPlatform: "youtube" | "vimeo" | "native" = "native";

    if (platform) {
      resolvedPlatform = platform;
    } else {
      if (videoIdOrUrl.includes("vimeo.com") || videoIdOrUrl.includes("player.vimeo.com")) {
        resolvedPlatform = "vimeo";
      } else if (videoIdOrUrl.includes("youtube.com") || videoIdOrUrl.includes("youtu.be")) {
        resolvedPlatform = "youtube";
      }
    }

    if (resolvedPlatform === "youtube") {
      let videoId = videoIdOrUrl;
      const match = videoIdOrUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([^?&\s]+)/);
      if (match && match[1]) {
        videoId = match[1];
      }
      setVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
      setIsNative(false);
    } else if (resolvedPlatform === "vimeo") {
      let videoId = videoIdOrUrl;
      const match = videoIdOrUrl.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([^?&\s]+)/);
      if (match && match[1]) {
        videoId = match[1];
      }
      setVideoUrl(`https://player.vimeo.com/video/${videoId}?autoplay=1`);
      setIsNative(false);
    } else {
      setVideoUrl(videoIdOrUrl);
      setIsNative(true);
    }
    setIsVideoOpen(true);
  }, []);

  const closeVideo = useCallback(() => {
    setIsVideoOpen(false);
    setVideoUrl("");
    setIsNative(false);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  return (
    <VideoContext.Provider value={{ isVideoOpen, videoUrl, isNative, playVideo, closeVideo }}>
      {children}
    
      {isVideoOpen && (
        <div className="video-modal-overlay">
          {/* Click outside to close */}
          <div 
            className="video-modal-backdrop" 
            onClick={handleBackdropClick}
          ></div>
          
          <div className="video-modal-container">
            <button 
              onClick={closeVideo}
              className="video-modal-close"
              aria-label="Close video modal"
            >
              ×
            </button>
            {isNative ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="video-modal-video"
                style={{ width: '100%', height: '100%', maxHeight: '80vh', outline: 'none' }}
              />
            ) : (
              <iframe
                src={videoUrl}
                className="video-modal-iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video player"
              ></iframe>
            )}
          </div>
        </div>
      )}
    </VideoContext.Provider>
  );
};

export const useVideoModal = () => useContext(VideoContext);