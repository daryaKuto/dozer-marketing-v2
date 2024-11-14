import Image from "next/image";

const HeroHome = (): JSX.Element => {
  return (
    <section className="w-full">
      {/* Full-Width Image Section with Dark Overlay */}
      <div className="relative w-full h-[800px]">
        <Image src="/IMG_1869.png" alt="Background Image" fill className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-4 sm:px-8 lg:px-16 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dozer-yellow mb-4 leading-tight">
            Monitor your 
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dozer-yellow mb-4 leading-tight">equipment from anywhere</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dozer-yellow mb-4 leading-tight">anywhere</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mb-6">
            One system to make your equipment fleet safer, more secure, and easier to manage. Prevent accidents with real-time alerts. Track site progress and risk from your dashboard.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <section className="max-container padding-container py-10 pb-32 md:gap-28 lg:py-20">
        <div className="text-left mb-10">
          <h2 className="text-3xl font-bold font-section-title">Key Features</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Increase operator awareness',
              description: 'Depth-sensing cameras alert operators to people, vehicles, and objects around equipment in real time.',
            },
            {
              title: 'Make your fleet safer with data',
              description: 'Alert videos are sent to safety managers, supervisors, and leadership. Dozer highlights risk trends across equipment and job sites in your dashboard.',
            },
            {
              title: 'Secure your jobsite',
              description: 'Dozer is your night watchdog recording tagged events and turning on flood lights to deter trespassers.',
            },
            {
              title: 'Watch progress live or save for later',
              description: 'Stream live video to see current job progress across sites. Recall past video for safety training, incident documentation, dispute resolution, or rework analysis.',
            },
            {
              title: 'Modular and scalable',
              description: 'Installed on any piece of equipment in under an hour. Field serviceable with easy to replace parts.',
            },
            {
              title: 'Ruggedized hardware',
              description: 'Mil-spec rated enclosures that can withstand heat, cold, dust, mud, or rain for years.',
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 border border-gray-300 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-section-title font-semibold mb-2">{feature.title}</h3>
                <p className="text-base text-gray-700">{feature.description}</p>
              </div>
              <div className="mt-4 flex justify-end">
                <span className="text-dozer-yellow text-xl font-bold">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HeroHome;