import React from 'react';
import { Layers, Users, PenTool } from 'lucide-react';

export const Skills: React.FC = () => {
  const skills = [
    {
      title: 'Visual Design',
      icon: <Layers className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
    {
      title: 'User Research',
      icon: <Users className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
    {
      title: 'Prototyping',
      icon: <PenTool className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12">
        Skills and Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-14 max-w-2xl">
        {skills.map((skill) => (
          <div key={skill.title} className="flex flex-col items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-start">
              {skill.icon}
            </div>
            <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
