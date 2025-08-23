import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-emerald-700 text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>&copy; 2025 Emerald Screen Printing & Embroidery. All rights reserved.</p>
        <div className="flex space-x-4 text-lg">
          <a href="#" aria-label="Facebook" className="hover:text-emerald-300 transition"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram" className="hover:text-emerald-300 transition"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
