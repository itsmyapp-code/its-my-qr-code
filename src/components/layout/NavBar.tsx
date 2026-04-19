import Link from "next/link";
import { QrCode } from "lucide-react";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-zinc-900/10 dark:border-zinc-50/[0.06] bg-white/95 dark:bg-zinc-950/95">
      <div className="max-w-7xl mx-auto">
        <div className="py-4 border-b border-zinc-900/10 lg:px-8 lg:border-0 dark:border-zinc-300/10 px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-white p-0 rounded-lg group-hover:scale-105 transition-transform overflow-hidden w-10 h-10 flex items-center justify-center">
              <img src="/itsmyapp_logo.png" alt="Its My QR Code Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tight">Its My QR Code</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/#generator" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Generator</Link>
            <Link href="/help" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">User Guide & Help</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
