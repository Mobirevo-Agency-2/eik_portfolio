import React from 'react';
import { PencilRuler, Lightbulb, DraftingCompass, Rocket } from 'lucide-react';
import clientLogosImg from '../assets/client_logos_hd.png';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: 'User Interface Design',
      description: 'The will snow derisively with likely and time lack good late claim salesman.',
      icon: <PencilRuler className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
    {
      title: 'User Experience Design',
      description: 'The will snow derisively with likely and time lack good late claim salesman.',
      icon: <Lightbulb className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
    {
      title: 'Brand Identity Design',
      description: 'The will snow derisively with likely and time lack good late claim salesman.',
      icon: <DraftingCompass className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
    {
      title: 'Mobile App UI Design',
      description: 'The will snow derisively with likely and time lack good late claim salesman.',
      icon: <Rocket className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-14">
        Services
      </h2>

      {/* 2x2 Services Grid across full container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12 mb-20 max-w-4xl">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col items-start">
            <div className="w-12 h-12 flex items-center justify-start mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-2.5">
              {service.title}
            </h3>
            <p className="text-base text-[#8e8e93] leading-relaxed font-normal max-w-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Client Logos Bar: Payoneer, Envato, Airbnb, Slack - Enlarged */}
      <div className="pt-6 pb-16 flex items-center justify-start w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl">
        <img
          src={clientLogosImg}
          alt="Clients: Payoneer, Envato, Airbnb, Slack"
          className="w-full h-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
        />
      </div>
    </section>
  );
};
