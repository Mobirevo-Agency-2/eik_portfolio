import React from 'react';

interface CertificationItem {
  period: string;
  issuer: string;
  location: string;
  credential: string;
}

export const Certifications: React.FC = () => {
  const certificationsList: CertificationItem[] = [
    {
      period: '2021',
      issuer: 'Nielsen Norman Group',
      location: 'San Francisco, CA',
      credential: 'UX Master Certified (NN/g UXMC)',
    },
    {
      period: '2020',
      issuer: 'Google',
      location: 'Mountain View, CA',
      credential: 'Professional UX Design Certificate',
    },
    {
      period: '2019',
      issuer: 'Interaction Design Foundation',
      location: 'Remote',
      credential: 'Design Thinking & Human-Centered Systems',
    },
    {
      period: '2018',
      issuer: 'IDEO U',
      location: 'Remote',
      credential: 'Foundations in Design Strategy & Innovation',
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12">
        Certifications
      </h2>

      <div className="space-y-4 max-w-4xl">
        {certificationsList.map((item, index) => (
          <div
            key={`${item.issuer}-${index}`}
            className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 py-6 ${
              index < certificationsList.length - 1 ? 'border-b border-[#262626]' : ''
            }`}
          >
            {/* Left: Issue Year / Period */}
            <div className="w-full sm:w-64 shrink-0">
              <span className="text-base text-[#8e8e93] font-normal">
                {item.period}
              </span>
            </div>

            {/* Right: Issuer, location, and credential title */}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                    {item.issuer}
                  </h3>
                  <span className="text-sm sm:text-base text-[#8e8e93] font-normal">
                    {item.location}
                  </span>
                </div>
                <p className="text-base text-[#8e8e93] font-normal">
                  {item.credential}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
