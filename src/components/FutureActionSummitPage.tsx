import React, { useState } from 'react';
import {
  ShieldCheck,
  Globe,
  Award,
  FileCheck,
  Compass,
  CheckCircle2,
  MapPin,
  Mail,
  BookOpen,
  Briefcase,
  Cpu,
  Scale,
  ExternalLink,
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import cameronAvatar from '../assets/cameron_hd.png';
import clientLogosImg from '../assets/client_logos_hd.png';
import mobirevoProjectImg from '../assets/mobirevo_project.png';
import ravexProjectImg from '../assets/ravex_project.png';
import examhallProjectImg from '../assets/examhall_project.png';
import avatarMitchell from '../assets/avatar_mitchell_player.png';
import avatarJeff from '../assets/avatar_jeff_nelson.png';

export const FutureActionSummitPage: React.FC = () => {
  // Recommendations data from LinkedIn
  const endorsements = [
    {
      name: 'Mitchell Player',
      role: 'Branch Manager | Operations & P&L Leadership | Revenue Growth & Business Performance',
      relationship: "Nov 27, 2020 • Mitchell was Ikechukwu's client",
      linkedIn: 'https://www.linkedin.com/in/mitchell-player-408a341b3/',
      avatar: avatarMitchell,
      quote:
        'Emmanuel was very responsive and patient with me. Customer service doesn’t end upon completion with this guy he continues to follow up and ensure that my project is successful and I receive the best ROI possible. I recommend Emmanuel and his team to bring you vision to life.',
    },
    {
      name: 'Jeff Nelson, MBA, CMC',
      role: 'Co-Founder • Author • Teacher • Consultant | Strategic Business & Marketing Alignment',
      relationship: "Nov 25, 2020 • Jeff was senior to Ikechukwu",
      linkedIn: 'https://www.linkedin.com/in/jeffxnelson/',
      avatar: avatarJeff,
      quote:
        'Emmanuel recently started a company called Mobirevo. You can see a list of service on his website, https://mobirevo.com/services/. Be sure to contact Emmanuel if you are looking for UX-UI Design, Brand identity design, Software development, Mobile app development, Website development, and Ecommerce development.',
    },
  ];


  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white selection:bg-blue-600 selection:text-white">
      <main className="max-w-5xl lg:max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-8">
        {/* 1. HERO SECTION */}
        <section className="pt-10 sm:pt-16 pb-16 sm:pb-20">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 lg:gap-16 mb-12">
            <div className="max-w-2xl">
              {/* Summit Conference Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" />
                <span>Future Action Summit 2026 • Australia Candidate</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.12] mb-3">
                Ikechukwu Emmanuel Akwue
              </h1>
              <div className="text-lg sm:text-xl font-semibold text-blue-400 mb-5">
                Technology Entrepreneur, Product Leader & Startup Advisor
              </div>
              <p className="text-base sm:text-lg text-[#9a9a9f] font-normal leading-relaxed mb-8 max-w-2xl">
                Building and advising scalable ventures across software infrastructure, digital financial inclusion, and educational technology across Africa and North America. Applying as an Official Delegate & Contributor to the Future Action Summit in Australia.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:ogaonyi@yahoo.com?subject=Future%20Action%20Summit%20Inquiry%20-%20Ikechukwu%20Emmanuel%20Akwue"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] active:scale-95 text-white font-semibold rounded-2xl transition-all shadow-lg shadow-blue-500/20 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me via Email</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/eikechukwu39/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#202020] hover:bg-[#282828] border border-white/10 active:scale-95 text-white font-medium rounded-2xl transition-all text-sm sm:text-base"
                >
                  <LinkedInIcon className="w-4 h-4 text-blue-400" />
                  <span>Verify on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Profile Avatar Card */}
            <div className="flex flex-col items-center md:items-end">
              <div className="relative group">
                <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl p-1.5 relative z-10">
                  <img
                    src={cameronAvatar}
                    alt="Ikechukwu Emmanuel Akwue"
                    className="w-full h-full object-cover rounded-2xl grayscale contrast-125 transition-all duration-300"
                  />
                </div>
                {/* Glowing accent backdrop */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/30 to-emerald-500/20 blur-xl -z-10 group-hover:blur-2xl transition-all"></div>

                {/* Delegate Badge Overlay */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-[#121212]/95 border border-white/10 rounded-full px-4 py-1 flex items-center gap-2 shadow-xl">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Australia Summit Nominee
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.05]">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-1">
                10+
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#8e8e93]">
                Years in Tech & Systems
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.05]">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                3x
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#8e8e93]">
                Founder (Mobirevo, Ravex, Otto)
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.05]">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">
                MBA
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#8e8e93]">
                Quantic School of Business & Tech
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.05]">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                Member
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#8e8e93]">
                ForbesBLK Global Network
              </div>
            </div>
          </div>
        </section>

        {/* 2. SUSTAINABLE DEVELOPMENT IMPACT */}
        <section className="py-16 sm:py-20 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">
                UN SDG Framework
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Sustainable Development Impact
              </h2>
              <p className="text-base text-[#8e8e93] mt-3">
                Organizing venture leadership, systems architecture, and advisory roles around the United Nations Sustainable Development Goals.
              </p>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold w-fit">
              4 Core SDGs Addressed
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SDG 4: Quality Education */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#1c1c1e] border border-white/[0.06] hover:border-indigo-500/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    SDG 4: Quality Education
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  ExamHall.net
                </h3>
                <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-4">
                  Role: Member of the Board of Advisors
                </div>
                <p className="text-sm text-[#a1a1a6] leading-relaxed mb-4">
                  <strong className="text-white font-medium">What the platform does:</strong> Digital examination and assessment infrastructure powering automated grading, test preparation, and secure assessment administration for institutions, corporates, and students.
                </p>
                <p className="text-sm text-[#8e8e93] leading-relaxed">
                  <strong className="text-[#a1a1a6] font-medium">Emmanuel’s contribution:</strong> Strategic governance, systems scalability oversight, cloud assessment architecture, and institutional partnerships expanding equitable access to educational evaluation.
                </p>
              </div>
              <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#8e8e93]">Automated Assessment & Grading</span>
                <a
                  href="https://examhall.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* SDG 8: Decent Work & Economic Growth */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#1c1c1e] border border-white/[0.06] hover:border-amber-500/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    SDG 8: Decent Work & Growth
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Mobirevo Softwares & Technologies
                </h3>
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">
                  Role: Founder & Managing Director / Systems Analyst
                </div>
                <p className="text-sm text-[#a1a1a6] leading-relaxed mb-4">
                  <strong className="text-white font-medium">What the company does:</strong> Software and hardware engineering firm based in Nigeria with an active commercial presence in North America (Canada and the United States).
                </p>
                <p className="text-sm text-[#8e8e93] leading-relaxed">
                  <strong className="text-[#a1a1a6] font-medium">Emmanuel’s contribution:</strong> Built a sustainable technology enterprise creating high-skilled technical employment for African engineers while developing scalable digital products and business infrastructure.
                </p>
              </div>
              <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#8e8e93]">High-Skilled Tech Employment</span>
                <a
                  href="https://mobirevo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* SDG 9: Industry, Innovation & Infrastructure */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#1c1c1e] border border-white/[0.06] hover:border-blue-500/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    SDG 9: Industry & Infrastructure
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Mobirevo • Monnee Inc. • Ravex
                </h3>
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">
                  Role: Founder, Technical Lead & Systems Architect
                </div>
                <p className="text-sm text-[#a1a1a6] leading-relaxed mb-4">
                  <strong className="text-white font-medium">What the platforms do:</strong> Mission-critical digital infrastructure, enterprise software architectures, transaction rails, and cloud backbones enabling commercial operations in the digital economy.
                </p>
                <p className="text-sm text-[#8e8e93] leading-relaxed">
                  <strong className="text-[#a1a1a6] font-medium">Emmanuel’s contribution:</strong> Directing systems analysis, high-availability microservices architecture, and payment pipelines bridging emerging African markets with international financial standards.
                </p>
              </div>
              <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#8e8e93]">Resilient Digital Systems</span>
                <a
                  href="https://ravex.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* SDG 10: Reduced Inequalities */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#1c1c1e] border border-white/[0.06] hover:border-emerald-500/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Scale className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    SDG 10: Reduced Inequalities
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Financial Inclusion & Cross-Border Rails
                </h3>
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                  Initiatives: Monnee Inc. & Ravex.app
                </div>
                <p className="text-sm text-[#a1a1a6] leading-relaxed mb-4">
                  <strong className="text-white font-medium">What the platforms do:</strong> Expanding financial inclusion for unbanked and underbanked users through affordable digital payments, utility access, and low-friction cross-border remittance corridors.
                </p>
                <p className="text-sm text-[#8e8e93] leading-relaxed">
                  <strong className="text-[#a1a1a6] font-medium">Emmanuel’s contribution:</strong> Engineered fintech architectures that reduce punitive remittance fees, automate online bill payments, and democratize access to digital financial services.
                </p>
              </div>
              <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#8e8e93]">Financial Inclusion & Cross-Border Access</span>
                <a
                  href="https://ravex.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. STATEMENT OF PURPOSE (DELEGATE INTENT) */}
        <section
          id="statement-of-intent"
          className="py-16 sm:py-20 border-t border-white/[0.08]"
        >
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-b from-[#1c1c1e] to-[#161616] border border-white/[0.08] relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
                <Compass className="w-3.5 h-3.5" />
                <span>Statement of Intent • Future Action Summit Australia</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                Why Attending Future Action Summit Australia Is Critical To My Mission
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#a1a1a6] leading-relaxed">
                <p>
                  My professional journey has been driven by a belief that technology should not only make businesses more efficient, but also expand access to opportunities and address societal challenges. As a technology entrepreneur and product leader, I have spent the past several years building and advising ventures across software, fintech and education.
                </p>
                <p>
                  I am the Founder and Managing Director of Mobirevo Softwares & Technologies, where I lead teams developing digital products and technology infrastructure for businesses and organisations. I have also founded and worked on fintech ventures focused on digital financial services, payments and financial access, including Ravex Innovation Labs Limited (Ravex.app) and Monnee Inc., a Delaware-registered cross-border payment solution. Through this work, I have contributed to areas aligned with SDG 8 (Decent Work and Economic Growth) and SDG 9 (Industry, Innovation and Infrastructure) by building technology businesses, creating professional opportunities and developing digital and financial infrastructure that enables participation in the digital economy.
                </p>
                <p>
                  Education has become another important part of my journey. I serve on the Advisory Board of ExamHall.net, an education technology initiative building digital infrastructure for students, examiners and educational institutions through examination management, assessment, grading and exam-preparation tools. This connects my work directly to SDG 4 (Quality Education) and has strengthened my interest in using technology to improve educational systems and access to learning and assessment. My fintech work also relates to SDG 10 (Reduced Inequalities) by seeking to expand access to digital financial services and reduce barriers to participation in the digital economy.
                </p>
                <p>
                  My journey has taught me that technology alone does not create sustainable impact. Building solutions in an emerging-market environment has exposed me to challenges involving infrastructure, funding, affordability, adoption and scaling. I have learned that sustainable development requires not only innovation, but also an understanding of people, institutions, policy and the systems in which solutions operate.
                </p>
                <p>
                  I want to attend the Future Action Summit because I want to deepen my understanding of how technology, policy, social innovation and international collaboration can translate the SDGs into practical and measurable impact. I hope to learn from other young leaders, exchange perspectives across cultures and disciplines, and develop partnerships that can extend beyond the Summit.
                </p>
                <p className="text-white font-medium">
                  My long-term ambition is to build and support technology ventures that contribute to inclusive economic development, accessible education and stronger digital infrastructure in Africa and beyond. I hope to bring my experience as an entrepreneur and builder to the Summit while developing the knowledge, relationships and leadership capacity required to turn innovation into sustainable community impact.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                    <img
                      src={cameronAvatar}
                      alt="Ikechukwu Emmanuel Akwue"
                      className="w-full h-full object-cover grayscale contrast-125"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Ikechukwu Emmanuel Akwue
                    </div>
                    <div className="text-xs text-[#8e8e93]">
                      3x Founder & Systems Analyst • Quantic MBA • Member ForbesBLK
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/eikechukwu39/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
                >
                  <LinkedInIcon className="w-4 h-4 text-white" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </section>

        {/* 4. CURATED WORK EXPERIENCE */}
        <section className="py-16 sm:py-20 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">
                Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Curated High-Impact Experience
              </h2>
            </div>
            <p className="text-sm text-[#8e8e93] max-w-sm">
              Hand-picked strategic roles highlighting large-scale societal and environmental software leadership.
            </p>
          </div>

          <div className="space-y-4">
            {/* Experience Item 1: ExamHall.net */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <h3 className="text-xl font-bold text-white">
                    Member of the Board of Advisors
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 w-fit">
                  Feb 2026 - Present
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-medium text-[#8e8e93] mb-4">
                <span>ExamHall.net • EdTech & Assessment Infrastructure</span>
                <a
                  href="https://examhall.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                Serving on the Board of Advisors to provide strategic leadership, technology architecture guidance, and scaling advisory for ExamHall.net—a comprehensive digital examination and assessment platform empowering educational institutions, corporate enterprises, and students.
              </p>
            </div>

            {/* Experience Item 2: ForbesBLK */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <h3 className="text-xl font-bold text-white">
                    ForbesBLK Member
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 w-fit">
                  Sep 2023 - Present
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-medium text-[#8e8e93] mb-4">
                <span>ForbesBLK • Global Network</span>
                <a
                  href="https://www.forbes.com/forbesblk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                Active member within the curated ForbesBLK global network of business executives, leaders, and entrepreneurs championing systemic change, economic equity, and community investment.
              </p>
            </div>

            {/* Experience Item 3: Ravex */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <h3 className="text-xl font-bold text-white">
                    Founder & Chief Executive Officer
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 w-fit">
                  Sep 2023 - Present
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-medium text-[#8e8e93] mb-4">
                <span>Ravex • Lagos State, Nigeria</span>
                <a
                  href="https://ravex.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                Spearheading product vision, technical architecture, and strategic growth for Ravex—a digital financial and utility payments platform primarily used in Nigeria and West Africa for managing online transactions, bills, and digital assets.
              </p>
            </div>

            {/* Experience Item 4: Monnee Inc. */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <h3 className="text-xl font-bold text-white">
                    Co-Founder & Technical Architect
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 w-fit">
                  Jan 2022 - Dec 2023
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-medium text-[#8e8e93] mb-4">
                <span>Monnee Inc. • Delaware, United States / Remote</span>
                <span className="text-xs text-[#8e8e93]">Delaware Entity</span>
              </div>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                Architected cross-border payment compliance routing, multi-currency ledger structures, and regulatory infrastructure for a Delaware-registered transnational financial solution designed to eliminate friction and reduce remittance costs between North America and African markets.
              </p>
            </div>

            {/* Experience Item 5: Mobirevo (System Analyst & Technical PM) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <h3 className="text-xl font-bold text-white">
                    System Analyst & Technical Project Manager
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 w-fit">
                  Feb 2021 - Present
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-medium text-[#8e8e93] mb-4">
                <span>Mobirevo • Port Harcourt, Rivers State, Nigeria</span>
                <a
                  href="https://mobirevo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                Directing systems analysis, technical requirements architecture, and software project management. Coordinating engineering teams to engineer, test, and deploy resilient, high-performance web and mobile enterprise applications.
              </p>
            </div>

            {/* Experience Item 6: Mobirevo (Founder & BDM) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <h3 className="text-xl font-bold text-white">
                    Founder & Business Development Manager
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 w-fit">
                  Feb 2018 - Jan 2021
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-medium text-[#8e8e93] mb-4">
                <span>Mobirevo • Port Harcourt, Nigeria</span>
                <a
                  href="https://mobirevo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                Established Mobirevo as a bespoke software and product design firm. Led cross-functional teams delivering high-standard software solutions, client relationships, and business growth across Nigeria and international markets.
              </p>
            </div>

            {/* Experience Item 7: Otto & Partners */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <h3 className="text-xl font-bold text-white">
                    Co-Founder & Technical Project Manager [Exited]
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 w-fit">
                  Aug 2017 - Aug 2020
                </span>
              </div>
              <div className="text-sm font-medium text-[#8e8e93] mb-4">
                Otto & Partners • Kampala, Uganda
              </div>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                Co-founded and managed technical product pipelines, digital consulting, and enterprise project operations in East Africa before completing a successful founder exit.
              </p>
            </div>
          </div>
        </section>

        {/* 5. EDUCATION & ACADEMIC CREDENTIALS */}
        <section className="py-16 sm:py-20 border-t border-white/[0.08]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Education & Academic Foundation
            </h2>
            <p className="text-sm sm:text-base text-[#8e8e93] mt-2">
              Advanced qualifications combining global business administration with electrical, electronics and communications engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1c1c1e] border border-white/[0.06]">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                Jul 2024 - Sep 2025
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Master of Business Administration - MBA
              </h3>
              <div className="text-sm text-[#8e8e93] mb-3">
                Quantic School of Business and Technology • Business Administration and Management, General
              </div>
              <p className="text-xs text-[#a1a1a6] leading-relaxed">
                Elite modern executive business curriculum focusing on strategic management, data analysis, organizational leadership, and technology venture governance.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#1c1c1e] border border-white/[0.06]">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                Undergraduate Degree
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Bachelor of Engineering - BE
              </h3>
              <div className="text-sm text-[#8e8e93] mb-3">
                University of Port Harcourt • Electrical, Electronics and Communications Engineering
              </div>
              <p className="text-xs text-[#a1a1a6] leading-relaxed">
                Rigorous grounding in electrical systems, electronics, telecommunications, digital signal transmission, computer systems architecture, and computer engineering. Coursework and engineering projects spanned Python programming, algorithmic facial recognition, automated systems, and software development.
              </p>
            </div>
          </div>
        </section>

        {/* 6. CERTIFICATIONS & ACCREDITATIONS */}
        <section className="py-16 sm:py-20 border-t border-white/[0.08]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">
              Governance & Accreditations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Certifications & Professional Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <Award className="w-7 h-7 text-emerald-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">
                  Introduction to Project Management
                </h4>
                <div className="text-xs text-[#8e8e93]">
                  The Knowledge Academy
                </div>
              </div>
              <div className="mt-4 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                Issued Jul 2021 • Verified
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-7 h-7 text-blue-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">
                  User Experience Fundamentals
                </h4>
                <div className="text-xs text-[#8e8e93]">
                  International Design Foundation
                </div>
              </div>
              <div className="mt-4 text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                Issued Dec 2020 • Verified
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <FileCheck className="w-7 h-7 text-indigo-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">
                  Graphics Design
                </h4>
                <div className="text-xs text-[#8e8e93]">
                  Shaw Academy
                </div>
              </div>
              <div className="mt-4 text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                Issued Nov 2016 • Verified
              </div>
            </div>
          </div>
        </section>

        {/* 7. SELECTED FLAGSHIP PROJECTS (IMPACT CASE STUDIES) */}
        <section className="py-16 sm:py-20 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">
                Evidence of Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Selected Flagship Projects & Case Studies
              </h2>
            </div>
            <p className="text-sm text-[#8e8e93] max-w-sm">
              Structured proof of work detailing problems addressed, direct contributions, and measurable societal and economic outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: Mobirevo */}
            <div className="rounded-3xl bg-[#1c1c1e] border border-white/[0.06] overflow-hidden flex flex-col group hover:border-white/10 transition-all">
              <div className="h-52 overflow-hidden bg-[#121212] relative">
                <img
                  src={mobirevoProjectImg}
                  alt="Mobirevo - Software & Hardware Company"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-semibold">
                  SDG 8 & 9: Work & Infrastructure
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                  Nigeria & North America
                </div>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      <a
                        href="https://mobirevo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Mobirevo</span>
                        <ExternalLink className="w-4 h-4 text-blue-400" />
                      </a>
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Founder & Systems Analyst
                    </span>
                  </div>

                  <div className="space-y-3 mt-4 text-xs sm:text-sm">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e93] mb-1">
                        The Problem
                      </div>
                      <p className="text-[#a1a1a6] leading-relaxed">
                        Enterprises in Africa and international markets frequently struggle with engineering reliability bottlenecks, fragile architecture, and lack of resilient local technical talent to build production software.
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e93] mb-1">
                        What Emmanuel Contributed
                      </div>
                      <p className="text-[#a1a1a6] leading-relaxed">
                        Founded Mobirevo; directed systems analysis, technical requirements architecture, and engineering governance; assembled and mentored high-performing engineering teams building custom web, mobile, and hardware solutions.
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                        Outcome & Measurable Impact
                      </div>
                      <p className="text-white font-medium leading-relaxed">
                        Built a sustainable engineering enterprise operating from Nigeria with commercial clients across Canada and the United States, creating dozens of high-skilled technical jobs and shipping 50+ enterprise rollouts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-5 mt-5 border-t border-white/[0.06] text-xs">
                  <div className="flex flex-wrap gap-1.5 text-[#a1a1a6]">
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">Web & Mobile Apps</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">Hardware R&D</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">US/Canada Footprint</span>
                  </div>
                  <a
                    href="https://mobirevo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                  >
                    <span>Visit Platform</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Ravex */}
            <div className="rounded-3xl bg-[#1c1c1e] border border-white/[0.06] overflow-hidden flex flex-col group hover:border-white/10 transition-all">
              <div className="h-52 overflow-hidden bg-[#121212] relative">
                <img
                  src={ravexProjectImg}
                  alt="Ravex - Digital Financial & Utility Payments Platform"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-xs font-semibold">
                  SDG 9 & 10: Financial Inclusion
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                  Nigeria & West Africa
                </div>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      <a
                        href="https://ravex.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Ravex (Ravex.app)</span>
                        <ExternalLink className="w-4 h-4 text-emerald-400" />
                      </a>
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Founder & CEO
                    </span>
                  </div>

                  <div className="space-y-3 mt-4 text-xs sm:text-sm">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e93] mb-1">
                        The Problem
                      </div>
                      <p className="text-[#a1a1a6] leading-relaxed">
                        Fragmented payment gateways, exorbitant transaction charges, and settlement delays create severe friction for micro-enterprises and everyday users paying bills and transacting digital assets in West Africa.
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e93] mb-1">
                        What Emmanuel Contributed
                      </div>
                      <p className="text-[#a1a1a6] leading-relaxed">
                        Founded Ravex Innovation Labs; established product roadmap, security protocols, automated API liquidity integrations, and bank-grade encryption pipelines for seamless utility and digital asset transactions.
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                        Outcome & Measurable Impact
                      </div>
                      <p className="text-white font-medium leading-relaxed">
                        Delivered a high-throughput, secure financial utility ecosystem enabling thousands of everyday transactions, expanding financial inclusion and economic liquidity across West Africa.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-5 mt-5 border-t border-white/[0.06] text-xs">
                  <div className="flex flex-wrap gap-1.5 text-[#a1a1a6]">
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">Utility Payments</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">Digital Assets</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">Instant Settlement</span>
                  </div>
                  <a
                    href="https://ravex.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                  >
                    <span>Visit Platform</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: ExamHall.net */}
            <div className="rounded-3xl bg-[#1c1c1e] border border-white/[0.06] overflow-hidden flex flex-col group hover:border-white/10 transition-all">
              <div className="h-52 overflow-hidden bg-[#121212] relative">
                <img
                  src={examhallProjectImg}
                  alt="ExamHall.net - Complete Exam & Assessment Platform"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                  SDG 4: Quality Education
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                  EdTech Infrastructure
                </div>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      <a
                        href="https://examhall.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>ExamHall.net</span>
                        <ExternalLink className="w-4 h-4 text-indigo-400" />
                      </a>
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      Board of Advisors
                    </span>
                  </div>

                  <div className="space-y-3 mt-4 text-xs sm:text-sm">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e93] mb-1">
                        The Problem
                      </div>
                      <p className="text-[#a1a1a6] leading-relaxed">
                        Physical examination administration across institutions is fraught with logistical costs, manual grading delays, security leakages, and lack of standardized analytics for students preparing for crucial qualifications.
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e93] mb-1">
                        What Emmanuel Contributed
                      </div>
                      <p className="text-[#a1a1a6] leading-relaxed">
                        Serving on the Board of Advisors; steering technical governance, algorithmic grading reliability, platform scaling, and strategic integration with institutional stakeholders.
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                        Outcome & Measurable Impact
                      </div>
                      <p className="text-white font-medium leading-relaxed">
                        Engineered a robust, end-to-end examination platform offering automated grading and test prep that reduces administrative overhead and promotes equitable learning evaluation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-5 mt-5 border-t border-white/[0.06] text-xs">
                  <div className="flex flex-wrap gap-1.5 text-[#a1a1a6]">
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">Automated Grading</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">Assessment Engine</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">Test Prep</span>
                  </div>
                  <a
                    href="https://examhall.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
                  >
                    <span>Visit Platform</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4: Monnee Inc. */}
            <div className="rounded-3xl bg-[#1c1c1e] border border-white/[0.06] overflow-hidden flex flex-col group hover:border-white/10 transition-all">
              <div className="h-52 bg-gradient-to-br from-[#0c1427] via-[#111f38] to-[#1e1b4b] relative flex items-center justify-center p-6 border-b border-white/[0.06]">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-3 shadow-lg group-hover:scale-105 transition-transform">
                    <Scale className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div className="text-xl font-bold text-white tracking-wide">Monnee Inc.</div>
                  <div className="text-xs text-blue-300 font-medium mt-1">Cross-Border Payment Solution</div>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  SDG 10: Reduced Inequalities
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                  Delaware, USA
                </div>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      <span>Monnee Inc.</span>
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Co-Founder & Technical Architect
                    </span>
                  </div>

                  <div className="space-y-3 mt-4 text-xs sm:text-sm">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e93] mb-1">
                        The Problem
                      </div>
                      <p className="text-[#a1a1a6] leading-relaxed">
                        African businesses, freelancers, and diasporan families face punishing cross-border transfer fees (often averaging 7–9%), days-long clearing latency, and opaque FX conversion markups.
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e93] mb-1">
                        What Emmanuel Contributed
                      </div>
                      <p className="text-[#a1a1a6] leading-relaxed">
                        Co-founded and formulated multi-currency ledger schemas, compliance routing frameworks, and transnational treasury management infrastructure adhering to Delaware corporate standards.
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                        Outcome & Measurable Impact
                      </div>
                      <p className="text-white font-medium leading-relaxed">
                        Established a compliant, low-friction cross-border payment corridor advancing UN SDG Target 10.c (reducing transaction costs of migrant remittances to under 3%).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-5 mt-5 border-t border-white/[0.06] text-xs">
                  <div className="flex flex-wrap gap-1.5 text-[#a1a1a6]">
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">Cross-Border Rails</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">Delaware Registered</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.05]">Remittance Equity</span>
                  </div>
                  <span className="text-xs text-[#8e8e93] font-medium">Delaware Entity</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. RECOMMENDATIONS & PEER ENDORSEMENTS */}
        <section className="py-16 sm:py-20 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">
                Recommendations & Endorsements
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Peer Endorsements & Recommendations
              </h2>
            </div>
            <a
              href="https://www.linkedin.com/in/ikechukwu-akwue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>View on LinkedIn</span>
              <span>↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {endorsements.map((rec, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-3xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/10 bg-[#252528]">
                        <img
                          src={rec.avatar}
                          alt={rec.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-base sm:text-lg font-bold text-white">
                            {rec.name}
                          </h3>
                          {rec.linkedIn && (
                            <a
                              href={rec.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                              title="View LinkedIn Profile"
                            >
                              <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-[#8e8e93] leading-snug mt-0.5 line-clamp-2">
                          {rec.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-sm sm:text-base text-[#e5e5ea] font-normal leading-relaxed mb-6 italic">
                    "{rec.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#8e8e93]">
                  <span>{rec.relationship}</span>
                  {rec.linkedIn && (
                    <a
                      href={rec.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 font-medium"
                    >
                      <span>LinkedIn Profile</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. GLOBAL PARTNERS / INSTITUTIONAL COLLABORATORS */}
        <section className="py-12 border-t border-white/[0.08]">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#737373]">
              Collaborators & Platforms That Trust Our Frameworks
            </span>
          </div>
          <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <img
              src={clientLogosImg}
              alt="Global Collaborators"
              className="h-10 sm:h-12 w-auto object-contain brightness-125"
            />
          </div>
        </section>

        {/* 10. OFFICIAL INVITATION REQUEST & CONTACT FOOTER */}
        <footer className="pt-16 sm:pt-24 pb-16 border-t border-white/[0.08]">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Future Action Summit Secretariat • Sydney / Melbourne, Australia</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.25] mb-6 max-w-3xl text-balance">
              Formal Delegate Inquiries & <br className="hidden sm:inline" />
              Official Invitation Issuance
            </h2>

            <p className="text-base sm:text-lg text-[#8e8e93] max-w-2xl mb-8 leading-relaxed">
              Available to submit full academic credentials, passport details for visa endorsement, and panel presentation abstracts upon request.
            </p>

            {/* Direct Email Action Form */}
            <form onSubmit={handleContactSubmit} className="max-w-lg mb-8">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl border border-[#333333] bg-[#141414] p-2 focus-within:border-[#3b82f6] transition-colors gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter summit board / committee email"
                  required
                  className="flex-1 bg-transparent px-4 py-3 text-base text-white placeholder-[#666666] outline-none"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] active:scale-95 text-white text-base font-semibold rounded-xl transition-all shadow-md shrink-0 text-center"
                >
                  {submitted ? 'Request Sent!' : 'Request Dossier'}
                </button>
              </div>
            </form>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#8e8e93]">
              <a
                href="mailto:ogaonyi@yahoo.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 transition-colors"
              >
                <span>ogaonyi@yahoo.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/eikechukwu39/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#202020] hover:bg-[#282828] text-white transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>Verify on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Sub-footer Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-sm sm:text-base text-[#737373] border-t border-white/[0.06]">
            <span>© 2026 Ikechukwu Emmanuel Akwue • Future Action Summit Australia Delegate Candidate</span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/eikechukwu39/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                linkedin.com/in/eikechukwu39
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
