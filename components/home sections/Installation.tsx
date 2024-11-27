import Image from "next/image";
import { SquareIcon } from "../icons/Icons"; // Import the SquareIcon component

const Installation: React.FC = () => {
  return (
    <section className="w-full padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-3xl font-bold font-section-title mb-6">
          Simple to install, easy to maintain
        </h2>
        <div className="border-b-4 border-dozer-yellow w-16 mb-6"></div>
        <p className="text-base text-gray-700 mb-6">
          Just 3 wires - ignition, power, and ground.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <SquareIcon className="w-4 h-4 flex-shrink-0 mr-4 text-dozer-yellow" />
            <span className="text-base text-gray-700">
              Mil-spec - shock-proof, splash-proof, and impact-resistant.
            </span>
          </li>
          <li className="flex items-center">
            <SquareIcon className="w-4 h-4 flex-shrink-0 mr-4 text-dozer-yellow" />
            <span className="text-base text-gray-700">
              Field swappable parts to keep you up and running no matter where
              you are.
            </span>
          </li>
        </ul>
      </div>

      {/* Image Block */}
      <div
        className="relative"
        style={{
          maxWidth: "400px", // Ensure a responsive max width for larger screens
          width: "100%", // Dynamically adjusts to screen size
          aspectRatio: "300 / 200", // Maintain aspect ratio
          margin: "0 auto", // Center the image horizontally
        }}
      >
        <Image
          src="/install.png"
          alt="Installation Image"
          layout="responsive"
          width={300}
          height={200}
          className="shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default Installation;