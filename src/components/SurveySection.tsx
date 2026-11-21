import { useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Download,
  RotateCcw,
  Trash2,
} from 'lucide-react';
import type { SectionId, SurveyDraft, SurveyEntry } from '../types/project';
import {
  aggregateSurveyStats,
  validateSurveyEntry,
} from '../utils/organicLogic';
import { SectionHeader } from './ContentSections';

interface SurveySectionProps {
  entries: SurveyEntry[];
  onAddEntry: (draft: SurveyDraft) => void;
  onDeleteEntry: (id: string) => void;
  onClearSamples: () => void;
  onResetSamples: () => void;
  onBackHome: () => void;
  onNavigate: (s: SectionId) => void;
}

const EMPTY_DRAFT: SurveyDraft = {
  respondentLabel: '',
  villageOrMandal: '',
  primaryCrop: '',
  currentPractice: 'Conventional',
  awareOfOrganic: 'Yes',
  mainChallenge: '',
  opinionOnOrganic: '',
};

export function SurveySection({
  entries,
  onAddEntry,
  onDeleteEntry,
  onClearSamples,
  onResetSamples,
  onBackHome,
  onNavigate,
}: SurveySectionProps) {
  const [draft, setDraft] = useState<SurveyDraft>(EMPTY_DRAFT);
  const [formError, setFormError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const summary = useMemo(() => aggregateSurveyStats(entries), [entries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateSurveyEntry(draft);
    if (error) {
      setFormError(error);
      setSubmitSuccess(null);
      return;
    }
    onAddEntry(draft);
    setDraft(EMPTY_DRAFT);
    setFormError(null);
    setSubmitSuccess('Farmer survey response recorded and saved locally.');
  };

  const handleExportCsv = () => {
    const headers = [
      'Respondent',
      'VillageOrMandal',
      'PrimaryCrop',
      'CurrentPractice',
      'AwareOfOrganic',
      'MainChallenge',
      'OpinionOnOrganic',
      'DataType',
      'SubmittedAt',
    ];
    const rows = entries.map((e) =>
      [
        e.respondentLabel,
        e.villageOrMandal,
        e.primaryCrop,
        e.currentPractice,
        e.awareOfOrganic,
        e.mainChallenge,
        e.opinionOnOrganic,
        e.isSample ? 'Sample Placeholder' : 'Field Survey',
        e.submittedAt,
      ]
        .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
        .join(',')
    );
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'csp-farmer-survey-data.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pb-16">
      <SectionHeader
        index="05"
        category="Field Work"
        title="Data Collection & Farmer Survey"
        subtitle="Field survey framework for visiting nearby agricultural farms, interacting with farmers, documenting challenges, and recording authentic community responses."
        onBackHome={onBackHome}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 space-y-10">
        {/* Field Methodology Framework */}
        <section className="bg-white border border-[#DDE5DB] rounded-xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-[#1A241B] mb-4">
            Community Field Survey Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#425244]">
            <div>
              <h3 className="font-semibold text-[#1A241B] mb-1.5">
                01. Farm Visit &amp; Observation
              </h3>
              <p className="leading-relaxed">
                Visit nearby agricultural fields with faculty or local volunteers to observe soil
                condition, irrigation methods, crop diversity, and input usage directly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1A241B] mb-1.5">
                02. Structured Farmer Interaction
              </h3>
              <p className="leading-relaxed">
                Discuss current cultivation practices, awareness of organic/APCNF methods, pest
                and fertilizer expenses, and perceived obstacles during transition.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1A241B] mb-1.5">
                03. Honest Opinion Recording
              </h3>
              <p className="leading-relaxed">
                Record farmer perspectives on organic product demand, local market pricing, and
                training needs without altering or fabricating responses.
              </p>
            </div>
          </div>
        </section>

        {/* Explicit Sample Data Banner */}
        <div
          role="status"
          className="bg-[#FEF9E7] border border-[#E5D399] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#8A6100] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-sm text-[#5C4100]">
              <p className="font-semibold">
                Sample Placeholder Data Notice
              </p>
              <p className="mt-0.5">
                Pre-loaded rows marked <span className="font-semibold">Sample Placeholder</span> are
                demonstration entries, not real farmer interviews. Use the form below to submit real
                field survey responses or clear sample rows before finalizing your CSP report.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {summary.sampleCount > 0 && (
              <button
                type="button"
                onClick={onClearSamples}
                className="px-3 py-1.5 text-xs font-semibold text-[#5C4100] bg-white border border-[#D8C17A] hover:bg-[#FDF3D1] rounded-lg whitespace-nowrap cursor-pointer"
              >
                Clear Sample Rows
              </button>
            )}
            <button
              type="button"
              onClick={onResetSamples}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#425244] bg-white border border-[#DDE5DB] hover:bg-[#F1F5F0] rounded-lg whitespace-nowrap cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset Demo</span>
            </button>
          </div>
        </div>

        {/* Dynamic Summary Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" data-testid="survey-summary-grid">
          <div className="bg-white border border-[#DDE5DB] rounded-xl p-5">
            <p className="text-xs text-[#556757] mb-1">Total Entries Logged</p>
            <p className="font-mono text-2xl font-bold text-[#1A241B]" data-testid="total-responses-count">
              {summary.totalResponses}
            </p>
            <p className="text-xs text-[#556757] mt-1">
              {summary.realCount} Field · {summary.sampleCount} Sample
            </p>
          </div>
          <div className="bg-white border border-[#DDE5DB] rounded-xl p-5">
            <p className="text-xs text-[#556757] mb-1">Organic Awareness</p>
            <p className="font-mono text-2xl font-bold text-[#1B5E20]">
              {summary.awarenessPercent}%
            </p>
            <p className="text-xs text-[#556757] mt-1">
              {summary.awareCount} of {summary.totalResponses} respondents
            </p>
          </div>
          <div className="bg-white border border-[#DDE5DB] rounded-xl p-5">
            <p className="text-xs text-[#556757] mb-1">Organic / Transitioning</p>
            <p className="font-mono text-2xl font-bold text-[#1A241B]">
              {summary.organicOrTransitionCount}
            </p>
            <p className="text-xs text-[#556757] mt-1">Practicing or testing plots</p>
          </div>
          <div className="bg-white border border-[#DDE5DB] rounded-xl p-5">
            <p className="text-xs text-[#556757] mb-1">Primary Reported Challenge</p>
            <p className="text-sm font-semibold text-[#1A241B] line-clamp-2 mt-1">
              {summary.topChallenge}
            </p>
          </div>
        </div>

        {/* Form + Responses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Submit New Farmer Survey Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-5 bg-white border border-[#DDE5DB] rounded-xl p-6 space-y-4"
          >
            <div>
              <h2 className="font-display text-xl font-bold text-[#1A241B]">
                Add Field Survey Response
              </h2>
              <p className="text-xs text-[#556757] mt-1">
                Saved directly in your browser for CSP documentation and CSV export.
              </p>
            </div>

            {formError && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-xs text-[#991B1B]"
              >
                {formError}
              </div>
            )}
            {submitSuccess && (
              <div
                role="status"
                className="p-3 rounded-lg bg-[#EAF2E8] border border-[#C5D3C2] text-xs text-[#1B5E20] font-medium"
              >
                {submitSuccess}
              </div>
            )}

            <div>
              <label htmlFor="survey-respondent" className="block text-xs font-semibold text-[#1A241B] mb-1">
                Farmer Name or Code *
              </label>
              <input
                id="survey-respondent"
                type="text"
                value={draft.respondentLabel}
                onChange={(e) => setDraft({ ...draft, respondentLabel: e.target.value })}
                placeholder="e.g., Farmer #01 or K. Ramesh"
                className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="survey-village" className="block text-xs font-semibold text-[#1A241B] mb-1">
                  Village / Mandal *
                </label>
                <input
                  id="survey-village"
                  type="text"
                  value={draft.villageOrMandal}
                  onChange={(e) => setDraft({ ...draft, villageOrMandal: e.target.value })}
                  placeholder="e.g., Tenali Mandal"
                  className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                />
              </div>
              <div>
                <label htmlFor="survey-crop" className="block text-xs font-semibold text-[#1A241B] mb-1">
                  Primary Crop *
                </label>
                <input
                  id="survey-crop"
                  type="text"
                  value={draft.primaryCrop}
                  onChange={(e) => setDraft({ ...draft, primaryCrop: e.target.value })}
                  placeholder="e.g., Paddy, Groundnut"
                  className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="survey-practice" className="block text-xs font-semibold text-[#1A241B] mb-1">
                  Current Farming Method
                </label>
                <select
                  id="survey-practice"
                  value={draft.currentPractice}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      currentPractice: e.target.value as SurveyDraft['currentPractice'],
                    })
                  }
                  className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg bg-white focus:outline-none focus:border-[#1B5E20]"
                >
                  <option value="Conventional">Conventional</option>
                  <option value="Mixed / Transitioning">Mixed / Transitioning</option>
                  <option value="Organic / Natural">Organic / Natural</option>
                </select>
              </div>

              <div>
                <label htmlFor="survey-aware" className="block text-xs font-semibold text-[#1A241B] mb-1">
                  Awareness of Organic Farming
                </label>
                <select
                  id="survey-aware"
                  value={draft.awareOfOrganic}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      awareOfOrganic: e.target.value as SurveyDraft['awareOfOrganic'],
                    })
                  }
                  className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg bg-white focus:outline-none focus:border-[#1B5E20]"
                >
                  <option value="Yes">Yes</option>
                  <option value="Partially">Partially</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="survey-challenge" className="block text-xs font-semibold text-[#1A241B] mb-1">
                Problems Faced by Farmer *
              </label>
              <input
                id="survey-challenge"
                type="text"
                value={draft.mainChallenge}
                onChange={(e) => setDraft({ ...draft, mainChallenge: e.target.value })}
                placeholder="e.g., Market access, labor, or yield transition"
                className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
              />
            </div>

            <div>
              <label htmlFor="survey-opinion" className="block text-xs font-semibold text-[#1A241B] mb-1">
                Opinion on Organic Products &amp; Practices *
              </label>
              <textarea
                id="survey-opinion"
                rows={3}
                value={draft.opinionOnOrganic}
                onChange={(e) => setDraft({ ...draft, opinionOnOrganic: e.target.value })}
                placeholder="Summarize the farmer's feedback or willingness to adopt..."
                className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg transition-colors cursor-pointer"
            >
              Submit Survey Response
            </button>
          </form>

          {/* Recorded Survey Entries List */}
          <div className="lg:col-span-7 bg-white border border-[#DDE5DB] rounded-xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#EDF2EC]">
              <div>
                <h2 className="font-display text-xl font-bold text-[#1A241B]">
                  Survey Log ({entries.length})
                </h2>
                <p className="text-xs text-[#556757]">
                  Entries include data origin label (Sample Placeholder vs. Field Survey).
                </p>
              </div>
              {entries.length > 0 && (
                <button
                  type="button"
                  onClick={handleExportCsv}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1B5E20] bg-[#EAF2E8] hover:bg-[#DCE8D9] rounded-lg cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Download CSV</span>
                </button>
              )}
            </div>

            {entries.length === 0 ? (
              <div className="py-10 text-center space-y-2">
                <p className="text-sm font-medium text-[#1A241B]">
                  No survey records currently stored.
                </p>
                <p className="text-xs text-[#556757]">
                  Use the form on the left to add real farmer visit responses, or restore sample placeholders above.
                </p>
              </div>
            ) : (
              <div className="space-y-3" data-testid="survey-entries-list">
                {entries.map((entry) => (
                  <article
                    key={entry.id}
                    className="border border-[#DDE5DB] rounded-xl p-4 bg-[#FAFBF9] space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#556757]">
                          <span className="font-semibold text-sm text-[#1A241B]">
                            {entry.respondentLabel}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{entry.villageOrMandal}</span>
                          <span aria-hidden="true">·</span>
                          <span
                            className={
                              entry.isSample
                                ? 'text-[#8A6100] font-semibold'
                                : 'text-[#1B5E20] font-semibold'
                            }
                          >
                            {entry.isSample ? 'Sample Placeholder' : 'Field Survey'}
                          </span>
                        </div>
                        <p className="text-xs text-[#425244] mt-1">
                          Crop: <strong className="text-[#1A241B]">{entry.primaryCrop}</strong> ·
                          Practice: <strong className="text-[#1A241B]">{entry.currentPractice}</strong> ·
                          Organic Awareness: <strong className="text-[#1A241B]">{entry.awareOfOrganic}</strong>
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Delete survey entry for ${entry.respondentLabel}`}
                        onClick={() => onDeleteEntry(entry.id)}
                        className="p-1.5 text-[#556757] hover:text-[#991B1B] rounded-lg hover:bg-white cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                    <p className="text-xs text-[#425244]">
                      <span className="font-semibold text-[#1A241B]">Challenge:</span> {entry.mainChallenge}
                    </p>
                    <p className="text-xs text-[#425244]">
                      <span className="font-semibold text-[#1A241B]">Opinion:</span> {entry.opinionOnOrganic}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDE5DB]">
          <button
            type="button"
            onClick={() => onNavigate('andhra-pradesh')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1A241B] bg-white border border-[#C5D3C2] hover:bg-[#F1F5F0] rounded-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous: Andhra Pradesh</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('farming-guide')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg cursor-pointer"
          >
            <span>Next: Interactive Farming Guide</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
