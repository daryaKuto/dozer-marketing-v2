import Image from 'next/image';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The productivity dashboards have completely transformed how we manage our job sites. We can track every piece of equipment in real-time, ensuring optimal utilization and efficiency.",
      name: "John M., Site Manager at XYZ Construction",
      imgSrc: "/excavator.png", // Placeholder image
    },
    {
      quote: "Thanks to the real-time alerts and video streaming features, we’ve significantly reduced incidents on our sites. Knowing exactly what’s happening at all times has been a game-changer.",
      name: "Sarah L., Operations Manager at ABC Builders",
      imgSrc: "/excavator.png", // Placeholder image
    },
    {
      quote: "I’ve been in this industry for over 20 years, and this is by far the most comprehensive system for tracking and managing heavy equipment. It’s made our sites safer and more efficient.",
      name: "Mike T., Contractor at BuildPro Services",
      imgSrc: "/excavator.png", // Placeholder image
    },
    {
      quote: "The installation was simple, and the support team has been fantastic. We’re able to pull up past footage for training and incident review, which has greatly improved our processes.",
      name: "Laura K., Safety Officer at Elite Contracting",
      imgSrc: "/excavator.png", // Placeholder image
    },
  ];

  return (
    <section className="max-container padding-container py-16">
      <h2 className="font-section-title text-3xl font-bold mb-10">Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative bg-gray-200  p-6 shadow-md">
            {/* Quote */}
            <p className="text-center text-base mb-4">
              "{testimonial.quote}"
            </p>
            <p className="uppercase text-center text-sm font-semibold text-gray-700">
              - {testimonial.name}
            </p>

            {/* Image in lower-right corner */}
            <div className="absolute bottom-1 right-4 overflow-hidden">
              <Image
                src={testimonial.imgSrc}
                alt={`Testimonial from ${testimonial.name}`}
                layout="fit"
                objectFit="cover"
                width = {100}
                height = {100}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;