import React from 'react';
import { ShoppingCart, Calendar } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'MX-1000 Business Assistant',
    description: 'Advanced humanoid robot for business automation and customer service',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    features: ['AI-powered interactions', '24/7 operation', 'Multi-language support'],
  },
  {
    id: 2,
    name: 'EV-2000 Event Robot',
    description: 'Perfect for exhibitions, conferences, and special events',
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800',
    features: ['Interactive displays', 'Crowd engagement', 'Custom branding'],
  },
  {
    id: 3,
    name: 'HX-3000 Healthcare Assistant',
    description: 'Specialized robot for medical facilities and patient care',
    image: 'https://images.unsplash.com/photo-1495055154266-57bbdeada43e?auto=format&fit=crop&q=80&w=800',
    features: ['Patient monitoring', 'Medical assistance', 'Sanitization protocols'],
  },
];

const Products: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Our Robot Collection
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-black/50 rounded-lg overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-cyan-500 hover:bg-cyan-600 transition-colors">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-cyan-500 text-sm font-medium rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all">
                    <Calendar className="w-4 h-4 mr-2" />
                    Rent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;