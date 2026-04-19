import Link from 'next/link';
import { COMPLIANCE_CONSTANTS } from '@/lib/compliance';

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 mt-auto py-12 text-sm text-zinc-500 dark:text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/itsmyapp_logo.png" alt="ItsMyApp.co.uk Logo" className="w-10 h-10 rounded-lg shadow-sm" />
            <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">Its My QR Code</span>
          </div>
          <p className="max-w-xs">The zero-backend, browser-only QR Code generation tool. Fast, private, and secure.</p>
          <div className="flex flex-col gap-1 text-zinc-600 dark:text-zinc-400">
            <p>&copy; 2026 ItsMyApp.co.uk | All rights reserved</p>
            <p>Support is: <a href="mailto:hello@itsmyapp.co.uk" className="text-zinc-900 dark:text-white font-medium hover:underline">hello@itsmyapp.co.uk</a></p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-6 uppercase tracking-wider text-xs">Legal & Compliance</h3>
          <ul className="space-y-3">
            <li><Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/cookies" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Cookie Policy</Link></li>
            <li><Link href="/accessibility" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Accessibility Statement</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-6 uppercase tracking-wider text-xs font-bold">Privacy & Support</h3>
          <p className="mb-6 leading-relaxed">
            Your data never leaves your browser. If you find this tool helpful, consider supporting its development.
          </p>
          <div className="flex flex-col gap-4">
            <a 
              href="https://buy.stripe.com/6oU3cvgGfgZr11Y6urgYU01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold hover:scale-105 transition-transform w-fit text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 fill-red-500"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              Donate to developer
            </a>
            <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-tight">Privacy Standard: DMCCA 2027 Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
