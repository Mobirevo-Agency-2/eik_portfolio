import { Cpu, Kanban, Layout } from 'lucide-react';

export const Skills: React.FC = () => {
  const skills = [
    {
      title: 'Systems Analysis',
      subtitle: 'Process Analysis, Technical Specs & System Design',
      icon: <Cpu className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
    {
      title: 'Technical Project Management',
      subtitle: 'Agile & Scrum, Project Planning & Risk Management',
      icon: <Kanban className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
    },
    {
      title: 'User Experience Design',
      subtitle: 'User Research, Product Strategy & Prototyping',
      icon: <Layout className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
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
            <div className="flex flex-col gap-1">
              <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                {skill.title}
              </span>
              <span className="text-xs text-[#8e8e93] leading-relaxed">
                {skill.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
