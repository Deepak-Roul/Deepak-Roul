import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = {
  rental: [
    {
      name: 'Hourly',
      price: '199',
      duration: 'per hour',
      features: [
        'Ideal for events',
        'On-site setup included',
        '24/7 support',
        'Basic customization',
      ],
    },
    {
      name: 'Daily',
      price: '999',
      duration: 'per day',
      features: [
        'Perfect for short projects',
        'Training session included',
        'Priority support',
        'Advanced customization',
      ],
    },
    {
      name: 'Monthly',
      price: '7,999',
      duration: 'per month',
      features: [
        'Long-term projects',
        'Full team training',
        'Dedicated support team',
        'Full customization',
      ],
    },
  ],
  purchase: [
    {
      name: 'Standard',
      price: '49,999',
      duration: 'one-time',
      features: [
        'Basic humanoid robot',
        '1-year warranty',
        'Basic training',
        'Standard support',
      ],
    },
    {
      name: 'Professional',
      price: '99,999',
      duration: 'one-time',
      features: [
        'Advanced humanoid robot',
        '3-year warranty',
        'Extended training',
        'Priority support',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      duration: 'contact us',
      features: [
        'Custom robot fleet',
        'Lifetime warranty',
        'Full team training',
        'Dedicated support',
      ],
    },
  ],
};

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'rental' | 'purchase'>('rental');

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Flexible Pricing Options
          </span>
        </h2>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 space-x-1 bg-gray-900 rounded-xl">
            <button
              className={`${
                activeTab === 'rental'
                  ? 'bg-cyan-500 text-black'
                  : 'text-white hover:text-cyan-500'
              } px-8 py-2 text-sm font-medium rounded-lg transition-all`}
              onClick={() => setActiveTab('rental')}
            >
              Rental Plans
            </button>
            <button
              className={`${
                activeTab === 'purchase'
                  ? 'bg-cyan-500 text-black'
                  : 'text-white hover:text-cyan-500'
              } px-8 py-2 text-sm font-medium rounded-lg transition-all`}
              onClick={() => setActiveTab('purchase')}
            >
              Purchase Options
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans[activeTab].map((plan, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {typeof plan.price === 'string' && plan.price.startsWith('$') ? plan.price : `$${plan.price}`}
                </span>
                <span className="text-gray-400 ml-2">/{plan.duration}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-cyan-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full px-6 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all">
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-cyan-500 hover:bg-cyan-600 transition-colors">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;