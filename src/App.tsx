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
import { FutureActionSummitPage } from './components/FutureActionSummitPage';
import { BlogPost, BLOG_POSTS, fetchBlogPosts } from './data/posts';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);

  // Attempt to fetch live blog posts if an API endpoint is configured
  useEffect(() => {
    let isMounted = true;
    fetchBlogPosts().then((fetched) => {
      if (isMounted && fetched && fetched.length > 0) {
        setPosts(fetched);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Sync route based on window.location.pathname and window.location.hash
  useEffect(() => {
    const syncRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('future-action-summit') || hash.includes('future-action-summit')) {
        window.history.replaceState(null, '', '/impact');
        setCurrentRoute('impact');
        setSelectedPost(null);
        document.title = 'Ikechukwu Emmanuel Akwue — Future Action Summit Australia Delegate';
        return;
      }

      if (path.includes('impact') || hash.includes('impact')) {
        setCurrentRoute('impact');
        setSelectedPost(null);
        document.title = 'Ikechukwu Emmanuel Akwue — Future Action Summit Australia Delegate';
        return;
      }

      if (path.includes('heavy-equipment-operator') || hash.includes('heavy-equipment-operator')) {
        setCurrentRoute('heavy-equipment');
        setSelectedPost(null);
        document.title = 'Ikechukwu Emmanuel Akwue — Heavy Equipment Operator';
        return;
      }

      if (hash.startsWith('#blog/')) {
        const slug = hash.replace('#blog/', '');
        const found = posts.find((p) => p.slug === slug);
        if (found) {
          setSelectedPost(found);
          setCurrentRoute('home');
          document.title = `${found.title} — Ikechukwu Emmanuel Akwue`;
          return;
        }
      }

      setCurrentRoute('home');
      setSelectedPost(null);
      document.title = 'Ikechukwu Emmanuel Akwue — Technology Leader & Product Strategist';
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, [posts]);

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.location.hash = `#blog/${post.slug}`;
  };

  const handleBackToPortfolio = () => {
    setSelectedPost(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Impact / Future Action Summit Route
  if (currentRoute === 'impact' || currentRoute === 'future-action-summit') {
    return <FutureActionSummitPage />;
  }

  // Render Heavy Equipment Operator Route
  if (currentRoute === 'heavy-equipment') {
    return <HeavyEquipmentPage />;
  }

  // Render Blog Post Page
  if (selectedPost) {
    return (
      <BlogPostPage
        post={selectedPost}
        allPosts={posts}
        onBack={handleBackToPortfolio}
        onSelectPost={handleSelectPost}
      />
    );
  }

  // Render UX/UI Design Portfolio Route (Clean, standalone)
  return (
    <div className="min-h-screen bg-[#181818] text-white selection:bg-blue-600 selection:text-white">
      <main className="max-w-5xl lg:max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-8">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Services />
        <Projects />
        <Testimonials />
        <LatestPosts posts={posts} onSelectPost={handleSelectPost} />
        <Footer />
      </main>
    </div>
  );
};

export default App;
