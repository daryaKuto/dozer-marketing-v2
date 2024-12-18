import Image from "next/image";
import Link from "next/link";
import { SquareIcon } from "../icons/Icons"; // Import the SquareIcon component

const ComputerVision: React.FC = () => {
  return (
    <section className="w-full padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      {/* Image Block */}
      <div className="relative w-full flex justify-left items-center">
        {/* Main Large Image */}
        <div
          className="relative z-10"
          style={{
            maxWidth: "330px", // Maximum width for larger screens
            width: "50%", // Shrinks to 50% of the screen width on smaller screens
            aspectRatio: "330 / 500", // Maintain aspect ratio
          }}
        >
          <Image
            src="/cabin.png"
            alt="Main Machine Image"
            layout="intrinsic"
            width={330}
            height={500}
            className="shadow-md object-cover rounded"
          />
        </div>

        {/* Alert Box (Top Right) */}
        <div
          className="absolute top-10 right-10 bg-white shadow-lg z-20"
          style={{
            maxWidth: "300px", // Max width of the box
            width: "80%", // Shrinks dynamically for smaller screens
            padding: "1rem", // Consistent padding
          }}
        >
          <div className="flex items-center space-x-4">
            {/* Yellow Border Circle with Yellow Exclamation */}
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-dozer-yellow rounded-full">
              <span className="text-dozer-yellow text-xl font-bold">!</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Overhead Electrical Lines
              </h3>
              <p className="text-sm text-gray-600">2016 CAT 308</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {/* Square "M" */}
            <div className="w-6 h-6 bg-purple-500 text-white flex items-center justify-center mr-2">
              M
            </div>
            <p className="text-sm text-gray-800">
              Mountain House <span className="text-gray-500">TRACY, CA</span>
            </p>
          </div>
        </div>

        {/* Night Video Image */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 z-30"
          style={{
            maxWidth: "570px", // Maximum width for larger screens
            width: "75%", // Shrinks to 75% of the screen width on smaller screens
            aspectRatio: "570 / 327", // Maintain aspect ratio
          }}
        >
          <Image
            src="/NightVideoORGif.png"
            alt="Job Site Map"
            layout="intrinsic"
            width={570}
            height={327}
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
          Cameras monitor vehicle blindspots and give real-time alerts to
          operators.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            {/* Square Icon */}
            <SquareIcon className="w-4 h-4 flex-shrink-0 mr-4 text-dozer-yellow" />
            <span className="text-base text-gray-700">
              Measures proximity to people, vehicles, and objects
            </span>
          </li>
          <li className="flex items-center">
            {/* Square Icon */}
            <SquareIcon className="w-4 h-4 flex-shrink-0 mr-4 text-dozer-yellow" />
            <span className="text-base text-gray-700">
              Alerts are recorded and notifications are sent to managers
            </span>
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