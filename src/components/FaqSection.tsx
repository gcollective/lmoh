import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Scale, ShieldAlert } from 'lucide-react';
import { FAQ_DATA } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Services', 'Responsibility & Privilege', 'Credentials & Ethics', 'Form & Deadlines'];

  const toggleFaq = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQ_DATA.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.35em] text-amber-500 uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Clarity &amp; Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto" />
          <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our pro-se advocacy scope, UNC peer credentials, and intake process.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., attorney-client privilege, peer support, filing)..."
              className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-850 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-slate-900/50 rounded-xl border border-slate-800 text-slate-400 text-xs">
              No frequently asked questions match your query.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden transition-all shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-serif-legal font-semibold text-white hover:text-amber-400 transition-colors cursor-pointer gap-4"
                  >
                    <span className="text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded bg-slate-950 text-amber-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 font-light space-y-2">
                      <p>{faq.answer}</p>
                      <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions banner */}
        <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif-legal text-sm font-bold text-white">
              Have a specific question about your case?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Submit your inquiry through our preliminary case review intake form.
            </p>
          </div>
          <a
            href="#intake"
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition whitespace-nowrap"
          >
            Start Case Intake
          </a>
        </div>

      </div>
    </section>
  );
};
