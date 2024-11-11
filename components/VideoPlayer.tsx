// components/VideoPlayer.tsx
import React from "react";

type VideoPlayerProps = {
  src: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  controls = true,
  autoplay = false,
  loop = false,
  muted = true, // Autoplay works better with muted video
}) => (
  <div className="video-container w-full">
    <video
      src={src}
      autoPlay={autoplay}
      controls={controls}
      loop={loop}
      muted={muted}
      playsInline
      className="w-full h-auto object-cover"
    />
  </div>
);

export default VideoPlayer;