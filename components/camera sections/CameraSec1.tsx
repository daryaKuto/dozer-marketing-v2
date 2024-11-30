"use client";

import Image from "next/image";

const CameraSec1 = () => {
  return (
    <section className="w-full padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-3xl font-bold font-section-title mb-6">
          Spherical field of view + live streaming
        </h2>
        <div className="border-b-4 border-dozer-yellow w-16 mb-6"></div>
        <p className="text-base text-gray-700 mb-6">
          With 360° of view, our cameras can see the cabin, bucket, and everything around you.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="w-5 h-5 bg-dozer-yellow mr-4 flex-shrink-0"></span>
            <p className="text-base text-gray-700">
              IP-6/7 rated camera housing withstands the harsh elements of any jobsite.
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 bg-dozer-yellow mr-4 flex-shrink-0"></span>
            <p className="text-base text-gray-700">
              View 360° of context around vehicles to survey productivity, dispute rework, or review safety events.
            </p>
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div
        className="relative w-full"
        style={{
          maxWidth: "600px", // Set maximum width for larger screens
          aspectRatio: "16 / 9", // Maintain aspect ratio
          margin: "0 auto", // Center the image horizontally
        }}
      >
        <Image
          src="/ai_sees_everything.png" // Replace with the correct image path
          alt="360-degree camera field of view"
          layout="responsive"
          width={16} // Relative to aspect ratio (16:9)
          height={9}
          className="shadow-md object-cover rounded"
        />
      </div>
    </section>
  );
};

export default CameraSec1;