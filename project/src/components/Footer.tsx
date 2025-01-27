import React from 'react';
import { Notebook as Robot, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Robot className="h-8 w-8 text-cyan-500" />
              <span className="ml-2 text-xl font-bold">Mechroid</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing the future of robotics with advanced humanoid solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">Rentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest innovations</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-900 border border-white/10 rounded-l-md focus:outline-none focus:border-cyan-500"
              />
              <button className="px-4 py-2 bg-cyan-500 text-black rounded-r-md hover:bg-cyan-600 transition -md hover:bg-cyan-600 transition-colors">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mechroid. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;