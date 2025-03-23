import React, { useRef, useEffect, useState } from 'react';

const VideoOnView = ({ src, width = "100%", height = "auto", style }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.0, // play when at least 50% visible; adjust as needed
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {}); // ignore autoplay issues
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <video
    className={style}
      ref={videoRef}
      src={src}
      width={width}
      height={height}
      loop
      muted
      playsInline
      controls={false}
      style={{ display: 'block' }}
    />
  );
};

export default VideoOnView