import QRDashboard from "@/components/qr/QRDashboard";
import { TESTIMONIALS } from "@/lib/compliance";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ... Hero Section ... */}
      <section className="bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-600 bg-clip-text text-transparent">
              Stunning QR Codes, <br />Generated Privately.
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
              Create professional, customizable QR codes with our 100% zero-backend engine. 
              No data tracking, no server uploads, and no hidden subscriptions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#generator" 
                className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold hover:scale-105 transition-transform"
              >
                Start Generating
              </a>
              <a 
                href="https://donate.stripe.com/cNiaEX4XxfVn5ieg51gYU02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-2xl font-bold hover:scale-105 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 fill-red-500"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                Donate to developer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section id="generator">
        <QRDashboard />
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Privacy by Design</h2>
          <p className="text-zinc-400 max-w-2xl mb-12">
            Unlike other generators that track your links, <strong>Its My QR Code</strong> generates everything right in your browser.
            Try it offline—it still works!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="font-bold mb-2 text-xl">Offline Ready</h3>
              <p className="text-sm text-zinc-500 text-balance">The PWA works even when you're disconnected from the internet.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="font-bold mb-2 text-xl">Scalable SVG</h3>
              <p className="text-sm text-zinc-500 text-balance">Export high-resolution SVGs perfect for printing on any medium.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="font-bold mb-2 text-xl">Zero Tracking</h3>
              <p className="text-sm text-zinc-500 text-balance">Your links are yours. We have no database to store them in.</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">What Users Say</h2>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
                Verified feedback from the creative community using our private QR tools.
              </p>
            </div>
     <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-bold">
                {(TESTIMONIALS.reduce((acc, t) => acc + t.stars, 0) / TESTIMONIALS.length).toFixed(1)}/5 Average Rating
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={i} 
                className="p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 italic leading-relaxed">
                  "{t.content}"
                </p>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">{t.name}</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
