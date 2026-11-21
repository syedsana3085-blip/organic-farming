import { useState } from 'react';
import { Check, RotateCcw, X } from 'lucide-react';
import type { ProjectMetadata } from '../types/project';

interface ProjectSettingsModalProps {
  isOpen: boolean;
  initialTab: 'details' | 'deploy';
  metadata: ProjectMetadata;
  onSaveMetadata: (updated: ProjectMetadata) => void;
  onResetMetadata: () => void;
  onClose: () => void;
}

export function ProjectSettingsModal({
  isOpen,
  initialTab,
  metadata,
  onSaveMetadata,
  onResetMetadata,
  onClose,
}: ProjectSettingsModalProps) {
  const [tab, setTab] = useState<'details' | 'deploy'>(initialTab);
  const [draft, setDraft] = useState<ProjectMetadata>(metadata);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveMetadata(draft);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-label="Project Settings and Free Deployment Guide"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[1px]"
    >
      <div className="w-full max-w-2xl bg-white border border-[#DDE5DB] rounded-xl overflow-hidden shadow-xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#DDE5DB] flex items-center justify-between bg-[#FAFBF9]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTab('details')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                tab === 'details'
                  ? 'bg-[#1B5E20] text-white'
                  : 'text-[#425244] hover:bg-[#EAF2E8]'
              }`}
            >
              Edit College &amp; CSP Info
            </button>
            <button
              type="button"
              onClick={() => setTab('deploy')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                tab === 'deploy'
                  ? 'bg-[#1B5E20] text-white'
                  : 'text-[#425244] hover:bg-[#EAF2E8]'
              }`}
            >
              Free Deploy Guide (GitHub / Netlify)
            </button>
          </div>
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="p-1.5 text-[#556757] hover:text-[#1A241B] rounded-lg cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {tab === 'details' ? (
            <form onSubmit={handleSave} className="space-y-4">
              <p className="text-xs text-[#425244]">
                Customize your college name, student details, and mentor name shown in the footer
                and hero metadata. Changes are saved in your browser.
              </p>

              {savedNotice && (
                <div
                  role="status"
                  className="p-3 rounded-lg bg-[#EAF2E8] border border-[#C5D3C2] text-xs font-semibold text-[#1B5E20]"
                >
                  Project details updated!
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="meta-college" className="block text-xs font-semibold text-[#1A241B] mb-1">
                    College / Institution Name
                  </label>
                  <input
                    id="meta-college"
                    type="text"
                    value={draft.collegeName}
                    onChange={(e) => setDraft({ ...draft, collegeName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                  />
                </div>
                <div>
                  <label htmlFor="meta-dept" className="block text-xs font-semibold text-[#1A241B] mb-1">
                    Department / Program
                  </label>
                  <input
                    id="meta-dept"
                    type="text"
                    value={draft.department}
                    onChange={(e) => setDraft({ ...draft, department: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                  />
                </div>
                <div>
                  <label htmlFor="meta-student" className="block text-xs font-semibold text-[#1A241B] mb-1">
                    Student Name(s)
                  </label>
                  <input
                    id="meta-student"
                    type="text"
                    value={draft.studentName}
                    onChange={(e) => setDraft({ ...draft, studentName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                  />
                </div>
                <div>
                  <label htmlFor="meta-roll" className="block text-xs font-semibold text-[#1A241B] mb-1">
                    Roll Number / Batch ID
                  </label>
                  <input
                    id="meta-roll"
                    type="text"
                    value={draft.rollNumber}
                    onChange={(e) => setDraft({ ...draft, rollNumber: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                  />
                </div>
                <div>
                  <label htmlFor="meta-mentor" className="block text-xs font-semibold text-[#1A241B] mb-1">
                    Faculty Mentor
                  </label>
                  <input
                    id="meta-mentor"
                    type="text"
                    value={draft.mentorName}
                    onChange={(e) => setDraft({ ...draft, mentorName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                  />
                </div>
                <div>
                  <label htmlFor="meta-district" className="block text-xs font-semibold text-[#1A241B] mb-1">
                    Location / District
                  </label>
                  <input
                    id="meta-district"
                    type="text"
                    value={draft.districtOrCity}
                    onChange={(e) => setDraft({ ...draft, districtOrCity: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#EDF2EC]">
                <button
                  type="button"
                  onClick={() => {
                    onResetMetadata();
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#556757] hover:text-[#1A241B] cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Restore Defaults</span>
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Save Project Details</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-5 text-sm text-[#425244]">
              <p>
                This website is a 100% static React + Vite application. It requires{' '}
                <strong className="text-[#1A241B]">no paid APIs, no backend server, and no paid hosting</strong>.
              </p>

              <div className="bg-[#FAFBF9] border border-[#DDE5DB] rounded-xl p-4 space-y-2">
                <h3 className="font-display text-base font-bold text-[#1A241B]">
                  1. Build Locally
                </h3>
                <pre className="font-mono text-xs bg-[#1A241B] text-[#EAF2E8] p-3 rounded-lg overflow-x-auto">
                  {`npm install\nnpm run build`}
                </pre>
                <p className="text-xs">
                  This creates a production-ready static bundle inside the <code>dist/</code> folder.
                </p>
              </div>

              <div className="bg-[#FAFBF9] border border-[#DDE5DB] rounded-xl p-4 space-y-2">
                <h3 className="font-display text-base font-bold text-[#1A241B]">
                  2. Deploy Free on Netlify (Fastest)
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-xs">
                  <li>Run <code>npm run build</code> locally, or connect your GitHub repository to Netlify.</li>
                  <li>Set Build Command to <code>npm run build</code> and Publish Directory to <code>dist</code>.</li>
                  <li>Or drag and drop the generated <code>dist/</code> folder onto Netlify Drop for an instant free HTTPS URL.</li>
                </ol>
              </div>

              <div className="bg-[#FAFBF9] border border-[#DDE5DB] rounded-xl p-4 space-y-2">
                <h3 className="font-display text-base font-bold text-[#1A241B]">
                  3. Deploy Free on GitHub Pages
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-xs">
                  <li>Push the project to a public GitHub repository.</li>
                  <li><code>vite.config.ts</code> already sets <code>base: &apos;./&apos;</code> so assets load cleanly on <code>username.github.io/repo-name/</code>.</li>
                  <li>Use GitHub Actions (Deploy static content from <code>dist/</code>) or publish the built <code>dist/</code> folder to the <code>gh-pages</code> branch.</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
