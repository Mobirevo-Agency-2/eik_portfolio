import React from 'react';
import { BlogPost, BLOG_POSTS } from '../data/posts';
import { ArrowUpRight } from 'lucide-react';

interface LatestPostsProps {
  onSelectPost?: (post: BlogPost) => void;
}

export const LatestPosts: React.FC<LatestPostsProps> = ({ onSelectPost }) => {
  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-14">
        Latest Posts
      </h2>

      <div className="space-y-10 sm:space-y-12 max-w-3xl">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            onClick={() => onSelectPost?.(post)}
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
  );
};
