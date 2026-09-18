import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import avatarFleece from '../assets/avatar_fleece_hd.png';
import avatarAtika from '../assets/avatar_atika.png';
import avatarJane from '../assets/avatar_jane.png';

interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: 'Fleece Marigold',
      role: 'Web Designer',
      avatar: avatarFleece,
      quote:
        'As a fellow designer, I was blown away by the precision and creativity demonstrated in Ayush work. His ability to transform concepts into stunning digital experiences is truly remarkable. Collaborating him was not only seamless but also inspiring. I highly recommend Ayush to anyone seeking a webflow developer who can turn dreams into reality.',
    },
    {
      name: 'Atika Jahin',
      role: 'Developer, Payoneer',
      avatar: avatarAtika,
      quote:
        'Collaborating with Cameron was an extraordinary experience. His ability to craft intuitive user flows, combined with flawless visual design execution, made our product launch an enormous success.',
    },
    {
      name: 'Jane Cooper',
      role: 'UX Designer, Paypal',
      avatar: avatarJane,
      quote:
        'Cameron brings both artistic vision and deep engineering empathy to every digital product. An exceptional UX/UI designer who transforms complex platforms into seamless user experiences.',
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
            Testimonials
          </h2>
        </div>

        {/* Right Column: Quote + Author + Navigation */}
        <div className="w-full lg:w-3/4 flex flex-col justify-between">
          {/* Main Quote */}
          <blockquote className="text-xl sm:text-2xl lg:text-[28px] font-normal text-white leading-[1.45] tracking-tight mb-12 transition-opacity duration-300">
            “{current.quote}”
          </blockquote>

          {/* Author and Navigation Controls */}
          <div className="flex items-center justify-between gap-4 pt-2">
            {/* Author Profile */}
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
              />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
                  {current.name}
                </h3>
                <p className="text-sm text-[#8e8e93] font-normal mt-0.5">
                  {current.role}
                </p>
              </div>
            </div>

            {/* Carousel Buttons: Left (bordered) & Right (solid blue) */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-11 h-11 rounded-full border border-[#383838] hover:border-white/50 text-[#8e8e93] hover:text-white flex items-center justify-center transition-all active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
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
