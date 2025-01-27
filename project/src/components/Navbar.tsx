import React from 'react';
import { Menu, X, ChevronDown, Notebook as Robot } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Robot className="h-8 w-8 text-cyan-500" />
            <span className="ml-2 text-xl font-bold">Mechroid</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-black/95 border border-white/10 rounded-md mt-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10">Business Robots</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10">Event Robots</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10">Custom Solutions</a>
              </div>
            </div>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Rentals</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-white/10">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md">Products</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md">Rentals</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md">About</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md">Contact</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md">FAQ</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;