"use client";

import Image from "next/image";

const DashboardsSec2 = () => {
  return (
    <section className="max-container padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 px-4 sm:px-8 lg:px-16 items-center">
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-section-title mb-4">
          Comprehensive fleet management tools
        </h2>
        <div className="border-b-4 border-dozer-yellow w-12 sm:w-16 mb-4"></div>
        <p className="text-sm sm:text-base md:text-md text-gray-700 mb-6">
          Get a birds-eye view of your fleet to profile equipment utilization, availability, and location.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="inline-flex w-4 h-4 bg-dozer-yellow mr-4 flex-shrink-0"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Receive email digests per jobsite to easily stay on top of event highlights and equipment hours.
            </p>
          </li>
          <li className="flex items-start">
            <span className="inline-flex w-4 h-4 bg-dozer-yellow mr-4 flex-shrink-0"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Set up teams within your organization to compare productivity and risk - pinpoint where to focus your training efforts and resource allocation.
            </p>
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-auto flex justify-center lg:justify-end">
        <Image
          src="/carousel-3.png"
          alt="Comprehensive fleet management tools"
          layout="responsive"
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default DashboardsSec2;