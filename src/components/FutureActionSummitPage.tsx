import React, { useState } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Globe,
  Leaf,
  Brain,
  Award,
  Sparkles,
  FileCheck,
  Compass,
  CheckCircle2,
  Mail,
  MapPin,
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import cameronAvatar from '../assets/cameron_hd.png';
import clientLogosImg from '../assets/client_logos_hd.png';
import cardWebsite from '../assets/mockup_website_hd.png';
import cardApp from '../assets/mockup_app_hd.png';
import cardLanding from '../assets/mockup_landing_hd.png';
import avatarFleece from '../assets/avatar_fleece_hd.png';
import avatarAtika from '../assets/avatar_atika.png';
import avatarJane from '../assets/avatar_jane.png';

export const FutureActionSummitPage: React.FC = () => {
  // Testimonials Carousel state
  const endorsements = [
    {
      name: 'Dr. Aris Thorne',
      role: 'Director of Global Policy, Future Horizons Network',
      avatar: avatarFleece,
      quote:
        'Cameron’s perspective on ethical digital systems and sustainable innovation is exactly what Australia’s Future Action Summit champions. His presence as an international delegate will elevate our panels on tech-led climate resilience and scalable public infrastructure.',
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Innovation Officer, Pacific Impact Council',
      avatar: avatarAtika,
      quote:
        'Cameron represents the next generation of global changemakers—combining rigorous human-centered design with deep ecological and societal awareness. I wholeheartedly endorse his participation in the Future Action Summit.',
    },
    {
      name: 'Marcus Vance',
      role: 'Chairperson, Ethical Technology Roundtable',
      avatar: avatarJane,
      quote:
        'A rare leader who turns complex sustainability targets into actionable, human-centered software architectures. Cameron will be an indispensable contributor to the summit’s working groups and policy deliberations.',
    },
  ];

  const [testiIndex, setTestiIndex] = useState(0);
  const currentTesti = endorsements[testiIndex];

  const handlePrevTesti = () => {
    setTestiIndex((prev) => (prev === 0 ? endorsements.length - 1 : prev - 1));
  };

  const handleNextTesti = () => {
    setTestiIndex((prev) => (prev === endorsements.length - 1 ? 0 : prev + 1));
  };

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

              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-white leading-[1.12] mb-6">
                Hi, I’m Cameron Williamson.
              </h1>
              <p className="text-xl sm:text-2xl text-[#9a9a9f] font-normal leading-relaxed mb-8">
                Design Strategist, Technologist &{' '}
                <span className="text-[#3b82f6] font-semibold">
                  Sustainable Innovation Leader
                </span>{' '}
                applying as an Official Delegate & Contributor to the Future Action Summit in Australia.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#statement-of-intent"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] active:scale-95 text-white font-semibold rounded-2xl transition-all shadow-lg shadow-blue-500/20 text-sm sm:text-base"
                >
                  <span>Review Delegate Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="mailto:contact@cameron.com?subject=Future%20Action%20Summit%20Australia%20-%20Official%20Delegate%20Invitation"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#202020] hover:bg-[#282828] border border-white/10 active:scale-95 text-white font-medium rounded-2xl transition-all text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Request Official Invitation</span>
                </a>
              </div>
            </div>

            {/* Profile Avatar Card */}
            <div className="flex flex-col items-center md:items-end">
              <div className="relative group">
                <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl p-1.5 relative z-10">
                  <img
                    src={cameronAvatar}
                    alt="Cameron Williamson"
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
                Years Driving Global Impact
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.05]">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                14M+
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#8e8e93]">
                Users Reached on Scaled Systems
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.05]">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">
                38%
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#8e8e93]">
                Digital Carbon Waste Reduced
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.05]">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                18+
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#8e8e93]">
                Cross-Border Public Initiatives
              </div>
            </div>
          </div>
        </section>

        {/* 2. SUMMIT PILLARS ALIGNMENT */}
        <section className="py-16 sm:py-20 border-t border-white/[0.08]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">
              Core Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Alignment With Future Action Summit Themes
            </h2>
            <p className="text-base sm:text-lg text-[#8e8e93] mt-3">
              Addressing the central challenges deliberated at the Australian summit: environmental sustainability, ethical technological acceleration, and equitable global access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-7 rounded-3xl bg-[#1c1c1e] border border-white/[0.06] hover:border-blue-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Sustainable Digital Infrastructure
              </h3>
              <p className="text-sm text-[#8e8e93] leading-relaxed">
                Pioneering carbon-aware web design, edge computing efficiency, and regenerative software architectures that significantly lower compute emissions across public and private infrastructure.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-3xl bg-[#1c1c1e] border border-white/[0.06] hover:border-blue-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Ethical AI & Algorithmic Governance
              </h3>
              <p className="text-sm text-[#8e8e93] leading-relaxed">
                Formulating transparent human-in-the-loop workflows, bias mitigation protocols, and responsible AI governance models ensuring automated systems preserve equity and democratic trust.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-3xl bg-[#1c1c1e] border border-white/[0.06] hover:border-blue-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Asia-Pacific & Cross-Border Equity
              </h3>
              <p className="text-sm text-[#8e8e93] leading-relaxed">
                Designing resilient, offline-first mobile utilities engineered specifically for bandwidth-limited regional zones, remote indigenous communities, and humanitarian disaster corridors.
              </p>
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
                  Australia stands at the forefront of international climate transition leadership, indigenous environmental stewardship, and forward-looking digital policy. The Future Action Summit represents a pivotal convergence point where global leaders formulate the tangible blueprints for tomorrow.
                </p>
                <p>
                  As an official delegate, my objective is twofold: first, to present our battle-tested methodologies on decarbonizing large-scale software platforms and implementing ethical algorithmic controls; second, to actively absorb the groundbreaking insights from Australian researchers, policymakers, and civic innovators to synthesize cross-continental action plans.
                </p>
                <p className="text-white font-medium">
                  I am prepared to actively participate in summit roundtables, contribute to open policy whitepapers, and serve as an energetic ambassador representing sustainable digital transformation.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                    <img
                      src={cameronAvatar}
                      alt="Cameron Williamson"
                      className="w-full h-full object-cover grayscale contrast-125"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Cameron Williamson
                    </div>
                    <div className="text-xs text-[#8e8e93]">
                      Design Strategist & Technology Leader
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:contact@cameron.com?subject=Future%20Action%20Summit%20Australia%20-%20Official%20Invitation"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Issue Official Summit Invitation</span>
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
            {/* Experience Item 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <h3 className="text-xl font-bold text-white">
                    Principal Product & Sustainability Strategist
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 w-fit">
                  2022 - Present
                </span>
              </div>
              <div className="text-sm font-medium text-[#8e8e93] mb-4">
                Horizon Global Initiatives • Cross-Continental Architecture
              </div>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                Formulated enterprise-wide green design systems across 14 cloud applications, cutting digital emissions by 38% while improving accessibility standards for 14M+ active global users. Advised international steering committees on responsible procurement and algorithmic fairness.
              </p>
            </div>

            {/* Experience Item 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <h3 className="text-xl font-bold text-white">
                    Lead Innovation Architect & Policy Fellow
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 w-fit">
                  2019 - 2022
                </span>
              </div>
              <div className="text-sm font-medium text-[#8e8e93] mb-4">
                Terra Nova Climate Tech • Asia-Pacific Regional Hub
              </div>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                Built open climate data visualization platforms deployed across municipal stakeholders in the Asia-Pacific region. Synthesized complex environmental sensor feeds into intuitive crisis mitigation portals recognized by environmental regulatory councils.
              </p>
            </div>

            {/* Experience Item 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <h3 className="text-xl font-bold text-white">
                    Senior Product Experience Designer
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 w-fit">
                  2016 - 2019
                </span>
              </div>
              <div className="text-sm font-medium text-[#8e8e93] mb-4">
                Aetheria Labs • AI Ethics Division
              </div>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                Spearheaded design oversight on predictive machine learning interfaces for healthcare and emergency relief distribution, ensuring transparency, explainability, and unbiased resource allocation.
              </p>
            </div>

            {/* Experience Item 4 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <h3 className="text-xl font-bold text-white">
                    Lead Digital Systems Specialist
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 w-fit">
                  2013 - 2016
                </span>
              </div>
              <div className="text-sm font-medium text-[#8e8e93] mb-4">
                NextWave Digital • Regional Connectivity Initiative
              </div>
              <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                Engineered low-bandwidth, accessible mobile web applications delivering critical educational and civic services to remote regional communities with severe network constraints.
              </p>
            </div>
          </div>
        </section>

        {/* 5. EDUCATION & GLOBAL FELLOWSHIPS */}
        <section className="py-16 sm:py-20 border-t border-white/[0.08]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Education & Global Fellowships
            </h2>
            <p className="text-sm sm:text-base text-[#8e8e93] mt-2">
              Advanced qualifications combining software architecture with sustainable leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1c1c1e] border border-white/[0.06]">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                2020 - 2022
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                M.S. in Sustainable Technology & HCI
              </h3>
              <div className="text-sm text-[#8e8e93] mb-3">
                Global Innovation Institute (Melbourne Exchange)
              </div>
              <p className="text-xs text-[#a1a1a6] leading-relaxed">
                Thesis on carbon-neutral client interactions and edge data architectures for climate-sensitive regional services.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#1c1c1e] border border-white/[0.06]">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                2018 - 2019
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Executive Leadership in Climate Policy
              </h3>
              <div className="text-sm text-[#8e8e93] mb-3">
                Cambridge Institute for Sustainability Leadership (CISL)
              </div>
              <p className="text-xs text-[#a1a1a6] leading-relaxed">
                Strategic governance, cross-border carbon accounting, and public-private sustainability consortium frameworks.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#1c1c1e] border border-white/[0.06]">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                2009 - 2013
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                B.S. in Digital Systems & Interface Architecture
              </h3>
              <div className="text-sm text-[#8e8e93] mb-3">
                University School of Engineering & Design
              </div>
              <p className="text-xs text-[#a1a1a6] leading-relaxed">
                First Class Honors with distinction in distributed systems design and human-machine interaction ergonomics.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <Award className="w-7 h-7 text-emerald-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">
                  Certified Sustainability & ESG Specialist
                </h4>
                <div className="text-xs text-[#8e8e93]">
                  Global ESG Council (CESG)
                </div>
              </div>
              <div className="mt-4 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                Issued 2023 • Verified
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-7 h-7 text-blue-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">
                  Ethical AI & Algorithmic Governance Lead
                </h4>
                <div className="text-xs text-[#8e8e93]">
                  IEEE Standards Association
                </div>
              </div>
              <div className="mt-4 text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                Issued 2022 • Verified
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <FileCheck className="w-7 h-7 text-indigo-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">
                  Circular Design Practitioner
                </h4>
                <div className="text-xs text-[#8e8e93]">
                  Ellen MacArthur Foundation Network
                </div>
              </div>
              <div className="mt-4 text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                Issued 2021 • Verified
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1c1c1e] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <Sparkles className="w-7 h-7 text-amber-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">
                  Executive Agile Change Agent
                </h4>
                <div className="text-xs text-[#8e8e93]">
                  Scrum Alliance Global
                </div>
              </div>
              <div className="mt-4 text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                Issued 2020 • Verified
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
                Selected Flagship Projects
              </h2>
            </div>
            <p className="text-sm text-[#8e8e93] max-w-sm">
              Showcasing quantifiable technological deliverables addressing sustainability, resilience, and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="rounded-3xl bg-[#1c1c1e] border border-white/[0.06] overflow-hidden flex flex-col group hover:border-white/10 transition-all">
              <div className="h-52 overflow-hidden bg-[#121212] relative">
                <img
                  src={cardWebsite}
                  alt="Gaia Carbon-Aware Cloud Experience"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  38% Emissions Drop
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                    Climate Tech Platform
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Gaia Carbon-Aware Cloud Experience
                  </h3>
                  <p className="text-sm text-[#8e8e93] leading-relaxed mb-4">
                    Real-time visual dashboard scheduling dynamic computation when regional electrical grids run on peak renewable energy.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] text-xs text-[#a1a1a6]">
                  <span className="px-2 py-0.5 rounded bg-white/[0.05]">Green UX</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05]">Telemetry APIs</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05]">Cloud Optimization</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="rounded-3xl bg-[#1c1c1e] border border-white/[0.06] overflow-hidden flex flex-col group hover:border-white/10 transition-all">
              <div className="h-52 overflow-hidden bg-[#121212] relative">
                <img
                  src={cardApp}
                  alt="EquiHealth Oceania Mobile Architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-xs font-semibold">
                  Zero Latency Offline
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                    Humanitarian Healthcare
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    EquiHealth Oceania Mobile Portal
                  </h3>
                  <p className="text-sm text-[#8e8e93] leading-relaxed mb-4">
                    Ultra-lightweight progressive web application built for remote regional communities and island networks facing irregular connectivity.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] text-xs text-[#a1a1a6]">
                  <span className="px-2 py-0.5 rounded bg-white/[0.05]">Offline-First</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05]">WCAG AAA</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05]">IndexedDB</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="rounded-3xl bg-[#1c1c1e] border border-white/[0.06] overflow-hidden flex flex-col group hover:border-white/10 transition-all">
              <div className="h-52 overflow-hidden bg-[#121212] relative">
                <img
                  src={cardLanding}
                  alt="ResilienceNet Climate Alert Engine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                  Multi-Channel Push
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                    Disaster Preparedness
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    ResilienceNet Crisis Alert Engine
                  </h3>
                  <p className="text-sm text-[#8e8e93] leading-relaxed mb-4">
                    Public emergency warning system supporting multi-lingual alerts across SMS, WebSockets, and broadcast frequencies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] text-xs text-[#a1a1a6]">
                  <span className="px-2 py-0.5 rounded bg-white/[0.05]">Public Safety</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05]">Real-Time Streaming</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05]">Fault Tolerant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. LETTERS OF ENDORSEMENT / PEER TESTIMONIALS */}
        <section className="py-16 sm:py-20 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">
                Peer Endorsements
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Letters of Support for Delegate Candidacy
              </h2>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevTesti}
                aria-label="Previous endorsement"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-[#1c1c1e] hover:bg-[#252528] flex items-center justify-center transition-colors text-white"
              >
                ←
              </button>
              <button
                onClick={handleNextTesti}
                aria-label="Next endorsement"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-[#1c1c1e] hover:bg-[#252528] flex items-center justify-center transition-colors text-white"
              >
                →
              </button>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#1c1c1e] border border-white/[0.06] relative">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-white/10">
                <img
                  src={currentTesti.avatar}
                  alt={currentTesti.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-white font-normal leading-relaxed mb-6 italic">
                  "{currentTesti.quote}"
                </blockquote>

                <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <div>
                    <div className="text-base font-bold text-white">
                      {currentTesti.name}
                    </div>
                    <div className="text-xs sm:text-sm text-[#8e8e93]">
                      {currentTesti.role}
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Official Endorsement
                  </span>
                </div>
              </div>
            </div>
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
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#202020] hover:bg-[#282828] text-white transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>Verify on LinkedIn</span>
              </a>

              <a
                href="mailto:contact@cameron.com?subject=Future%20Action%20Summit%20Australia%20-%20Official%20Invitation"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#202020] hover:bg-[#282828] text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contact@cameron.com</span>
              </a>
            </div>
          </div>

          {/* Sub-footer Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-sm sm:text-base text-[#737373] border-t border-white/[0.06]">
            <span>© 2026 Cameron Williamson • Future Action Summit Australia Delegate Candidate</span>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@cameron.com"
                className="hover:text-white transition-colors"
              >
                contact@cameron.com
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
