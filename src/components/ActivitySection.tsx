import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Pencil,
  RotateCcw,
  X,
} from 'lucide-react';
import type { ActivityWeek, SectionId } from '../types/project';
import { SectionHeader } from './ContentSections';
import { SafeImage } from './SafeImage';

interface ActivitySectionProps {
  weeks: ActivityWeek[];
  onUpdateWeek: (updated: ActivityWeek) => void;
  onResetWeeks: () => void;
  onBackHome: () => void;
  onNavigate: (s: SectionId) => void;
}

export function ActivitySection({
  weeks,
  onUpdateWeek,
  onResetWeeks,
  onBackHome,
  onNavigate,
}: ActivitySectionProps) {
  const [editingWeekNum, setEditingWeekNum] = useState<number | null>(null);
  const [draft, setDraft] = useState<ActivityWeek | null>(null);

  const totalHours = weeks.reduce((sum, w) => sum + (Number(w.hours) || 0), 0);

  const startEdit = (week: ActivityWeek) => {
    setEditingWeekNum(week.week);
    setDraft({ ...week });
  };

  const cancelEdit = () => {
    setEditingWeekNum(null);
    setDraft(null);
  };

  const saveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft) return;
    onUpdateWeek(draft);
    setEditingWeekNum(null);
    setDraft(null);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !draft) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setDraft({
          ...draft,
          photoDataUrl: reader.result,
          photoCaption: draft.photoCaption || file.name,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="pb-16">
      <SectionHeader
        index="08"
        category="Field Work"
        title="My Activity — Six-Week CSP Journey"
        subtitle="Documenting each week of our Community Service Project from topic selection to farmer interaction, website creation, and final viva presentation. Every week is editable."
        onBackHome={onBackHome}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 space-y-8">
        {/* Summary Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-[#DDE5DB] rounded-xl p-5">
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <p className="text-xs text-[#556757]">Duration</p>
              <p className="font-mono text-lg font-bold text-[#1A241B]">6 Weeks</p>
            </div>
            <div className="h-8 w-px bg-[#DDE5DB]" aria-hidden="true" />
            <div>
              <p className="text-xs text-[#556757]">Total Logged Hours</p>
              <p className="font-mono text-lg font-bold text-[#1B5E20]">{totalHours} hrs</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onResetWeeks}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#425244] bg-[#F1F5F0] border border-[#DDE5DB] hover:bg-[#E4ECE2] rounded-lg cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Reset Default Log</span>
          </button>
        </div>

        {/* 6 Weeks Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weeks.map((week) => {
            const isEditing = editingWeekNum === week.week && draft;
            return (
              <article
                key={week.week}
                className="bg-white border border-[#DDE5DB] rounded-xl p-6 flex flex-col justify-between"
              >
                {isEditing && draft ? (
                  <form onSubmit={saveEdit} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-[#1B5E20]">
                        Editing Week 0{week.week}
                      </span>
                      <button
                        type="button"
                        aria-label={`Cancel editing Week ${week.week}`}
                        onClick={cancelEdit}
                        className="p-1 text-[#556757] hover:text-[#1A241B] cursor-pointer"
                      >
                        <X className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>

                    <div>
                      <label htmlFor={`week-title-${week.week}`} className="block text-xs font-semibold text-[#1A241B] mb-1">
                        Week Title
                      </label>
                      <input
                        id={`week-title-${week.week}`}
                        type="text"
                        value={draft.title}
                        onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor={`week-hours-${week.week}`} className="block text-xs font-semibold text-[#1A241B] mb-1">
                          Hours
                        </label>
                        <input
                          id={`week-hours-${week.week}`}
                          type="number"
                          min={1}
                          max={60}
                          value={draft.hours}
                          onChange={(e) =>
                            setDraft({ ...draft, hours: Number(e.target.value) || 0 })
                          }
                          className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                        />
                      </div>
                      <div>
                        <label htmlFor={`week-loc-${week.week}`} className="block text-xs font-semibold text-[#1A241B] mb-1">
                          Location
                        </label>
                        <input
                          id={`week-loc-${week.week}`}
                          type="text"
                          value={draft.location}
                          onChange={(e) => setDraft({ ...draft, location: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor={`week-desc-${week.week}`} className="block text-xs font-semibold text-[#1A241B] mb-1">
                        Activity Description
                      </label>
                      <textarea
                        id={`week-desc-${week.week}`}
                        rows={4}
                        value={draft.description}
                        onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-[#C5D3C2] rounded-lg focus:outline-none focus:border-[#1B5E20]"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor={`week-photo-${week.week}`} className="block text-xs font-semibold text-[#1A241B] mb-1">
                        Field Visit Photo (Optional Upload)
                      </label>
                      <input
                        id={`week-photo-${week.week}`}
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="block w-full text-xs text-[#425244] file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border file:border-[#C5D3C2] file:text-xs file:font-semibold file:bg-[#F1F5F0] file:text-[#1A241B]"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="px-3.5 py-2 text-xs font-medium text-[#425244] border border-[#DDE5DB] rounded-lg hover:bg-[#F1F5F0] cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Save Week 0{week.week}</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 text-xs text-[#556757]">
                          <span className="font-mono font-semibold text-[#1B5E20]">
                            Week 0{week.week}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono">{week.hours} hrs</span>
                          <span aria-hidden="true">·</span>
                          <span>{week.location}</span>
                        </div>
                        <button
                          type="button"
                          aria-label={`Edit Week ${week.week}`}
                          onClick={() => startEdit(week)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B5E20] hover:underline shrink-0 cursor-pointer"
                        >
                          <Pencil className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>

                      <h2 className="font-display text-xl font-semibold text-[#1A241B] mb-1">
                        {week.title}
                      </h2>
                      <p className="text-xs font-medium text-[#3F5E42] mb-3">{week.focus}</p>
                      <p className="text-sm text-[#425244] leading-relaxed mb-4">
                        {week.description}
                      </p>
                    </div>

                    {/* Photo Slot */}
                    {week.photoDataUrl ? (
                      <div className="mt-2 rounded-lg overflow-hidden border border-[#DDE5DB]">
                        <SafeImage
                          src={week.photoDataUrl}
                          alt={`Week ${week.week} CSP field activity`}
                          fallbackTitle={`Week ${week.week} Photo`}
                          className="w-full h-48 object-cover"
                        />
                        {week.photoCaption && (
                          <p className="px-3 py-2 text-xs text-[#556757] bg-[#FAFBF9] border-t border-[#EDF2EC]">
                            {week.photoCaption}
                          </p>
                        )}
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => startEdit(week)}
                        className="mt-2 w-full py-4 px-4 rounded-lg border border-dashed border-[#C5D3C2] bg-[#FAFBF9] hover:bg-[#F1F5F0] text-xs text-[#556757] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Camera className="w-4 h-4 text-[#1B5E20]" aria-hidden="true" />
                        <span>Click Edit to add your Week 0{week.week} field photograph</span>
                      </button>
                    )}
                  </>
                )}
              </article>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDE5DB]">
          <button
            type="button"
            onClick={() => onNavigate('future-scope')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1A241B] bg-white border border-[#C5D3C2] hover:bg-[#F1F5F0] rounded-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous: Future Scope</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('conclusion')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1B5E20] hover:bg-[#144A18] rounded-lg cursor-pointer"
          >
            <span>Next: Conclusion</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
