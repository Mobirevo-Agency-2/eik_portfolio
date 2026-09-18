import React from 'react';

interface ExperienceItem {
  period: string;
  company: string;
  location: string;
  role: string;
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: 'Jun 2019 - Running',
      company: 'Twinkle Creative',
      location: 'Sylhet, Bangladesh',
      role: 'Product Designer',
    },
    {
      period: 'Dec 2017 - Aug 2018',
      company: 'Creative Talent',
      location: 'CA, USA',
      role: 'UX/UI Designer',
    },
    {
      period: 'Sep 2016 - Jan 2017',
      company: 'Lolipop Studio',
      location: 'Mumbai, India',
      role: 'UX Designer',
    },
    {
      period: 'Aug 2015 - Nov 2016',
      company: 'Fast Streaming',
      location: 'London, UK',
      role: 'Product Designer',
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12">
        Work Experience
      </h2>

      <div className="space-y-4 max-w-4xl">
        {experiences.map((item, index) => (
          <div
            key={`${item.company}-${index}`}
            className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 py-6 ${
              index < experiences.length - 1 ? 'border-b border-[#262626]' : ''
            }`}
          >
            {/* Left: Time period */}
            <div className="w-full sm:w-64 shrink-0">
              <span className="text-base text-[#8e8e93] font-normal">
                {item.period}
              </span>
            </div>

            {/* Right: Company, location, and role */}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                    {item.company}
                  </h3>
                  <span className="text-sm sm:text-base text-[#8e8e93] font-normal">
                    {item.location}
                  </span>
                </div>
                <p className="text-base text-[#8e8e93] font-normal">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
