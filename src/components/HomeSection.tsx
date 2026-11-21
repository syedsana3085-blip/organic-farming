import { useMemo, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import {
  DASHBOARD_SECTIONS,
  IMPORTANT_ORGANIC_FACTS,
} from '../data/organicContent';
import type { ProjectMetadata, SectionId } from '../types/project';
import { searchProjectContent } from '../utils/organicLogic';
import { MEDIA_ASSETS } from './mediaAssets';
import { SafeImage } from './SafeImage';

interface HomeSectionProps {
  metadata: ProjectMetadata;
  onNavigate: (section: SectionId) => void;
  onExploreProject: () => void;
}

export function HomeSection({
  metadata,
  onNavigate,
  onExploreProject,
}: HomeSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const searchResults = useMemo(
    () => searchProjectContent(searchQuery),
    [searchQuery]
  );

  const filteredCards = useMemo(() => {
    if (categoryFilter === 'All') return DASHBOARD_SECTIONS;
    return DASHBOARD_SECTIONS.filter((c) => c.category === categoryFilter);
  }, [categoryFilter]);

  const categories = ['All', 'Core Study', 'Regional Focus', 'Field Work', 'Interactive Tool'];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Split Showcase */}
      <section className="pt-8 sm:pt-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center py-2">
              <p className="text-xs font-medium text-[#3F5E42] tracking-wide mb-3">
                Community Service Project · Sustainable Agriculture
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1A241B] text-balance leading-[1.12] mb-4">
                Organic Farming
              </h1>
              <p className="font-display text-xl sm:text-2xl font-medium text-[#1B5E20] mb-5">
                &ldquo;{metadata.tagline}&rdquo;
              </p>
              <p className="text-base text-[#425244] leading-relaxed max-w-xl mb-8">
                Organic farming is a holistic agricultural system that builds living soil fertility,
                replaces synthetic chemical fertilizers and pesticides with biological inputs, and
                protects water, biodiversity, and rural livelihoods for future generations.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onExploreProject}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Explore Project</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('farming-guide')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#1B5E20] bg-white border border-[#C5D3C2] hover:bg-[#F1F5F0] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Open Farming Guide</span>
                </button>
              </div>
              <div className="mt-8 pt-6 border-t border-[#DDE5DB] flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#556757]">
                <span>{metadata.projectTitle}</span>
                <span aria-hidden="true">·</span>
                <span>{metadata.districtOrCity}</span>
                <span aria-hidden="true">·</span>
                <span>{metadata.academicYear}</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] sm:min-h-[360px] rounded-xl overflow-hidden border border-[#DDE5DB] bg-[#EAF2E8]">
                <SafeImage
                  src={MEDIA_ASSETS.heroOrganicFarm}
                  alt="Sunlit terraced organic paddy fields bordered by marigolds and pulses in Andhra Pradesh"
                  fallbackTitle="Organic Terraced Farm Field"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Facts About Organic Farming */}
      <section aria-labelledby="facts-heading" className="bg-[#F1F5F0] border-y border-[#DDE5DB] py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium text-[#3F5E42] mb-1">
                Verified Agricultural Foundations
              </p>
              <h2
                id="facts-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-[#1A241B]"
              >
                Important Facts About Organic Farming
              </h2>
            </div>
            <p className="text-xs text-[#556757]">
              Sources: ICAR · FAO · NCOF Jaivik Bharat · RySS APCNF
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPORTANT_ORGANIC_FACTS.map((fact) => (
              <article
                key={fact.title}
                className="bg-white border border-[#DDE5DB] rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-[#1A241B] mb-2">
                    {fact.title}
                  </h3>
                  <p className="text-sm text-[#425244] leading-relaxed mb-4">
                    {fact.detail}
                  </p>
                </div>
                <p className="text-xs text-[#556757] pt-3 border-t border-[#EDF2EC]">
                  {fact.source}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Dashboard + Live Search */}
      <section id="project-dashboard" aria-labelledby="dashboard-heading">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-medium text-[#3F5E42] mb-1">
                10 Interactive Modules
              </p>
              <h2
                id="dashboard-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-[#1A241B]"
              >
                Project Dashboard
              </h2>
              <p className="text-sm text-[#425244] mt-1">
                Select any module card below to open its full study content, field forms, or interactive tools.
              </p>
            </div>

            {/* Global Project Search */}
            <div className="w-full lg:w-80">
              <label htmlFor="dashboard-search" className="sr-only">
                Search topics, methods, crops, or FAQs
              </label>
              <div className="relative">
                <Search
                  className="w-4 h-4 text-[#556757] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="dashboard-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search methods, APCNF, crops..."
                  className="w-full pl-10 pr-9 py-2.5 text-sm bg-white border border-[#C5D3C2] rounded-lg text-[#1A241B] placeholder:text-[#6A7B6C] focus:outline-none focus:border-[#1B5E20] focus:ring-2 focus:ring-[#1B5E20]/15"
                />
                {searchQuery && (
                  <button
                    type="button"
                    aria-label="Clear search query"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#556757] hover:text-[#1A241B] cursor-pointer"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Search Results Panel */}
          {searchQuery.trim().length > 0 && (
            <div
              aria-live="polite"
              className="mb-8 bg-white border border-[#C5D3C2] rounded-xl p-5"
            >
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#EDF2EC]">
                <h3 className="font-display text-base font-semibold text-[#1A241B]">
                  Search Results ({searchResults.length})
                </h3>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-medium text-[#1B5E20] hover:underline cursor-pointer"
                >
                  Close Search
                </button>
              </div>
              {searchResults.length === 0 ? (
                <p className="text-sm text-[#425244]">
                  No matching topics found for &ldquo;{searchQuery}&rdquo;. Try searching for
                  composting, vermicomposting, APCNF, paddy, crop rotation, or survey.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {searchResults.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onNavigate(item.sectionId)}
                      className="text-left p-3.5 rounded-lg border border-[#DDE5DB] hover:border-[#1B5E20] hover:bg-[#FAFBF9] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-[#1A241B]">
                          {item.title}
                        </span>
                        <span className="text-xs text-[#1B5E20] whitespace-nowrap shrink-0">
                          {item.sectionTitle}
                        </span>
                      </div>
                      <p className="text-xs text-[#425244] line-clamp-2">{item.excerpt}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter dashboard sections by category"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F1F5F0] border border-[#DDE5DB] rounded-lg w-fit mb-6"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={categoryFilter === cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-white text-[#1B5E20] shadow-xs border border-[#DDE5DB]'
                    : 'text-[#425244] hover:text-[#1A241B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCards.map((card) => (
              <button
                key={card.id}
                type="button"
                onClick={() => onNavigate(card.id)}
                className="group text-left bg-white border border-[#DDE5DB] hover:border-[#1B5E20] rounded-xl p-6 transition-colors flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E20]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs text-[#556757] mb-3">
                    <span className="font-mono font-semibold text-[#1B5E20]">
                      {card.index}
                    </span>
                    <span>{card.category}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#1A241B] group-hover:text-[#1B5E20] transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#425244] leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#EDF2EC] flex items-center justify-between text-xs font-semibold text-[#1B5E20]">
                  <span>Open Section</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
