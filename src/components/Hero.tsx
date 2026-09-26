import React from 'react';
import { Mail } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, TikTokIcon } from './Icons';
import cameronAvatar from '../assets/cameron_hd.png';

export const Hero: React.FC = () => {
  return (
    <section className="pt-12 sm:pt-20 pb-16 sm:pb-24">
      {/* Top Hero: Headline + Large Avatar */}
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 lg:gap-16 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-tight text-white leading-[1.12] mb-6">
            Hi, I’m Ikechukwu Emmanuel Akwue.
          </h1>
          <p className="text-xl sm:text-2xl text-[#9a9a9f] font-normal leading-relaxed mb-8">
            Faith-driven Entrepreneur, 3x Founder & <span className="text-[#3b82f6] font-semibold">Quantic MBA</span> | Member ForbesBLK | Technical Project Manager & Founder building bespoke software solutions for business growth.
          </p>
          
          {/* Social links & Email */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:ogaonyi@yahoo.com"
              aria-label="Email ogaonyi@yahoo.com"
              className="px-3.5 h-9 rounded-lg flex items-center gap-2 text-xs font-semibold text-white bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 text-blue-400 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>ogaonyi@yahoo.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/eikechukwu39/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#8e8e93] hover:text-[#3b82f6] hover:bg-white/[0.06] transition-all"
            >
              <LinkedInIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#8e8e93] hover:text-[#3b82f6] hover:bg-white/[0.06] transition-all"
            >
              <InstagramIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#8e8e93] hover:text-[#3b82f6] hover:bg-white/[0.06] transition-all"
            >
              <TikTokIcon className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>

        {/* Circular Avatar */}
        <div className="relative shrink-0 self-start md:self-auto">
          <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden bg-[#181818] ring-1 ring-white/10 shadow-2xl">
            <img
              src={cameronAvatar}
              alt="Ikechukwu Emmanuel Akwue"
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </div>
      </div>

      {/* Narrative Bio */}
      <div className="space-y-6 text-[#8e8e93] text-base sm:text-[17px] leading-[1.8] font-normal max-w-3xl">
        <p>
          I am a dynamic and accomplished Systems Analyst and Technical Project Manager with a proven track record of delivering exceptional results. My passion for technology and user-centered design has led me on a nonlinear career path, gaining invaluable experience across multiple industries and leadership roles.
        </p>
        <p>
          I began my career as a Visual and Graphic Designer, transitioned to a Senior UX/UI Designer, and evolved into software development and project management. This diverse background gives me a robust understanding of programming languages, core software architecture design, and deep expertise in DevOps tools and Agile methodologies.
        </p>
        <p>
          Currently, I am the Founder and Systems Analyst/Technical Project Manager at Mobirevo, a bespoke software development company. Here, I lead cross-functional teams delivering innovative digital products—including social media chat apps, SaaS applications, fintech platforms, business intelligence software, and blockchain solutions that foster growth and give our clients a distinct market advantage.
        </p>
      </div>
    </section>
  );
};
