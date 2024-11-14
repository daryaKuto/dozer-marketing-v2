import React from 'react';
import Image from "next/image";
import DemoForm from '@/components/DemoForm';


const DemoPage = (): JSX.Element => {
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
            <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dozer-yellow mb-4 leading-tight">
            See us in action
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-full md:max-w-2xl uppercase">
            Fill out the form below to schedule your in-person demo!</p>
          </div>
        </div>
      </section>

      {/* Additional sections for CameraPage */}
      {/* Sections go here */}
      <DemoForm />

    </div>
  );
};

export default DemoPage;