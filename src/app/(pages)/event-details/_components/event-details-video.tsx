"use client"
import Image from "next/image";
import event_details_img from "@/assets/img/event/event/event-details-img.jpg";
import youtube_img from "@/assets/img/event/event/youtube.png";
import { useVideoModal } from "@/provider/VideoProvider";

export default function EventDetailsVideo() {
  const { playVideo } = useVideoModal();
  return (
    <div className="tp-event-details-teaser-video mt-30 p-relative">
      <Image
        src={event_details_img}
        alt="event-details-img"
        style={{ height: "auto" }}
      />
      <div className="tp-event-details-teaser-video-popup">
        <button onClick={() => playVideo("go7QYaQR494")} className="popup-video pointer">
          <Image
            src={youtube_img}
            alt="youtube-img"
            style={{ height: "auto" }}
          />
        </button>
      </div>
    </div>
  );
}
