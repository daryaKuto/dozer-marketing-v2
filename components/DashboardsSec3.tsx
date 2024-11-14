"use client";

import Image from "next/image";

const DashboardsSec3 = () => {
  return (
    <section className="max-container padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 px-4 sm:px-8 lg:px-16 items-center">
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-section-title mb-4">
          Uncover risk trends and use data to inform safety
        </h2>
        <div className="border-b-4 border-dozer-yellow w-12 sm:w-16 mb-4"></div>
        <p className="text-sm sm:text-base md:text-md text-gray-700 mb-6">
          Use Dozer intelligence to highlight risk and search videos for specific types of events.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="w-3 sm:w-4 h-3 sm:h-4 bg-dozer-yellow mr-2 sm:mr-4"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              View risk trends by jobsite, vehicle, or team to pinpoint where your operation is riskiest.
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-3 sm:w-4 h-3 sm:h-4 bg-dozer-yellow mr-2 sm:mr-4"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Use search terms to find specific events, objects, or vehicles in past videos.
            </p>
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-auto flex justify-center lg:justify-end">
        <Image
          src="/carousel-4.png"
          alt="Uncover risk trends and use data to inform safety"
          layout="responsive"
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default DashboardsSec3;