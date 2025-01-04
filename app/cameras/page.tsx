import React from 'react';
import Image from 'next/image';
import CameraSec1 from '@/components/camera sections/CameraSec1';
import CameraSec2 from '@/components/camera sections/CameraSec2';

const CameraPage = (): JSX.Element => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className='w-auto m-0 overflow-hidden min-h-5/6 sm:w-full'>
        <div
          className='relative w-full min-h-5/6'
          style={{
            minHeight: '36rem'
          }}
        >
          {/* Hero Image */}
          <Image
            src='/IMG_1869.png'
            alt='Background Image'
            layout='fill'
            className='object-cover'
            priority
          />
          {/* Overlay */}
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
                High performance cameras
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
                Proximity detection and 360-degree wide angle field of view
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <CameraSec1 />
      <CameraSec2 />
    </div>
  );
};

export default CameraPage;
