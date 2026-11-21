import {
  APCNF_PILLARS,
  AP_GOVERNMENT_SCHEMES,
  AP_REGIONAL_EXAMPLES,
  CROP_GUIDE_PROFILES,
  DASHBOARD_SECTIONS,
  FAQ_ITEMS,
  ORGANIC_BENEFITS,
  ORGANIC_METHODS,
} from '../data/organicContent';
import type {
  QuizQuestion,
  SearchResult,
  SectionId,
  SurveyDraft,
  SurveyEntry,
} from '../types/project';

export interface SurveySummary {
  totalResponses: number;
  sampleCount: number;
  realCount: number;
  awareCount: number;
  awarenessPercent: number;
  organicOrTransitionCount: number;
  topChallenge: string;
}

export interface GuideRecommendation {
  cropName: string;
  season: string;
  soilType: string;
  methodName: string;
  methodOverview: string;
  tailoredSteps: string[];
  compostMethod: string;
  soilImprovement: string;
  naturalRecommendations: string[];
  disclaimer: string;
}

export interface QuizEvaluation {
  score: number;
  total: number;
  percentage: number;
  tierLabel: string;
}

export interface AgroGuideResponse {
  answer: string;
  suggestedSection?: SectionId;
  suggestedLabel?: string;
}

export function searchProjectContent(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const section of DASHBOARD_SECTIONS) {
    if (
      section.title.toLowerCase().includes(q) ||
      section.subtitle.toLowerCase().includes(q)
    ) {
      results.push({
        id: `sec-${section.id}`,
        title: section.title,
        excerpt: section.subtitle,
        sectionId: section.id,
        sectionTitle: 'Project Section',
      });
    }
  }

  for (const method of ORGANIC_METHODS) {
    if (
      method.name.toLowerCase().includes(q) ||
      method.shortDesc.toLowerCase().includes(q) ||
      method.overview.toLowerCase().includes(q) ||
      method.materials.some((m) => m.toLowerCase().includes(q))
    ) {
      results.push({
        id: `method-${method.id}`,
        title: method.name,
        excerpt: method.shortDesc,
        sectionId: 'methods',
        sectionTitle: 'Organic Farming Methods',
      });
    }
  }

  for (const benefit of ORGANIC_BENEFITS) {
    if (
      benefit.title.toLowerCase().includes(q) ||
      benefit.summary.toLowerCase().includes(q) ||
      benefit.mechanism.toLowerCase().includes(q)
    ) {
      results.push({
        id: `benefit-${benefit.id}`,
        title: benefit.title,
        excerpt: benefit.summary,
        sectionId: 'benefits',
        sectionTitle: 'Benefits of Organic Farming',
      });
    }
  }

  for (const pillar of APCNF_PILLARS) {
    if (
      pillar.name.toLowerCase().includes(q) ||
      pillar.purpose.toLowerCase().includes(q) ||
      pillar.preparation.toLowerCase().includes(q)
    ) {
      results.push({
        id: `apcnf-${pillar.name}`,
        title: `${pillar.name} (${pillar.teluguMeaning})`,
        excerpt: pillar.purpose,
        sectionId: 'andhra-pradesh',
        sectionTitle: 'Organic Farming in Andhra Pradesh',
      });
    }
  }

  for (const scheme of AP_GOVERNMENT_SCHEMES) {
    if (
      scheme.name.toLowerCase().includes(q) ||
      scheme.objective.toLowerCase().includes(q)
    ) {
      results.push({
        id: `scheme-${scheme.name}`,
        title: scheme.name,
        excerpt: scheme.objective,
        sectionId: 'andhra-pradesh',
        sectionTitle: 'Andhra Pradesh Initiatives',
      });
    }
  }

  for (const region of AP_REGIONAL_EXAMPLES) {
    if (
      region.region.toLowerCase().includes(q) ||
      region.crops.toLowerCase().includes(q) ||
      region.approach.toLowerCase().includes(q)
    ) {
      results.push({
        id: `region-${region.region}`,
        title: region.region,
        excerpt: `${region.crops} — ${region.approach}`,
        sectionId: 'andhra-pradesh',
        sectionTitle: 'Regional Examples',
      });
    }
  }

  for (const crop of CROP_GUIDE_PROFILES) {
    if (
      crop.name.toLowerCase().includes(q) ||
      crop.naturalInputs.some((i) => i.toLowerCase().includes(q))
    ) {
      results.push({
        id: `crop-${crop.id}`,
        title: `${crop.name} Organic Guide`,
        excerpt: `${crop.season} · ${crop.soilType}`,
        sectionId: 'farming-guide',
        sectionTitle: 'Interactive Farming Guide',
      });
    }
  }

  for (const faq of FAQ_ITEMS) {
    if (
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q)
    ) {
      results.push({
        id: faq.id,
        title: faq.question,
        excerpt: faq.answer.slice(0, 110) + (faq.answer.length > 110 ? '…' : ''),
        sectionId: 'quiz-faq',
        sectionTitle: 'FAQ',
      });
    }
  }

  return results.slice(0, 12);
}

export function validateSurveyEntry(draft: SurveyDraft): string | null {
  if (!draft.respondentLabel.trim()) {
    return 'Please enter a farmer name or anonymous respondent code (e.g., Farmer #1).';
  }
  if (!draft.villageOrMandal.trim()) {
    return 'Please enter the village or mandal name.';
  }
  if (!draft.primaryCrop.trim()) {
    return 'Please enter the primary crop grown.';
  }
  if (!draft.mainChallenge.trim()) {
    return 'Please record the primary challenge faced by the farmer.';
  }
  if (!draft.opinionOnOrganic.trim()) {
    return 'Please record the farmer’s opinion or feedback on organic farming.';
  }
  return null;
}

export function aggregateSurveyStats(entries: SurveyEntry[]): SurveySummary {
  const totalResponses = entries.length;
  if (totalResponses === 0) {
    return {
      totalResponses: 0,
      sampleCount: 0,
      realCount: 0,
      awareCount: 0,
      awarenessPercent: 0,
      organicOrTransitionCount: 0,
      topChallenge: 'No responses recorded yet',
    };
  }

  const sampleCount = entries.filter((e) => e.isSample).length;
  const realCount = totalResponses - sampleCount;
  const awareCount = entries.filter(
    (e) => e.awareOfOrganic === 'Yes' || e.awareOfOrganic === 'Partially'
  ).length;
  const awarenessPercent = Math.round((awareCount / totalResponses) * 100);
  const organicOrTransitionCount = entries.filter(
    (e) =>
      e.currentPractice === 'Organic / Natural' ||
      e.currentPractice === 'Mixed / Transitioning'
  ).length;

  const challengeCounts = new Map<string, number>();
  for (const entry of entries) {
    const key = entry.mainChallenge.trim();
    if (key) {
      challengeCounts.set(key, (challengeCounts.get(key) ?? 0) + 1);
    }
  }

  let topChallenge = 'Not specified';
  let highest = 0;
  for (const [challenge, count] of challengeCounts.entries()) {
    if (count > highest) {
      highest = count;
      topChallenge = challenge;
    }
  }

  return {
    totalResponses,
    sampleCount,
    realCount,
    awareCount,
    awarenessPercent,
    organicOrTransitionCount,
    topChallenge,
  };
}

export function getGuideRecommendation(
  cropId: string,
  methodId: string
): GuideRecommendation {
  const crop =
    CROP_GUIDE_PROFILES.find((c) => c.id === cropId) ?? CROP_GUIDE_PROFILES[0];
  const method =
    ORGANIC_METHODS.find((m) => m.id === methodId) ?? ORGANIC_METHODS[0];

  const tailoredSteps = [
    `Applying ${method.name} for ${crop.name} (${crop.season}): ${method.shortDesc}`,
    ...method.steps,
  ];

  return {
    cropName: crop.name,
    season: crop.season,
    soilType: crop.soilType,
    methodName: method.name,
    methodOverview: method.overview,
    tailoredSteps,
    compostMethod: crop.compostGuidance,
    soilImprovement: `${crop.soilImprovement} Combined effect of ${method.name}: ${method.soilAndCropEffect}`,
    naturalRecommendations: crop.naturalInputs,
    disclaimer:
      'Educational Example Only: These practices are provided for academic CSP learning and do not constitute guaranteed crop-specific agronomic advice. Farmers should consult local Krishi Vigyan Kendra (KVK) specialists before modifying field schedules.',
  };
}

export function evaluateQuizScore(
  selectedAnswers: Record<string, number>,
  questions: QuizQuestion[]
): QuizEvaluation {
  const total = questions.length;
  if (total === 0) {
    return { score: 0, total: 0, percentage: 0, tierLabel: 'No questions' };
  }
  let score = 0;
  for (const q of questions) {
    if (selectedAnswers[q.id] === q.correctIndex) {
      score += 1;
    }
  }
  const percentage = Math.round((score / total) * 100);
  let tierLabel = 'Keep Exploring';
  if (percentage >= 85) {
    tierLabel = 'Strong Mastery';
  } else if (percentage >= 60) {
    tierLabel = 'Good Understanding';
  }
  return { score, total, percentage, tierLabel };
}

export function generateAgroGuideReply(message: string): AgroGuideResponse {
  const q = message.trim().toLowerCase();
  if (!q) {
    return {
      answer:
        'Ask me about composting, vermicomposting, crop rotation, APCNF in Andhra Pradesh, biofertilizers, natural pest sprays, or how to log your CSP field survey.',
    };
  }

  if (q.includes('apcnf') || q.includes('andhra') || q.includes('ryss') || q.includes('jeevamrutham') || q.includes('beejamrutham') || q.includes('whapasa')) {
    return {
      answer:
        'Andhra Pradesh Community-Managed Natural Farming (APCNF), led by Rythu Sadhikara Samstha (RySS), focuses on four ecological pillars: Beejamrutham (seed treatment), Jeevamrutham (microbial soil culture), Acchadana (mulching), and Whapasa (balanced soil air and moisture). It works closely with women Self-Help Groups across districts like Araku, Anantapuramu, and the Krishna–Godavari delta.',
      suggestedSection: 'andhra-pradesh',
      suggestedLabel: 'Open Andhra Pradesh Section',
    };
  }

  if (q.includes('vermicompost') || q.includes('worm') || q.includes('compost')) {
    return {
      answer:
        'Composting turns crop residue and dung into stable humus in 60–90 days through aerobic decomposition. Vermicomposting uses earthworms (Eisenia fetida) on pre-cooled organic waste to produce fine, microbe-rich castings in 45–60 days. Always keep beds shaded and moist without waterlogging.',
      suggestedSection: 'methods',
      suggestedLabel: 'Explore Organic Methods',
    };
  }

  if (q.includes('biofertilizer') || q.includes('rhizobium') || q.includes('azospirillum') || q.includes('psb')) {
    return {
      answer:
        'Biofertilizers are living beneficial microbes: Rhizobium fixes nitrogen for pulses, Azospirillum supports cereals like paddy and millets, and Phosphate Solubilizing Bacteria (PSB) unlock bound soil phosphorus. Always coat seeds in shade and avoid direct sunlight.',
      suggestedSection: 'methods',
      suggestedLabel: 'View Biofertilizers Guide',
    };
  }

  if (q.includes('pest') || q.includes('neem') || q.includes('insect') || q.includes('nske') || q.includes('marigold')) {
    return {
      answer:
        'Natural pest management relies on prevention: yellow/blue sticky traps, pheromone lures, bird perches, marigold border trap crops, and botanical sprays like 5% Neem Seed Kernel Extract (NSKE) or Neemastra applied in cool evening hours to protect pollinators.',
      suggestedSection: 'methods',
      suggestedLabel: 'Open Natural Pest Management',
    };
  }

  if (q.includes('rotation') || q.includes('green manure') || q.includes('dhaincha') || q.includes('mulch') || q.includes('mixed')) {
    return {
      answer:
        'Crop rotation alternates cereals with legumes to break pest cycles and restore nitrogen. Green manures like Dhaincha or Sunnhemp are ploughed in at 40–45 days before flowering, while mulching (Acchadana) cools topsoil and reduces evaporation.',
      suggestedSection: 'farming-guide',
      suggestedLabel: 'Try Interactive Farming Guide',
    };
  }

  if (q.includes('survey') || q.includes('farmer') || q.includes('data') || q.includes('interview')) {
    return {
      answer:
        'In the Data Collection & Farmer Survey section, sample placeholders are clearly labelled until you enter your real field visit findings. You can add new farmer responses, edit existing rows, and export CSV/JSON for your college CSP report.',
      suggestedSection: 'survey',
      suggestedLabel: 'Open Farmer Survey',
    };
  }

  if (q.includes('week') || q.includes('activity') || q.includes('csp') || q.includes('log')) {
    return {
      answer:
        'The My Activity section tracks the 6-week Community Service Project journey from Topic Selection (Week 1) through Field Survey (Week 4) to Final Presentation (Week 6). Every week is editable and supports uploading your own field visit photograph.',
      suggestedSection: 'my-activity',
      suggestedLabel: 'Open 6-Week Activity Log',
    };
  }

  if (q.includes('deploy') || q.includes('github') || q.includes('netlify') || q.includes('host')) {
    return {
      answer:
        'This website runs 100% client-side with zero paid APIs or backend dependencies. Build it with `npm run build` and upload the `dist/` folder directly to Netlify Drop or deploy to GitHub Pages for free.',
      suggestedSection: 'home',
      suggestedLabel: 'Return to Home Dashboard',
    };
  }

  if (q.includes('benefit') || q.includes('soil') || q.includes('water') || q.includes('biodiversity')) {
    return {
      answer:
        'Organic farming builds soil organic carbon, cuts synthetic chemical runoff into village tanks, conserves water through mulching, protects pollinators, and opens group certification pathways like PGS-India.',
      suggestedSection: 'benefits',
      suggestedLabel: 'View All 7 Benefits',
    };
  }

  if (q.includes('quiz') || q.includes('faq') || q.includes('pgs') || q.includes('certif')) {
    return {
      answer:
        'Smallholder farmer groups in India commonly use PGS-India (Participatory Guarantee System) under Jaivik Bharat for affordable peer-reviewed certification, alongside PKVY cluster support. You can test your knowledge in the Quiz & FAQ section!',
      suggestedSection: 'quiz-faq',
      suggestedLabel: 'Take Knowledge Quiz',
    };
  }

  return {
    answer:
      'I can help you navigate this Organic Farming CSP portal! Try asking about: "APCNF in Andhra Pradesh", "Vermicomposting vs Composting", "Natural pest management", "Biofertilizers", "How to log farmer survey data", or "How to deploy for free on Netlify/GitHub Pages".',
    suggestedSection: 'farming-guide',
    suggestedLabel: 'Open Interactive Farming Guide',
  };
}
