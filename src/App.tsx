import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { LatestPosts } from './components/LatestPosts';
import { Footer } from './components/Footer';
import { BlogPostPage } from './components/BlogPostPage';
import { HeavyEquipmentPage } from './components/HeavyEquipmentPage';
import { BlogPost, BLOG_POSTS } from './data/posts';
import { ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Sync route based on window.location.pathname and window.location.hash
  useEffect(() => {
    const syncRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('heavy-equipment-operator') || hash.includes('heavy-equipment-operator')) {
        setCurrentRoute('heavy-equipment');
        setSelectedPost(null);
        return;
      }

      if (hash.startsWith('#blog/')) {
        const slug = hash.replace('#blog/', '');
        const found = BLOG_POSTS.find((p) => p.slug === slug);
        if (found) {
          setSelectedPost(found);
          setCurrentRoute('home');
          return;
        }
      }

      setCurrentRoute('home');
      setSelectedPost(null);
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  const navigateToHeavyEquipment = () => {
    setCurrentRoute('heavy-equipment');
    setSelectedPost(null);
    window.history.pushState({}, '', '/heavy-equipment-operator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentRoute('home');
    setSelectedPost(null);
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.location.hash = `#blog/${post.slug}`;
  };

  const handleBackToPortfolio = () => {
    setSelectedPost(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Heavy Equipment Operator Route
  if (currentRoute === 'heavy-equipment') {
    return <HeavyEquipmentPage onNavigateHome={navigateToHome} />;
  }

  // Render Blog Post Page
  if (selectedPost) {
    return (
      <BlogPostPage
        post={selectedPost}
        onBack={handleBackToPortfolio}
        onSelectPost={handleSelectPost}
      />
    );
  }

  // Render UX/UI Design Portfolio Route
  return (
    <div className="min-h-screen bg-[#181818] text-white selection:bg-blue-600 selection:text-white">
      {/* Route Switcher / Header Badge */}
      <div className="border-b border-white/[0.06] bg-[#141414]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl lg:max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8e8e93]">
              Route: <span className="text-white">/</span> (UX/UI Designer)
            </span>
          </div>
          <button
            onClick={navigateToHeavyEquipment}
            className="text-xs sm:text-sm font-medium text-[#3b82f6] hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
          >
            <span>Switch to /heavy-equipment-operator</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <main className="max-w-5xl lg:max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-8">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Services />
        <Projects />
        <Testimonials />
        <LatestPosts onSelectPost={handleSelectPost} />
        <Footer />
      </main>
    </div>
  );
};

export default App;
