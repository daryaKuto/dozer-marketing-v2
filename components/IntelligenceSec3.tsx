"use client";

import React, { useState } from "react";
import Image from "next/image";

const IntelligenceSec3 = () => {
  const images = ["/carousel-1.png", "/carousel-2.png", "/carousel-3.png", "/carousel-4.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleHover = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="max-container padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16 items-center">
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-section-title mb-4">
          360-degree video + GPS
        </h2>
        <div className="border-b-4 border-dozer-yellow w-12 sm:w-16 mb-4"></div>
        <p className="text-sm sm:text-base md:text-md text-gray-700 mb-6">
          Vehicle GPS paired with 360-degree vision gives an unprecedented level of insight into how and where work was conducted.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="w-3 sm:w-4 h-3 sm:h-4 bg-dozer-yellow mr-2 sm:mr-4"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Isolate video by map areas to pinpoint work
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-3 sm:w-4 h-3 sm:h-4 bg-dozer-yellow mr-2 sm:mr-4"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Resolve disputes, monitor productivity, and more
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-3 sm:w-4 h-3 sm:h-4 bg-dozer-yellow mr-2 sm:mr-4"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Easily recover near-misses and incidents for documentation or training
            </p>
          </li>
        </ul>
      </div>

      {/* Image Section with Hover and Click to Change Source */}
      <div
        className="relative w-full h-auto flex justify-center lg:justify-end"
        onMouseEnter={handleHover}
        onClick={handleClick}
      >
        <Image
          src={images[currentImageIndex]}
          alt="Dashboards shuffle"
          width={500}
          height={300}
         className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default IntelligenceSec3;