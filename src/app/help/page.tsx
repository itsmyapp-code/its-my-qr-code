import { HelpCircle, Info, ShieldCheck, Zap, Palette, Download, MousePointer2 } from "lucide-react";

export default function HelpPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 border border-zinc-200 dark:border-zinc-800">
          <HelpCircle className="w-8 h-8 text-zinc-900 dark:text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
          User Guide & Help
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
          Everything you need to know about creating stunning, private, and professional QR codes in seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Step 1 */}
        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6">
            <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">1. Enter Information</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            Select your data type from the top tabs. We support:
          </p>
          <ul className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors">
            <li className="flex items-center gap-2">• Websites (URLs)</li>
            <li className="flex items-center gap-2">• Plain Text & Notes</li>
            <li className="flex items-center gap-2">• Email Messages</li>
            <li className="flex items-center gap-2">• WiFi Credentials</li>
            <li className="flex items-center gap-2">• Digital Business Cards</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6">
            <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">2. Customize Design</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            Make your QR code unique with our advanced styling dashboard:
          </p>
          <ul className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <li className="flex items-center gap-2">• Gradients & Fine Colors</li>
            <li className="flex items-center gap-2">• Custom Dot Shapes</li>
            <li className="flex items-center gap-2">• Brand Logo Branding</li>
            <li className="flex items-center gap-2">• "Scan Me" Custom Labels</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-6">
            <Download className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">3. Export & Share</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            Verify the live preview, then download in your preferred format:
          </p>
          <ul className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <li className="flex items-center gap-2">• PNG / JPG (Standard)</li>
            <li className="flex items-center gap-2">• SVG (Vector for Print)</li>
            <li className="flex items-center gap-2">• Professional PDF</li>
          </ul>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-zinc-950 rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-4">Privacy & Security First</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <Zap className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">100% Client-Side</h3>
                  <p className="text-sm text-zinc-500">Your data never leaves your device. Everything is processed instantly in your browser memory.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <MousePointer2 className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Zero Tracking</h3>
                  <p className="text-sm text-zinc-500">We have no database. We don't track your scans, store your links, or see your images.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/2" />
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-zinc-500 font-medium italic">
          Generated and verified by ItsMyApp.co.uk | © 2026 All Rights Reserved
        </p>
      </div>
    </main>
  );
}
