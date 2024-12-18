// app/intelligence/page.tsx
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import IntelligenceSec1 from "@/components/intelligence sections/IntelligenceSec1";
import IntelligenceSec2 from "@/components/intelligence sections/IntelligenceSec2";
import IntelligenceSec3 from "@/components/intelligence sections/IntelligenceSec3";
import IntelligenceSec4 from "@/components/intelligence sections/IntelligenceSec4";

const IntelligencePage = () => {
  const videoUrl =
    "https://dozer-video-samples.s3.us-east-2.amazonaws.com/Smith+Denison+-+Kobelco+Test+(Camera+1)-nK1nZUkxWEs.mp4";

  return (
    <div className="w-full">
      {/* Video Player Section */}
      <section className="relative w-full">
        <VideoPlayer
          src={videoUrl}
          controls={true}
          autoplay={true} // Enables autoplay
          loop={true}
          muted={true} // Required for autoplay on most browsers
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start text-left px-4 sm:px-8 pointer-events-none"
          style={{
            overflow: "hidden", // Prevents extra spacing
            paddingTop: "150px", // Permanent padding for spacing
            paddingBottom: "80px", // Permanent padding for spacing
          }}
        >
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dozer-yellow mb-2 sm:mb-4
          "
            style={{
              fontFamily: "Gotham",
              fontWeight: 500,
              fontSize: "clamp(2rem, 4vw, 6rem)", // Dynamically scales
            }}
          >
            Enhance safety and gather
          </h1>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dozer-yellow mb-2 sm:mb-4"
            style={{
              fontFamily: "Gotham",
              fontWeight: 500,
              fontSize: "clamp(2rem, 4vw, 6rem)", // Dynamically scales
            }}
          >
            insights with AI-powered cameras
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-full md:max-w-2xl ">
            Experience unparalleled situational awareness. Collect valuable
            video data for safety, productivity, and security enhancement.
          </p>
        </div>
      </section>

      {/* Important objects in a chaotic environment section */}
      <IntelligenceSec1 />
      <IntelligenceSec2 />
      <IntelligenceSec3 />
      <IntelligenceSec4 />
    </div>
  );
};

export default IntelligencePage;
