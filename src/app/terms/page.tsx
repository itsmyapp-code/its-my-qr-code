import { TERMS_CONDITIONS } from "@/lib/compliance";
import ReactMarkdown from 'react-markdown';

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose dark:prose-invert">
      <ReactMarkdown>{TERMS_CONDITIONS}</ReactMarkdown>
    </main>
  );
}
