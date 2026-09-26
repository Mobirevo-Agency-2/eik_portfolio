import React from 'react';

interface EducationItem {
  period: string;
  institution: string;
  location: string;
  degree: string;
}

export const Education: React.FC = () => {
  const educationList: EducationItem[] = [
    {
      period: 'Jul 2024 - Sep 2025',
      institution: 'Quantic School of Business and Technology',
      location: 'Washington, D.C. (Global)',
      degree: 'Master of Business Administration - MBA, Business Administration and Management',
    },
    {
      period: 'Graduate',
      institution: 'University of Port Harcourt',
      location: 'Port Harcourt, Rivers State, Nigeria',
      degree: 'Bachelor of Engineering - BE, Electronics and Computer Engineering',
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12">
        Education
      </h2>

      <div className="space-y-4 max-w-4xl">
        {educationList.map((item, index) => (
          <div
            key={`${item.institution}-${index}`}
            className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 py-6 ${
              index < educationList.length - 1 ? 'border-b border-[#262626]' : ''
            }`}
          >
            {/* Left: Time period */}
            <div className="w-full sm:w-64 shrink-0">
              <span className="text-base text-[#8e8e93] font-normal">
                {item.period}
              </span>
            </div>

            {/* Right: Institution, location, and degree */}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                    {item.institution}
                  </h3>
                  <span className="text-sm sm:text-base text-[#8e8e93] font-normal">
                    {item.location}
                  </span>
                </div>
                <p className="text-base text-[#8e8e93] font-normal">
                  {item.degree}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
