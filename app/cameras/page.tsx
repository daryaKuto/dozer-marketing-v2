import React from "react";
import Image from "next/image";
import CameraSec1 from "@/components/camera sections/CameraSec1";
import CameraSec2 from "@/components/camera sections/CameraSec2";

const CameraPage = (): JSX.Element => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full m-0 overflow-hidden">
        <div
          className="relative w-full"
          style={{
            aspectRatio: "16/9", // Maintain aspect ratio
            minHeight: "600px", // Prevent shrinking below 600px
          }}
        >
          {/* Hero Image */}
          <Image
            src="/IMG_1869.png"
            alt="Background Image"
            layout="fill"
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Text Overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 sm:px-12 lg:px-20 z-10"
          >
            <div className="w-full max-w-4xl">
              <h1
                className="text-dozer-yellow leading-tight break-words"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 6rem)", // Dynamically scales
                }}
              >
                Durable cameras with wide
              </h1>
              <h1
                className="text-dozer-yellow leading-tight break-words"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 6rem)", // Dynamically scales
                }}
              >
                fields of view, proximity
              </h1>
              <h1
                className="text-dozer-yellow leading-tight break-words"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 6rem)", // Dynamically scales
                }}
              >
                measurement and 360
              </h1>
              <h1
                className="text-dozer-yellow leading-tight break-words"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 6rem)", // Dynamically scales
                }}
              >
                degrees of vision
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <CameraSec1 />
      <CameraSec2 />
    </div>
  );
};

export default CameraPage;