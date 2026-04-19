import { COOKIE_POLICY } from "@/lib/compliance";
import ReactMarkdown from 'react-markdown';

export default function CookiesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose dark:prose-invert">
      <ReactMarkdown>{COOKIE_POLICY}</ReactMarkdown>
    </main>
  );
}
