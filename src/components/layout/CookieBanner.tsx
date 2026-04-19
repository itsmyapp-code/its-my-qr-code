'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if consent is entirely missing
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem("cookie_consent", value);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 animate-in slide-in-from-bottom-full mt-auto">
      <div className="max-w-4xl mx-auto rounded-xl shadow-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          <h3 className="font-semibold text-base mb-1 text-zinc-900 dark:text-zinc-100">Cookie Preferences</h3>
          <p>
            We use cookies to improve your experience. Select <strong>Accept All</strong> for non-essential trackers, or <strong>Reject All</strong> to decline them. Both options maintain essential functions.
            View our <a href="/cookies" className="underline hover:text-zinc-900 dark:hover:text-white">Cookie Policy</a> for details.
          </p>
        </div>
        <div className="flex w-full md:w-auto gap-4 shrink-0">
          {/* EQUAL PROMINENCE 2027 REQUIREMENT */}
          <Button 
            className="flex-1 md:w-32 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            variant="default" 
            onClick={() => handleConsent("accepted")}
          >
            Accept All
          </Button>
          <Button 
            className="flex-1 md:w-32 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            variant="default" 
            onClick={() => handleConsent("rejected")}
          >
            Reject All
          </Button>
        </div>
      </div>
    </div>
  );
}
