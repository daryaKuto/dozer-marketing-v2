"use client";

import Image from "next/image";

const IntelligenceSec2 = () => {
  return (
    <section className="max-container padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16 items-center">
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-section-title mb-4">
          Proximity measurements with centimeter accuracy
        </h2>
        <div className="border-b-4 border-dozer-yellow w-12 sm:w-16 mb-4"></div>
        <p className="text-sm sm:text-base md:text-md text-gray-700 mb-6">
          Using point-cloud measurements, Dozer’s cameras assess proximity to objects in real-time, acting as a virtual spotter to increase operator awareness.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="w-3 sm:w-4 h-3 sm:h-4 bg-dozer-yellow mr-2 sm:mr-4"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Assess distance to nearby objects with precise measurements
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-3 sm:w-4 h-3 sm:h-4 bg-dozer-yellow mr-2 sm:mr-4"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Provide real-time alerts to operators based on proximity
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-3 sm:w-4 h-3 sm:h-4 bg-dozer-yellow mr-2 sm:mr-4"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Visualize surroundings through enhanced point-cloud data
            </p>
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-auto flex justify-center lg:justify-end">
        <Image
          src="/pointcloud_trimmed.gif" // Use the correct image path
          alt="Proximity measurements with centimeter accuracy"
          unoptimized
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default IntelligenceSec2;