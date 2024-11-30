import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-8">
      <div className="max-container padding-container grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Logo and Description */}
        <div className="md:col-span-1 flex flex-col space-y-4">
          <Image
            src="/dozer-logo-black.png"
            width={70}
            height={30}
            alt="Dozer black logo"
          />
          <p className="text-gray-700 text-sm">
            An intelligent system of cameras and sensors that monitors heavy
            equipment in the field.
          </p>
        </div>

        {/* Product Section */}
        <div className="uppercase">
          <h3 className="text-base font-bold text-gray-800 mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/camera" className="hover:text-dozer-yellow">
                Camera
              </Link>
            </li>
            <li>
              <Link href="/intelligence" className="hover:text-dozer-yellow">
                Intelligence
              </Link>
            </li>
            <li>
              <Link href="/installation" className="hover:text-dozer-yellow">
                Installation
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="uppercase">
          <h3 className="text-base font-bold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-dozer-yellow">
                About Us
              </Link>
            </li>
            {/* <li>
              <Link href="/careers" className="hover:text-dozer-yellow">
                Careers
              </Link>
            </li> */}
            {/* <li>
              <Link href="/news" className="hover:text-dozer-yellow">
                News & Press
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Support Section */}
        <div className="uppercase">
          <h3 className="text-base font-bold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/support" className="hover:text-dozer-yellow">
                Customer Support
              </Link>
            </li>
            {/* <li>
              <Link href="/knowledge-base" className="hover:text-dozer-yellow">
                Knowledge Base
              </Link>
            </li> */}
            {/* <li>
              <Link href="/faq" className="hover:text-dozer-yellow">
                FAQ
              </Link>
            </li> */}
            {/* <li>
              <Link href="/security" className="hover:text-dozer-yellow">
                Security
              </Link>
            </li>
            <li>
              <Link href="/trust" className="hover:text-dozer-yellow">
                Trust
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Footer Image */}
        <div className="md:col-span-5 md:col-start-5 md:row-start-1 flex justify-center md:justify-end">
          <Image
            src="/footer-vehicles.png"
            alt="Footer Vehicles"
            width={600} // Maximum width for large screens
            height={200} // Maintain the aspect ratio
            className="w-full h-auto object-contain md:object-cover"
            style={{ maxHeight: "200px" }} // Enforce a max height
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;