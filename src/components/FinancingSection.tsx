import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FinancingSectionProps {
  onNavigateToForm: () => void;
}

const ELIGIBILITY_CRITERIA = [
  {
    id: 'warganegara',
    label: 'Warganegara Malaysia dengan Kad Pengenalan sah',
  },
  {
    id: 'umur',
    label: 'Berumur antara 16 hingga 35 tahun semasa permohonan',
  },
  {
    id: 'minat',
    label: 'Berminat mengikuti latihan kemahiran sepenuh masa (lepasan PT3 / SPM / belia)',
  },
];

export function FinancingSection({ onNavigateToForm }: FinancingSectionProps) {
  const [checkedIds, setCheckedIds] = useState<string[]>([
    'warganegara',
    'umur',
  ]);

  const toggleCriteria = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allChecked = checkedIds.length === ELIGIBILITY_CRITERIA.length;

  return (
    <section id="pembiayaan" className="border-b border-slate-800 bg-slate-900 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-300">
            Kemudahan Pembiayaan Pengajian
          </p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
            style={{ textWrap: 'balance' }}
          >
            Sokongan pembiayaan melalui Pinjaman PTPK dan Elaun Sara Hidup
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            Global Institute of Studies membantu pelajar yang memenuhi syarat untuk memohon
            pembiayaan rasmi latihan kemahiran bagi meringankan beban yuran serta perbelanjaan harian.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            <article className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-800/50 p-7">
              <div>
                <span className="font-mono text-sm font-semibold text-blue-300 tabular-nums">
                  01.
                </span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-white">
                  Pinjaman PTPK
                </h3>
                <p className="mt-2 text-xs font-medium text-slate-400">
                  Perbadanan Tabung Pembangunan Kemahiran · Kementerian Sumber Manusia
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Pembiayaan yuran latihan kemahiran disediakan bagi calon yang layak untuk
                  mengikuti program Sijil Kemahiran Malaysia (SKM) Tahap 2 dan Tahap 3 tanpa perlu
                  membayar keseluruhan kos yuran secara pendahuluan.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-slate-700/80 pt-4 text-sm text-slate-200">
                <li>Merangkumi yuran pengajian program SKM bertauliah</li>
                <li>Urusan dokumentasi dibantu oleh pegawai GIS</li>
                <li>Tertakluk kepada terma dan kelulusan pihak PTPK</li>
              </ul>
            </article>

            <article className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-800/50 p-7">
              <div>
                <span className="font-mono text-sm font-semibold text-blue-300 tabular-nums">
                  02.
                </span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-white">
                  Elaun Sara Hidup
                </h3>
                <p className="mt-2 text-xs font-medium text-slate-400">
                  Bantuan Kewangan Bulanan · Sepanjang Tempoh Pengajian
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Pelajar yang diluluskan pinjaman turut layak menerima Elaun Sara Hidup secara
                  bulanan bagi menampung keperluan pengangkutan, makan minum dan kelengkapan asas
                  sepanjang tempoh latihan di kampus.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-slate-700/80 pt-4 text-sm text-slate-200">
                <li>Disalurkan secara bulanan kepada pelatih yang layak</li>
                <li>Membantu menampung kos penginapan dan pengangkutan harian</li>
                <li>Tertakluk kepada kehadiran kelas dan kelulusan PTPK</li>
              </ul>
            </article>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-slate-700 bg-slate-950/70 p-7 lg:col-span-5">
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-white">
                Semakan Awal Kelayakan Pembiayaan
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Tandakan kriteria di bawah untuk menilai kesesuaian awal sebelum menghubungi
                pegawai pengambilan kami:
              </p>

              <div className="mt-5 space-y-3">
                {ELIGIBILITY_CRITERIA.map((item) => {
                  const checked = checkedIds.includes(item.id);
                  return (
                    <label
                      key={item.id}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-colors duration-150 ${
                        checked
                          ? 'border-blue-500/70 bg-blue-950/40 text-white'
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCriteria(item.id)}
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                          checked
                            ? 'border-blue-400 bg-blue-600 text-white'
                            : 'border-slate-600 bg-slate-900'
                        }`}
                      >
                        {checked && <Check className="h-3.5 w-3.5" />}
                      </span>
                      <span className="text-sm leading-snug">{item.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 border-t border-slate-800 pt-5">
              <p className="text-sm text-slate-300">
                {allChecked ? (
                  <span className="font-medium text-emerald-300">
                    Anda memenuhi kriteria asas semakan awal. Lengkapkan borang pertanyaan untuk
                    pengesahan dokumen bersama pegawai pengambilan.
                  </span>
                ) : (
                  <span>
                    Tandakan ketiga-tiga kriteria atau hantarkan pertanyaan untuk semakan kes khas
                    bersama pegawai GIS.
                  </span>
                )}
              </p>

              <button
                type="button"
                onClick={onNavigateToForm}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors duration-150 hover:bg-slate-100 cursor-pointer whitespace-nowrap"
              >
                <span>Semak Kelayakan Melalui Borang</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
