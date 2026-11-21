import { useState } from 'react';
import { Menu, MessageSquare, X } from 'lucide-react';
import type { SectionId } from '../types/project';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onOpenDashboard: () => void;
  onOpenChat: () => void;
}

export function Navbar({
  activeSection,
  onNavigate,
  onOpenDashboard,
  onOpenChat,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (action: () => void) => {
    setMobileMenuOpen(false);
    action();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFBF9]/95 backdrop-blur-sm border-b border-[#DDE5DB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3 md:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick(() => onNavigate('home'))}
          className="font-display text-base sm:text-lg font-bold tracking-tight text-[#1A241B] hover:text-[#1B5E20] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B5E20]"
        >
          Organic Farming
        </button>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#425244]"
        >
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
              activeSection === 'home'
                ? 'text-[#1B5E20] border-[#1B5E20] font-semibold'
                : 'border-transparent hover:text-[#1A241B] hover:border-[#C5D3C2]'
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={onOpenDashboard}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
              activeSection === 'introduction' ||
              activeSection === 'benefits' ||
              activeSection === 'methods' ||
              activeSection === 'andhra-pradesh' ||
              activeSection === 'future-scope' ||
              activeSection === 'conclusion'
                ? 'text-[#1B5E20] border-[#1B5E20] font-semibold'
                : 'border-transparent hover:text-[#1A241B] hover:border-[#C5D3C2]'
            }`}
          >
            Dashboard
          </button>
          <button
            type="button"
            onClick={() => onNavigate('farming-guide')}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
              activeSection === 'farming-guide'
                ? 'text-[#1B5E20] border-[#1B5E20] font-semibold'
                : 'border-transparent hover:text-[#1A241B] hover:border-[#C5D3C2]'
            }`}
          >
            Farming Guide
          </button>
          <button
            type="button"
            onClick={() => onNavigate('survey')}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
              activeSection === 'survey' || activeSection === 'my-activity'
                ? 'text-[#1B5E20] border-[#1B5E20] font-semibold'
                : 'border-transparent hover:text-[#1A241B] hover:border-[#C5D3C2]'
            }`}
          >
            Survey &amp; Activity
          </button>
          <button
            type="button"
            onClick={() => onNavigate('quiz-faq')}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
              activeSection === 'quiz-faq'
                ? 'text-[#1B5E20] border-[#1B5E20] font-semibold'
                : 'border-transparent hover:text-[#1A241B] hover:border-[#C5D3C2]'
            }`}
          >
            Quiz &amp; FAQ
          </button>
        </nav>

        {/* Zone 3: 1 Primary CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenChat}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E20]"
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>Ask AgroGuide</span>
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg border border-[#DDE5DB] text-[#1A241B] hover:bg-[#F1F5F0] cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-[#DDE5DB] bg-[#FAFBF9] px-4 py-3 flex flex-col gap-1"
        >
          <button
            type="button"
            onClick={() => handleLinkClick(() => onNavigate('home'))}
            className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#1A241B] hover:bg-[#F1F5F0]"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick(onOpenDashboard)}
            className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#1A241B] hover:bg-[#F1F5F0]"
          >
            Project Dashboard
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick(() => onNavigate('farming-guide'))}
            className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#1A241B] hover:bg-[#F1F5F0]"
          >
            Interactive Farming Guide
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick(() => onNavigate('survey'))}
            className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#1A241B] hover:bg-[#F1F5F0]"
          >
            Data Collection &amp; Survey
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick(() => onNavigate('my-activity'))}
            className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#1A241B] hover:bg-[#F1F5F0]"
          >
            My Activity (6 Weeks)
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick(() => onNavigate('quiz-faq'))}
            className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#1A241B] hover:bg-[#F1F5F0]"
          >
            Knowledge Quiz &amp; FAQ
          </button>
        </nav>
      )}
    </header>
  );
}
