import { Cpu, Kanban, Layout, Rocket } from 'lucide-react';
import logoForbes from '../assets/logo_forbes.png';
import logoBusinessInsider from '../assets/logo_business_insider.png';
import logoBloomberg from '../assets/logo_bloomberg.png';
import logoTechcrunch from '../assets/logo_techcrunch.png';
import logoTechnext from '../assets/logo_technext.png';
import logoYahooFinance from '../assets/logo_yahoo_finance.png';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: 'Systems Analysis & Architecture',
      description: 'Analyzing business processes, developing technical specifications, designing scalable architectures, and enforcing quality assurance.',
      icon: <Cpu className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
    {
      title: 'Technical Project Management',
      description: 'End-to-end Agile leadership, sprint planning, risk management, cross-functional coordination, and on-time software releases.',
      icon: <Kanban className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
    {
      title: 'User Experience & Product Strategy',
      description: 'Translating user research into high-fidelity interaction flows, clickable prototypes, and conversion-optimized digital experiences.',
      icon: <Layout className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
    {
      title: 'Bespoke Enterprise Software',
      description: 'Architecting custom web and mobile solutions, SaaS platforms, fintech infrastructure, and business intelligence systems.',
      icon: <Rocket className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-14">
        Services
      </h2>

      {/* 2x2 Services Grid across full container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12 mb-16 max-w-4xl">
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

      {/* Featured Media Coverage / Brand Logos matching /impact */}
      <div className="pt-8 pb-12 border-t border-white/[0.08] w-full">
        <div className="text-center sm:text-left mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#737373]">
            Projects I have been involved in — were featured on
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 items-center justify-items-center">
          <div className="flex items-center justify-center w-full h-12">
            <img
              src={logoForbes}
              alt="Forbes"
              className="max-h-7 sm:max-h-8 max-w-[130px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center w-full h-12">
            <img
              src={logoBusinessInsider}
              alt="Business Insider"
              className="max-h-7 sm:max-h-8 max-w-[130px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center w-full h-12">
            <img
              src={logoBloomberg}
              alt="Bloomberg"
              className="max-h-7 sm:max-h-8 max-w-[130px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center w-full h-12">
            <img
              src={logoTechcrunch}
              alt="TechCrunch"
              className="max-h-7 sm:max-h-8 max-w-[130px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center w-full h-12">
            <img
              src={logoTechnext}
              alt="Technext"
              className="max-h-7 sm:max-h-8 max-w-[130px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center w-full h-12">
            <img
              src={logoYahooFinance}
              alt="Yahoo! Finance"
              className="max-h-7 sm:max-h-8 max-w-[130px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
