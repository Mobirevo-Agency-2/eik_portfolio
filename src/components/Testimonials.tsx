import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import avatarMitchell from '../assets/avatar_mitchell_player.png';
import avatarJeff from '../assets/avatar_jeff_nelson.png';

interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  relationship: string;
  linkedIn: string;
  quote: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: 'Mitchell Player',
      role: 'Branch Manager | Operations & P&L Leadership | Revenue Growth & Business Performance',
      relationship: "Nov 27, 2020 • Mitchell was Ikechukwu's client",
      linkedIn: 'https://www.linkedin.com/in/mitchell-player-408a341b3/',
      avatar: avatarMitchell,
      quote:
        'Emmanuel was very responsive and patient with me. Customer service doesn’t end upon completion with this guy he continues to follow up and ensure that my project is successful and I receive the best ROI possible. I recommend Emmanuel and his team to bring you vision to life.',
    },
    {
      name: 'Jeff Nelson, MBA, CMC',
      role: 'Co-Founder • Author • Teacher • Consultant | Strategic Business & Marketing Alignment',
      relationship: 'Nov 25, 2020 • Jeff was senior to Ikechukwu',
      linkedIn: 'https://www.linkedin.com/in/jeffxnelson/',
      avatar: avatarJeff,
      quote:
        'Emmanuel recently started a company called Mobirevo. You can see a list of service on his website, https://mobirevo.com/services/. Be sure to contact Emmanuel if you are looking for UX-UI Design, Brand identity design, Software development, Mobile app development, Website development, and Ecommerce development.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-24 border-t border-b border-[#262626]">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-16">
        {/* Left Column: Heading */}
        <div className="w-full lg:w-1/4 shrink-0">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#8e8e93]">
            Recommendations
          </h2>
        </div>

        {/* Right Column: Quote + Author + Navigation */}
        <div className="w-full lg:w-3/4 flex flex-col justify-between">
          {/* Main Quote */}
          <blockquote className="text-xl sm:text-2xl lg:text-[28px] font-normal text-white leading-[1.45] tracking-tight mb-12 transition-opacity duration-300">
            “{current.quote}”
          </blockquote>

          {/* Author and Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            {/* Author Profile */}
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10 shrink-0 bg-[#252528]"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
                    {current.name}
                  </h3>
                  {current.linkedIn && (
                    <a
                      href={current.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      title="View LinkedIn Profile"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-[#8e8e93] font-normal mt-0.5 line-clamp-1">
                  {current.role}
                </p>
                <p className="text-[11px] text-[#636366] mt-0.5">
                  {current.relationship}
                </p>
              </div>
            </div>

            {/* Carousel Buttons: Left (bordered) & Right (solid blue) */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Recommendation"
                className="w-11 h-11 rounded-full border border-[#383838] hover:border-white/50 text-[#8e8e93] hover:text-white flex items-center justify-center transition-all active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Recommendation"
                className="w-11 h-11 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
