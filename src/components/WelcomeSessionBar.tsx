import { LogOut, UserCheck } from 'lucide-react';

interface WelcomeSessionBarProps {
  username: string;
  onLogout: () => void;
}

export function WelcomeSessionBar({
  username,
  onLogout,
}: WelcomeSessionBarProps) {
  return (
    <div className="bg-[#F1F5F0] border-b border-[#DDE5DB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1A241B] min-w-0">
          <UserCheck className="w-4 h-4 text-[#1B5E20] shrink-0" aria-hidden="true" />
          <span className="font-semibold truncate" data-testid="welcome-user-banner">
            Welcome, {username}!
          </span>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1B5E20] bg-white border border-[#C5D3C2] hover:bg-[#EAF2E8] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
