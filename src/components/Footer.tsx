import type { ProjectMetadata, SectionId } from '../types/project';

interface FooterProps {
  metadata: ProjectMetadata;
  onNavigate: (section: SectionId) => void;
  onOpenSettings: (tab: 'details' | 'deploy') => void;
}

export function Footer({
  metadata,
  onNavigate,
  onOpenSettings,
}: FooterProps) {
  return (
    <footer className="bg-[#F1F5F0] border-t border-[#DDE5DB] mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#DDE5DB]">
          {/* Project & College Info */}
          <div className="md:col-span-5 space-y-2.5">
            <h2 className="font-display text-lg font-bold text-[#1A241B]">
              {metadata.projectTitle}
            </h2>
            <p className="text-sm text-[#1B5E20] font-medium">
              &ldquo;{metadata.tagline}&rdquo;
            </p>
            <div className="text-xs text-[#425244] space-y-1 pt-2">
              <p>
                <span className="font-semibold text-[#1A241B]">College:</span>{' '}
                {metadata.collegeName}
              </p>
              <p>
                <span className="font-semibold text-[#1A241B]">Program:</span>{' '}
                {metadata.department} · {metadata.academicYear}
              </p>
              <p>
                <span className="font-semibold text-[#1A241B]">Student(s):</span>{' '}
                {metadata.studentName} ({metadata.rollNumber})
              </p>
              <p>
                <span className="font-semibold text-[#1A241B]">Mentor:</span>{' '}
                {metadata.mentorName} · {metadata.districtOrCity}
              </p>
            </div>
            <div className="pt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpenSettings('details')}
                className="text-xs font-semibold text-[#1B5E20] hover:underline cursor-pointer"
              >
                Edit College &amp; Student Details
              </button>
              <span className="text-[#C5D3C2]" aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => onOpenSettings('deploy')}
                className="text-xs font-semibold text-[#1B5E20] hover:underline cursor-pointer"
              >
                Free Deploy Guide (GitHub Pages / Netlify)
              </button>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-4 space-y-2.5">
            <h3 className="font-display text-sm font-semibold text-[#1A241B]">
              Project Sections
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-[#425244]">
              <button type="button" onClick={() => onNavigate('introduction')} className="text-left hover:text-[#1B5E20] cursor-pointer">
                Introduction
              </button>
              <button type="button" onClick={() => onNavigate('benefits')} className="text-left hover:text-[#1B5E20] cursor-pointer">
                Benefits
              </button>
              <button type="button" onClick={() => onNavigate('methods')} className="text-left hover:text-[#1B5E20] cursor-pointer">
                Farming Methods
              </button>
              <button type="button" onClick={() => onNavigate('andhra-pradesh')} className="text-left hover:text-[#1B5E20] cursor-pointer">
                Andhra Pradesh
              </button>
              <button type="button" onClick={() => onNavigate('survey')} className="text-left hover:text-[#1B5E20] cursor-pointer">
                Farmer Survey
              </button>
              <button type="button" onClick={() => onNavigate('farming-guide')} className="text-left hover:text-[#1B5E20] cursor-pointer">
                Interactive Guide
              </button>
              <button type="button" onClick={() => onNavigate('future-scope')} className="text-left hover:text-[#1B5E20] cursor-pointer">
                Future Scope
              </button>
              <button type="button" onClick={() => onNavigate('my-activity')} className="text-left hover:text-[#1B5E20] cursor-pointer">
                My Activity (6 Weeks)
              </button>
              <button type="button" onClick={() => onNavigate('conclusion')} className="text-left hover:text-[#1B5E20] cursor-pointer">
                Conclusion
              </button>
              <button type="button" onClick={() => onNavigate('quiz-faq')} className="text-left hover:text-[#1B5E20] cursor-pointer">
                Quiz &amp; FAQ
              </button>
            </div>
          </div>

          {/* Authentic References */}
          <div className="md:col-span-3 space-y-2.5">
            <h3 className="font-display text-sm font-semibold text-[#1A241B]">
              Authentic Reference Sources
            </h3>
            <ul className="text-xs text-[#425244] space-y-1.5">
              <li>ICAR – Indian Council of Agricultural Research</li>
              <li>NCOF &amp; PGS-India / Jaivik Bharat (FSSAI)</li>
              <li>RySS – Andhra Pradesh Community-Managed Natural Farming (APCNF)</li>
              <li>FAO Agroecology Knowledge Hub &amp; IFOAM</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#556757]">
          <p>
            Community Service Project Educational Portal · Static-Ready for GitHub Pages &amp; Netlify
          </p>
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="font-semibold text-[#1B5E20] hover:underline cursor-pointer"
          >
            Back to Top / Home
          </button>
        </div>
      </div>
    </footer>
  );
}
