import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import {
  APCNF_PILLARS,
  AP_GOVERNMENT_SCHEMES,
  AP_REGIONAL_EXAMPLES,
  FUTURE_SCOPE_PILLARS,
  IFOAM_PRINCIPLES,
  ORGANIC_BENEFITS,
  ORGANIC_METHODS,
  ORGANIC_VS_CONVENTIONAL,
} from '../data/organicContent';
import type { SectionId } from '../types/project';
import { MEDIA_ASSETS } from './mediaAssets';
import { SafeImage } from './SafeImage';

interface SectionHeaderProps {
  index: string;
  category: string;
  title: string;
  subtitle: string;
  onBackHome: () => void;
}

export function SectionHeader({
  index,
  category,
  title,
  subtitle,
  onBackHome,
}: SectionHeaderProps) {
  return (
    <div className="border-b border-[#DDE5DB] bg-[#F1F5F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#1B5E20] hover:underline mb-4 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Back to Home &amp; Dashboard</span>
        </button>
        <div className="flex items-center gap-2 text-xs text-[#556757] mb-2">
          <span className="font-mono font-semibold text-[#1B5E20]">Section {index}</span>
          <span aria-hidden="true">·</span>
          <span>{category}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1A241B] text-balance mb-3">
          {title}
        </h1>
        <p className="text-base text-[#425244] max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function IntroductionView({
  onBackHome,
  onNavigate,
}: {
  onBackHome: () => void;
  onNavigate: (s: SectionId) => void;
}) {
  return (
    <div className="pb-16">
      <SectionHeader
        index="01"
        category="Core Study"
        title="Introduction to Organic Farming"
        subtitle="Understanding what organic agriculture means, how it differs from conventional chemical farming, why farmers adopt it, and the four global principles guiding it."
        onBackHome={onBackHome}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 space-y-12">
        {/* Meaning & Importance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-display text-2xl font-bold text-[#1A241B]">
              What is Organic Farming?
            </h2>
            <p className="text-base text-[#425244] leading-relaxed">
              Organic farming is an agricultural production system that avoids synthetic chemical
              fertilizers, chemical pesticides, growth regulators, and genetically modified inputs.
              Instead, it relies on crop rotations, animal manures, compost, green manures,
              biofertilizers, and biological pest control to feed the soil so the soil can nourish
              the plant.
            </p>
            <h3 className="font-display text-xl font-semibold text-[#1A241B] pt-2">
              Meaning &amp; Importance of Organic Agriculture
            </h3>
            <p className="text-base text-[#425244] leading-relaxed">
              Unlike chemical-intensive farming that treats soil as an inert anchor for roots,
              organic agriculture views farmland as a living ecosystem. Maintaining soil organic
              carbon and microbial biodiversity safeguards drinking water quality, produces
              residue-free food, and protects long-term agricultural productivity.
            </p>
            <h3 className="font-display text-xl font-semibold text-[#1A241B] pt-2">
              Why Farmers Are Adopting Organic Farming
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#425244]">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1B5E20] mt-1 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-[#1A241B]">Lower cash input dependency:</strong> Utilizing
                  on-farm cow dung, crop residue, and neem saves recurring expenditure on synthetic
                  chemicals.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1B5E20] mt-1 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-[#1A241B]">Soil recovery &amp; drought resilience:</strong>{' '}
                  Soils enriched with compost and mulch absorb rainwater better during dry spells.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1B5E20] mt-1 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-[#1A241B]">Healthier farm families:</strong> Eliminating
                  toxic spray drift protects farmers, farmworkers, livestock, and rural wells.
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-[#DDE5DB] bg-white">
              <SafeImage
                src={MEDIA_ASSETS.compostingSoilHealth}
                alt="Farmer holding dark rich vermicompost above healthy green sprouts"
                fallbackTitle="Organic Soil Health"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 border-t border-[#DDE5DB]">
                <p className="text-xs text-[#425244]">
                  Living humus and earthworm castings restore soil structure and water retention naturally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table: Organic vs Conventional */}
        <div>
          <h2 className="font-display text-2xl font-bold text-[#1A241B] mb-2">
            Organic vs. Conventional Farming
          </h2>
          <p className="text-sm text-[#425244] mb-5">
            Side-by-side operational comparison across soil management, inputs, and market systems.
          </p>
          <div className="overflow-x-auto bg-white border border-[#DDE5DB] rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F1F5F0] border-b border-[#DDE5DB] text-xs font-semibold text-[#1A241B]">
                  <th className="py-3.5 px-4">Aspect</th>
                  <th className="py-3.5 px-4 text-[#1B5E20]">Organic Farming</th>
                  <th className="py-3.5 px-4">Conventional Chemical Farming</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDF2EC] text-sm">
                {ORGANIC_VS_CONVENTIONAL.map((row) => (
                  <tr key={row.aspect} className="hover:bg-[#FAFBF9]">
                    <td className="py-3.5 px-4 font-semibold text-[#1A241B] whitespace-nowrap">
                      {row.aspect}
                    </td>
                    <td className="py-3.5 px-4 text-[#233825]">{row.organic}</td>
                    <td className="py-3.5 px-4 text-[#425244]">{row.conventional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Principles of Organic Agriculture */}
        <div>
          <h2 className="font-display text-2xl font-bold text-[#1A241B] mb-2">
            Main Principles of Organic Agriculture (IFOAM)
          </h2>
          <p className="text-sm text-[#425244] mb-6">
            Established by IFOAM – Organics International as the ethical and ecological foundation of organic food systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {IFOAM_PRINCIPLES.map((p, idx) => (
              <div
                key={p.name}
                className="bg-white border border-[#DDE5DB] rounded-xl p-6"
              >
                <span className="font-mono text-xs font-semibold text-[#1B5E20]">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#1A241B] mt-1 mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-[#425244] mb-3 leading-relaxed">
                  {p.summary}
                </p>
                <p className="text-xs text-[#3F5E42] pt-3 border-t border-[#EDF2EC]">
                  Field Practice: {p.practice}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-[#DDE5DB]">
          <button
            type="button"
            onClick={() => onNavigate('benefits')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg transition-colors cursor-pointer"
          >
            <span>Next: Benefits of Organic Farming</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function BenefitsView({
  onBackHome,
  onNavigate,
}: {
  onBackHome: () => void;
  onNavigate: (s: SectionId) => void;
}) {
  return (
    <div className="pb-16">
      <SectionHeader
        index="02"
        category="Core Study"
        title="Benefits of Organic Farming"
        subtitle="How chemical-free cultivation restores soil life, safeguards village water, cuts input dependency, and opens new economic opportunities for farmers."
        onBackHome={onBackHome}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ORGANIC_BENEFITS.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-[#DDE5DB] rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-[#1B5E20]">
                    Benefit {item.index}
                  </span>
                </div>
                <h2 className="font-display text-xl font-semibold text-[#1A241B] mb-2">
                  {item.title}
                </h2>
                <p className="text-sm font-medium text-[#1B5E20] mb-3">
                  {item.summary}
                </p>
                <p className="text-sm text-[#425244] leading-relaxed mb-4">
                  {item.mechanism}
                </p>
              </div>
              <div className="pt-3 border-t border-[#EDF2EC] text-xs text-[#3F5E42]">
                Outcome: {item.impact}
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDE5DB]">
          <button
            type="button"
            onClick={() => onNavigate('introduction')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1A241B] bg-white border border-[#C5D3C2] hover:bg-[#F1F5F0] rounded-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous: Introduction</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('methods')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg cursor-pointer"
          >
            <span>Next: Organic Farming Methods</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function MethodsView({
  onBackHome,
  onNavigate,
}: {
  onBackHome: () => void;
  onNavigate: (s: SectionId) => void;
}) {
  const [selectedMethodId, setSelectedMethodId] = useState(ORGANIC_METHODS[0].id);
  const activeMethod =
    ORGANIC_METHODS.find((m) => m.id === selectedMethodId) ?? ORGANIC_METHODS[0];

  return (
    <div className="pb-16">
      <SectionHeader
        index="03"
        category="Core Study"
        title="Organic Farming Methods"
        subtitle="Explore all eight foundational organic cultivation methods—from composting and vermicomposting to biofertilizers, mulching, and mixed cropping."
        onBackHome={onBackHome}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 space-y-10">
        {/* Interactive Method Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-2" role="tablist" aria-label="Select organic farming method">
            {ORGANIC_METHODS.map((method, idx) => {
              const isSelected = method.id === activeMethod.id;
              return (
                <button
                  key={method.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedMethodId(method.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#1B5E20] text-white border-[#1B5E20]'
                      : 'bg-white text-[#1A241B] border-[#DDE5DB] hover:bg-[#F1F5F0]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-semibold">
                      0{idx + 1}. {method.name}
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-1 line-clamp-1 ${
                      isSelected ? 'text-white/85' : 'text-[#556757]'
                    }`}
                  >
                    {method.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Method Detail View */}
          <div
            role="tabpanel"
            aria-label={activeMethod.name}
            className="lg:col-span-8 bg-white border border-[#DDE5DB] rounded-xl p-6 sm:p-8 space-y-6"
          >
            <div>
              <p className="text-xs font-medium text-[#1B5E20] mb-1">
                Detailed Practice Guide
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1A241B] mb-3">
                {activeMethod.name}
              </h2>
              <p className="text-base text-[#425244] leading-relaxed">
                {activeMethod.overview}
              </p>
            </div>

            <div className="pt-5 border-t border-[#EDF2EC]">
              <h3 className="font-display text-base font-semibold text-[#1A241B] mb-3">
                Materials &amp; Biological Inputs Required
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeMethod.materials.map((mat) => (
                  <li
                    key={mat}
                    className="flex items-start gap-2 text-sm text-[#425244] bg-[#FAFBF9] border border-[#EDF2EC] rounded-lg px-3.5 py-2.5"
                  >
                    <Check className="w-4 h-4 text-[#1B5E20] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-[#EDF2EC]">
              <h3 className="font-display text-base font-semibold text-[#1A241B] mb-3">
                Step-by-Step Field Application
              </h3>
              <ol className="space-y-3">
                {activeMethod.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-[#425244]">
                    <span className="font-mono text-xs font-semibold text-[#1B5E20] bg-[#EAF2E8] px-2 py-1 rounded shrink-0">
                      0{i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="pt-5 border-t border-[#EDF2EC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#1A241B] mb-1">
                  Soil &amp; Crop Impact
                </p>
                <p className="text-sm text-[#425244]">{activeMethod.soilAndCropEffect}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Companion Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#DDE5DB] rounded-xl overflow-hidden">
            <SafeImage
              src={MEDIA_ASSETS.compostingSoilHealth}
              alt="Vermicompost humus with earthworms held above soil"
              fallbackTitle="Vermicomposting & Humus"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-4 border-t border-[#DDE5DB]">
              <h3 className="font-display text-base font-semibold text-[#1A241B]">
                Composting &amp; Vermicomposting
              </h3>
              <p className="text-xs text-[#425244] mt-1">
                Converts agricultural residues and livestock waste into nutrient-rich humus without burning crop stubble.
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#DDE5DB] rounded-xl overflow-hidden">
            <SafeImage
              src={MEDIA_ASSETS.naturalFarmingCrops}
              alt="Mixed cropping of millets, legumes, and marigold companion flowers"
              fallbackTitle="Mixed Cropping & Trap Crops"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-4 border-t border-[#DDE5DB]">
              <h3 className="font-display text-base font-semibold text-[#1A241B]">
                Mixed Cropping, Mulching &amp; Trap Borders
              </h3>
              <p className="text-xs text-[#425244] mt-1">
                Pairing cereals, pulses, straw mulch, and flowering marigold protects soil moisture and encourages natural pest predators.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDE5DB]">
          <button
            type="button"
            onClick={() => onNavigate('benefits')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1A241B] bg-white border border-[#C5D3C2] hover:bg-[#F1F5F0] rounded-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous: Benefits</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('andhra-pradesh')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg cursor-pointer"
          >
            <span>Next: Organic Farming in Andhra Pradesh</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function AndhraPradeshView({
  onBackHome,
  onNavigate,
}: {
  onBackHome: () => void;
  onNavigate: (s: SectionId) => void;
}) {
  return (
    <div className="pb-16">
      <SectionHeader
        index="04"
        category="Regional Focus"
        title="Organic Farming in Andhra Pradesh"
        subtitle="Examining Andhra Pradesh Community-Managed Natural Farming (APCNF), major crops, women Self-Help Groups, government programs, and regional ecological models."
        onBackHome={onBackHome}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 space-y-12">
        {/* Overview & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#1A241B]">
              Community-Led Sustainable Agriculture in Andhra Pradesh
            </h2>
            <p className="text-base text-[#425244] leading-relaxed">
              Andhra Pradesh encompasses diverse agro-climatic zones—from the tribal Eastern Ghats
              of Araku Valley to the irrigated Krishna–Godavari delta and the rainfed tracts of
              Rayalaseema. Across these zones, farmers and women Self-Help Groups (SHGs) are
              adopting biological soil management to reduce chemical costs and build climate
              resilience.
            </p>
            <p className="text-base text-[#425244] leading-relaxed">
              Key crops cultivated under organic and natural practices include{' '}
              <strong className="text-[#1A241B]">
                Paddy, Groundnut, Red Gram, Black Gram, Millets (Ragi &amp; Foxtail Millet), Chilli,
                Turmeric, Coffee, Mango, and Banana
              </strong>
              .
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-[#DDE5DB] bg-white">
              <SafeImage
                src={MEDIA_ASSETS.apFarmersField}
                alt="Mulched community natural farming plot in Andhra Pradesh with neem trees"
                fallbackTitle="Andhra Pradesh Natural Farming Plot"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>
        </div>

        {/* APCNF Four Pillars */}
        <div>
          <h2 className="font-display text-2xl font-bold text-[#1A241B] mb-2">
            Andhra Pradesh Community-Managed Natural Farming (APCNF)
          </h2>
          <p className="text-sm text-[#425244] mb-6">
            Facilitated by Rythu Sadhikara Samstha (RySS), APCNF rests on four ecological practices designed to awaken native soil biology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {APCNF_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.name}
                className="bg-white border border-[#DDE5DB] rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#1B5E20]">
                    0{idx + 1} · {pillar.teluguMeaning}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-[#1A241B] mt-1 mb-2">
                    {pillar.name}
                  </h3>
                  <p className="text-sm text-[#425244] mb-3">{pillar.purpose}</p>
                </div>
                <p className="text-xs text-[#556757] pt-3 border-t border-[#EDF2EC]">
                  Method: {pillar.preparation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Role of Farmers & Government Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-[#F1F5F0] border border-[#DDE5DB] rounded-xl p-6 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#1A241B]">
              Role of Farmers &amp; Women SHGs
            </h2>
            <p className="text-sm text-[#425244] leading-relaxed">
              In Andhra Pradesh, farmer-to-farmer learning drives adoption faster than top-down
              instruction. Practicing &ldquo;Champion Farmers&rdquo; and Internal Community Resource
              Persons (ICRPs) mentor neighboring households through village demonstration plots.
            </p>
            <p className="text-sm text-[#425244] leading-relaxed">
              Women Self-Help Groups (SHGs) play a vital role by managing village Bio-Input Resource
              Centers (BRCs), kitchen-garden nutrition drives, and collective grading through
              Farmer Producer Organizations (FPOs).
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-xl font-bold text-[#1A241B]">
              Government Initiatives Supporting Organic Farming
            </h2>
            <div className="space-y-3">
              {AP_GOVERNMENT_SCHEMES.map((scheme) => (
                <div
                  key={scheme.name}
                  className="bg-white border border-[#DDE5DB] rounded-xl p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-display text-base font-semibold text-[#1A241B]">
                      {scheme.name}
                    </h3>
                  </div>
                  <p className="text-xs font-medium text-[#1B5E20] mb-2">{scheme.agency}</p>
                  <p className="text-sm text-[#425244] leading-relaxed">{scheme.objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regional Agricultural Examples */}
        <div>
          <h2 className="font-display text-2xl font-bold text-[#1A241B] mb-2">
            Regional Agricultural Models in Andhra Pradesh
          </h2>
          <p className="text-sm text-[#425244] mb-6">
            Documented regional cropping practices adapted to local soils and rainfall.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {AP_REGIONAL_EXAMPLES.map((reg) => (
              <article
                key={reg.region}
                className="bg-white border border-[#DDE5DB] rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#1A241B] mb-2">
                    {reg.region}
                  </h3>
                  <p className="text-xs font-medium text-[#1B5E20] mb-3">
                    Key Crops: {reg.crops}
                  </p>
                  <p className="text-sm text-[#425244] leading-relaxed mb-4">
                    {reg.approach}
                  </p>
                </div>
                <p className="text-xs text-[#556757] pt-3 border-t border-[#EDF2EC]">
                  {reg.note}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDE5DB]">
          <button
            type="button"
            onClick={() => onNavigate('methods')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1A241B] bg-white border border-[#C5D3C2] hover:bg-[#F1F5F0] rounded-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous: Methods</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('survey')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg cursor-pointer"
          >
            <span>Next: Data Collection &amp; Survey</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function FutureScopeView({
  onBackHome,
  onNavigate,
}: {
  onBackHome: () => void;
  onNavigate: (s: SectionId) => void;
}) {
  return (
    <div className="pb-16">
      <SectionHeader
        index="07"
        category="Core Study"
        title="Future Scope of Organic Farming"
        subtitle="Emerging pathways in awareness, appropriate agricultural technology, farmer training, FPO markets, public policy, and rural youth entrepreneurship."
        onBackHome={onBackHome}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FUTURE_SCOPE_PILLARS.map((item) => (
            <article
              key={item.index}
              className="bg-white border border-[#DDE5DB] rounded-xl p-6"
            >
              <span className="font-mono text-xs font-semibold text-[#1B5E20]">
                {item.index}
              </span>
              <h2 className="font-display text-xl font-semibold text-[#1A241B] mt-1 mb-2.5">
                {item.title}
              </h2>
              <p className="text-sm text-[#425244] leading-relaxed">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDE5DB]">
          <button
            type="button"
            onClick={() => onNavigate('farming-guide')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1A241B] bg-white border border-[#C5D3C2] hover:bg-[#F1F5F0] rounded-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous: Interactive Guide</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('my-activity')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg cursor-pointer"
          >
            <span>Next: My Activity (6 Weeks)</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ConclusionView({
  onBackHome,
  onNavigate,
}: {
  onBackHome: () => void;
  onNavigate: (s: SectionId) => void;
}) {
  return (
    <div className="pb-16">
      <SectionHeader
        index="09"
        category="Core Study"
        title="Conclusion"
        subtitle="Synthesizing how organic and natural farming sustain living soil, environmental integrity, safe nutrition, and dignified farmer livelihoods."
        onBackHome={onBackHome}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 space-y-10">
        <div className="bg-white border border-[#DDE5DB] rounded-xl p-6 sm:p-10 space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1A241B]">
            Growing Naturally for a Resilient Rural Future
          </h2>
          <p className="text-base text-[#425244] leading-relaxed">
            Through our Community Service Project study on{' '}
            <strong className="text-[#1A241B]">
              &ldquo;Organic Farming – Sustainable Agriculture for a Healthy Future,&rdquo;
            </strong>{' '}
            we observed that long-term agricultural prosperity depends on restoring the biological
            life of the soil rather than intensifying synthetic chemical inputs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#EDF2EC]">
            <div>
              <h3 className="font-display text-lg font-semibold text-[#1B5E20] mb-2">
                Soil Health &amp; Ecological Stewardship
              </h3>
              <p className="text-sm text-[#425244] leading-relaxed">
                Practices such as composting, vermicomposting, green manuring, crop rotation, and
                mulching steadily rebuild organic carbon, invite beneficial earthworms and microbes,
                and protect village tanks and groundwater from chemical runoff.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-[#1B5E20] mb-2">
                Sustainable Food &amp; Farmer Livelihoods
              </h3>
              <p className="text-sm text-[#425244] leading-relaxed">
                By preparing low-cost natural inputs locally and organizing through FPOs and PGS-India
                clusters, farmers reduce input debt, produce safer residue-free harvests, and gain
                stronger resilience against erratic monsoons and input inflation.
              </p>
            </div>
          </div>

          <p className="text-base text-[#1A241B] font-medium pt-4 border-t border-[#EDF2EC]">
            Community education, local field surveys, and accessible digital guides like this CSP
            portal help bridge scientific agroecology with everyday village farming practices.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDE5DB]">
          <button
            type="button"
            onClick={() => onNavigate('my-activity')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1A241B] bg-white border border-[#C5D3C2] hover:bg-[#F1F5F0] rounded-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous: My Activity</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('quiz-faq')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg cursor-pointer"
          >
            <span>Next: Knowledge Quiz &amp; FAQ</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
