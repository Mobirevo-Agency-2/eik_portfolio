import React, { useState } from 'react';
import {
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { LinkedInIcon, InstagramIcon, TikTokIcon } from './Icons';
import { TruckDrivingIcon, ForkliftIcon, CraneIcon } from './EquipmentIcons';
import { Footer } from './Footer';
import cameronAvatar from '../assets/cameron_hd.png';
import clientLogosImg from '../assets/client_logos_hd.png';
import cardWebsite from '../assets/mockup_website_hd.png';
import cardApp from '../assets/mockup_app_hd.png';
import cardLanding from '../assets/mockup_landing_hd.png';
import avatarFleece from '../assets/avatar_fleece_hd.png';
import avatarAtika from '../assets/avatar_atika.png';
import avatarJane from '../assets/avatar_jane.png';

export const HeavyEquipmentPage: React.FC = () => {
  // Testimonials Carousel state
  const testimonials = [
    {
      name: 'Fleece Marigold',
      role: 'Project Superintendent',
      avatar: avatarFleece,
      quote:
        'As a fellow logistics lead, I was blown away by the precision and safety demonstrated in Cameron work. His ability to maneuver Class A heavy haul trucks, operate multi-ton mobile cranes, and manage busy forklift yards is truly remarkable. Collaborating with him was not only seamless but also inspiring. I highly recommend Cameron to any freight or construction enterprise.',
    },
    {
      name: 'Atika Jahin',
      role: 'Fleet Logistics Director',
      avatar: avatarAtika,
      quote:
        'Cameron operated our 80-ton mobile cranes and heavy haul fleet across complex urban project corridors. Zero incidents, immaculate logbooks, and surgical precision on high-tonnage blind lifts.',
    },
    {
      name: 'Jane Cooper',
      role: 'Site Safety Inspector',
      avatar: avatarJane,
      quote:
        'From daily pre-trip walkarounds to OSHA-standard forklift rigging, Cameron sets the benchmark for safe machinery handling and team coordination across every terminal.',
    },
  ];

  const [testiIndex, setTestiIndex] = useState(0);
  const currentTesti = testimonials[testiIndex];

  const handlePrevTesti = () => {
    setTestiIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTesti = () => {
    setTestiIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white selection:bg-blue-600 selection:text-white">
      <main className="max-w-5xl lg:max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-8">
        {/* 1. HERO SECTION */}
        <section className="pt-12 sm:pt-20 pb-16 sm:pb-24">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 lg:gap-16 mb-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-tight text-white leading-[1.12] mb-6">
                Hi, I’m Cameron Williamson.
              </h1>
              <p className="text-xl sm:text-2xl text-[#9a9a9f] font-normal leading-relaxed mb-8">
                And a{' '}
                <span className="text-[#3b82f6] font-semibold">
                  Heavy Equipment Operator
                </span>{' '}
                specializing in Truck Driving, Forklift Operation, and Crane Operation with 10+ years experience.
              </p>

              {/* Social links */}
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
              Born and raised in UK, London, I got my start driving commercial haul trucks and operating counterbalanced forklifts for regional logistics terminals. After 6 1/2 years and 100+ delivered cargo consignments and freight dispatches, I moved into mobile and overhead crane operations for industrial infrastructure.
            </p>
            <p>
              Then in 2016, a major infrastructure and heavy machinery firm out of SF trusted us with complex high-tonnage lifting and long-haul freight operations. During the more than 4 years spent there, I transitioned into a lead operator—helping coordinate daily rigging operations, manage terminal forklift fleets, and maintain a 100% incident-free safety record.
            </p>
            <p>
              Now in 2020, I’m excited to be taking on a new challenge with an amazing Canadian transport and construction enterprise to operate heavy plant equipment, execute critical crane lifts, and drive heavy haul trucks.
            </p>
          </div>
        </section>

        {/* 2. SKILLS AND TOOLS */}
        <section className="py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12">
            Skills and Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-14 max-w-2xl">
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-start">
                <TruckDrivingIcon />
              </div>
              <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                Truck Driving
              </span>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-start">
                <ForkliftIcon />
              </div>
              <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                ForkLift Operation
              </span>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-start">
                <CraneIcon />
              </div>
              <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                Crane Operation
              </span>
            </div>
          </div>
        </section>

        {/* 3. WORK EXPERIENCE */}
        <section className="py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12">
            Work Experience
          </h2>

          <div className="space-y-4 max-w-4xl">
            {[
              {
                period: 'Jun 2019 - Running',
                company: 'Twinkle Logistics & Heavy Crane',
                location: 'Sylhet, Bangladesh',
                role: 'Lead Crane & Heavy Haul Operator',
              },
              {
                period: 'Dec 2017 - Aug 2018',
                company: 'Apex Heavy Freight Lines',
                location: 'CA, USA',
                role: 'Senior Truck Driver & Yard Specialist',
              },
              {
                period: 'Sep 2016 - Jan 2017',
                company: 'Lolipop Industrial Distribution',
                location: 'Mumbai, India',
                role: 'Lead Forklift Operator & Logistics Lead',
              },
              {
                period: 'Aug 2015 - Nov 2016',
                company: 'Fast Track Haulage & Plant',
                location: 'London, UK',
                role: 'Commercial Truck Driver & Rigger',
              },
            ].map((item, index) => (
              <div
                key={item.company}
                className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 py-6 ${
                  index < 3 ? 'border-b border-[#262626]' : ''
                }`}
              >
                <div className="w-full sm:w-64 shrink-0">
                  <span className="text-base text-[#8e8e93] font-normal">
                    {item.period}
                  </span>
                </div>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                        {item.company}
                      </h3>
                      <span className="text-sm sm:text-base text-[#8e8e93] font-normal">
                        {item.location}
                      </span>
                    </div>
                    <p className="text-base text-[#8e8e93] font-normal">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. EDUCATION */}
        <section className="py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12">
            Education
          </h2>

          <div className="space-y-4 max-w-4xl">
            {[
              {
                period: '2013 - 2015',
                institution: 'National Heavy Plant College',
                location: 'London, UK',
                degree: 'Commercial Truck Driving & Plant Certification',
              },
              {
                period: '2010 - 2013',
                institution: 'London Logistics & Transport Academy',
                location: 'London, UK',
                degree: 'Industrial Forklift & Warehouse Operations',
              },
              {
                period: '2008 - 2010',
                institution: 'Technical Crane & Rigging Institute',
                location: 'London, UK',
                degree: 'Mobile & Tower Crane Operation Fundamentals',
              },
              {
                period: '2016',
                institution: 'Construction Plant Competence Scheme (CPCS)',
                location: 'UK',
                degree: 'Certified Crane & Plant Operator (Category A60/A40)',
              },
            ].map((item, index) => (
              <div
                key={item.institution}
                className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 py-6 ${
                  index < 3 ? 'border-b border-[#262626]' : ''
                }`}
              >
                <div className="w-full sm:w-64 shrink-0">
                  <span className="text-base text-[#8e8e93] font-normal">
                    {item.period}
                  </span>
                </div>
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

        {/* 5. CERTIFICATIONS */}
        <section className="py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12">
            Certifications
          </h2>

          <div className="space-y-4 max-w-4xl">
            {[
              {
                period: '2021',
                issuer: 'NCCCO Operator Certification',
                location: 'San Francisco, CA',
                credential: 'Certified Mobile Crane & Tower Crane Operator',
              },
              {
                period: '2020',
                issuer: 'OSHA Powered Industrial Trucks',
                location: 'Mountain View, CA',
                credential: 'Certified Forklift Operator (Class I, IV & V)',
              },
              {
                period: '2019',
                issuer: 'Department of Transportation (DOT)',
                location: 'CA, USA',
                credential: 'Class A Commercial Driver’s License (CDL) with HazMat',
              },
              {
                period: '2018',
                issuer: 'Lifting Equipment Engineers (LEEA / LOLER)',
                location: 'London, UK',
                credential: 'Certified Rigger & Appointed Person for Crane Lifts',
              },
            ].map((item, index) => (
              <div
                key={item.issuer}
                className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 py-6 ${
                  index < 3 ? 'border-b border-[#262626]' : ''
                }`}
              >
                <div className="w-full sm:w-64 shrink-0">
                  <span className="text-base text-[#8e8e93] font-normal">
                    {item.period}
                  </span>
                </div>
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

        {/* 6. SERVICES */}
        <section className="py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-14">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12 mb-20 max-w-4xl">
            {[
              {
                title: 'Commercial Truck Driving & Haulage',
                description:
                  'The will snow derisively with likely and time lack good late claim salesman.',
                icon: <TruckDrivingIcon />,
              },
              {
                title: 'Precision Crane Operation & Rigging',
                description:
                  'The will snow derisively with likely and time lack good late claim salesman.',
                icon: <CraneIcon />,
              },
              {
                title: 'High-Capacity Forklift Logistics',
                description:
                  'The will snow derisively with likely and time lack good late claim salesman.',
                icon: <ForkliftIcon />,
              },
              {
                title: 'Heavy Load Safety & Inspection',
                description:
                  'The will snow derisively with likely and time lack good late claim salesman.',
                icon: <ShieldCheck className="w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" strokeWidth={1.8} />,
              },
            ].map((service) => (
              <div key={service.title} className="flex flex-col items-start">
                <div className="w-12 h-12 flex items-center justify-start mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-2.5">
                  {service.title}
                </h3>
                <p className="text-base text-[#8e8e93] leading-relaxed font-normal max-w-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Client Logos Bar */}
          <div className="pt-6 pb-16 flex items-center justify-start w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl">
            <img
              src={clientLogosImg}
              alt="Clients"
              className="w-full h-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
            />
          </div>
        </section>

        {/* 7. PROJECTS */}
        <section className="py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12">
            Projects
          </h2>

          <div className="space-y-10 sm:space-y-12">
            {[
              { title: 'Commercial Heavy Haul Transport', image: cardWebsite },
              { title: 'Precision Tower Crane Lifts', image: cardApp },
              { title: 'High-Density Forklift Logistics', image: cardLanding },
            ].map((project) => (
              <div
                key={project.title}
                className="w-full rounded-[28px] sm:rounded-[36px] bg-[#e6e8eb] p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[340px] sm:min-h-[400px] lg:min-h-[460px] overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="w-full md:w-1/3 self-start md:self-center">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141414] tracking-tight">
                    {project.title}
                  </h3>
                </div>
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

        {/* 8. TESTIMONIALS */}
        <section className="py-16 sm:py-24 border-t border-b border-[#262626]">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-16">
            <div className="w-full lg:w-1/4 shrink-0">
              <h2 className="text-2xl sm:text-3xl font-medium text-[#8e8e93]">
                Testimonials
              </h2>
            </div>

            <div className="w-full lg:w-3/4 flex flex-col justify-between">
              <blockquote className="text-xl sm:text-2xl lg:text-[28px] font-normal text-white leading-[1.45] tracking-tight mb-12 transition-opacity duration-300">
                “{currentTesti.quote}”
              </blockquote>

              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <img
                    src={currentTesti.avatar}
                    alt={currentTesti.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
                      {currentTesti.name}
                    </h3>
                    <p className="text-sm text-[#8e8e93] font-normal mt-0.5">
                      {currentTesti.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrevTesti}
                    aria-label="Previous Testimonial"
                    className="w-11 h-11 rounded-full border border-[#383838] hover:border-white/50 text-[#8e8e93] hover:text-white flex items-center justify-center transition-all active:scale-95"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextTesti}
                    aria-label="Next Testimonial"
                    className="w-11 h-11 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center transition-all shadow-md active:scale-95"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. LATEST POSTS */}
        <section className="py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-14">
            Latest Posts
          </h2>

          <div className="space-y-10 sm:space-y-12 max-w-3xl">
            {[
              {
                date: '16 Jun 2021',
                title: 'Pre-Trip Inspection Protocol for Heavy Haul Class A Trucks',
                readTime: '6 min read',
                excerpt:
                  'Could cache devotion and over be reedy, not pitiful a even an be have morning, found way has.',
              },
              {
                date: '16 Jun 2021',
                title: 'Forklift Center of Gravity: Preventing Tip-Overs on Ramps',
                readTime: '5 min read',
                excerpt:
                  'Could cache devotion and over be reedy, not pitiful a even an be have morning, found way has.',
              },
              {
                date: '16 Jun 2021',
                title: 'Crane Lift Planning: Calculating Radius, Capacity & Wind Loads',
                readTime: '4 min read',
                excerpt:
                  'Could cache devotion and over be reedy, not pitiful a even an be have morning, found way has.',
              },
              {
                date: '16 Jun 2021',
                title: 'Mastering Blind Lifts: Signal Person Protocols and Radios',
                readTime: '7 min read',
                excerpt:
                  'Could cache devotion and over be reedy, not pitiful a even an be have morning, found way has.',
              },
            ].map((post) => (
              <article
                key={post.title}
                className="group cursor-pointer rounded-xl transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <time className="text-sm text-[#8e8e93] font-normal">
                    {post.date}
                  </time>
                  <span className="text-[#555555]">•</span>
                  <span className="text-xs text-[#3b82f6] font-medium">
                    {post.readTime}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-[#3b82f6] transition-colors mb-3">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#666666] group-hover:text-[#3b82f6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                </div>

                <p className="text-base text-[#8e8e93] leading-relaxed font-normal">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 10. FOOTER (Shared Component with balanced typography) */}
        <Footer />
      </main>
    </div>
  );
};
