import Image from "next/image";
import Link from "next/link";
import { SquareIcon } from "../icons/Icons"; // Import the SquareIcon component

const VideoStreaming: React.FC = () => {
  return (
    <section className="w-full padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
          <li className="flex items-center">
            {/* Square Icon */}
            <SquareIcon className="w-4 h-4 flex-shrink-0 mr-4 text-dozer-yellow" />
            <span className="text-base text-gray-700">
              Resolve disputes, gather data for estimating, monitor productivity, and more
            </span>
          </li>
          <li className="flex items-center">
            {/* Square Icon */}
            <SquareIcon className="w-4 h-4 flex-shrink-0 mr-4 text-dozer-yellow" />
            <span className="text-base text-gray-700">
              Sentry mode runs security around your equipment during off-hours
            </span>
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
        <div
          className="relative z-0"
          style={{
            maxWidth: "330px", // Maximum width for larger screens
            width: "50%", // Shrinks to 50% of the screen width on smaller screens
            aspectRatio: "330 / 500", // Maintain aspect ratio
          }}
        >
          <Image
            src="/cabin.png"
            alt="Video Streaming Background"
            layout="intrinsic"
            width={330}
            height={500}
            className="shadow-md object-cover rounded"
          />
        </div>
        {/* Overlapping Forward Image */}
        <div
          className="absolute left-1 top-12 z-10"
          style={{
            maxWidth: "500px", // Maximum width for larger screens
            width: "60%", // Shrinks to 60% of the screen width on smaller screens
            aspectRatio: "653 / 326", // Maintain aspect ratio
          }}
        >
          <Image
            src="/ai_sees_everything.png"
            alt="Video Streaming Overlap"
            layout="intrinsic"
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