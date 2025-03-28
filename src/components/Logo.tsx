import React, { useRef, useState } from "react";

interface LogoProps {
  videoPath?: string;
  logoImagePath?: string;
}

const Logo: React.FC<LogoProps> = ({
  videoPath = "/logo-video.mp4",
  logoImagePath = "/logo-image.png",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoError = () => {
    console.error("Video kon niet worden geladen.");
    setVideoError(true);
  };

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        {!videoError ? (
          <video
            ref={videoRef}
            className="w-full h-auto"
            playsInline
            muted
            preload="auto"
            onError={handleVideoError}
            onLoadedData={() => {
              console.log("Video data loaded");
              setIsVideoLoaded(true);
            }}
            style={{ minHeight: "120px" }}
          >
            <source src={videoPath} type="video/mp4" />
            Your browser doesn't support the video element.
          </video>
        ) : (
          <div
            className="relative w-full h-auto"
            style={{ minHeight: "120px" }}
          >
            <div className="logo-container w-full max-w-3xl mx-auto relative">
              <div className="absolute top-0 left-0 w-full h-full flex justify-start">
                <div className="w-[15%] ml-[2%]">
                  <img
                    src={logoImagePath}
                    alt="INNOVISUAL Symbols"
                    className="w-full h-auto object-contain logo-symbol-animation"
                  />
                </div>
              </div>
              <div className="w-full">
                <img
                  src={logoImagePath}
                  alt="INNOVISUAL"
                  className="w-full h-auto object-contain logo-text-animation"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Logo;
