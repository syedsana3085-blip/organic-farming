import { useMemo, useState } from 'react';
import { ArrowLeft, Check, ChevronDown, RotateCcw, X } from 'lucide-react';
import { FAQ_ITEMS, QUIZ_QUESTIONS } from '../data/organicContent';
import type { SectionId } from '../types/project';
import { evaluateQuizScore } from '../utils/organicLogic';
import { SectionHeader } from './ContentSections';

interface QuizFaqSectionProps {
  onBackHome: () => void;
  onNavigate: (s: SectionId) => void;
}

export function QuizFaqSection({ onBackHome, onNavigate }: QuizFaqSectionProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  const evaluation = useMemo(
    () => evaluateQuizScore(selectedAnswers, QUIZ_QUESTIONS),
    [selectedAnswers]
  );

  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSelect = (questionId: string, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="pb-16">
      <SectionHeader
        index="10"
        category="Interactive Tool"
        title="Knowledge Quiz & Frequently Asked Questions"
        subtitle="Test your understanding of organic farming principles, APCNF, biofertilizers, and certification, and browse answers to common community questions."
        onBackHome={onBackHome}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 space-y-14">
        {/* Knowledge Quiz */}
        <section aria-labelledby="quiz-heading" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 id="quiz-heading" className="font-display text-2xl font-bold text-[#1A241B]">
                Organic Farming Knowledge Quiz
              </h2>
              <p className="text-sm text-[#425244] mt-1">
                Answer all {QUIZ_QUESTIONS.length} questions and submit to review explanations.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#556757]">
                Answered: {answeredCount}/{QUIZ_QUESTIONS.length}
              </span>
              {submitted && (
                <button
                  type="button"
                  onClick={handleResetQuiz}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1B5E20] bg-[#EAF2E8] hover:bg-[#DCE8D9] rounded-lg cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Retake Quiz</span>
                </button>
              )}
            </div>
          </div>

          {submitted && (
            <div
              role="status"
              data-testid="quiz-result-banner"
              className="bg-[#EAF2E8] border border-[#C5D3C2] rounded-xl p-5 flex flex-wrap items-center justify-between gap-4"
            >
              <div>
                <p className="text-xs font-medium text-[#1B5E20]">Quiz Result</p>
                <p className="font-display text-2xl font-bold text-[#1A241B]">
                  {evaluation.score} / {evaluation.total} Correct ({evaluation.percentage}%)
                </p>
              </div>
              <p className="text-sm font-semibold text-[#1B5E20]">{evaluation.tierLabel}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {QUIZ_QUESTIONS.map((q, qIdx) => {
              const chosen = selectedAnswers[q.id];
              return (
                <article
                  key={q.id}
                  className="bg-white border border-[#DDE5DB] rounded-xl p-6 space-y-4"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-[#1B5E20]">
                      Question 0{qIdx + 1}
                    </span>
                    <h3 className="font-display text-base font-semibold text-[#1A241B] mt-1">
                      {q.question}
                    </h3>
                  </div>

                  <div className="space-y-2" role="radiogroup" aria-label={`Question ${qIdx + 1}`}>
                    {q.options.map((opt, optIdx) => {
                      const isChosen = chosen === optIdx;
                      const isCorrect = q.correctIndex === optIdx;
                      let optionStyle =
                        'border-[#DDE5DB] bg-[#FAFBF9] text-[#1A241B] hover:border-[#1B5E20]';

                      if (submitted) {
                        if (isCorrect) {
                          optionStyle =
                            'border-[#1B5E20] bg-[#EAF2E8] text-[#144A18] font-medium';
                        } else if (isChosen && !isCorrect) {
                          optionStyle = 'border-[#DC2626] bg-[#FEF2F2] text-[#991B1B]';
                        }
                      } else if (isChosen) {
                        optionStyle =
                          'border-[#1B5E20] bg-[#EAF2E8] text-[#144A18] font-medium';
                      }

                      return (
                        <button
                          key={opt}
                          type="button"
                          role="radio"
                          aria-checked={isChosen}
                          onClick={() => handleSelect(q.id, optIdx)}
                          className={`w-full text-left px-3.5 py-2.5 text-sm rounded-lg border transition-colors flex items-center justify-between gap-2 cursor-pointer ${optionStyle}`}
                        >
                          <span>{opt}</span>
                          {submitted && isCorrect && (
                            <Check className="w-4 h-4 text-[#1B5E20] shrink-0" aria-hidden="true" />
                          )}
                          {submitted && isChosen && !isCorrect && (
                            <X className="w-4 h-4 text-[#DC2626] shrink-0" aria-hidden="true" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <p className="text-xs text-[#425244] pt-3 border-t border-[#EDF2EC] leading-relaxed">
                      <strong className="text-[#1A241B]">Explanation:</strong> {q.explanation}
                    </p>
                  )}
                </article>
              );
            })}
          </div>

          {!submitted && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="px-6 py-3 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg transition-colors cursor-pointer"
              >
                Submit Quiz Answers
              </button>
            </div>
          )}
        </section>

        {/* FAQ Accordion */}
        <section aria-labelledby="faq-heading" className="pt-8 border-t border-[#DDE5DB] space-y-6">
          <div>
            <h2 id="faq-heading" className="font-display text-2xl font-bold text-[#1A241B]">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-sm text-[#425244] mt-1">
              Clear answers for students, visitors, and farmers exploring organic agriculture.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-[#DDE5DB] rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FAFBF9] transition-colors cursor-pointer"
                  >
                    <div>
                      <span className="text-xs font-medium text-[#1B5E20] block mb-0.5">
                        {faq.category}
                      </span>
                      <span className="font-display text-base font-semibold text-[#1A241B]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#556757] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#425244] leading-relaxed border-t border-[#EDF2EC]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDE5DB]">
          <button
            type="button"
            onClick={() => onNavigate('conclusion')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1A241B] bg-white border border-[#C5D3C2] hover:bg-[#F1F5F0] rounded-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous: Conclusion</span>
          </button>
          <button
            type="button"
            onClick={onBackHome}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg cursor-pointer"
          >
            Return to Home Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
