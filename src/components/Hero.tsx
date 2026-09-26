import React from 'react';
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
            Founder & <span className="text-[#3b82f6] font-semibold">Technical Project Manager</span> with 10+ years experience building scalable digital platforms and software solutions.
          </p>
          
          {/* Social links: LinkedIn, Instagram, TikTok (Identical size & optical balance) */}
          <div className="flex items-center gap-3">
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
          I am an entrepreneur, technical project manager, and system analyst dedicated to turning ambitious visions into robust digital reality. Over the past decade, I have driven the strategy and delivery of scalable web applications, mobile platforms, and enterprise solutions across global ecosystems.
        </p>
        <p>
          In 2016, I co-founded Mobirevo to help forward-thinking enterprises and startups build high-performance software. Over the years, I have spearheaded cross-functional engineering teams, guided architectural decisions, and shipped impactful solutions across fintech, business services, and digital infrastructure.
        </p>
        <p>
          Today, my focus centers on technical systems architecture, AI-driven agile delivery, and championing innovative software frameworks that scale reliably and deliver measurable business value.
        </p>
      </div>
    </section>
  );
};
