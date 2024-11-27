import Image from "next/image";
import Link from "next/link";
import { SquareIcon } from "../icons/Icons"; // Import the SquareIcon component

const Dashboard: React.FC = () => {
  return (
    <section className="w-full padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      {/* Image Block */}
      <div
        className="relative w-full"
        style={{
          maxWidth: "600px", // Limit the maximum width for large screens
          aspectRatio: "16 / 9", // Maintain the aspect ratio
          margin: "0 auto", // Center the image horizontally
        }}
      >
        <Image
          src="/carousel-1.png" // Placeholder image
          alt="Dashboard Interface"
          layout="responsive"
          width={16} // Relative to the aspect ratio (16:9)
          height={9}
          className="shadow-md object-cover rounded"
        />
      </div>

      {/* Text Content */}
      <div>
        <h2 className="text-3xl font-bold font-section-title mb-6">
          Watch from anywhere, act immediately
        </h2>
        <div className="border-b-4 border-dozer-yellow w-16 mb-6"></div>

        {/* Flex Container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section - Orange Text */}
          <div className="text-dozer-yellow font-bold text-base md:w-1/2">
            Track and manage all of your assets in the field with a dashboard that lets you know what equipment is operating and where.
          </div>

          {/* Right Section - Bullet Points */}
          <div className="md:w-1/2">
            <div className="flex items-start mb-2">
              <span className="text-dozer-yellow font-bold text-lg mr-2">01</span>
              <span className="text-lg font-bold text-gray-800">Job-site Dashboard</span>
            </div>

            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <SquareIcon className="w-4 h-4 flex-shrink-0 mr-4 text-dozer-yellow" />
                <span>Equipment View</span>
              </li>
              <li className="flex items-center">
                <SquareIcon className="w-4 h-4 flex-shrink-0 mr-4 text-dozer-yellow" />
                <span>Activity History</span>
              </li>
              <li className="flex items-center">
                <SquareIcon className="w-4 h-4 flex-shrink-0 mr-4 text-dozer-yellow" />
                <span>Incident Management</span>
              </li>
              <li className="flex items-center">
                <SquareIcon className="w-4 h-4 flex-shrink-0 mr-4 text-dozer-yellow" />
                <span>Safety Alerting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/dashboards" className="text-dozer-yellow font-bold">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;