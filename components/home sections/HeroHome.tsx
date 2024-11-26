import Image from "next/image";

const HeroHome = (): JSX.Element => {
  return (
    <>
      {/* Image with Overlay Section */}
      <section className="w-full overflow-hidden">
        <div className="relative w-full h-screen"> {/* Full-screen height */}
          <Image
            src="/IMG_1869.png"
            alt="Background Image"
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Text Overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-start z-10"
            style={{
              paddingTop: "15%", // Adjusted offset for navbar
            }}
          >
            <div
              className="w-full max-w-[1440px] mx-auto px-[6.25%] flex flex-col"
              style={{
                paddingTop: "200px", // Adjusted vertical padding for small screens
              }}
            >
              <h1
                className="text-dozer-yellow leading-tight"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 500,
                  fontSize: "clamp(2.6rem, 3.5vw, 5rem)", // Scales between 50px and 80px
                }}
              >
                Monitor your
              </h1>
              <h1
                className="text-dozer-yellow leading-tight"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 500,
                  fontSize: "clamp(2.6rem, 3.5vw, 5rem)", // Scales between 50px and 80px
                }}
              >
                equipment from
              </h1>
              <h1
                className="text-dozer-yellow leading-tight"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 500,
                  fontSize: "clamp(2.6rem, 3.5vw, 5rem)", // Scales between 50px and 80px
                }}
              >
                anywhere
              </h1>
              <p
                className="text-white max-w-[50%] mb-[2vw]"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 400,
                  fontSize: "clamp(1rem, 1.8vw, 1.3rem)", // Scales between 20px and 24px
                  lineHeight: "clamp(1.5rem, 2.5vw, 2rem)", // Scales between 28px and 40px
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
      <section className="max-container padding-container py-10 pb-32 lg:py-20">
        <div className="text-left mb-10">
          <h2
            className="text-dozer-black mb-6"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 4vw, 3.75rem)", // Scales between 40px and 60px
            }}
          >
            Key Features
          </h2>
        </div>

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y border border-gray-300"
          style={{
            width: "100%", // Full width
          }}
        >
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
              className="p-8"
              style={{
                minHeight: "300px", // Fixed height for each row
              }}
            >
              <h3
                className="mb-[2.5vw] text-dozer-black"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontWeight: 400,
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)", // Scales between 20px and 24px
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-dozer-black"
                style={{
                  fontFamily: "Gotham",
                  fontWeight: 400,
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)", // Scales between 16px and 18px
                  lineHeight: "1.5",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroHome;