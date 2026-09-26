import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/posts';
import cameronAvatar from '../assets/cameron_hd.png';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack, onSelectPost }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post]);

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const nextPost = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length];

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      {/* Top Floating Navigation */}
      <header className="sticky top-0 z-50 bg-[#181818]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-[#8e8e93] hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#3b82f6] font-semibold bg-blue-500/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* Meta Header */}
        <div className="flex items-center gap-4 text-sm text-[#8e8e93] mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.2] mb-8">
          {post.title}
        </h1>

        {/* Author Bio Bar */}
        <div className="flex items-center justify-between py-6 border-y border-[#262626] mb-12">
          <div className="flex items-center gap-4">
            <img
              src={cameronAvatar}
              alt="Ikechukwu Emmanuel Akwue"
              className="w-12 h-12 rounded-full object-cover grayscale contrast-125 ring-2 ring-blue-500/30"
            />
            <div>
              <div className="text-base font-semibold text-white">
                Ikechukwu Emmanuel Akwue
              </div>
              <div className="text-sm text-[#8e8e93]">
                Founder & Technical Leader
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: post.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Article link copied to clipboard!');
              }
            }}
            aria-label="Share article"
            className="w-10 h-10 rounded-full border border-[#333333] hover:border-white/40 text-[#8e8e93] hover:text-white flex items-center justify-center transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Lead In */}
        <p className="text-xl sm:text-2xl text-[#d1d5db] font-normal leading-relaxed mb-10">
          {post.content.intro}
        </p>

        {/* Sections */}
        <div className="space-y-12">
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-5">
              <h2 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight pt-4">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-[#9ca3af] text-base sm:text-lg leading-[1.8] font-normal"
                >
                  {p}
                </p>
              ))}
              {section.quote && (
                <blockquote className="my-8 pl-6 border-l-4 border-[#3b82f6] italic text-lg sm:text-xl text-white font-medium leading-relaxed bg-white/[0.02] py-4 pr-4 rounded-r-xl">
                  “{section.quote}”
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Key Takeaway Box */}
        <div className="mt-14 rounded-2xl border border-[#2d2d2d] bg-[#1a1a1a] p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3b82f6] mb-3">
            Key Takeaway
          </h3>
          <p className="text-base sm:text-lg text-white leading-relaxed font-normal">
            {post.content.takeaway}
          </p>
        </div>

        {/* Next Post Recommendation */}
        <div className="mt-20 pt-10 border-t border-[#262626]">
          <span className="text-xs uppercase tracking-wider text-[#8e8e93] font-semibold block mb-4">
            Next Reading
          </span>
          <button
            onClick={() => onSelectPost(nextPost)}
            className="w-full text-left p-6 sm:p-8 rounded-2xl border border-[#2d2d2d] bg-[#1c1c1c] hover:border-blue-500/50 hover:bg-[#202020] transition-all group flex items-center justify-between"
          >
            <div>
              <span className="text-xs text-[#3b82f6] font-medium block mb-1">
                {nextPost.category} • {nextPost.readTime}
              </span>
              <h4 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {nextPost.title}
              </h4>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.05] group-hover:bg-[#2563eb] text-white flex items-center justify-center shrink-0 transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="px-8 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-sm font-medium transition-colors"
          >
            ← Back to All Projects & Posts
          </button>
        </div>
      </article>
    </div>
  );
};
