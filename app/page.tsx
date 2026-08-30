'use client';

import { useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Zap,
  ShieldCheck,
  Bot,
  X,
  MessageCircle,
  Send,
  Loader2,
  Image,
  Newspaper,
  LayoutDashboard,
  SearchCheck
} from 'lucide-react';

interface AppCard {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: 'live' | 'beta' | 'coming-soon';
  icon: React.ReactNode;
  href: string;
  learnMoreHref?: string;
}

const apps: AppCard[] = [
  {
    id: 'carousel-generator',
    name: 'LinkedIn Carousel Generator',
    tagline: 'One topic. Five slides. Ready to review.',
    description:
      'Firecrawl researches current sources, OpenAI writes the narrative, and OpenAI Image renders each slide. You review before publishing.',
    category: 'Content',
    status: 'live',
    icon: <Image className="w-5 h-5" />,
    href: 'https://dashboard-nine-dun-83.vercel.app/dashboard?workflow=carousel',
    learnMoreHref: 'https://github.com/rajvictor1/linkedin-automation-dashboard'
  },
  {
    id: 'newsletter-generator',
    name: 'AI Newsletter Generator',
    tagline: 'Cited drafts with real sources.',
    description:
      'Generate a structured newsletter with citations and an optional lead visual. Review, edit, and send to a fixed test recipient.',
    category: 'Content',
    status: 'live',
    icon: <Newspaper className="w-5 h-5" />,
    href: 'https://dashboard-nine-dun-83.vercel.app/dashboard?workflow=newsletter',
    learnMoreHref: 'https://github.com/rajvictor1/linkedin-content-automation'
  },
  {
    id: 'linkedin-automation',
    name: 'LinkedIn Automation Studio',
    tagline: 'Research, write, design, review. One workspace.',
    description:
      'The full BrandOps dashboard. Run carousel and newsletter workflows with streaming progress, review gates, and guarded publish actions.',
    category: 'Workspace',
    status: 'live',
    icon: <LayoutDashboard className="w-5 h-5" />,
    href: 'https://dashboard-nine-dun-83.vercel.app/dashboard',
    learnMoreHref: 'https://github.com/rajvictor1/linkedin-automation-dashboard'
  },
  {
    id: 'geo-seo-audit',
    name: 'GEO / SEO Audit Toolkit',
    tagline: 'Score your site for AI search.',
    description:
      'Run a six-category GEO + SEO audit. Get prioritized fixes, an action plan, and a hosted Vercel report you can share with clients.',
    category: 'Visibility',
    status: 'live',
    icon: <SearchCheck className="w-5 h-5" />,
    href: 'https://github.com/rajvictor1/geo-seo-audit-toolkit',
    learnMoreHref: 'https://report-imcrinox-2026-08-24.vercel.app'
  }
];

const statusBadge = (status: AppCard['status']) => {
  const map = {
    live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    beta: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'coming-soon': 'bg-slate-500/10 text-slate-400 border-slate-500/20'
  };
  return map[status];
};

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function submitFeedback(e: React.FormEvent) {
    e.preventDefault();
    if (!feedback.trim()) return;
    setSending(true);
    // Placeholder: wire to your feedback backend later
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSending(false);
    setSent(true);
    setFeedback('');
    setTimeout(() => {
      setSent(false);
      setChatOpen(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top nav */}
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-white">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="font-semibold text-lg tracking-tight">BrandOps Apps</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="#apps" className="hover:text-white transition-colors">Apps</a>
            <a href="https://brandops.site" className="hover:text-white transition-colors inline-flex items-center gap-1">
              BrandOps home
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — AI agent style */}
      <section className="pt-20 pb-12 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-indigo-400 text-sm font-medium tracking-wide mb-4">AI tools for solo operators</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
            One workspace of review-first products.
          </h1>
          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover AI tools that research, write, design, and audit for you. Every output stays behind your approval gate.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#apps"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:brightness-110 transition"
            >
              Browse apps
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.producthunt.com/products/brandops"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 text-sm font-medium hover:border-white/20 hover:text-white transition"
            >
              Launching on Product Hunt
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* App grid */}
      <section id="apps" className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {apps.map((app) => (
              <article
                key={app.id}
                className="group relative rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-indigo-500/40 transition-colors"
              >
                <a
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-0"
                  aria-label={`Open ${app.name}`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-800 text-indigo-400 border border-white/10">
                      {app.icon}
                    </span>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusBadge(app.status)}`}
                    >
                      {app.status.replace('-', ' ')}
                    </span>
                  </div>

                  <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mb-1">
                    {app.category}
                  </p>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-indigo-400 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-sm text-slate-200 font-medium mb-2">{app.tagline}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                    {app.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium">
                      Open App
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                    {app.learnMoreHref && (
                      <a
                        href={app.learnMoreHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/10 text-slate-400 text-sm font-medium hover:text-white hover:border-white/20 transition"
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why review-first */}
      <section id="why" className="py-14 px-6 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center">Why review-first?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: 'AI does the busywork',
                body: 'Research, writing, and first-draft design are automated. You focus on judgment.'
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: 'You own the publish button',
                body: 'Every carousel, newsletter, or post stops at your approval gate. No surprise posts.'
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: 'Built for solo operators',
                body: 'No enterprise sales process. Try a tool, get value, come back when it works.'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl border border-white/10 bg-slate-900">
                <div className="w-9 h-9 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-indigo-400 mb-3">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2026 BrandOps. Built for solo operators.</p>
          <div className="flex items-center gap-5 text-sm text-slate-500">
            <a href="https://brandops.site" className="hover:text-white transition-colors">BrandOps home</a>
            <a href="https://github.com/rajvictor1" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

      {/* Feedback widget — styled like AI agent chat */}
      <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
        {chatOpen && (
          <section
            aria-label="BrandOps feedback"
            className="mb-3 flex h-[360px] w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/40 sm:w-[360px]"
          >
            <header className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-indigo-600 text-white">
                  <Bot className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-white">BrandOps Feedback</h2>
                  <p className="text-xs text-emerald-400">Tell us what you think · we read every message</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Close feedback"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto bg-slate-950 p-4">
              {sent ? (
                <div className="flex justify-start">
                  <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-800 px-3.5 py-2.5 text-sm leading-relaxed text-slate-100">
                    Thanks for the feedback. The BrandOps team will review it soon.
                  </p>
                </div>
              ) : (
                <div className="flex justify-start">
                  <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-800 px-3.5 py-2.5 text-sm leading-relaxed text-slate-100">
                    Hi. Which app are you most excited to try, and what would make it easier to get started?
                  </p>
                </div>
              )}
            </div>

            {!sent && (
              <form onSubmit={submitFeedback} className="flex gap-2 border-t border-white/10 bg-slate-900 p-3">
                <label htmlFor="brandops-feedback-input" className="sr-only">Feedback</label>
                <input
                  id="brandops-feedback-input"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  maxLength={1000}
                  placeholder="Share feedback…"
                  autoComplete="off"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  disabled={!feedback.trim() || sending}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-600 text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send feedback"
                >
                  {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </form>
            )}
          </section>
        )}

        <button
          type="button"
          onClick={() => setChatOpen((c) => !c)}
          className="ml-auto grid h-14 w-14 place-items-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 transition hover:scale-105 hover:brightness-110"
          aria-label={chatOpen ? 'Close feedback' : 'Open feedback'}
          aria-expanded={chatOpen}
        >
          {chatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>
    </main>
  );
}
