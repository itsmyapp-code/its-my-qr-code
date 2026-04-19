import Link from 'next/link';
import { COMPLIANCE_CONSTANTS } from '@/lib/compliance';

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 mt-auto py-12 text-sm text-zinc-500 dark:text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">{COMPLIANCE_CONSTANTS.PROJECT_NAME}</h3>
          <p className="mb-4">The zero-backend, browser-only QR Code generation tool. Fast, private, and secure.</p>
          <p>&copy; 2026 ItsMyApp.co.uk | All rights reserved support is: {COMPLIANCE_CONSTANTS.CONTACT_EMAIL}</p>
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Legal & Compliance</h3>
          <ul className="space-y-2">
            <li><Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/cookies" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Cookie Policy</Link></li>
            <li><Link href="/accessibility" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Accessibility Statement</Link></li>
            <li><Link href="/help" className="hover:text-zinc-900 dark:hover:text-white transition-colors">User Guide & Help</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Subscription & Account</h3>
          <p className="mb-4">
            Under DMCCA 2027 regulations, if you ever start a subscription with us in the future, we guarantee a one-click <strong>Easy Exit</strong> out of any plans, directly from this panel.
          </p>
          <a href={`mailto:${COMPLIANCE_CONSTANTS.CONTACT_EMAIL}`} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </footer>
  );
}
