'use client';

import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Zap,
  ShieldCheck
} from 'lucide-react';
import AppMockup from './components/AppMockup';

interface AppCard {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: 'live' | 'beta' | 'coming-soon';
  mockupType: 'carousel' | 'newsletter' | 'studio' | 'geo';
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
    mockupType: 'carousel',
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
    mockupType: 'newsletter',
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
    mockupType: 'studio',
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
    mockupType: 'geo',
    href: 'https://github.com/rajvictor1/geo-seo-audit-toolkit',
    learnMoreHref: 'https://report-imcrinox-2026-08-24.vercel.app'
  }
];

const categories = Array.from(new Set(apps.map((a) => a.category)));

const statusBadge = (status: AppCard['status']) => {
  const map = {
    live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    beta: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'coming-soon': 'bg-slate-500/10 text-slate-400 border-slate-500/20'
  };
  return map[status];
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-heading">
      {/* Top nav */}
      <header className="border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">BrandOps Apps</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-brand-muted">
            <a href="#apps" className="hover:text-brand-heading transition-colors">Apps</a>
            <a href="#why" className="hover:text-brand-heading transition-colors">Why review-first</a>
            <a
              href="https://brandops.site"
              className="hover:text-brand-heading transition-colors inline-flex items-center gap-1"
            >
              BrandOps home
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — compact, product-first */}
      <section className="pt-16 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-primary text-xs font-semibold tracking-widest uppercase mb-3">
            AI tools for solo operators
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl leading-tight">
            One workspace of review-first products.
          </h1>
          <p className="mt-4 text-brand-muted text-base md:text-lg max-w-2xl leading-relaxed">
            Discover AI tools that research, write, design, and audit for you. Every output stays behind your approval gate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#apps"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary text-white text-sm font-medium hover:bg-indigo-500 transition-colors"
            >
              Browse apps
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.producthunt.com/products/brandops"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-brand-border text-brand-muted text-sm font-medium hover:border-brand-muted hover:text-brand-heading transition-colors"
            >
              Launching on Product Hunt
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* App grid */}
      <section id="apps" className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">All apps</h2>
            <span className="text-xs text-brand-muted">
              {apps.length} products · {categories.length} categories
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {apps.map((app) => (
              <article
                key={app.id}
                className="group relative rounded-xl border border-brand-border bg-brand-card p-5 hover:border-brand-primary/40 transition-colors"
              >
                <a
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-0"
                  aria-label={`Open ${app.name}`}
                />

                <div className="relative z-10 flex flex-col md:flex-row gap-5">
                  {/* Mockup */}
                  <div className="w-full md:w-64 h-40 md:h-auto shrink-0 rounded-lg overflow-hidden border border-brand-border bg-slate-950">
                    <AppMockup type={app.mockupType} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-brand-primary font-semibold uppercase tracking-wider">
                        {app.category}
                      </span>
                      <span className="text-xs text-brand-muted">·</span>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full border ${statusBadge(
                          app.status
                        )}`}
                      >
                        {app.status.replace('-', ' ')}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-1 group-hover:text-brand-primary transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-sm text-brand-heading/90 font-medium mb-2">
                      {app.tagline}
                    </p>
                    <p className="text-sm text-brand-muted leading-relaxed mb-5 flex-1">
                      {app.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-auto">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-primary text-white text-sm font-medium">
                        Open App
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                      {app.learnMoreHref && (
                        <a
                          href={app.learnMoreHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-20 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-brand-border text-brand-muted text-sm font-medium hover:text-brand-heading hover:border-brand-muted transition-colors"
                        >
                          Learn More
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product Hunt banner */}
      <section className="py-6 px-6 border-y border-brand-border">
        <div className="max-w-6xl mx-auto">
          <a
            href="https://www.producthunt.com/products/brandops"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-brand-border bg-brand-card p-5 hover:border-brand-primary/40 transition-colors"
          >
            <div>
              <p className="text-sm font-semibold mb-0.5">Launching soon on Product Hunt</p>
              <p className="text-sm text-brand-muted">
                Follow BrandOps to get notified when we ship and join the discussion.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff6154] text-white text-sm font-medium hover:bg-[#e5554a] transition-colors shrink-0">
              View on Product Hunt
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </section>

      {/* Why review-first */}
      <section id="why" className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-semibold mb-6">Why review-first?</h2>
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
              <div key={i} className="p-5 rounded-xl border border-brand-border bg-brand-card">
                <div className="w-9 h-9 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent mb-3">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-brand-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-muted">
            © 2026 BrandOps. Built for solo operators.
          </p>
          <div className="flex items-center gap-5 text-sm text-brand-muted">
            <a href="https://brandops.site" className="hover:text-brand-heading transition-colors">
              BrandOps home
            </a>
            <a href="https://github.com/rajvictor1" className="hover:text-brand-heading transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
