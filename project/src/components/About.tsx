import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                About Mechroid
              </span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Founded in 2020, Mechroid emerged from a vision to make advanced robotics accessible to businesses of all sizes. Our journey began with a simple idea: to bridge the gap between human creativity and robotic efficiency.
            </p>
            
            <p className="text-gray-300 mb-6">
              Today, we're at the forefront of the robotics revolution, providing cutting-edge humanoid robots that transform how businesses operate. Our commitment to innovation and excellence has made us a trusted partner for companies worldwide.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-500 mb-2">500+</div>
                <div className="text-sm text-gray-400">Robots Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-500 mb-2">50+</div>
                <div className="text-sm text-gray-400">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-500 mb-2">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>

            <button className="inline-flex items-center px-6 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all">
              Learn More About Our Journey
            </button>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200"
                alt="Mechroid Office"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;