"use client";

import Image from "next/image";

const DashboardsSec1 = () => {
  return (
    <section className="max-container padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 px-4 sm:px-8 lg:px-16 items-center">
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-section-title mb-4">
          Vehicle alerts and video history
        </h2>
        <div className="border-b-4 border-dozer-yellow w-12 sm:w-16 mb-4"></div>
        <p className="text-sm sm:text-base md:text-md text-gray-700 mb-6">
          Get the full picture of any asset in your fleet with combined safety alerts, video, and GPS data.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="inline-flex w-4 h-4 bg-dozer-yellow mr-4 flex-shrink-0"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Dive into live video or recall equipment history with a few clicks.
            </p>
          </li>
          <li className="flex items-start">
            <span className="inline-flex w-4 h-4 bg-dozer-yellow mr-4 flex-shrink-0"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Get or mute notifications of near-misses and incidents. You can also set custom alerts for your jobsite and equipment usage.
            </p>
          </li>
          <li className="flex items-start">
            <span className="inline-flex w-4 h-4 bg-dozer-yellow mr-4 flex-shrink-0"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              View event history with recorded video to train operators, resolve disputes, and possess objective documentation for conducted work.
            </p>
          </li>
          <li className="flex items-start">
            <span className="inline-flex w-4 h-4 bg-dozer-yellow mr-4 flex-shrink-0"></span>
            <p className="text-sm sm:text-base md:text-md text-gray-700">
              Alert video is tagged for quick location and review.
            </p>
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-auto flex justify-center lg:justify-end">
        <Image
          src="/carousel-2.png"
          alt="Vehicle alerts and video history"
          layout="responsive"
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default DashboardsSec1;