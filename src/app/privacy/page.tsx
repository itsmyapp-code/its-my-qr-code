import { PRIVACY_POLICY } from "@/lib/compliance";
import ReactMarkdown from 'react-markdown';

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose dark:prose-invert">
      <ReactMarkdown>{PRIVACY_POLICY}</ReactMarkdown>
    </main>
  );
}
