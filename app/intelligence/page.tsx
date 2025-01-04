// app/intelligence/page.tsx
import Image from 'next/image';
import VideoPlayer from '@/components/VideoPlayer';
import IntelligenceSec1 from '@/components/intelligence sections/IntelligenceSec1';
import IntelligenceSec2 from '@/components/intelligence sections/IntelligenceSec2';
import IntelligenceSec3 from '@/components/intelligence sections/IntelligenceSec3';
import IntelligenceSec4 from '@/components/intelligence sections/IntelligenceSec4';

const IntelligencePage = () => {
  const videoUrl =
    'https://dozer-video-samples.s3.us-east-2.amazonaws.com/Smith+Denison+-+Kobelco+Test+(Camera+1)-nK1nZUkxWEs.mp4';

  return (
    <div className='w-full'>
      {/* Video Player Section */}
      <section className='relative w-auto min-h-5/6 sm:w-full'>
        <VideoPlayer
          src={videoUrl}
          controls={false}
          autoplay={true} // Enables autoplay
          loop={true}
          muted={true} // Required for autoplay on most browsers
        />
        <div className='absolute inset-0 flex bg-black bg-opacity-60 flex-col justify-center items-start text-left px-6 sm:px-12 lg:px-20 z-10 pointer-events-none'>
          <div className='w-full max-w-4xl'>
            <h1
              className='text-dozer-yellow leading-tight break-words'
              style={{
                fontFamily: 'Gotham',
                fontWeight: 400,
                fontSize: 'clamp(2rem, 4vw, 6rem)'
              }}
            >
              Enhance safety and gather insights with AI&#8209;powered cameras
            </h1>

            <p
              className='text-white mt-4 max-w-2xl break-words'
              style={{
                fontFamily: 'Gotham',
                fontWeight: 400,
                fontSize: 'clamp(1rem, 4vw, 1.3rem)',
                lineHeight: 'clamp(1.3rem, 4vw, 2rem)'
              }}
            >
              Experience unparalleled situational awareness
            </p>
          </div>
        </div>
      </section>

      {/* Important objects in a chaotic environment section */}
      <IntelligenceSec1 />
      <IntelligenceSec2 />
      <IntelligenceSec3 />
      <IntelligenceSec4 />
    </div>
  );
};

export default IntelligencePage;
