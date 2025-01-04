// components/VideoPlayer.tsx
import React from 'react';

type VideoPlayerProps = {
  src: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  controls = false,
  autoplay = false,
  loop = true,
  muted = true // Autoplay works better with muted video
}) => (
  <div className='video-container w-full sm:w-auto min-h-5/6'>
    <video
      src={src}
      autoPlay={autoplay}
      controls={controls}
      loop={loop}
      muted={muted}
      playsInline
      className='w-full h-auto object-cover'
      style={{ height: '36rem' }}
    />
  </div>
);

export default VideoPlayer;
