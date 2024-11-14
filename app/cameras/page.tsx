import React from 'react';
import Image from "next/image";
import CameraSec1 from '@/components/CameraSec1';
import CameraSec2 from '@/components/CameraSec2';

const CameraPage = (): JSX.Element => {
  return (
    <div className="w-full">
      <section className="w-full">
        {/* Full-Width Image Section with Dark Overlay */}
        <div className="relative w-full h-[800px]">
          {/* Replace the image if needed */}
          <Image src="/IMG_1869.png" alt="Background Image" fill className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-4 sm:px-8 lg:px-16 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dozer-yellow mb-4 leading-tight">
              Durable cameras with wide
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dozer-yellow mb-4 leading-tight">
            fields of view, proximity
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dozer-yellow mb-4 leading-tight">
            measurement and 360
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dozer-yellow mb-4 leading-tight">
            degrees of vision
            </h1>
          </div>
        </div>
      </section>

      {/* Additional sections for CameraPage */}
      {/* Sections go here */}
      <CameraSec1 />
      <CameraSec2 />
    </div>
  );
};

export default CameraPage;