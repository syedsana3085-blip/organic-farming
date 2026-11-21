/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import {
  DASHBOARD_SECTIONS,
  DEFAULT_PROJECT_METADATA,
  INITIAL_ACTIVITY_WEEKS,
  INITIAL_SAMPLE_SURVEY_DATA,
} from './data/organicContent';
import type {
  ActivityWeek,
  ProjectMetadata,
  SectionId,
  SurveyDraft,
  SurveyEntry,
} from './types/project';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import {
  AndhraPradeshView,
  BenefitsView,
  ConclusionView,
  FutureScopeView,
  IntroductionView,
  MethodsView,
} from './components/ContentSections';
import { SurveySection } from './components/SurveySection';
import { FarmingGuideSection } from './components/FarmingGuideSection';
import { ActivitySection } from './components/ActivitySection';
import { QuizFaqSection } from './components/QuizFaqSection';
import { AgroGuideChat } from './components/AgroGuideChat';
import { ProjectSettingsModal } from './components/ProjectSettingsModal';
import { Footer } from './components/Footer';

const STORAGE_KEYS = {
  survey: 'csp_organic_survey_v1',
  activity: 'csp_organic_activity_v1',
  metadata: 'csp_organic_metadata_v1',
};

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [settingsModal, setSettingsModal] = useState<{
    open: boolean;
    tab: 'details' | 'deploy';
  }>({ open: false, tab: 'details' });

  const [surveyEntries, setSurveyEntries] = useState<SurveyEntry[]>(() =>
    loadFromStorage(STORAGE_KEYS.survey, INITIAL_SAMPLE_SURVEY_DATA)
  );
  const [activityWeeks, setActivityWeeks] = useState<ActivityWeek[]>(() =>
    loadFromStorage(STORAGE_KEYS.activity, INITIAL_ACTIVITY_WEEKS)
  );
  const [metadata, setMetadata] = useState<ProjectMetadata>(() =>
    loadFromStorage(STORAGE_KEYS.metadata, DEFAULT_PROJECT_METADATA)
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.survey, JSON.stringify(surveyEntries));
    } catch {
      // Ignore storage quota errors gracefully
    }
  }, [surveyEntries]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.activity, JSON.stringify(activityWeeks));
    } catch {
      // Ignore storage quota errors gracefully
    }
  }, [activityWeeks]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.metadata, JSON.stringify(metadata));
    } catch {
      // Ignore storage quota errors gracefully
    }
  }, [metadata]);

  const handleNavigate = (section: SectionId) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDashboard = () => {
    setActiveSection('home');
    setTimeout(() => {
      const el = document.getElementById('project-dashboard');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 40);
  };

  const handleAddSurveyEntry = (draft: SurveyDraft) => {
    const newEntry: SurveyEntry = {
      ...draft,
      id: `field-${Date.now()}`,
      isSample: false,
      submittedAt: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    };
    setSurveyEntries((prev) => [newEntry, ...prev]);
  };

  const handleDeleteSurveyEntry = (id: string) => {
    setSurveyEntries((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearSampleSurvey = () => {
    setSurveyEntries((prev) => prev.filter((item) => !item.isSample));
  };

  const handleResetSurvey = () => {
    setSurveyEntries(INITIAL_SAMPLE_SURVEY_DATA);
  };

  const handleUpdateWeek = (updated: ActivityWeek) => {
    setActivityWeeks((prev) =>
      prev.map((w) => (w.week === updated.week ? updated : w))
    );
  };

  const handleResetWeeks = () => {
    setActivityWeeks(INITIAL_ACTIVITY_WEEKS);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBF9] text-[#1A241B]">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenDashboard={handleOpenDashboard}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Contextual Section Bar when viewing interior project sections */}
      {activeSection !== 'home' && (
        <div className="bg-white border-b border-[#DDE5DB]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-2 overflow-x-auto">
            <button
              type="button"
              onClick={() => handleNavigate('home')}
              className="px-3 py-1.5 text-xs font-semibold rounded-md text-[#1B5E20] bg-[#EAF2E8] hover:bg-[#DCE8D9] whitespace-nowrap shrink-0 cursor-pointer"
            >
              Home
            </button>
            {DASHBOARD_SECTIONS.map((sec) => {
              const shortNames: Record<SectionId, string> = {
                home: 'Home',
                introduction: 'Introduction',
                benefits: 'Benefits',
                methods: 'Farming Methods',
                'andhra-pradesh': 'Andhra Pradesh',
                survey: 'Farmer Survey',
                'farming-guide': 'Farming Guide',
                'future-scope': 'Future Scope',
                'my-activity': 'My Activity',
                conclusion: 'Conclusion',
                'quiz-faq': 'Quiz & FAQ',
              };
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleNavigate(sec.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    activeSection === sec.id
                      ? 'bg-[#1B5E20] text-white'
                      : 'text-[#425244] hover:bg-[#F1F5F0]'
                  }`}
                >
                  {sec.index}. {shortNames[sec.id]}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <main className="flex-1">
        {activeSection === 'home' && (
          <HomeSection
            metadata={metadata}
            onNavigate={handleNavigate}
            onExploreProject={handleOpenDashboard}
          />
        )}

        {activeSection === 'introduction' && (
          <IntroductionView
            onBackHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}

        {activeSection === 'benefits' && (
          <BenefitsView
            onBackHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}

        {activeSection === 'methods' && (
          <MethodsView
            onBackHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}

        {activeSection === 'andhra-pradesh' && (
          <AndhraPradeshView
            onBackHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}

        {activeSection === 'survey' && (
          <SurveySection
            entries={surveyEntries}
            onAddEntry={handleAddSurveyEntry}
            onDeleteEntry={handleDeleteSurveyEntry}
            onClearSamples={handleClearSampleSurvey}
            onResetSamples={handleResetSurvey}
            onBackHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}

        {activeSection === 'farming-guide' && (
          <FarmingGuideSection
            onBackHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}

        {activeSection === 'future-scope' && (
          <FutureScopeView
            onBackHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}

        {activeSection === 'my-activity' && (
          <ActivitySection
            weeks={activityWeeks}
            onUpdateWeek={handleUpdateWeek}
            onResetWeeks={handleResetWeeks}
            onBackHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}

        {activeSection === 'conclusion' && (
          <ConclusionView
            onBackHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}

        {activeSection === 'quiz-faq' && (
          <QuizFaqSection
            onBackHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      <Footer
        metadata={metadata}
        onNavigate={handleNavigate}
        onOpenSettings={(tab) => setSettingsModal({ open: true, tab })}
      />

      <AgroGuideChat
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        onNavigate={handleNavigate}
      />

      <ProjectSettingsModal
        key={`${settingsModal.open}-${settingsModal.tab}`}
        isOpen={settingsModal.open}
        initialTab={settingsModal.tab}
        metadata={metadata}
        onSaveMetadata={setMetadata}
        onResetMetadata={() => setMetadata(DEFAULT_PROJECT_METADATA)}
        onClose={() => setSettingsModal((prev) => ({ ...prev, open: false }))}
      />
    </div>
  );
}
