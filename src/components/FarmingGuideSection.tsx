import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Info } from 'lucide-react';
import {
  CROP_GUIDE_PROFILES,
  ORGANIC_METHODS,
} from '../data/organicContent';
import type { SectionId } from '../types/project';
import { getGuideRecommendation } from '../utils/organicLogic';
import { SectionHeader } from './ContentSections';

interface FarmingGuideSectionProps {
  onBackHome: () => void;
  onNavigate: (s: SectionId) => void;
}

export function FarmingGuideSection({
  onBackHome,
  onNavigate,
}: FarmingGuideSectionProps) {
  const [selectedCropId, setSelectedCropId] = useState(CROP_GUIDE_PROFILES[0].id);
  const [selectedMethodId, setSelectedMethodId] = useState(ORGANIC_METHODS[0].id);

  const recommendation = useMemo(
    () => getGuideRecommendation(selectedCropId, selectedMethodId),
    [selectedCropId, selectedMethodId]
  );

  return (
    <div className="pb-16">
      <SectionHeader
        index="06"
        category="Interactive Tool"
        title="Interactive Organic Farming Guide"
        subtitle="Select a crop and an organic farming method to explore suitable biological practices, composting guidance, soil improvement steps, and natural farming recommendations."
        onBackHome={onBackHome}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 space-y-8">
        {/* Educational Example Disclaimer */}
        <div
          role="note"
          className="bg-[#EAF2E8] border border-[#C5D3C2] rounded-xl p-4 sm:p-5 flex items-start gap-3"
        >
          <Info className="w-5 h-5 text-[#1B5E20] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-[#1A241B] leading-relaxed">
            <strong>Educational Disclaimer:</strong> {recommendation.disclaimer}
          </p>
        </div>

        {/* Selector Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-[#DDE5DB] rounded-xl p-6">
          <div>
            <label
              htmlFor="guide-crop-select"
              className="block text-xs font-semibold text-[#1A241B] mb-2"
            >
              1. Select Target Crop
            </label>
            <select
              id="guide-crop-select"
              value={selectedCropId}
              onChange={(e) => setSelectedCropId(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm font-medium bg-[#FAFBF9] border border-[#C5D3C2] rounded-lg text-[#1A241B] focus:outline-none focus:border-[#1B5E20]"
            >
              {CROP_GUIDE_PROFILES.map((crop) => (
                <option key={crop.id} value={crop.id}>
                  {crop.name} ({crop.season})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="guide-method-select"
              className="block text-xs font-semibold text-[#1A241B] mb-2"
            >
              2. Select Organic Farming Method
            </label>
            <select
              id="guide-method-select"
              value={selectedMethodId}
              onChange={(e) => setSelectedMethodId(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm font-medium bg-[#FAFBF9] border border-[#C5D3C2] rounded-lg text-[#1A241B] focus:outline-none focus:border-[#1B5E20]"
            >
              {ORGANIC_METHODS.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Generated Guide Output */}
        <div
          aria-live="polite"
          data-testid="guide-output"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left: Method Steps & Suitable Practices */}
          <div className="lg:col-span-7 bg-white border border-[#DDE5DB] rounded-xl p-6 sm:p-8 space-y-6">
            <div>
              <p className="text-xs font-medium text-[#1B5E20] mb-1">
                Educational Example · {recommendation.season} · {recommendation.soilType}
              </p>
              <h2 className="font-display text-2xl font-bold text-[#1A241B] mb-2">
                {recommendation.cropName} with {recommendation.methodName}
              </h2>
              <p className="text-sm text-[#425244] leading-relaxed">
                {recommendation.methodOverview}
              </p>
            </div>

            <div className="pt-5 border-t border-[#EDF2EC]">
              <h3 className="font-display text-base font-semibold text-[#1A241B] mb-3">
                Suitable Organic Practice Steps
              </h3>
              <ol className="space-y-3">
                {recommendation.tailoredSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-[#425244]">
                    <span className="font-mono text-xs font-semibold text-[#1B5E20] bg-[#EAF2E8] px-2 py-1 rounded shrink-0">
                      0{i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: Composting, Soil Improvement & Natural Recommendations */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white border border-[#DDE5DB] rounded-xl p-6">
              <h3 className="font-display text-base font-semibold text-[#1A241B] mb-2">
                Composting Guidance
              </h3>
              <p className="text-sm text-[#425244] leading-relaxed">
                {recommendation.compostMethod}
              </p>
            </div>

            <div className="bg-white border border-[#DDE5DB] rounded-xl p-6">
              <h3 className="font-display text-base font-semibold text-[#1A241B] mb-2">
                Soil Improvement Strategy
              </h3>
              <p className="text-sm text-[#425244] leading-relaxed">
                {recommendation.soilImprovement}
              </p>
            </div>

            <div className="bg-[#F1F5F0] border border-[#DDE5DB] rounded-xl p-6">
              <h3 className="font-display text-base font-semibold text-[#1A241B] mb-3">
                Natural Farming Recommendations (Educational)
              </h3>
              <ul className="space-y-2.5">
                {recommendation.naturalRecommendations.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#233825]">
                    <Check className="w-4 h-4 text-[#1B5E20] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDE5DB]">
          <button
            type="button"
            onClick={() => onNavigate('survey')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1A241B] bg-white border border-[#C5D3C2] hover:bg-[#F1F5F0] rounded-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous: Survey</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('future-scope')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg cursor-pointer"
          >
            <span>Next: Future Scope</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
