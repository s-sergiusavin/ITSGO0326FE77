import { useEffect, useRef, useState } from "react";
import Lightbox from "../../components/Lightbox";
import styles from "./ReelsPage.module.scss";
import reel1Sd from "../../assets/reels/reel1-waterfall-sd.mp4";
import reel1Hd from "../../assets/reels/reel1-waterfall-hd.mp4";
import reel2Sd from "../../assets/reels/reel2-baguette-sd.mp4";
import reel2Hd from "../../assets/reels/reel2-baguette-hd.mp4";
import reel3Sd from "../../assets/reels/reel3-shell-sd.mp4";
import reel3Hd from "../../assets/reels/reel3-shell-hd.mp4";
import reel4Sd from "../../assets/reels/reel4-fruits-sd.mp4";
import reel4Hd from "../../assets/reels/reel4-fruits-hd.mp4";
import reel5Sd from "../../assets/reels/reel5-fabric-sd.mp4";
import reel5Hd from "../../assets/reels/reel5-fabric-hd.mp4";
import reel6Sd from "../../assets/reels/reel6-denim-sd.mp4";
import reel6Hd from "../../assets/reels/reel6-denim-hd.mp4";
import reel7Sd from "../../assets/reels/reel7-coffee-sd.mp4";
import reel7Hd from "../../assets/reels/reel7-coffee-hd.mp4";
import reel8Sd from "../../assets/reels/reel8-mountain-sd.mp4";
import reel8Hd from "../../assets/reels/reel8-mountain-hd.mp4";
import reel9Sd from "../../assets/reels/reel9-beach-sd.mp4";
import reel9Hd from "../../assets/reels/reel9-beach-hd.mp4";
import reel10Sd from "../../assets/reels/reel10-smoothie-sd.mp4";
import reel10Hd from "../../assets/reels/reel10-smoothie-hd.mp4";

const reels = [
  { id: 1, video: reel1Sd, videoHd: reel1Hd, title: "Cascadă", subtitle: "Natură" },
  { id: 2, video: reel2Sd, videoHd: reel2Hd, title: "Baghetă", subtitle: "Gătit" },
  { id: 3, video: reel3Sd, videoHd: reel3Hd, title: "Scoică", subtitle: "Aesthetic" },
  { id: 4, video: reel4Sd, videoHd: reel4Hd, title: "Fructe & legume", subtitle: "Prospețime" },
  { id: 5, video: reel5Sd, videoHd: reel5Hd, title: "Textură material", subtitle: "Aesthetic" },
  { id: 6, video: reel6Sd, videoHd: reel6Hd, title: "Blugi", subtitle: "Modă" },
  { id: 7, video: reel7Sd, videoHd: reel7Hd, title: "Cafea de dimineață", subtitle: "Gătit" },
  { id: 8, video: reel8Sd, videoHd: reel8Hd, title: "Apus la munte", subtitle: "Călătorii" },
  { id: 9, video: reel9Sd, videoHd: reel9Hd, title: "Plimbare pe plajă", subtitle: "Vacanță" },
  { id: 10, video: reel10Sd, videoHd: reel10Hd, title: "Smoothie proaspăt", subtitle: "Sănătate" }
];

const ReelCard = ({ reel, onOpen }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.reelCard} onClick={onOpen}>
      <video
        ref={videoRef}
        className={styles.reelVideo}
        src={reel.video}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className={styles.reelInfo}>
        <h3>{reel.title}</h3>
        <p>{reel.subtitle}</p>
      </div>
    </div>
  );
};

const ReelsPage = () => {
  const [previewReel, setPreviewReel] = useState(null);

  return (
    <div className={styles.reelsPage}>
      <h1>Reels</h1>
      <p>Videoclipuri scurte.</p>
      <div className={styles.placeholderGrid}>
        {reels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} onOpen={() => setPreviewReel(reel.videoHd)} />
        ))}
      </div>

      <Lightbox src={previewReel} type="video" onClose={() => setPreviewReel(null)} />
    </div>
  );
};

export default ReelsPage;
