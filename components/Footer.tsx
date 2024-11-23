import Link from 'next/link';
import Image from 'next/image';
const Footer: React.FC = () => {
  return (
    <footer className="max-container padding-container py-16 grid grid-cols-1 md:grid-cols-5 gap-10 text-gray-700">
      {/* Dozer Logo and Description */}
      <div className="md:col-span-1">
       <Image src="/dozer-logo-black.png" width = {70} height={30} alt="Dozer black logo"/>
        <p>An intelligent system of cameras and sensors that monitors heavy equipment in the field.</p>
      </div>

      {/* Product Section */}
      <div className='uppercase'>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Product</h3>
        <ul className="space-y-2">
          <li><Link href="/camera" className="hover:text-dozer-yellow">Camera</Link></li>
          <li><Link href="/sensors" className="hover:text-dozer-yellow">Sensors</Link></li>
          <li><Link href="/intelligence" className="hover:text-dozer-yellow">Intelligence</Link></li>
          <li><Link href="/installation" className="hover:text-dozer-yellow">Installation</Link></li>
        </ul>
      </div>

     {/* Company Section */}
      <div className='uppercase'>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Company</h3>
        <ul className="space-y-2">
          <li><Link href="/about" className="hover:text-dozer-yellow">About Us</Link></li>
          <li><Link href="/careers" className="hover:text-dozer-yellow">Careers</Link></li>
          <li><Link href="/news" className="hover:text-dozer-yellow">News & Press</Link></li>
        </ul>
      </div>

      {/* Support Section */}
      <div className='uppercase'>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Support</h3>
        <ul className="space-y-2">
          <li><Link href="/support" className="hover:text-dozer-yellow">Customer Support</Link></li>
          <li><Link href="/knowledge-base" className="hover:text-dozer-yellow">Knowledge Base</Link></li>
          <li><Link href="/faq" className="hover:text-dozer-yellow">FAQ</Link></li>
          <li><Link href="/security" className="hover:text-dozer-yellow">Security</Link></li>
          <li><Link href="/trust" className="hover:text-dozer-yellow">Trust</Link></li>
        </ul>
      </div>

      {/* Machine Illustrations */}
      <div>
        <Image
          src="/footer-vehicles.png" // Replace with the actual path
          alt="Footer Vehicles"
          width={503}  // Adjust width based on your layout
          height={254} // Adjust height based on your layout
          
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    </footer>
  );
};

export default Footer;