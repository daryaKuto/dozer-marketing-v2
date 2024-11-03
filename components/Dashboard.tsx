import Image from 'next/image';
import Link from 'next/link';

const Dashboard: React.FC = () => {
  return (
    <section className="max-container padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Image Block */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/IMG_1869.png" // Placeholder image
          alt="Dashboard Interface"
          layout="fill"
          className="shadow-md object-cover"
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
              <li className="flex items-start">
                <span className="w-2 h-2 bg-dozer-yellow mr-4 mt-1"></span>
                Equipment View
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-dozer-yellow mr-4 mt-1"></span>
                Activity History
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-dozer-yellow mr-4 mt-1"></span>
                Incident Management
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-dozer-yellow mr-4 mt-1"></span>
                Safety Alerting
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