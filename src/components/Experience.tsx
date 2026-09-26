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
      period: 'Sep 2023 - Present',
      company: 'ForbesBLK',
      location: 'Global Community',
      role: 'Member',
    },
    {
      period: 'Sep 2023 - Present',
      company: 'Ravex',
      location: 'Lagos State, Nigeria',
      role: 'Founder / CEO',
    },
    {
      period: 'Feb 2021 - Present',
      company: 'Mobirevo',
      location: 'Port Harcourt, Rivers, Nigeria',
      role: 'System Analyst & Technical Project Manager',
    },
    {
      period: 'Feb 2018 - Jan 2021',
      company: 'Mobirevo',
      location: 'Port Harcourt, Rivers, Nigeria',
      role: 'Founder & Business Development Manager',
    },
    {
      period: 'Aug 2017 - Aug 2020',
      company: 'Otto & Partners',
      location: 'Kampala, Uganda',
      role: 'Co-Founder & Technical Project Manager (Exited)',
    },
    {
      period: 'May 2020 - Jul 2020',
      company: 'SpottR',
      location: 'Nigeria',
      role: 'Product Designer',
    },
    {
      period: 'Feb 2020 - Apr 2020',
      company: 'HouseAfrica',
      location: 'Lagos State, Nigeria',
      role: 'Product Designer',
    },
    {
      period: 'Jun 2019 - Dec 2019',
      company: 'CITE - University of Port Harcourt',
      location: 'Nigeria',
      role: 'Senior Design & Motion Instructor',
    },
    {
      period: 'Mar 2016 - Mar 2018',
      company: 'Fundall',
      location: 'Port Harcourt, Nigeria',
      role: 'Campus Ambassador',
    },
    {
      period: 'Feb 2014 - 2015',
      company: 'Silverline Technologies',
      location: 'Port Harcourt, Nigeria',
      role: 'Graphics & Visual Designer',
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
