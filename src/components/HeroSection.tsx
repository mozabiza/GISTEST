import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY } from '../config/intakeConfig';

interface HeroSectionProps {
  onNavigateToForm: () => void;
}

export function HeroSection({ onNavigateToForm }: HeroSectionProps) {
  return (
    <section id="atas" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-sm font-medium text-blue-800">
              Global Institute of Studies · Pengambilan Sijil Kemahiran Malaysia (SKM)
            </p>

            <h1
              className="mt-4 font-display font-bold tracking-tight text-slate-900 leading-[1.12]"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.65rem)',
                textWrap: 'balance',
              }}
            >
              Bina kerjaya berkemahiran tinggi melalui laluan rasmi SKM.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Sertai enam program Sijil Kemahiran Malaysia (SKM) berteraskan latihan amali industri di
              Global Institute of Studies. Pembiayaan melalui{' '}
              <span className="font-semibold text-slate-900">Pinjaman PTPK</span> serta{' '}
              <span className="font-semibold text-slate-900">Elaun Sara Hidup</span> disediakan bagi
              calon yang memenuhi syarat kelayakan.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onNavigateToForm}
                className="inline-flex items-center gap-2.5 rounded-lg bg-blue-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Daftar Pertanyaan Pengambilan</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#program-skm"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:border-slate-400 hover:bg-slate-50 whitespace-nowrap shrink-0"
              >
                Lihat 6 Program SKM
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-200 pt-5 text-sm text-slate-600">
              <span>Pusat Bertauliah JPK</span>
              <span aria-hidden="true" className="text-slate-300">
                /
              </span>
              <span>Latihan Amali &amp; Industri</span>
              <span aria-hidden="true" className="text-slate-300">
                /
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-800">
                <MessageCircle className="h-4 w-4 text-emerald-700" />
                <span>WhatsApp Pengambilan:</span>
                <span className="font-mono tabular-nums">{WHATSAPP_DISPLAY}</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-slate-900 p-7 text-white sm:p-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 400 220"
                className="pointer-events-none absolute inset-x-0 top-0 h-44 w-full opacity-20"
                fill="none"
              >
                <path
                  d="M0 40H400M0 90H400M0 140H400M60 0V220M160 0V220M260 0V220M340 0V220"
                  stroke="#94A3B8"
                  strokeWidth="0.75"
                />
                <circle cx="260" cy="90" r="56" stroke="#3B82F6" strokeWidth="1.25" />
                <circle cx="260" cy="90" r="24" stroke="#60A5FA" strokeWidth="1" />
              </svg>

              <div className="relative z-10">
                <p className="text-xs font-medium tracking-wide text-blue-300">
                  Struktur Laluan Pelajar GIS
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-white">
                  Dari Permohonan ke Persijilan Kemahiran Kebangsaan
                </h2>
              </div>

              <ol className="relative z-10 mt-8 space-y-5 border-t border-slate-800 pt-6">
                <li className="grid grid-cols-[2.25rem_1fr] items-start gap-3">
                  <span className="font-mono text-sm font-semibold text-blue-300 tabular-nums">
                    01.
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Semakan Minat &amp; Syarat Program
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">
                      Pilih daripada enam program SKM Tahap 2 dan Tahap 3 mengikut kecenderungan kerjaya anda.
                    </p>
                  </div>
                </li>

                <li className="grid grid-cols-[2.25rem_1fr] items-start gap-3">
                  <span className="font-mono text-sm font-semibold text-blue-300 tabular-nums">
                    02.
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Bimbingan Pembiayaan PTPK
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">
                      Khidmat nasihat permohonan Pinjaman PTPK serta Elaun Sara Hidup bulanan bagi pelajar yang layak.
                    </p>
                  </div>
                </li>

                <li className="grid grid-cols-[2.25rem_1fr] items-start gap-3">
                  <span className="font-mono text-sm font-semibold text-blue-300 tabular-nums">
                    03.
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Latihan Industri &amp; Penilaian JPK
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">
                      Pembelajaran berorientasikan amali bengkel, penempatan industri dan penganugerahan SKM.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="relative z-10 mt-8 flex items-center justify-between border-t border-slate-800 pt-5 text-xs text-slate-300">
                <span>Pengambilan Terbuka 2026</span>
                <span className="font-mono tabular-nums text-white">6 Bidang Teras</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 divide-y divide-slate-200 border border-slate-200 rounded-xl bg-slate-50/70 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <div className="p-5 sm:p-6">
            <p className="font-mono text-2xl font-semibold text-slate-900 tabular-nums">06</p>
            <p className="mt-1 text-sm font-medium text-slate-600">Program SKM Ditawarkan</p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-display text-lg font-semibold text-slate-900">Pinjaman PTPK</p>
            <p className="mt-1 text-sm text-slate-600">Pembiayaan latihan kemahiran</p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-display text-lg font-semibold text-slate-900">Elaun Sara Hidup</p>
            <p className="mt-1 text-sm text-slate-600">Bantuan bulanan calon layak</p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-mono text-lg font-semibold text-slate-900 tabular-nums">
              {WHATSAPP_DISPLAY}
            </p>
            <p className="mt-1 text-sm text-slate-600">Talian WhatsApp rasmi GIS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
