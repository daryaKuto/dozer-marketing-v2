// components/IntelligenceSec4.tsx
"use client";

import Image from 'next/image';

const IntelligenceSec4: React.FC = () => {
  return (
    <section className="max-container padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-3xl font-bold font-section-title mb-6">
          Computer vision in the field
        </h2>
        <div className="border-b-4 border-dozer-yellow w-16 mb-6"></div>
        <p className="text-base text-gray-700 mb-4">
          All of the benefits of fleet management augmented with video and computer vision.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="w-4 h-4 bg-dozer-yellow mr-4"></span>
            <p className="text-base text-gray-700">
              Deploy Dozer tags on other vehicles and barriers to highlight them to the system
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-4 h-4 bg-dozer-yellow mr-4"></span>
            <p className="text-base text-gray-700">
              Mark overhead lines and utilities on the map to warn operators in-cabin
            </p>
          </li>
        </ul>
      </div>

      {/* Image Block */}
      <div className="relative w-full flex justify-left items-center">
        {/* Main Large Image with specified dimensions */}
        <Image
          src="/cabin.png"
          alt="Main Machine Image"
          width={330}
          height={500}
          className="shadow-md object-cover z-10"
        />

        {/* Alert Box (Top Right of Main Image) */}
        <div className="absolute top-10 right-10 w-[300px] p-4 bg-white shadow-lg z-20">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-dozer-yellow">
              <span className="text-white text-xl font-bold">!</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Overhead Electrical Lines</h3>
              <p className="text-sm text-gray-600">2016 CAT 308</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="w-6 h-6 bg-purple-500 text-white flex items-center justify-center mr-2">
              M
            </div>
            <p className="text-sm text-gray-800">
              Mountain House <span className="text-gray-500">TRACY, CA</span>
            </p>
          </div>
        </div>

        {/* Smaller Image Overlay (Bottom Center, Layered Behind) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 w-[570px] h-[327px] z-30">
          <Image
            src="/carousel-1.png"
            alt="Job Site Map"
            layout="fill"
            className="shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSec4;