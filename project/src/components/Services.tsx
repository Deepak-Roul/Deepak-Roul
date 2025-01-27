import React from 'react';
import { ShoppingCart, Calendar, Settings, Users } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'Purchase',
    description: 'Buy your own humanoid robot for long-term business automation and innovation.',
    features: ['Customization options', 'Training included', 'Maintenance support'],
  },
  {
    icon: Calendar,
    title: 'Rental',
    description: 'Rent robots for events, temporary business needs, or trial periods.',
    features: ['Flexible duration', 'On-site setup', '24/7 support'],
  },
  {
    icon: Settings,
    title: 'Customization',
    description: 'Get a robot tailored to your specific business needs and requirements.',
    features: ['Custom programming', 'Specialized features', 'Integration support'],
  },
  {
    icon: Users,
    title: 'Training',
    description: 'Comprehensive training programs for your team to maximize robot efficiency.',
    features: ['Hands-on sessions', 'Online resources', 'Certification'],
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Our Services
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-500" />
                </div>

                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;