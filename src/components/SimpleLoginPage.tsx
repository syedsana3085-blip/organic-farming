import { useState } from 'react';
import { ArrowRight, CheckCircle2, RefreshCw, Sprout, User } from 'lucide-react';
import {
  generateVerificationChallenge,
  normalizeUsername,
  validateUsername,
  verifyNumberAnswer,
  type VerificationChallenge,
} from '../utils/simpleAuth';

interface SimpleLoginPageProps {
  rememberedUsername: string;
  onLoginSuccess: (username: string) => void;
}

export function SimpleLoginPage({
  rememberedUsername,
  onLoginSuccess,
}: SimpleLoginPageProps) {
  const [username, setUsername] = useState(rememberedUsername);
  const [step, setStep] = useState<'username' | 'verify'>('username');
  const [challenge, setChallenge] = useState<VerificationChallenge>(() =>
    generateVerificationChallenge()
  );
  const [numberInput, setNumberInput] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const usernameError = validateUsername(username);
    if (usernameError) {
      setErrorMessage(usernameError);
      return;
    }

    setUsername(normalizeUsername(username));
    setErrorMessage(null);
    setNumberInput('');
    setChallenge(generateVerificationChallenge());
    setStep('verify');
  };

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const usernameError = validateUsername(username);
    if (usernameError) {
      setErrorMessage(usernameError);
      setStep('username');
      return;
    }

    const verifyError = verifyNumberAnswer(challenge, numberInput);
    if (verifyError) {
      setErrorMessage(verifyError);
      return;
    }

    setErrorMessage(null);
    onLoginSuccess(normalizeUsername(username));
  };

  const handleChangeUsername = () => {
    setErrorMessage(null);
    setNumberInput('');
    setStep('username');
  };

  const handleRefreshChallenge = () => {
    setErrorMessage(null);
    setNumberInput('');
    setChallenge(generateVerificationChallenge());
  };

  return (
    <div className="min-h-screen bg-[#FAFBF9] text-[#1A241B] flex flex-col justify-between px-4 py-8 sm:px-6">
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white border border-[#DDE5DB] rounded-2xl p-6 sm:p-8 shadow-xs">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-[#EAF2E8] border border-[#C5D3C2] text-[#1B5E20] flex items-center justify-center shrink-0">
              <Sprout className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-medium text-[#3F5E42]">
                Organic Farming – Green Future
              </p>
              <h1 className="font-display text-2xl font-bold text-[#1A241B] tracking-tight">
                Sign In
              </h1>
            </div>
          </div>

          {step === 'username' ? (
            <form onSubmit={handleUsernameSubmit} noValidate className="space-y-5">
              <p className="text-sm text-[#425244] leading-relaxed">
                Enter your username to access the Community Service Project portal and
                interactive dashboard.
              </p>

              {errorMessage && (
                <div
                  role="alert"
                  data-testid="login-error"
                  className="px-4 py-3 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-sm text-[#991B1B]"
                >
                  {errorMessage}
                </div>
              )}

              <div>
                <label
                  htmlFor="login-username"
                  className="block text-xs font-semibold text-[#1A241B] mb-1.5"
                >
                  Username
                </label>
                <div className="relative">
                  <User
                    className="w-4 h-4 text-[#556757] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="login-username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Enter your name or username"
                    className="w-full min-h-[44px] pl-10 pr-3.5 py-2.5 text-sm bg-[#FAFBF9] border border-[#C5D3C2] rounded-lg text-[#1A241B] placeholder:text-[#6A7B6C] focus:outline-none focus:bg-white focus:border-[#1B5E20] focus:ring-2 focus:ring-[#1B5E20]/15"
                    autoFocus
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E20]"
              >
                <span>Continue / Login</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifySubmit} noValidate className="space-y-5">
              {/* Welcome Confirmation Prompt */}
              <div
                role="status"
                data-testid="welcome-confirm-prompt"
                className="p-4 rounded-xl bg-[#EAF2E8] border border-[#C5D3C2] space-y-1.5"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-[#1B5E20]">
                    Welcome! Please confirm your username to continue.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2 pl-6.5 pt-0.5">
                  <span className="text-sm font-bold text-[#1A241B] truncate">
                    {username}
                  </span>
                  <button
                    type="button"
                    onClick={handleChangeUsername}
                    className="text-xs font-semibold text-[#1B5E20] hover:underline shrink-0 cursor-pointer"
                  >
                    Change
                  </button>
                </div>
              </div>

              {errorMessage && (
                <div
                  role="alert"
                  data-testid="login-error"
                  className="px-4 py-3 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-sm text-[#991B1B]"
                >
                  {errorMessage}
                </div>
              )}

              {/* Simple Number Verification */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="verify-number"
                    className="block text-xs font-semibold text-[#1A241B]"
                  >
                    Quick Number Verification
                  </label>
                  <button
                    type="button"
                    onClick={handleRefreshChallenge}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#3F5E42] hover:text-[#1B5E20] cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" aria-hidden="true" />
                    <span>New number</span>
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    data-testid="verification-prompt"
                    className="px-4 min-h-[44px] flex items-center justify-center rounded-lg bg-[#F1F5F0] border border-[#C5D3C2] font-mono text-base font-bold text-[#1B5E20] whitespace-nowrap shrink-0 select-none"
                  >
                    {challenge.prompt} = ?
                  </div>
                  <input
                    id="verify-number"
                    name="verificationNumber"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    value={numberInput}
                    onChange={(e) => {
                      setNumberInput(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Enter answer"
                    className="flex-1 min-w-0 min-h-[44px] px-3.5 py-2.5 text-sm bg-[#FAFBF9] border border-[#C5D3C2] rounded-lg text-[#1A241B] placeholder:text-[#6A7B6C] focus:outline-none focus:bg-white focus:border-[#1B5E20] focus:ring-2 focus:ring-[#1B5E20]/15"
                    autoFocus
                  />
                </div>
                <p className="mt-1.5 text-xs text-[#556757]">
                  Solve the simple sum above to confirm and open the dashboard.
                </p>
              </div>

              <button
                type="submit"
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E20]"
              >
                <span>Continue / Login</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </main>

      <footer className="text-center pt-6 text-xs text-[#556757]">
        Community Service Project · Organic Farming – Green Future
      </footer>
    </div>
  );
}
