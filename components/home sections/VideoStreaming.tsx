import Image from "next/image";
import Link from "next/link";

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
      <div className="relative w-full flex items-center justify-center lg:justify-end">
        {/* Background Image */}
        <div className="relative w-[330px] h-[500px] z-0">
          <Image
            src="/cabin.png"
            alt="Video Streaming Background"
            width={330}
            height={500}
            className="shadow-md object-cover rounded"
          />
        </div>
        {/* Overlapping Forward Image */}
        <div className="absolute left-1 top-12 w-[500px] h-[326px] z-10">
          <Image
            src="/ai_sees_everything.png"
            alt="Video Streaming Overlap"
            width={653}
            height={326}
            className="shadow-md object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoStreaming;