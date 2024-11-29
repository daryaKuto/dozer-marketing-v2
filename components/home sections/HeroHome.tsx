import Image from "next/image";

const HeroHome = (): JSX.Element => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full m-0 overflow-hidden">
        {/* Wrapper to keep the image and text as a single responsive block */}
        <div
          className="relative w-full"
          style={{
            aspectRatio: "16/9", // Maintain aspect ratio for the section
            minHeight: "600px", // Prevent shrinking below 600px
          }}
        >
          {/* Hero Image */}
          <Image
            src="/IMG_1869.png"
            alt="Background Image"
            layout="fill"
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Text Overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 z-10"
          >
            <div className="w-full max-w-4xl">
              <h1
                className="text-dozer-yellow leading-tight break-words"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 6rem)", // Dynamically scales
                }}
              >
                Monitor your
              </h1>
              <h1
                className="text-dozer-yellow leading-tight break-words"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 6rem)",
                }}
              >
                equipment from
              </h1>
              <h1
                className="text-dozer-yellow leading-tight break-words"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 6rem)",
                }}
              >
                anywhere
              </h1>
              <p
                className="text-white mt-4 max-w-lg break-words"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 400,
                  fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
                  lineHeight: "clamp(1.3rem, 2.5vw, 2rem)",
                }}
              >
                One system to make your equipment fleet safer, more secure, and
                easier to manage. Prevent accidents with real-time alerts. Track
                site progress and risk from your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full overflow-hidden py-10 lg:py-20">
        <div className="w-full px-[6.25%]">
          <div className="text-left mb-10">
            <h2
              className="text-dozer-black mb-6"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 4vw, 3.75rem)", // Dynamically scales
              }}
            >
              Key Features
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y border border-gray-300">
            {[
              {
                title: "Increase operator awareness",
                description:
                  "Depth-sensing cameras alert operators to people, vehicles, and objects around equipment in real time.",
              },
              {
                title: "Make your fleet safer with data",
                description:
                  "Alert videos are sent to safety managers, supervisors, and leadership. Dozer highlights risk trends across equipment and job sites in your dashboard.",
              },
              {
                title: "Secure your jobsite",
                description:
                  "Dozer is your night watchdog recording tagged events and turning on flood lights to deter trespassers.",
              },
              {
                title: "Watch progress live or save for later",
                description:
                  "Stream live video to see current job progress across sites. Recall past video for safety training, incident documentation, dispute resolution, or rework analysis.",
              },
              {
                title: "Modular and scalable",
                description:
                  "Installed on any piece of equipment in under an hour. Field serviceable with easy-to-replace parts.",
              },
              {
                title: "Ruggedized hardware",
                description:
                  "Mil-spec rated enclosures that can withstand heat, cold, dust, mud, or rain for years.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-4 flex flex-col justify-start items-start"
                style={{
                  gap: "10px",
                }}
              >
                <h3
                  className="text-dozer-black py-6"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontWeight: 400,
                    fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-dozer-black"
                  style={{
                    fontFamily: "Gotham",
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                    lineHeight: "1.5",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHome;