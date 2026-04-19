"use client"

import React, { useState } from 'react';
import { MessageSquare, Star, X, Send, Heart } from 'lucide-react';
import { COMPLIANCE_CONSTANTS } from '@/lib/compliance';

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [stars, setStars] = useState(5);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`App Rating: ${stars} Stars - Its My QR Code`);
    const body = encodeURIComponent(`From: ${name}\nRating: ${stars}/5\n\nComment:\n${comment}\n\n---\nSent from the Its My QR Code Feedback Widget`);
    
    window.location.href = `mailto:${COMPLIANCE_CONSTANTS.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Feedback Panel */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 bg-zinc-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </div>
              <h3 className="font-bold text-sm">Tell us what you think!</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">Rating</label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onMouseEnter={() => setHoveredStar(s)}
                    onMouseLeave={() => setHoveredStar(0)}
                    onClick={() => setStars(s)}
                    className="p-1 transition-transform active:scale-90"
                  >
                    <Star 
                      className={`w-8 h-8 ${
                        (hoveredStar || stars) >= s 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-zinc-200 dark:text-zinc-800'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">Your Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What do you love? What can we improve?"
                className="w-full h-32 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all text-sm resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold hover:gap-3 transition-all"
            >
              <Send className="w-4 h-4" />
              Send via Email
            </button>

            <p className="text-[10px] text-zinc-500 text-center uppercase tracking-widest font-medium">
              Zero-Backend: We use your email client
            </p>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-6 py-4 bg-zinc-950 text-white rounded-full shadow-2xl hover:scale-105 transition-all group border border-white/10"
      >
        <span className="font-bold text-sm hidden md:block">Feedback?</span>
        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-12 transition-transform">
          <MessageSquare className="w-3 h-3" />
        </div>
      </button>
    </div>
  );
}
