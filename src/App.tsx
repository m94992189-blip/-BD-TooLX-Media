/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowRight, 
  Download, 
  TrendingUp, 
  Tag, 
  Clock, 
  Layers, 
  Star, 
  ShieldCheck, 
  RefreshCw, 
  Zap,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

const BUTTONS = [
  { label: 'Start Here', icon: <ArrowRight className="w-5 h-5" />, color: 'bg-indigo-600', href: 'https://example.com/start' },
  { label: 'Free Download Tools', icon: <Download className="w-5 h-5" />, color: 'bg-emerald-600', href: 'https://example.com/downloads' },
  { label: 'Trending Online Tools', icon: <TrendingUp className="w-5 h-5" />, color: 'bg-blue-600', href: 'https://example.com/trending' },
  { label: 'Best Deals Today', icon: <Tag className="w-5 h-5" />, color: 'bg-orange-500', href: 'https://example.com/deals' },
  { label: 'Limited-Time Offers', icon: <Clock className="w-5 h-5" />, color: 'bg-rose-500', href: 'https://example.com/offers' },
  { label: 'Recommended Resources', icon: <Layers className="w-5 h-5" />, color: 'bg-slate-800', href: 'https://example.com/resources' },
  { label: "Today's Top Tool", icon: <Star className="w-5 h-5" />, color: 'bg-amber-500', href: 'https://example.com/top-tool' },
];

const TRUST_ELEMENTS = [
  { label: 'Fast Secure Access', icon: <ShieldCheck className="w-5 h-5 text-indigo-600" /> },
  { label: 'Updated Resources Daily', icon: <RefreshCw className="w-5 h-5 text-indigo-600" /> },
  { label: 'Popular Online Tools', icon: <Zap className="w-5 h-5 text-indigo-600" /> },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100">
      <div className="max-w-lg mx-auto px-6 py-12 md:py-20 flex flex-col gap-16">
        
        {/* SECTION 1 — HERO HEADER */}
        <header className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Your Shortcut to the Best <span className="text-indigo-600">Online Tools</span> & Free Resources
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Discover trending tools, free downloads, and useful online resources used by thousands of smart internet users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-3"
          >
            <a 
              href="https://example.com/access"
              className="w-full py-4 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg"
            >
              Access Tools Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">
              Updated regularly with new tools and resources.
            </p>
          </motion.div>
        </header>

        {/* SECTION 2 — MAIN BUTTON HUB */}
        <section className="space-y-4">
          {BUTTONS.map((btn, index) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
              className={`w-full p-5 ${btn.color} hover:opacity-90 text-white font-semibold rounded-2xl shadow-md flex items-center justify-between group transition-all active:scale-[0.98]`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                  {btn.icon}
                </div>
                <span className="text-lg">{btn.label}</span>
              </div>
              <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </section>

        {/* SECTION 3 — TRUST INDICATORS */}
        <section className="grid grid-cols-1 gap-4 py-8 border-y border-slate-200">
          {TRUST_ELEMENTS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center gap-3 px-4 py-2"
            >
              <div className="bg-indigo-50 p-2 rounded-full">
                {item.icon}
              </div>
              <span className="font-semibold text-slate-700">{item.label}</span>
            </motion.div>
          ))}
        </section>

        {/* SECTION 4 — FEATURE HIGHLIGHT */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Explore the Most Popular Tools Used Online Today
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our curated list includes tools and resources that help thousands of users save time, discover useful apps, and access helpful online services.
            </p>
          </div>
          <a 
            href="https://example.com/explore"
            className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all active:scale-95 text-center block"
          >
            Explore All Resources
          </a>
        </section>

        {/* SECTION 5 — FINAL CALL TO ACTION */}
        <section className="text-center space-y-6 py-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Start Exploring Useful Online Tools Now
          </h2>
          <a 
            href="https://example.com/directory"
            className="w-full py-5 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl shadow-xl shadow-indigo-100 transition-all active:scale-95 text-xl text-center block"
          >
            Open Tools Directory
          </a>
        </section>

        {/* SECTION 6 — FOOTER */}
        <footer className="text-center space-y-8 pb-12">
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
            Some links on this page may be affiliate links. If you click and use them, we may earn a small commission at no extra cost to you. This helps us keep these resources free for everyone.
          </p>
          <div className="text-xs text-slate-300 font-medium tracking-widest uppercase">
            &copy; {new Date().getFullYear()} BioTools Hub
          </div>
        </footer>

      </div>
    </div>
  );
}
