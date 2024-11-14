"use client";

import Image from "next/image";

const CameraSec2 = () => {
  return (
    <section className="max-container padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 px-4 sm:px-8 lg:px-16 items-center">
      {/* Text Content */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-section-title mb-4">
          Proximity measurements with centimeter accuracy
        </h2>
        <div className="border-b-4 border-dozer-yellow w-12 sm:w-16 mb-4"></div>
        <p className="text-sm sm:text-base md:text-md text-gray-700 mb-6">
          Using point-cloud measurements, Dozer’s cameras assess proximity to objects in real-time, acting as a virtual spotter to increase operator awareness.
        </p>
      </div>

      {/* Right Image with GIF */}
      <div className="relative w-full h-auto flex justify-center lg:justify-end">
        <Image
          src="/pointcloud_trimmed.gif" 
          alt="Proximity measurement and point-cloud visualization"
          width={653} 
          height={326} 
          className="shadow-md object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default CameraSec2;