import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="pt-16 sm:pt-24 pb-16">
      {/* Call To Action */}
      <div className="mb-24">
        {/* Balanced, orphan-free headline for all screen widths */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.25] mb-10 max-w-3xl text-balance">
          If You Have Any Project <br className="hidden sm:inline" />
          Just Drop Me An Email Here
        </h2>

        {/* Email Input + Contact Button */}
        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl border border-[#333333] bg-[#141414] p-2 focus-within:border-[#3b82f6] transition-colors gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent px-4 py-3 text-base text-white placeholder-[#666666] outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] active:scale-95 text-white text-base font-semibold rounded-xl transition-all shadow-md shrink-0 text-center"
            >
              {submitted ? 'Sent!' : 'Contact'}
            </button>
          </div>
        </form>
      </div>

      {/* Sub-footer / Copyright */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-sm sm:text-base text-[#737373] border-t border-white/[0.06]">
        <span>©cameron willamson</span>
        <a
          href="mailto:contact@cameron.com"
          className="hover:text-white transition-colors"
        >
          contact@cameron.com
        </a>
      </div>
    </footer>
  );
};
