import React from 'react';
import { MessageSquare } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Mechroid's robots have transformed our customer service operations. The AI-powered interactions are incredibly natural, and our customers love it!",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "TechCorp International"
  },
  {
    id: 2,
    content: "The event robots were a huge hit at our annual conference. They engaged with attendees perfectly and created an unforgettable experience.",
    author: "Michael Chen",
    role: "Event Manager",
    company: "Global Events Co."
  },
  {
    id: 3,
    content: "The customization options and support from Mechroid have been exceptional. They truly understand our unique needs.",
    author: "David Williams",
    role: "Innovation Lead",
    company: "Future Industries"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            What Our Clients Say
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black/50 p-6 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all relative group"
            >
              <MessageSquare className="absolute top-6 right-6 w-6 h-6 text-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-cyan-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all">
            Learn How Mechroid Can Help Your Business
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;