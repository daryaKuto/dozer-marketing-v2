"use client";

import Image from "next/image";

const CameraSec2 = () => {
  return (
    <section className="w-full padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-3xl font-bold font-section-title mb-6">
          Proximity measurements with centimeter accuracy
        </h2>
        <div className="border-b-4 border-dozer-yellow w-16 mb-6"></div>
        <p className="text-base text-gray-700 mb-4">
          Using point-cloud measurements, Dozer’s cameras assess proximity to objects in real-time, acting as a virtual spotter to increase operator awareness.
        </p>
      </div>

      {/* Image Content */}
      <div className="relative w-full flex justify-center items-center">
        {/* Main Image */}
        <div
          className="relative z-10"
          style={{
            maxWidth: "653px", // Matches the original dimensions
            width: "100%", // Full width for smaller screens
            aspectRatio: "653 / 326", // Maintain aspect ratio for consistency
          }}
        >
          <Image
            src="/pointcloud_trimmed.gif" // Replace with the correct image path
            alt="Proximity measurement and point-cloud visualization"
            layout="intrinsic"
            width={653}
            height={326}
            className="shadow-md object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CameraSec2;