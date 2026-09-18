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
            Hi, I’m Cameron Williamson.
          </h1>
          <p className="text-xl sm:text-2xl text-[#9a9a9f] font-normal leading-relaxed mb-8">
            And a <span className="text-[#3b82f6] font-semibold">Senior UX/UI Designer</span> with 10+ years experience in the digital world.
          </p>
          
          {/* Social links: LinkedIn, Instagram, TikTok (Identical size & optical balance) */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
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
              alt="Cameron Williamson"
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </div>
      </div>

      {/* Narrative Bio */}
      <div className="space-y-6 text-[#8e8e93] text-base sm:text-[17px] leading-[1.8] font-normal max-w-3xl">
        <p>
          Born and raised in UK, London, I got my start designing and coding websites for a local agency. After 6 1/2 years and 100+ shipped sites, I started a mobile design + dev shop where we experimented with some silly ideas, and some more practical.
        </p>
        <p>
          Then in 2016, a little startup out of SF found us and trusted us enough to learn how to build an Android app on the job. During the more than 4 years spent there, I transitioned into a leader on the product design team—helping to ship new products, a workplace platform and build a team of incredible designers.
        </p>
        <p>
          Now in 2020, I’m excited to be taking on a new challenge with an amazing Canadian based company to create important new products to help entrepreneurs build successful businesses.
        </p>
      </div>
    </section>
  );
};
