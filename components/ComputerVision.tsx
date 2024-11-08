import Image from 'next/image';
import Link from 'next/link';

const ComputerVision: React.FC = () => {
  return (
    <section className="max-container padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Image Block */}
      <div className="relative w-full h-[600px]">
        {/* Main Large Image */}
        <Image
          src="/IMG_1869.png"
          alt="Main Machine Image"
          layout="fill"
          className=" shadow-md object-cover"
        />

        {/* Alert Box (Top Right) */}
        <div className="absolute top-10 right-10 w-[300px] p-4 bg-white shadow-lg ">
          {/* Alert Content */}
          <div className="flex items-center space-x-4">
            {/* Alert Icon */}
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-dozer-yellow">
              <span className="text-white text-xl font-bold">!</span>
            </div>
            {/* Alert Text */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">Human Proximity</h3>
              <p className="text-sm text-gray-600">2016 CAT 308</p>
            </div>
          </div>
          {/* Location Info */}
          <div className="mt-4 flex items-center">
            <div className="w-6 h-6 bg-purple-500 text-white flex items-center justify-center mr-2">
              M
            </div>
            <p className="text-sm text-gray-800">
              Mountain House <span className="text-gray-500">TRACY, CA</span>
            </p>
          </div>
        </div>

        {/* Small Image (Bottom Center) */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-8 w-[300px] h-[200px]">
          <Image
            src="/IMG_1869.png"
            alt="Small Detection Image"
            layout="fill"
            className="shadow-md object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div>
        <h2 className="text-3xl font-bold font-section-title mb-6">
          Cutting-edge computer vision that watches your back, sides, and front
        </h2>
        <div className="border-b-4 border-dozer-yellow w-16 mb-6"></div>
        <p className="text-base text-gray-700 mb-4">
          Cameras monitor vehicle blindspots and give real-time alerts to operators.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="w-4 h-4 bg-dozer-yellow mr-4"></span>
            <p className="text-base text-gray-700">
              Measures proximity to people, vehicles, and objects
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-4 h-4 bg-dozer-yellow mr-4"></span>
            <p className="text-base text-gray-700">
              Alerts are recorded and notifications are sent to managers
            </p>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/intelligence" className="text-dozer-yellow font-bold">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComputerVision;