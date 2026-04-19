import { HELP_GUIDE } from "@/lib/compliance";
import ReactMarkdown from 'react-markdown';

export default function HelpPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose dark:prose-invert">
      <ReactMarkdown>{HELP_GUIDE}</ReactMarkdown>
    </main>
  );
}
