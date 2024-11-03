import Image from 'next/image';
import Link from 'next/link';

const VideoStreaming: React.FC = () => {
  return (
    <section className="max-container padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-3xl font-bold font-section-title mb-6">
          Be present on any vehicle, anywhere, anytime.
        </h2>
        <div className="border-b-4 border-dozer-yellow w-16 mb-6"></div>
        <p className="text-base text-gray-700 mb-4">
          Live 360-degree vision with historical recorded video up to several years in the past.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="w-4 h-4 bg-dozer-yellow mr-4"></span>
            <p className="text-base text-gray-700">
              Resolve disputes, gather data for estimating, monitor productivity, and more
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-4 h-4 bg-dozer-yellow mr-4"></span>
            <p className="text-base text-gray-700">
              Sentry mode runs security around your equipment during off-hours
            </p>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/cameras" className="text-dozer-yellow font-bold">
            Learn More
          </Link>
        </div>
      </div>

      {/* Image Block */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <Image
          src="/IMG_1869.png"
          alt="Video Streaming Background"
          layout="fill"
          className=" shadow-md object-cover"
        />
        {/* Overlapping Image */}
        <div className="absolute top-10 left-10 w-[250px] h-[180px] lg:w-[300px] lg:h-[200px]">
          <Image
            src="/IMG_1869.png"
            alt="Video Streaming Overlap"
            layout="fill"
            className=" shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoStreaming;