import React from 'react';
import { X, ExternalLink, Calendar, Clock, Tag, BookOpen, Share2 } from 'lucide-react';
import { SubstackPost } from '../types';
import { SUBSTACK_URL } from '../data/content';

interface ArticleModalProps {
  post: SubstackPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div
      id="article-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="article-modal-card"
        className="bg-slate-900 border border-amber-500/30 rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative text-left my-8 max-h-[90vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition cursor-pointer"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Post Metadata */}
        <div className="space-y-4 pr-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="px-2.5 py-1 rounded bg-amber-500/15 text-amber-400 font-semibold uppercase tracking-wider text-[10px]">
              Substack Publication
            </span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishedAt}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h2 className="font-serif-legal text-2xl sm:text-3xl font-bold text-white leading-snug">
            {post.title}
          </h2>

          <p className="text-amber-300 text-sm font-medium">
            {post.subtitle}
          </p>

          <div className="flex items-center space-x-2 text-xs text-slate-400 pt-1 pb-4 border-b border-slate-800">
            <span>By <strong className="text-slate-200">{post.author}</strong></span>
            <span>•</span>
            <span>Men of Legal Honor Charlotte Collective</span>
          </div>
        </div>

        {/* Content Body / Excerpt Highlights */}
        <div className="py-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p className="font-serif-legal italic text-slate-200 text-base border-l-2 border-amber-500 pl-4 py-1">
            "{post.excerpt}"
          </p>

          <p>
            In this essay from our Substack publication, we explore practical litigation strategies for self-represented parties in North Carolina jurisdictions. Navigating statutory frameworks, deadlines, and evidentiary hurdles requires discipline, emotional balance, and precise document structuring.
          </p>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-serif-legal">
              Key Strategic Takeaways:
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
              <li>Mastering local court calendaring rules and certificate of service requirements.</li>
              <li>Maintaining clear, factual narratives in affidavits without speculative commentary.</li>
              <li>Leveraging peer support circles to mitigate anxiety and maintain courtroom composure.</li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <Tag className="w-3.5 h-3.5 text-slate-500" />
          {post.tags.map((t, idx) => (
            <span key={idx} className="text-[11px] px-2.5 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700">
              #{t}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs uppercase font-semibold text-slate-400 hover:text-white transition cursor-pointer"
          >
            Close Reader
          </button>
          
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-amber-500/20 transition flex items-center justify-center space-x-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read Complete Post On Substack</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
