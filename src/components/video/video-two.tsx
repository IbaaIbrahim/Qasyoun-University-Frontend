"use client"
import { useVideoModal } from "@/provider/VideoProvider";
import { CircleSvg, PlaySvg } from "../svg";

export default function VideoTwo() {
  const { playVideo } = useVideoModal();
  return (
    <div
      className="tp-video-5-area tp-video-hover tp-video-5-bg"
      style={{ backgroundImage: `url(/assets/img/bg/video-5-bg-1.jpg)` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="tp-video-5-btn tp-video-button">
                <button className="popup-video" onClick={() => playVideo("LlCwHnp3kL4")}>
                  <span className="tp-m-play-inner">
                    <CircleSvg />
                    <PlaySvg />
                  </span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
