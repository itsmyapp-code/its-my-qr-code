import { ACCESSIBILITY_STATEMENT } from "@/lib/compliance";
import ReactMarkdown from 'react-markdown';

export default function AccessibilityPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose dark:prose-invert">
      <ReactMarkdown>{ACCESSIBILITY_STATEMENT}</ReactMarkdown>
    </main>
  );
}
