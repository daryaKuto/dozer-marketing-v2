import Image from 'next/image';

const Installation: React.FC = () => {
  return (
    <section className="max-container padding-container py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
          <li className="flex items-start">
            <span className="w-4 h-4 bg-dozer-yellow mr-4"></span>
            <p className="text-base text-gray-700">
              Mil-spec - shock-proof, splash-proof, and impact-resistant.
            </p>
          </li>
          <li className="flex items-start">
            <span className="w-4 h-4 bg-dozer-yellow mr-4"></span>
            <p className="text-base text-gray-700">
              Field swappable parts to keep you up and running no matter where you are.
            </p>
          </li>
        </ul>
      </div>

      {/* Image Block */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/IMG_1869.png" // Placeholder image
          alt="Installation Image"
          layout="fill"
          className=" shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default Installation;