import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-emerald-700 text-white text-sm">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <p>&copy; 2025 Emerald Screen Printing & Embroidery. All rights reserved.</p>
          <p className="text-xs text-gray-200 mt-1">
            Powered by{" "}
            <a 
              href="https://socialcirclect.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-emerald-300 transition"
            >
              Social Circle
            </a>
          </p>
        </div>
        
        <div className="flex space-x-4 text-lg">
          <a 
            href="https://www.facebook.com/emeraldsp17/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook" 
            className="hover:text-emerald-300 transition"
          >
            <FaFacebookF />
          </a>
          <a 
            href="#" 
            aria-label="Instagram" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-emerald-300 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
