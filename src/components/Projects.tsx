import React from 'react';
import mockupWebsite from '../assets/mobirevo_project.png';
import mockupApp from '../assets/mockup_app_hd.png';
import mockupLanding from '../assets/mockup_landing_hd.png';

interface Project {
  title: string;
  image: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Mobirevo: Software & Hardware Company (Nigeria, US & Canada)',
      image: mockupWebsite,
    },
    {
      title: 'Ravex: Digital Financial & Utility Payments Platform (Nigeria & West Africa)',
      image: mockupApp,
    },
    {
      title: 'Otto & Partners Enterprise Systems',
      image: mockupLanding,
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12">
        Projects
      </h2>

      <div className="space-y-10 sm:space-y-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-full rounded-[28px] sm:rounded-[36px] bg-[#e6e8eb] p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[340px] sm:min-h-[400px] lg:min-h-[460px] overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            {/* Project Title */}
            <div className="w-full md:w-1/3 self-start md:self-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141414] tracking-tight">
                {project.title}
              </h3>
            </div>

            {/* Showcase Mockup */}
            <div className="w-full md:w-2/3 flex justify-center md:justify-end">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-[280px] sm:max-h-[340px] lg:max-h-[400px] w-auto object-contain drop-shadow-xl group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
