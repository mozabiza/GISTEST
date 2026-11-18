import { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import {
  SKM_PROGRAMS,
  type ProgramCluster,
  type SkmProgram,
} from '../data/skmPrograms';

interface ProgramsSectionProps {
  selectedProgramTitle: string | null;
  onSelectProgram: (programTitle: string) => void;
}

const CLUSTERS: { label: string; value: ProgramCluster }[] = [
  { label: 'Semua Program (6)', value: 'Semua' },
  { label: 'Pengurusan & IT', value: 'Pengurusan & IT' },
  { label: 'Hospitaliti & Pendidikan', value: 'Hospitaliti & Pendidikan' },
  { label: 'Teknikal', value: 'Teknikal' },
];

export function ProgramsSection({
  selectedProgramTitle,
  onSelectProgram,
}: ProgramsSectionProps) {
  const [activeCluster, setActiveCluster] = useState<ProgramCluster>('Semua');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const visiblePrograms: SkmProgram[] =
    activeCluster === 'Semua'
      ? SKM_PROGRAMS
      : SKM_PROGRAMS.filter((item) => item.cluster === activeCluster);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="program-skm" className="border-b border-slate-200 bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-800">
              Senarai Program Bertauliah · Global Institute of Studies
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              Enam program Sijil Kemahiran Malaysia (SKM) mengikut keperluan industri
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Setiap program menggabungkan latihan amali bengkel, penyediaan portfolio keterampilan
              serta penempatan industri sebelum penganugerahan sijil.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Tapis bidang program SKM"
            className="flex flex-wrap items-center gap-1.5 rounded-lg border border-slate-200 bg-white p-1"
          >
            {CLUSTERS.map((cluster) => {
              const isActive = activeCluster === cluster.value;
              return (
                <button
                  key={cluster.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCluster(cluster.value)}
                  className={`rounded-md px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cluster.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visiblePrograms.map((program) => {
            const isSelected = selectedProgramTitle === program.title;
            const isExpanded = expandedId === program.id;

            return (
              <article
                key={program.id}
                className={`flex flex-col justify-between rounded-xl border bg-white p-6 transition-colors duration-150 ${
                  isSelected
                    ? 'border-blue-800 ring-1 ring-blue-800'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-4">
                    <span className="font-mono text-sm font-semibold text-blue-800 tabular-nums">
                      {program.index}.
                    </span>
                    <span className="font-mono text-xs text-slate-500 tabular-nums truncate">
                      {program.nossCode}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-slate-900">
                    {program.title}
                  </h3>

                  <p className="mt-1.5 text-xs font-medium text-slate-500">
                    <span>{program.level}</span>
                    <span aria-hidden="true" className="mx-1.5 text-slate-300">
                      ·
                    </span>
                    <span className="tabular-nums">{program.duration}</span>
                    <span aria-hidden="true" className="mx-1.5 text-slate-300">
                      ·
                    </span>
                    <span>{program.cluster}</span>
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {program.summary}
                  </p>

                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <button
                      type="button"
                      onClick={() => toggleExpand(program.id)}
                      aria-expanded={isExpanded}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-800 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Tutup butiran modul' : 'Lihat fokus kemahiran & kerjaya'}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-3.5 w-3.5" />
                      ) : (
                        <ChevronDown className="h-3.5 w-3.5" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-3 text-xs leading-relaxed text-slate-600">
                        <ul className="space-y-1.5 list-disc pl-4">
                          {program.competencies.map((comp, idx) => (
                            <li key={idx}>{comp}</li>
                          ))}
                        </ul>
                        <p className="border-t border-slate-100 pt-2.5 text-slate-700">
                          <span className="font-semibold text-slate-900">Laluan Kerjaya: </span>
                          {program.careerPaths}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectProgram(program.title)}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-blue-800 text-white hover:bg-blue-900'
                        : 'border border-slate-300 bg-white text-slate-900 hover:border-blue-800 hover:text-blue-800'
                    }`}
                  >
                    <span>{isSelected ? 'Program Dipilih — Isi Borang' : 'Tanya Program Ini'}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
