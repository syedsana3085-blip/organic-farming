import test from 'node:test';
import assert from 'node:assert/strict';
import {
  INITIAL_SAMPLE_SURVEY_DATA,
  QUIZ_QUESTIONS,
} from '../data/organicContent';
import {
  aggregateSurveyStats,
  evaluateQuizScore,
  generateAgroGuideReply,
  getGuideRecommendation,
  searchProjectContent,
  validateSurveyEntry,
} from './organicLogic';

test('searchProjectContent finds matching methods, AP pillars, and crops', () => {
  const vermiResults = searchProjectContent('vermicompost');
  assert.ok(vermiResults.some((r) => r.sectionId === 'methods'));

  const apcnfResults = searchProjectContent('Jeevamrutham');
  assert.ok(apcnfResults.some((r) => r.sectionId === 'andhra-pradesh'));

  assert.deepEqual(searchProjectContent('   '), []);
});

test('validateSurveyEntry enforces required fields without silent fallbacks', () => {
  const invalidError = validateSurveyEntry({
    respondentLabel: '',
    villageOrMandal: 'Guntur',
    primaryCrop: 'Paddy',
    currentPractice: 'Conventional',
    awareOfOrganic: 'Yes',
    mainChallenge: 'Market access',
    opinionOnOrganic: 'Interested',
  });
  assert.ok(invalidError !== null);

  const validError = validateSurveyEntry({
    respondentLabel: 'Farmer 01',
    villageOrMandal: 'Tenali',
    primaryCrop: 'Paddy',
    currentPractice: 'Mixed / Transitioning',
    awareOfOrganic: 'Yes',
    mainChallenge: 'Transition yield drop',
    opinionOnOrganic: 'Positive about reducing urea cost',
  });
  assert.equal(validError, null);
});

test('aggregateSurveyStats computes sample vs real response totals accurately', () => {
  const summary = aggregateSurveyStats(INITIAL_SAMPLE_SURVEY_DATA);
  assert.equal(summary.totalResponses, 3);
  assert.equal(summary.sampleCount, 3);
  assert.equal(summary.realCount, 0);
  assert.equal(summary.awarenessPercent, 100);
  assert.equal(summary.organicOrTransitionCount, 2);

  const emptySummary = aggregateSurveyStats([]);
  assert.equal(emptySummary.totalResponses, 0);
  assert.equal(emptySummary.awarenessPercent, 0);
});

test('getGuideRecommendation combines crop profile and selected method with disclaimer', () => {
  const rec = getGuideRecommendation('paddy', 'biofertilizers');
  assert.equal(rec.cropName, 'Paddy (Rice)');
  assert.equal(rec.methodName, 'Biofertilizers');
  assert.ok(rec.tailoredSteps.length >= 4);
  assert.ok(rec.disclaimer.includes('Educational Example Only'));
});

test('evaluateQuizScore calculates accurate score and mastery tier', () => {
  const allCorrect: Record<string, number> = {};
  for (const q of QUIZ_QUESTIONS) {
    allCorrect[q.id] = q.correctIndex;
  }
  const full = evaluateQuizScore(allCorrect, QUIZ_QUESTIONS);
  assert.equal(full.score, QUIZ_QUESTIONS.length);
  assert.equal(full.percentage, 100);
  assert.equal(full.tierLabel, 'Strong Mastery');
});

test('generateAgroGuideReply routes APCNF and survey queries to matching sections', () => {
  const apReply = generateAgroGuideReply('Tell me about APCNF and Jeevamrutham');
  assert.equal(apReply.suggestedSection, 'andhra-pradesh');

  const surveyReply = generateAgroGuideReply('How do I enter farmer survey data?');
  assert.equal(surveyReply.suggestedSection, 'survey');
});
