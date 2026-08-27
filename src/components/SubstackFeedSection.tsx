import React, { useState, useEffect } from 'react';
import { BookOpen, ExternalLink, Calendar, Clock, ArrowRight, Rss, Search, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';
import { SUBSTACK_POSTS, SUBSTACK_URL } from '../data/content';
import { SubstackPost } from '../types';
import { ArticleModal } from './ArticleModal';
import { fetchLiveSubstackPosts } from '../utils/substackRss';

export const SubstackFeedSection: React.FC = () => {
  const [posts, setPosts] = useState<SubstackPost[]>(SUBSTACK_POSTS);
  const [selectedPost, setSelectedPost] = useState<SubstackPost | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [emailInput, setEmailInput] = useState<string>('');
  const [subscribedMessage, setSubscribedMessage] = useState<boolean>(false);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<{ source: 'live_rss' | 'cached_curated'; lastFetched: string }>({
    source: 'cached_curated',
    lastFetched: 'Initial Load'
  });

  const syncFeed = async () => {
    setIsSyncing(true);
    try {
      const res = await fetchLiveSubstackPosts();
      if (res.posts && res.posts.length > 0) {
        setPosts(res.posts);
      }
      setSyncStatus({ source: res.source, lastFetched: res.lastFetched });
    } catch (e) {
      console.error("Failed to sync Substack feed:", e);
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    syncFeed();
  }, []);

  const allTags = ['All', 'Foundational Rights', 'Pro-Se Rights', 'Peer Support', 'North Carolina', 'Criminal Law', 'Post-Conviction'];

  const filteredPosts = activeFilter === 'All'
    ? posts
    : posts.filter(p => p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(t.toLowerCase())));

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    window.open(`${SUBSTACK_URL}?email=${encodeURIComponent(emailInput)}`, '_blank');
    setSubscribedMessage(true);
    setEmailInput('');
  };

  return (
    <section id="blog" className="py-20 md:py-28 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header with Substack Link and Dynamic Sync Indicator */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.35em] text-amber-500 uppercase">
                <Rss className="w-3.5 h-3.5 text-amber-500" />
                <span>Official Publication</span>
              </div>
              <span className="text-[10px] font-mono-legal text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {syncStatus.source === 'live_rss' ? 'Live RSS Synced' : 'Auto-Sync Active'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white">
              The Substack Journal
            </h2>
            <div className="h-1 w-20 bg-amber-500" />
            <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
              In-depth essays, pro-se litigation strategies, court analyses, and peer support insights direct from Charlotte, NC. Dynamic RSS sync pulls newly published articles automatically.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={syncFeed}
              disabled={isSyncing}
              className="px-4 py-3 bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-[11px] font-bold uppercase tracking-widest transition flex items-center space-x-2 cursor-pointer disabled:opacity-50"
              title="Poll latest RSS entries from Substack"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-amber-400 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Syncing RSS...' : 'Check For New Posts'}</span>
            </button>

            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="substack-header-cta"
              className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-widest transition-all flex items-center space-x-2 border border-amber-400 shadow-lg shadow-amber-500/10"
            >
              <span>Visit Substack Publication</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-slate-900 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase text-slate-500 font-bold tracking-widest mr-2">
              Topics:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider transition cursor-pointer ${
                  activeFilter === tag
                    ? 'bg-amber-500 text-slate-950 font-black'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono-legal flex items-center gap-2">
            <span>Last feed poll:</span>
            <span className="text-slate-400">{syncStatus.lastFetched}</span>
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className={`bg-slate-900/50 border ${post.pinned ? 'border-amber-500/80 bg-slate-900/80' : 'border-slate-800'} hover:border-amber-500 rounded p-7 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl relative`}
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono-legal">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{post.publishedAt}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  {post.pinned ? (
                    <span className="px-2 py-0.5 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest">
                      Latest Entry
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase text-slate-500 font-mono-legal">
                      Vol. I Dispatch
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  onClick={() => setSelectedPost(post)}
                  className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors cursor-pointer leading-snug"
                >
                  {post.title}
                </h3>

                {/* Subtitle / Excerpt */}
                <p className="text-slate-300 text-xs leading-relaxed font-light">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-slate-950 text-slate-400 border border-slate-800 rounded font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-[11px] font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300 flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Quick Read</span>
                  <BookOpen className="w-3.5 h-3.5" />
                </button>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-amber-500 hover:text-amber-400 flex items-center space-x-1 transition font-black uppercase tracking-wider"
                >
                  <span>Open on Substack</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Substack Newsletter Banner */}
        <div className="bg-slate-900/70 border border-slate-800 border-l-4 border-l-amber-500 rounded-r p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center space-x-2 text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Stay Empowered with Direct Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Subscribe to Men of Legal Honor Dispatch
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Join our newsletter on Substack for weekly breakdowns of North Carolina criminal statutes, self-representation procedural guides, and peer encouragement stories.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="flex-1 bg-slate-950 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded px-4 py-3 text-xs text-white placeholder-slate-500 outline-none transition"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded-none transition shadow-lg shadow-amber-500/10 whitespace-nowrap cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
                {subscribedMessage && (
                  <p className="text-xs text-amber-300 flex items-center space-x-1">
                    <span>Redirecting to Substack subscription portal...</span>
                  </p>
                )}
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono-legal">
                  Read free online at{' '}
                  <a
                    href={SUBSTACK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-amber-400 underline font-bold"
                  >
                    menoflegalhonorcharlotte.substack.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>

      {/* Reader Modal */}
      <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};
