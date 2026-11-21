import { useState } from 'react';
import { ArrowRight, Send, Sprout, X } from 'lucide-react';
import type { ChatMessage, SectionId } from '../types/project';
import { generateAgroGuideReply } from '../utils/organicLogic';

interface AgroGuideChatProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: SectionId) => void;
}

const QUICK_PROMPTS = [
  'What is APCNF in Andhra Pradesh?',
  'Vermicomposting vs Composting',
  'How do biofertilizers work?',
  'How to record farmer survey data?',
];

export function AgroGuideChat({
  isOpen,
  onClose,
  onNavigate,
}: AgroGuideChatProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'agroguide',
      text: 'Hello! I am AgroGuide, your offline CSP Organic Farming assistant. Ask me about composting, APCNF in Andhra Pradesh, biofertilizers, natural pest control, or navigating this project.',
    },
  ]);

  if (!isOpen) return null;

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: trimmed,
    };

    const reply = generateAgroGuideReply(trimmed);
    const botMsg: ChatMessage = {
      id: `b-${Date.now() + 1}`,
      sender: 'agroguide',
      text: reply.answer,
      suggestedSection: reply.suggestedSection,
      suggestedLabel: reply.suggestedLabel,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div
      role="dialog"
      aria-label="AgroGuide Educational Chatbot"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-[1px]"
    >
      <div className="w-full max-w-md bg-[#FAFBF9] h-full border-l border-[#DDE5DB] flex flex-col shadow-xl">
        {/* Header */}
        <div className="px-5 py-4 bg-white border-b border-[#DDE5DB] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EAF2E8] text-[#1B5E20] flex items-center justify-center">
              <Sprout className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-display text-base font-bold text-[#1A241B]">
                AgroGuide
              </h2>
              <p className="text-xs text-[#556757]">
                Offline Educational Study Assistant
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close AgroGuide assistant"
            onClick={onClose}
            className="p-2 rounded-lg text-[#556757] hover:text-[#1A241B] hover:bg-[#F1F5F0] cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[88%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#1B5E20] text-white'
                    : 'bg-white border border-[#DDE5DB] text-[#1A241B]'
                }`}
              >
                <p>{msg.text}</p>
                {msg.suggestedSection && msg.suggestedLabel && (
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(msg.suggestedSection!);
                      onClose();
                    }}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B5E20] hover:underline cursor-pointer"
                  >
                    <span>{msg.suggestedLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestions */}
        <div className="px-5 py-3 bg-[#F1F5F0] border-t border-[#DDE5DB]">
          <p className="text-xs font-medium text-[#556757] mb-2">
            Quick Topics
          </p>
          <div className="flex flex-wrap gap-1.5">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                className="px-2.5 py-1.5 text-xs font-medium bg-white border border-[#C5D3C2] hover:border-[#1B5E20] text-[#1A241B] rounded-lg transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="p-4 bg-white border-t border-[#DDE5DB] flex items-center gap-2"
        >
          <label htmlFor="agroguide-input" className="sr-only">
            Ask AgroGuide a question
          </label>
          <input
            id="agroguide-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about composting, APCNF, crops..."
            className="flex-1 px-3.5 py-2.5 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
          />
          <button
            type="submit"
            aria-label="Send message to AgroGuide"
            className="p-2.5 bg-[#1B5E20] hover:bg-[#144A18] text-white rounded-lg transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
