import React from 'react';
import Image from 'next/image';
import DashboardsSec1 from '@/components/dashboards sections/DashboardsSec1';
import DashboardsSec2 from '@/components/dashboards sections/DashboardsSec2';
import DashboardsSec3 from '@/components/dashboards sections/DashboardsSec3';

const DashboardsPage = (): JSX.Element => {
  return (
    <div className='w-full'>
      <section className='w-full'>
        {/* Full-Width Image Section with Dark Overlay */}
        <div
          className='relative w-full min-h-5/6'
          style={{ minHeight: '36rem' }}
        >
          {/* Replace the image if needed */}
          <Image
            src='/IMG_1869.png'
            alt='Background Image'
            fill
            className='object-cover w-full'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>

          {/* Text Overlay */}
          <div className='absolute inset-0 flex flex-col justify-center items-start text-left px-6 sm:px-12 lg:px-20 z-10'>
            <div className='w-full max-w-4xl'>
              <h1
                className='text-dozer-yellow leading-tight break-words'
                style={{
                  fontFamily: 'Gotham',
                  fontWeight: 400,
                  fontSize: 'clamp(2rem, 4vw, 6rem)'
                }}
              >
                Apps for desktop, tablets, and mobile
              </h1>
              <p
                className='text-white mt-4 max-w-2xl break-words'
                style={{
                  fontFamily: 'Gotham',
                  fontWeight: 400,
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  lineHeight: 'clamp(1.3rem, 4vw, 2rem)'
                }}
              >
                {/* <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-full md:max-w-2xl'> */}
                Powerful dashboards combine vehicle GPS, video, and safety data
                to give a full picture of how your fleet is performing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections go here */}
      <DashboardsSec1 />
      <DashboardsSec2 />
      <DashboardsSec3 />
    </div>
  );
};

export default DashboardsPage;
